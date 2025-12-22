// ============================================
// JSON-LD STRUCTURED DATA COMPONENTS
// ============================================

interface JsonLdProps {
  data: Record<string, unknown>;
}

/**
 * Generic JSON-LD component for structured data
 */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/**
 * Organization schema for the agency
 */
export function OrganizationSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Kora',
    description:
      "South Africa's leading creator management agency. In-person content direction, brilliant organic strategy, and the fastest deployment in the game.",
    url: 'https://koracreators.net',
    logo: 'https://koracreators.net/og-image.png',
    sameAs: [
      // Add social media URLs when available
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: ['English'],
    },
    areaServed: [
      {
        '@type': 'Country',
        name: 'South Africa',
      },
      {
        '@type': 'Country',
        name: 'United States',
      },
      {
        '@type': 'Country',
        name: 'United Kingdom',
      },
    ],
  };

  return <JsonLd data={data} />;
}

/**
 * Article schema for blog posts
 */
interface ArticleSchemaProps {
  title: string;
  description: string;
  author: string;
  datePublished: string;
  url: string;
  image?: string;
}

export function ArticleSchema({
  title,
  description,
  author,
  datePublished,
  url,
  image,
}: ArticleSchemaProps) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Kora',
      url: 'https://koracreators.net',
    },
    datePublished: datePublished,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    ...(image && { image: image }),
  };

  return <JsonLd data={data} />;
}

/**
 * FAQ Page schema
 */
interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs: FAQItem[];
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return <JsonLd data={data} />;
}

/**
 * Breadcrumb schema
 */
interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return <JsonLd data={data} />;
}

/**
 * WebSite schema with search action
 */
export function WebSiteSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Kora',
    url: 'https://koracreators.net',
    description:
      "South Africa's leading creator management agency",
  };

  return <JsonLd data={data} />;
}




