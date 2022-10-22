import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    target: 'modules',
    outDir: 'es',
    emptyOutDir: false,
    minify: false,
    rollupOptions: {
      external: ['vue', /\.less/, '@zyfjs/utils'],
      input: ['src/index.ts'],
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
      entry: 'src/index.ts',
      formats: ['es', 'cjs'],
    },
  },
  plugins: [
    vue(),
    vueJsx(),
    dts(),
    {
      name: 'vite-plugin-lessToCss',
      // https://rollupjs.org/guide/en/#generatebundle
      generateBundle(config, bundle) {
        const keys = Object.keys(bundle)
        for (const key of keys) {
          const bundler: any = bundle[key]
          this.emitFile({
            type: 'asset',
            fileName: key,
            source: bundler.code.replace(/\.less/g, '.css'),
          })
        }
      },
    },
  ],
})
