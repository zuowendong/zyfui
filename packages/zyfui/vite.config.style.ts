import { defineConfig } from 'vite'
import fg from 'fast-glob'

const styleFiles = fg.sync('**/style/index.ts', {
  cwd: process.cwd(),
  onlyFiles: true,
})

export default defineConfig({
  build: {
    target: 'modules',
    outDir: 'es',
    emptyOutDir: false,
    minify: false,
    rollupOptions: {
      external: /\.less$/,
      input: styleFiles,
      output: [
        {
          format: 'es',
          dir: 'es',
          entryFileNames: '[name].js',
          preserveModules: true,
          preserveModulesRoot: 'src',
        },
        {
          format: 'cjs',
          dir: 'lib',
          entryFileNames: '[name].js',
          preserveModules: true,
          preserveModulesRoot: 'src',
        },
      ],
    },
    lib: {
      entry: '',
      formats: ['es', 'cjs'],
    },
  },
  plugins: [
    /**
     * vite插件
     * 1. 构建包里支持less 导出也支持css 导出
     * 2. 删除style打包文件，css 放入到js中 https://www.jianshu.com/p/5ec05886bdd9
     */
    {
      name: 'vite-plugin-lessToCss',
      // https://rollupjs.org/guide/en/#generatebundle
      generateBundle(config, bundle) {
        const keys = Object.keys(bundle)
        for (const key of keys) {
          const bundler: any = bundle[key]
          this.emitFile({
            type: 'asset',
            fileName: key.replace('index.js', 'css.js'),
            source: bundler.code.replace(/\.less/g, '.css'), // ？ bundler.code的值和源文件值不一样
          })
        }
      },
    },
  ],
})
