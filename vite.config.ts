import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.cjs'
  },
  // Add these configurations:
  base: './', // Ensures relative paths work in production
  publicDir: 'public', // Explicitly sets the public directory
  build: {
    outDir: 'dist', // Default build output directory
    assetsDir: 'assets', // Organizes assets in a subfolder
    emptyOutDir: true, // Clears the output directory before build
  },
  server: {
    // Ensure the development server serves files correctly
    host: true, // Listen on all network interfaces
    port: 5173, // Default Vite port
  }
});