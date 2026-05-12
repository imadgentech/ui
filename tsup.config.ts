import { defineConfig } from 'tsup'
import type { Plugin } from 'esbuild'
import path from 'path'
import fs from 'fs'

// Problem: tsup's postcssPlugin registers onLoad({ filter: /\.css$/ }) with NO
// namespace, and esbuild 0.27.x treats that as "match all namespaces". Since
// tsup's plugins are registered before user esbuildPlugins, tsup always wins for
// any path ending in .css, returning loader:'css' and discarding the JS class-
// name mapping (so Button_default = {} instead of { button:'button', ... }).
//
// Fix: route .module.css files to a fake .module-css extension so tsup's /\.css$/
// filter cannot match them. Our onLoad then generates the identity class-name map
// and emits a side-effect import that resolves BACK to the real .module.css file
// in the 'file' namespace, where tsup's PostCSS picks it up and bundles the CSS
// into dist/index.css as normal.
const cssModulesPlugin: Plugin = {
  name: 'css-modules',
  setup(build) {
    // Step 1 – intercept .module.css and remap path to .module-css (no .css suffix)
    build.onResolve({ filter: /\.module\.css$/ }, (args) => ({
      path: path.resolve(args.resolveDir, args.path).replace(/\.css$/, '-css'),
      namespace: 'css-module-local',
    }))

    // Step 2 – resolve the .module-css-raw side-effect import back to the real
    // .module.css file in 'file' namespace so tsup's PostCSS bundles the CSS.
    build.onResolve({ filter: /\.module-css-raw$/ }, (args) => ({
      path: path.resolve(args.resolveDir, args.path.replace(/\.module-css-raw$/, '.module.css')),
      namespace: 'file',
    }))

    // Step 3 – load the .module-css file as JS.
    // .module-css does NOT match tsup's /\.css$/ filter, so our handler wins.
    build.onLoad({ filter: /\.module-css$/, namespace: 'css-module-local' }, async (args) => {
      const realPath = args.path.replace(/\.module-css$/, '.module.css')
      const contents = await fs.promises.readFile(realPath, 'utf8')

      const classNames: Record<string, string> = {}
      const regex = /\.([a-zA-Z][\w-]*)/g
      let match
      while ((match = regex.exec(contents)) !== null) {
        classNames[match[1]] = match[1]
      }

      // Import the real CSS as a side effect (routes through Step 2 → tsup PostCSS)
      const cssRawImport = path.basename(realPath).replace(/\.module\.css$/, '.module-css-raw')
      return {
        contents: `import "./${cssRawImport}";\nexport default ${JSON.stringify(classNames)};`,
        loader: 'js',
        resolveDir: path.dirname(realPath),
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
