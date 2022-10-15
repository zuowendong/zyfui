import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: false,
    minify: true,
    rollupOptions: {
      external: ['vue', '@zyf/utils'],
      output: {
        exports: 'named',
        globals: {
          'vue': 'Vue',
          '@zyf/utils': 'zyfUtils',
        },
      },
    },
    lib: {
      entry: 'src/index.ts',
      formats: ['umd', 'cjs', 'es'],
      name: 'zyfui',
    },
  },
  plugins: [vue()],
})
