import react from '@vitejs/plugin-react';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const __dirname = dirname(fileURLToPath(import.meta.url));
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: {
      '/development': {
        target: 'http://127.0.0.1:8888',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/development/, ''),
      },
      '/production': {
        target: 'https://www.archeruu.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/production/, ''),
      },
    },
  },
});
