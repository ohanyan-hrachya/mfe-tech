import { render, screen } from '@testing-library/react';
import { SectionCard } from './SectionCard';

describe('SectionCard', () => {
  it('renders title and children', () => {
    render(
      <SectionCard title="Highlights">
        <p>Content</p>
      </SectionCard>
    );

    expect(screen.getByText('Highlights')).toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
  });
});