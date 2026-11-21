import type { Metadata } from 'next';
import MaintenancePage from '@/components/MaintenancePage';

export const metadata: Metadata = {
  title: 'Privacy Information',
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return <MaintenancePage section="Privacy" />;
}
