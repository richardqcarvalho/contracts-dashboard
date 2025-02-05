import react from '@vitejs/plugin-react'
import path from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@page': path.resolve(__dirname, './src/pages'),
      '@router': path.resolve(__dirname, './src/routes'),
    },
  },
})
