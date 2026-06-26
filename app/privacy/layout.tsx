import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Verumpraxis',
  description:
    'Privacy Policy of Verumpraxis law firm. Procedure for collection, processing and protection of personal data in accordance with the legislation of the Republic of Kazakhstan.',
  alternates: {
    canonical: 'https://verumpraxis.com/privacy',
  },
  robots: { index: true, follow: true },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
