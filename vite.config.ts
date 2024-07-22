import path from "node:path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

const resolve = (dir: string) => path.resolve(__dirname, dir)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve("src")
    }
  }
  // build: {
  //   sourcemap: true
  // }
})
