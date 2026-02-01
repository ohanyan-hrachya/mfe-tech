import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'products',
      filename: 'remoteEntry.js',
      exposes: {
        './ProductsWidget': './src/ProductsWidget.tsx'
      },
      shared: ['react', 'react-dom']
    })
  ],
  resolve: {
    alias: {
      '@shared-ui': fileURLToPath(new URL('../../packages/shared-ui/src', import.meta.url))
    }
  },
  server: {
    port: 5171,
    strictPort: true
  },
  build: {
    target: 'esnext',
    modulePreload: false
  }
});
