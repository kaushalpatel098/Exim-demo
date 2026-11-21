import type { Metadata } from 'next';
import MaintenancePage from '@/components/MaintenancePage';

export const metadata: Metadata = {
  title: 'Resources & Insights',
  robots: { index: false, follow: true },
};

export default function BlogPage() {
  return <MaintenancePage section="Resources" />;
}
