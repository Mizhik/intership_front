import { defineConfig } from "vite"

import react from "@vitejs/plugin-react"

import dotenv from "dotenv"

dotenv.config()

const PORT = process.env.VITE_PORT

export default defineConfig({
  plugins: [react()],

  server: {
    port: PORT,
  },
})
