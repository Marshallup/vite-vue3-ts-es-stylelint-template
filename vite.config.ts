import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import eslint from 'vite-plugin-eslint'
import AutoImport from 'unplugin-auto-import/vite'
import StylelintPlugin from 'vite-plugin-stylelint'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  plugins: [
    vue(),
    eslint(),
    StylelintPlugin({
      exclude: ['**/*.vue'],
    }),
    AutoImport({
      eslintrc: {
        enabled: true,
      },
      dts: true,
      imports: ['vue', 'vue-router', 'pinia'],
    }),
  ],
})
