import type { Metadata } from 'next';
import './globals.css';

export const dynamic = 'force-dynamic';

const SITE_URL = 'https://verumpraxis.com';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXTAUTH_URL || SITE_URL),
  title: {
    default: 'English Speaking Law Firm Almaty, Kazakhstan | Verumpraxis',
    template: '%s | Verumpraxis — Law Firm Almaty Kazakhstan',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  description:
    'Verumpraxis is an English speaking law firm in Almaty, Kazakhstan. Full-service legal counsel for international investors and businesses: corporate law, M&A, tax advisory, AIFC registration, dispute resolution, employment law, digital law and intellectual property across Kazakhstan and Central Asia.',
  keywords: [
    'English speaking lawyers Almaty',
    'English speaking lawyers Kazakhstan',
    'legal services Almaty',
    'legal services Kazakhstan',
    'law firm Almaty',
    'law firm Kazakhstan',
    'international law firm Almaty',
    'lawyer in Almaty',
    'lawyer in Kazakhstan',
    'legal counsel Kazakhstan',
    'foreign investor legal support Kazakhstan',
    'business lawyer Almaty',
    'English speaking attorney Kazakhstan',
    'legal advice Almaty',
    'legal advisory Kazakhstan',
    'international legal services Central Asia',
    'corporate law Kazakhstan',
    'M&A Kazakhstan',
    'company registration Kazakhstan',
    'mergers and acquisitions Almaty',
    'due diligence Kazakhstan',
    'joint venture Kazakhstan',
    'corporate structuring Central Asia',
    'tax law Kazakhstan',
    'tax advisory Almaty',
    'taxation of non-residents Kazakhstan',
    'double taxation treaty Kazakhstan',
    'tax planning Kazakhstan',
    'AIFC registration',
    'AIFC law firm',
    'AIFC legal services',
    'Astana International Financial Centre',
    'AIFC company formation',
    'English law Kazakhstan',
    'dispute resolution Kazakhstan',
    'international arbitration Kazakhstan',
    'AIFC Court',
    'litigation Kazakhstan',
    'commercial disputes Almaty',
    'investment in Kazakhstan',
    'foreign investment Kazakhstan',
    'investor legal support Kazakhstan',
    'investment incentives Kazakhstan',
    'employment law Kazakhstan',
    'labour law Kazakhstan',
    'work permits Kazakhstan',
    'digital law Kazakhstan',
    'data protection Kazakhstan',
    'intellectual property Kazakhstan',
    'trademark registration Kazakhstan',
    'immigration lawyer Kazakhstan',
    'residence permit Kazakhstan',
    'real estate lawyer Almaty',
    'Verumpraxis',
  ],
  openGraph: {
    title: 'Verumpraxis — English Speaking Law Firm in Almaty, Kazakhstan',
    description:
      'English speaking lawyers in Almaty, Kazakhstan. Legal services for international investors and businesses: corporate law, M&A, tax, AIFC, dispute resolution, employment law, IP and digital law across Kazakhstan and Central Asia.',
    images: [{ url: '/images/og_image.png', width: 1200, height: 630, alt: 'Verumpraxis — English speaking law firm in Almaty, Kazakhstan' }],
    type: 'website',
    locale: 'en_US',
    siteName: 'Verumpraxis',
    url: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="sVcufeJVilShNWTExV47FAZtSWb7aC9b1SvVDrxam90" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script src="https://apps.abacus.ai/chatllm/appllm-lib.js" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            `,
          }}
        />
      </head>
      <body className="font-body antialiased">
        {children}
        <SchemaMarkup />
      </body>
    </html>
  );
}

function SchemaMarkup() {
  const siteUrl = SITE_URL;
  const logoUrl = `${siteUrl}/images/og_image.png`;

  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'LegalService',
      name: 'Verumpraxis',
      description:
        'English speaking law firm in Almaty, Kazakhstan. Full-service legal counsel for international investors and businesses: employment law, corporate law and M&A, tax advisory, dispute resolution, AIFC law, digital law, data protection, investments, intellectual property, foreign jurisdictions, private clients. Legal services in Kazakhstan and Central Asia.',
      url: siteUrl,
      logo: logoUrl,
      image: logoUrl,
      telephone: '+77072506680',
      email: 'info@verumpraxis.kz',
      priceRange: '$$',
      areaServed: [
        { '@type': 'Country', name: 'Kazakhstan' },
        { '@type': 'Place', name: 'Central Asia' },
        { '@type': 'Place', name: 'International' },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Legal Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Employment Law', description: 'Employment law advice in Almaty. Employment contracts, termination, HR legal audit, collective agreements, conciliation commissions, court representation in labour disputes.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Foreign Jurisdictions', description: 'Company registration abroad: USA, UAE, UK, Cyprus. SPV, trusts and funds setup. Coordination of foreign advisors, international transactions, import and export.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Digital Law & Data Protection', description: 'Digital law attorney in Kazakhstan. Cryptocurrency, blockchain, fintech, digital assets, tokens, personal data audit, e-commerce, online platform support, cybersecurity.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Private Clients', description: 'Private client lawyer in Almaty. Inheritance law, real estate transactions, trusts, offshore planning, immigration, residence permit, Kazakhstan citizenship.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Investments', description: 'Investment legal support in Kazakhstan. Investment projects, incentives, investment funds, EPC contracts, investment agreements, arbitration disputes, AML compliance.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tax Law', description: 'Tax lawyer Almaty. Taxation of non-residents, double taxation treaties, tax disputes, tax structuring, Astana Hub, SEZ, tax incentives Kazakhstan.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dispute Resolution', description: 'Litigation attorney in Almaty. Pre-trial settlement, mediation, court representation at all levels, international arbitration AIFC DIFC LCIA, debt collection, enforcement of judgments.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AIFC Law', description: 'Company registration in AIFC. Funds, trusts, management companies. Licensing of regulated activities, fintech in AIFC, ongoing legal retainer support.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Corporate Law & M&A', description: 'Corporate lawyer Almaty. Mergers and acquisitions, company registration, restructuring, liquidation, due diligence, corporate governance, bankruptcy.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Intellectual Property', description: 'Trademark registration in Kazakhstan and abroad. Patents, copyright, NDA, brand protection, IP due diligence, infringement defense in courts and arbitrations.' } },
        ],
      },
      knowsAbout: [
        'Employment Law Kazakhstan', 'Labour Disputes', 'Corporate Law Kazakhstan', 'Company Registration Kazakhstan',
        'M&A Kazakhstan', 'Mergers and Acquisitions', 'Due Diligence', 'Tax Law Kazakhstan', 'Tax Advisory',
        'Dispute Resolution', 'International Arbitration', 'AIFC', 'AIFC Law', 'AIFC Registration', 'AIFC Court',
        'Digital Law', 'Data Protection', 'Cryptocurrency Law', 'Fintech', 'Blockchain',
        'Investment Law Kazakhstan', 'Foreign Investment', 'Intellectual Property', 'Trademark Registration',
        'Immigration Law Kazakhstan', 'Residence Permit', 'Real Estate Law',
        'English Speaking Lawyers Almaty', 'Legal Services Kazakhstan', 'Central Asia Legal Counsel',
      ],
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Kozhabekov 19, 2nd floor',
        addressLocality: 'Almaty',
        addressRegion: 'Almaty',
        postalCode: '050040',
        addressCountry: 'KZ',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 43.2007061,
        longitude: 76.8956557,
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '10:00',
        closes: '19:00',
      },
      sameAs: [],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Verumpraxis',
      url: siteUrl,
      logo: logoUrl,
      foundingDate: '2023',
      numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 4, maxValue: 10 },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+77072506680',
        email: 'info@verumpraxis.kz',
        contactType: 'customer service',
        availableLanguage: ['English', 'Russian', 'Kazakh', 'Chinese'],
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Kozhabekov 19, 2nd floor',
        addressLocality: 'Almaty',
        addressCountry: 'KZ',
      },
    },
  ];

  return (
    <>
      {schemas?.map?.((schema: any, i: number) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}