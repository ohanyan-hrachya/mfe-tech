import type { PropsWithChildren } from 'react';

export function SectionCard({ title, children }: PropsWithChildren<{ title: string }>) {
  return (
    <section className="section-card">
      <div className="section-card__title">{title}</div>
      <div className="section-card__body">{children}</div>
    </section>
  );
}
