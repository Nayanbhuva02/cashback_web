import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    cors: {
      origin: "*",
      methods: ["GET", "POST"],       // Specify allowed HTTP methods
      allowedHeaders: ["Content-Type", "Authorization", "Accept"], // Specify 
    },
  },
});
