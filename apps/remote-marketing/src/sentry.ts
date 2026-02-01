import type { ComponentType } from 'react';
import * as Sentry from '@sentry/react';

export const sentryEnabled = Boolean(import.meta.env.VITE_SENTRY_DSN);

export function initSentry() {
  if (!sentryEnabled) {
    return;
  }

  Sentry.init({
    dsn: import.meta.env.VITE_SENTRY_DSN,
    environment: import.meta.env.MODE,
    tracesSampleRate: 0.1,
  });
}

export function withSentryProfiler<T>(Component: ComponentType<T>) {
  return sentryEnabled
    ? (Sentry.withProfiler(Component as ComponentType<Record<string, unknown>>) as ComponentType<T>)
    : Component;
}

export const SentryErrorBoundary = Sentry.ErrorBoundary;
