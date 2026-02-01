import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { initSentry, SentryErrorBoundary, sentryEnabled, withSentryProfiler } from './sentry';

const root = document.getElementById('root');
if (!root) throw new Error('Root element not found');

initSentry();

const AppWithProfiler = withSentryProfiler(App);
const app = (
  <React.StrictMode>
    <AppWithProfiler />
  </React.StrictMode>
);

ReactDOM.createRoot(root).render(
  sentryEnabled ? (
    <SentryErrorBoundary fallback={<div>Something went wrong.</div>}>
      {app}
    </SentryErrorBoundary>
  ) : (
    app
  )
);