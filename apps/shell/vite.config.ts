import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'shell',
      remotes: {
        products: 'http://localhost:5171/assets/remoteEntry.js',
        marketing: 'http://localhost:5172/assets/remoteEntry.js'
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
    port: 5170,
    strictPort: true
  },
  build: {
    target: 'esnext',
    modulePreload: false
  }
});
