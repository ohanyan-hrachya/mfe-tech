# MFE-tech

Micro-frontend playground (Vite + React + Module Federation) for senior-level practice.

## Structure
- `apps/shell` — host app (port 5170)
- `apps/remote-products` — products remote (port 5171)
- `apps/remote-marketing` — marketing remote (port 5172)
- `packages/shared-ui` — shared UI components

## Run locally
```
pnpm install
pnpm -C apps/remote-products dev
pnpm -C apps/remote-marketing dev
pnpm -C apps/shell dev
```

## Quality toolchain
- Format: `pnpm format` / `pnpm format:check`
- Lint: `pnpm lint`
- Typecheck: `pnpm typecheck`
- Test: `pnpm test`
- Build: `pnpm build`
- Lighthouse: `pnpm lighthouse` (runs against the shell preview build)

## Sentry
Runtime error tracking is enabled when `VITE_SENTRY_DSN` is provided per app.

Optional sourcemap upload (CI/CD):
- `SENTRY_AUTH_TOKEN`
- `SENTRY_ORG`
- `SENTRY_PROJECT`
- `SENTRY_RELEASE` (optional)

## What to explore next
- Add routing + auth boundaries per remote
- Introduce a BFF (Fastify or Nest) with API gateway patterns
- Add environment-specific remote config (dev/staging/prod)
