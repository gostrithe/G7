import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
      '@common': fileURLToPath(new URL('./src/component/common', import.meta.url)),
      '/imgs': "./src/imgs"
    }
  },
  base: '/G7/',
  // base: './',
  build: {
    outDir: 'docs'
  },
  publicDir: 'false'
})
