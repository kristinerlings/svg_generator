import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'svg_generator',
  server: {
    proxy: {
      '/api': {
        target: 'https://svg-server.ddev.site', //local ->
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
