import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/Go_Frame_web/',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
})
