import type { Metadata } from 'next';
import MaintenancePage from '@/components/MaintenancePage';

export const metadata: Metadata = {
  title: 'Page coming soon',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return <MaintenancePage />;
}
