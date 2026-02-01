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

## What to explore next
- Add routing + auth boundaries per remote
- Introduce a BFF (Fastify or Nest) with API gateway patterns
- Add CI with lint + typecheck + build pipelines
