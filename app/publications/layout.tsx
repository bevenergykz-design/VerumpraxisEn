import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Publications — Legal Articles: Employment Law, Tax, AIFC, M&A, Digital Law | Verumpraxis',
  description:
    'Expert legal articles by Verumpraxis: employment law, corporate law, tax planning, AIFC, M&A, digital assets, dispute resolution, intellectual property. Practical insights for businesses in Kazakhstan and Central Asia.',
  keywords: [
    'legal articles Kazakhstan', 'corporate law article', 'tax law Kazakhstan',
    'AIFC publications', 'M&A Kazakhstan', 'digital assets Kazakhstan', 'legal overview',
    'employment law article', 'legal blog Almaty', 'Verumpraxis publications',
    'law firm blog Kazakhstan', 'legal insights Central Asia',
  ],
  alternates: {
    canonical: 'https://verumpraxis.com/publications',
  },
  openGraph: {
    title: 'Verumpraxis Publications — Legal Articles & Expert Insights',
    description:
      'Employment law, corporate law, tax, AIFC, digital assets, dispute resolution — expert materials from Verumpraxis lawyers.',
    url: 'https://verumpraxis.com/publications',
    type: 'website',
    locale: 'en_US',
    siteName: 'Verumpraxis',
  },
};

export default function PublicationsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
