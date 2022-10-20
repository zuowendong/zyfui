import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: false,
    minify: true,
    rollupOptions: {
      external: ['vue', '@zyfjs/utils'],
      output: {
        exports: 'named',
        globals: {
          'vue': 'Vue',
          '@zyfjs/utils': 'zyfjsUtils',
        },
      },
    },
    lib: {
      entry: 'src/index.ts',
      formats: ['umd', 'cjs', 'es'],
      name: 'zyfui',
      fileName: 'zyfui',
    },
  },
  plugins: [vue()],
})
