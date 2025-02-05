import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@page': path.resolve(__dirname, './src/pages'),
      '@component': path.resolve(__dirname, './src/components'),
      '@router': path.resolve(__dirname, './src/routes'),
      '@action': path.resolve(__dirname, './src/actions'),
      '@style': path.resolve(__dirname, './src/styles/index.css'),
    },
  },
})
