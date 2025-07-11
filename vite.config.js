// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Default Vite port (change if needed)
  },
  build: {
    outDir: 'dist',
  },
});
