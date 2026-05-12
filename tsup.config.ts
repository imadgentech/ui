import { defineConfig } from 'tsup'
import type { Plugin } from 'esbuild'
import path from 'path'
import fs from 'fs'
import crypto from 'crypto'

const packageClassPrefix = 'imui'

const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

const createScopedName = (filePath: string, className: string) => {
  const relativePath = path.relative(process.cwd(), filePath).replace(/\\/g, '/')
  const fileName = path.basename(filePath, '.module.css').replace(/[^a-zA-Z0-9_-]/g, '_')
  const hash = crypto.createHash('sha1').update(`${relativePath}:${className}`).digest('base64url').slice(0, 6)
  return `${packageClassPrefix}_${fileName}_${className}__${hash}`
}

const createScopedKeyframeName = (filePath: string, keyframeName: string) => {
  const relativePath = path.relative(process.cwd(), filePath).replace(/\\/g, '/')
  const fileName = path.basename(filePath, '.module.css').replace(/[^a-zA-Z0-9_-]/g, '_')
  const hash = crypto.createHash('sha1').update(`${relativePath}:keyframes:${keyframeName}`).digest('base64url').slice(0, 6)
  return `${packageClassPrefix}_${fileName}_${keyframeName}__${hash}`
}

const maskGlobalSelectors = (css: string) => {
  const globals: string[] = []

  return {
    css: css.replace(/:global\(([^)]*)\)/g, (_, selector: string) => {
      const token = `__IMUI_GLOBAL_${globals.length}__`
      globals.push(selector)
      return token
    }),
    restore(value: string) {
      return value.replace(/__IMUI_GLOBAL_(\d+)__/g, (_, index: string) => globals[Number(index)])
    },
  }
}

const getLocalClassNames = (css: string) => {
  const masked = maskGlobalSelectors(css).css
  const classNames = new Set<string>()
  const regex = /\.([a-zA-Z][\w-]*)/g
  let match

  while ((match = regex.exec(masked)) !== null) {
    classNames.add(match[1])
  }

  return [...classNames]
}

const getLocalKeyframeNames = (css: string) => {
  const keyframeNames = new Set<string>()
  const regex = /@keyframes\s+([a-zA-Z_][\w-]*)/g
  let match

  while ((match = regex.exec(css)) !== null) {
    keyframeNames.add(match[1])
  }

  return [...keyframeNames]
}

const scopeCss = (css: string, classMap: Record<string, string>, keyframeMap: Record<string, string>) => {
  const masked = maskGlobalSelectors(css)
  let scoped = masked.css

  for (const [className, scopedName] of Object.entries(classMap)) {
    scoped = scoped.replace(new RegExp(`\\.(${escapeRegExp(className)})(?![\\w-])`, 'g'), `.${scopedName}`)
  }

  for (const [keyframeName, scopedName] of Object.entries(keyframeMap)) {
    scoped = scoped.replace(new RegExp(`\\b${escapeRegExp(keyframeName)}\\b`, 'g'), scopedName)
  }

  return masked.restore(scoped)
}

const cssModulesPlugin: Plugin = {
  name: 'css-modules',
  setup(build) {
    build.onResolve({ filter: /\.module\.css$/ }, (args) => ({
      path: path.resolve(args.resolveDir, args.path).replace(/\.css$/, '-css'),
      namespace: 'css-module-local',
    }))

    build.onResolve({ filter: /\.module-css-scoped$/ }, (args) => ({
      path: path.resolve(args.resolveDir, args.path),
      namespace: 'css-module-scoped',
    }))

    build.onLoad({ filter: /\.module-css$/, namespace: 'css-module-local' }, async (args) => {
      const realPath = args.path.replace(/\.module-css$/, '.module.css')
      const contents = await fs.promises.readFile(realPath, 'utf8')
      const classNames = Object.fromEntries(
        getLocalClassNames(contents).map((className) => [className, createScopedName(realPath, className)])
      )
      const cssImport = path.basename(realPath).replace(/\.module\.css$/, '.module-css-scoped')

      return {
        contents: `import "./${cssImport}";\nexport default ${JSON.stringify(classNames)};`,
        loader: 'js',
        resolveDir: path.dirname(realPath),
      }
    })

    build.onLoad({ filter: /\.module-css-scoped$/, namespace: 'css-module-scoped' }, async (args) => {
      const realPath = args.path.replace(/\.module-css-scoped$/, '.module.css')
      const contents = await fs.promises.readFile(realPath, 'utf8')
      const classMap = Object.fromEntries(
        getLocalClassNames(contents).map((className) => [className, createScopedName(realPath, className)])
      )
      const keyframeMap = Object.fromEntries(
        getLocalKeyframeNames(contents).map((keyframeName) => [
          keyframeName,
          createScopedKeyframeName(realPath, keyframeName),
        ])
      )

      return {
        contents: scopeCss(contents, classMap, keyframeMap),
        loader: 'css',
        resolveDir: path.dirname(args.path),
      }
    })
  },
}

export default defineConfig({
  entry: ['src/index.ts', 'src/server.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  outDir: 'dist',
  esbuildPlugins: [cssModulesPlugin],
})
