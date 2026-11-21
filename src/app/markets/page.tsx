import type { Metadata } from 'next';
import MaintenancePage from '@/components/MaintenancePage';

export const metadata: Metadata = {
  title: 'Markets We Serve',
  robots: { index: false, follow: true },
};

export default function MarketsPage() {
  return <MaintenancePage section="Markets" />;
}
