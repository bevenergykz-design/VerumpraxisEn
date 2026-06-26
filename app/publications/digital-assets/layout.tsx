import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Assets Regulation in Kazakhstan: Legal Framework, Risks & Opportunities | Verumpraxis',
  description:
    'Overview of the legal framework for digital assets in Kazakhstan: Digital Assets Act, AIFC regulation, crypto exchange licensing, KYC/AML, mining taxation, digital tenge. Legal support for projects.',
  keywords: [
    'digital assets Kazakhstan',
    'cryptocurrency Kazakhstan law',
    'crypto regulation Kazakhstan',
    'AIFC crypto regulation',
    'AIFC fintech license',
    'crypto exchange licensing Kazakhstan',
    'KYC AML Kazakhstan',
    'mining Kazakhstan tax',
    'digital tenge',
    'digital assets law',
    'Bitcoin Kazakhstan',
    'fintech AIFC license',
    'Verumpraxis',
  ],
  alternates: {
    canonical: 'https://verumpraxis.com/publications/digital-assets',
  },
  openGraph: {
    title: 'Digital Assets Regulation in Kazakhstan — Verumpraxis',
    description: 'Systematic analysis of the legal framework for digital assets, risks and opportunities for business in Kazakhstan and AIFC.',
    url: 'https://verumpraxis.com/publications/digital-assets',
    type: 'article',
    locale: 'en_US',
    siteName: 'Verumpraxis',
    images: [{ url: '/images/og_image.png', width: 1200, height: 630, alt: 'Digital Assets Regulation in Kazakhstan — Verumpraxis' }],
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Digital Assets Regulation in Kazakhstan: Legal Framework, Risks and Opportunities for Business',
  description: 'Overview of the legal framework for digital assets in Kazakhstan: Digital Assets Act, AIFC regulation, crypto exchange licensing, KYC/AML, mining taxation, digital tenge.',
  image: 'https://verumpraxis.com/images/og_image.png',
  datePublished: '2026-04-15',
  dateModified: '2026-04-15',
  inLanguage: 'en',
  author: { '@type': 'Organization', name: 'Verumpraxis', url: 'https://verumpraxis.com' },
  publisher: {
    '@type': 'Organization',
    name: 'Verumpraxis',
    logo: { '@type': 'ImageObject', url: 'https://verumpraxis.com/images/og_image.png' },
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://verumpraxis.com/publications/digital-assets' },
  about: ['Digital assets Kazakhstan', 'Cryptocurrency regulation', 'AIFC', 'Fintech Kazakhstan'],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://verumpraxis.com' },
    { '@type': 'ListItem', position: 2, name: 'Publications', item: 'https://verumpraxis.com/publications' },
    { '@type': 'ListItem', position: 3, name: 'Digital Assets in Kazakhstan', item: 'https://verumpraxis.com/publications/digital-assets' },
  ],
};

export default function DigitalAssetsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}
