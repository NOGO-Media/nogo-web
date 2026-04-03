const SITE_URL = "https://nogomedia.se";

export default function ArticleJsonLd({
  title,
  description,
  url,
  publishedTime,
  tags,
}: {
  title: string;
  description: string;
  url: string;
  publishedTime: string;
  tags: string[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${SITE_URL}${url}`,
    datePublished: publishedTime,
    author: {
      "@type": "Organization",
      name: "NOGO Media AB",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "NOGO Media AB",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    keywords: tags.join(", "),
    inLanguage: "sv",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}${url}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
