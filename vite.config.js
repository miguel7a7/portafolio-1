import { defineConfig } from "vite"
import * as path from "path"
import react from "@vitejs/plugin-react"
import { hostname } from "os"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  server: {
    host: true,
  },
})

// { find: '@', replacement: path.resolve(__dirname, 'src') }
