import React, { Suspense } from 'react';
import { SectionCard } from '@shared-ui';

const ProductsWidget = React.lazy(() => import('products/ProductsWidget'));
const MarketingWidget = React.lazy(() => import('marketing/MarketingWidget'));

export default function App() {
  return (
    <div className="shell">
      <header className="shell__header">
        <div className="shell__title">MFE Tech</div>
        <div className="shell__subtitle">Micro-frontend cockpit</div>
      </header>
      <main className="shell__grid">
        <SectionCard title="Shell">This is the host app orchestrating remotes.</SectionCard>
        <Suspense fallback={<SectionCard title="Loading">Loading remote modules...</SectionCard>}>
          <ProductsWidget />
          <MarketingWidget />
        </Suspense>
      </main>
    </div>
  );
}
