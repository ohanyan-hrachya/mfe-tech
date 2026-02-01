import type { ComponentType } from 'react';

declare module 'products/ProductsWidget' {
  const Component: ComponentType;
  export default Component;
}

declare module 'marketing/MarketingWidget' {
  const Component: ComponentType;
  export default Component;
}
