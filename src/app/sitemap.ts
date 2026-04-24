import type { MetadataRoute } from "next";

const SITE_URL = "https://nogomedia.se";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/losningar`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/losningar/ruttoptimering`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/losningar/tms-integration`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/losningar/trafikledning`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/losningar/automatisk-orderhantering`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/losningar/rapport-och-analys`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/blogg`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/artiklar/ai-trafikledning-2026`,
      lastModified: new Date("2026-04-01"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/blogg/tms-system-2026-guide-svenska-akerier`,
      lastModified: new Date("2026-04-02"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/blogg/vad-kostar-manuell-transportplanering`,
      lastModified: new Date("2026-04-02"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/blogg/digitalisering-akeri-2026`,
      lastModified: new Date("2026-04-02"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/artiklar/trafikledarbrist-sverige-teknik-avlastar`,
      lastModified: new Date("2026-04-02"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/artiklar/efti-digitala-fraktdokument-akeri`,
      lastModified: new Date("2026-04-02"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/artiklar/tms-system-jamforelse-opter-addsecure`,
      lastModified: new Date("2026-04-02"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/artiklar/minska-tomkorningar-konkreta-atgarder`,
      lastModified: new Date("2026-04-02"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/artiklar/roi-automation-transport-kalkyl`,
      lastModified: new Date("2026-04-02"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/artiklar/digitalisering-akerinaring-var-borjar-man`,
      lastModified: new Date("2026-04-02"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/artiklar/csrd-co2-rapportering-akeri`,
      lastModified: new Date("2026-04-24"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/artiklar/kor-vilotider-automatisera-efterlevnad`,
      lastModified: new Date("2026-04-24"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/artiklar/backhaul-returlass-automatiserad-matchning`,
      lastModified: new Date("2026-04-24"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/artiklar/ai-agenter-for-transport-2026`,
      lastModified: new Date("2026-04-24"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/sa-jobbar-vi`,
      lastModified: new Date("2026-04-24"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/om-oss`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/kontakt`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/integritetspolicy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/villkor`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
