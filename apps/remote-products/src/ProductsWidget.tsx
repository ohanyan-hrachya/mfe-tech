import { SectionCard } from '@shared-ui';

export function ProductsWidget() {
  return (
    <SectionCard title="Products">
      <ul className="remote__list">
        <li>Edge Analytics Suite</li>
        <li>Realtime Inventory Pulse</li>
        <li>Smart Pricing Engine</li>
      </ul>
    </SectionCard>
  );
}
