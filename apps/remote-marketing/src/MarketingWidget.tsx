import { useEffect, useState } from 'react';
import { SectionCard } from '@shared-ui';

type Campaign = {
  id: string;
  title: string;
  description?: string | null;
  status?: string | null;
  budget?: number | null;
};

const bffUrl = import.meta.env.VITE_BFF_URL || 'http://localhost:4000';

export function MarketingWidget() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    async function loadCampaigns() {
      try {
        const response = await fetch(`${bffUrl}/api/marketing/campaigns`, {
          signal: controller.signal,
        });
        if (!response.ok) {
          return;
        }
        const data = (await response.json()) as Campaign[];
        setCampaigns(data);
      } catch (error) {
        if ((error as Error).name !== 'AbortError') {
          console.error('Failed to load campaigns', error);
        }
      } finally {
        setLoading(false);
      }
    }

    loadCampaigns();

    return () => controller.abort();
  }, []);

  return (
    <SectionCard title="Marketing">
      <p className="remote__copy">
        Campaign velocity is up 18% this week. The growth pod is testing a new landing flow.
      </p>
      {loading ? (
        <p className="remote__copy">Loading campaigns...</p>
      ) : campaigns.length ? (
        <ul className="remote__list">
          {campaigns.map((campaign) => (
            <li key={campaign.id}>
              <strong>{campaign.title}</strong>
              {campaign.description ? ` � ${campaign.description}` : ''}
              {campaign.status ? ` (${campaign.status})` : ''}
            </li>
          ))}
        </ul>
      ) : (
        <p className="remote__copy">No campaigns yet. Seed the database to see data.</p>
      )}
    </SectionCard>
  );
}
