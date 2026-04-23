const SITE_URL = "https://nogomedia.se";

export default function ArticleJsonLd({
  title,
  description,
  url,
  publishedTime,
  modifiedTime,
  image = "/og-image.png",
  tags,
}: {
  title: string;
  description: string;
  url: string;
  publishedTime: string;
  modifiedTime?: string;
  image?: string;
  tags: string[];
}) {
  const absoluteUrl = `${SITE_URL}${url}`;
  const absoluteImage = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: absoluteUrl,
    image: [absoluteImage],
    datePublished: publishedTime,
    dateModified: modifiedTime ?? publishedTime,
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
      "@id": absoluteUrl,
    },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Hem",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blogg",
        item: `${SITE_URL}/blogg`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: absoluteUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  );
}
