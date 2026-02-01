import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';
import { sentryVitePlugin } from '@sentry/vite-plugin';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const shouldUploadSourcemaps = Boolean(
    env.SENTRY_AUTH_TOKEN && env.SENTRY_ORG && env.SENTRY_PROJECT,
  );

  return {
    plugins: [
      react(),
      federation({
        name: 'shell',
        remotes: {
          products: 'http://localhost:5171/assets/remoteEntry.js',
          marketing: 'http://localhost:5172/assets/remoteEntry.js',
        },
        shared: ['react', 'react-dom'],
      }),
      shouldUploadSourcemaps
        ? sentryVitePlugin({
            authToken: env.SENTRY_AUTH_TOKEN,
            org: env.SENTRY_ORG,
            project: env.SENTRY_PROJECT,
            release: env.SENTRY_RELEASE || process.env.npm_package_version,
            sourcemaps: {
              assets: './dist/**',
            },
          })
        : null,
    ].filter(Boolean),
    resolve: {
      alias: {
        '@shared-ui': fileURLToPath(new URL('../../packages/shared-ui/src', import.meta.url)),
      },
    },
    server: {
      port: 5170,
      strictPort: true,
    },
    build: {
      target: 'esnext',
      modulePreload: false,
      sourcemap: shouldUploadSourcemaps,
    },
  };
});
