import type { Metadata } from 'next';
import MaintenancePage from '@/components/MaintenancePage';

export const metadata: Metadata = {
  title: 'About Us',
  robots: { index: false, follow: true },
};

export default function AboutPage() {
  return <MaintenancePage section="About us" />;
}
