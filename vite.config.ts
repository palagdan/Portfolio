import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "node:path";


export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})