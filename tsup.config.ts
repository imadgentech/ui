import { defineConfig } from 'tsup'
import type { Plugin } from 'esbuild'
import path from 'path'
import fs from 'fs'

// tsup's postcssPlugin intercepts ALL .css files (including .module.css) and
// returns them with loader:'css', which strips CSS module class name mappings
// from the JS output. This plugin intercepts .module.css before postcssPlugin
// can grab them by assigning a custom namespace, then loads them with esbuild's
// native 'local-css' loader which generates the class → hashed-name mapping.
const cssModulesPlugin: Plugin = {
  name: 'css-modules',
  setup(build) {
    build.onResolve({ filter: /\.module\.css$/ }, (args) => ({
      path: path.resolve(args.resolveDir, args.path),
      namespace: 'css-module-local',
    }))

    build.onLoad(
      { filter: /\.module\.css$/, namespace: 'css-module-local' },
      async (args) => {
        const contents = await fs.promises.readFile(args.path, 'utf8')
        return { contents, loader: 'local-css' }
      }
    )
  },
}

export default defineConfig({
  entry: ['src/index.ts', 'src/server.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  outDir: 'dist',
  esbuildPlugins: [cssModulesPlugin],
})
