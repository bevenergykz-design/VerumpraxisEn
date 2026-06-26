'use client';

import { I18nProvider } from '@/lib/i18n/context';
import Header from '../_components/header';
import FooterSection from '../_components/footer-section';
import PublicationsSection from '../_components/publications-section';
import FloatingButtons from '../_components/floating-buttons';
import ScrollProgress from '../_components/scroll-progress';

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://verumpraxis.com' },
    { '@type': 'ListItem', position: 2, name: 'Publications', item: 'https://verumpraxis.com/publications' },
  ],
};

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Verumpraxis Publications',
  description: 'Expert legal articles by Verumpraxis on corporate, tax, employment and digital law in Kazakhstan.',
  url: 'https://verumpraxis.com/publications',
  isPartOf: { '@type': 'WebSite', name: 'Verumpraxis', url: 'https://verumpraxis.com' },
  publisher: { '@type': 'Organization', name: 'Verumpraxis', url: 'https://verumpraxis.com' },
};

export default function PublicationsPage() {
  return (
    <I18nProvider>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <ScrollProgress />
      <Header />
      <main style={{ paddingTop: 72 }}>
        <PublicationsSection />
      </main>
      <FooterSection />
      <FloatingButtons />
    </I18nProvider>
  );
}
