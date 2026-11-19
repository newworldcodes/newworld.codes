import type { MetadataRoute } from "next";
import { hostedHere, products } from "./products";
import { SITE } from "./structured-data";

export const dynamic = "force-static";

// lastModified is the date a page's content last changed, not the build date.
// Update it by hand when you change a page. Product pages take theirs from
// the catalogue.
const pages: MetadataRoute.Sitemap = [
	{ url: SITE, lastModified: "2026-11-19", changeFrequency: "monthly", priority: 1 },
	{ url: `${SITE}/about`, lastModified: "2026-11-19", changeFrequency: "yearly", priority: 0.6 },
	{ url: `${SITE}/support`, lastModified: "2026-11-19", changeFrequency: "monthly", priority: 0.5 },
	{ url: `${SITE}/privacy`, lastModified: "2026-11-19", changeFrequency: "yearly", priority: 0.3 },
	{ url: `${SITE}/terms`, lastModified: "2026-11-19", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		...pages,
		...products.filter(hostedHere).map((p) => ({
			url: `${SITE}/${p.slug}`,
			lastModified: p.dateModified,
			changeFrequency: "monthly" as const,
			priority: 0.9,
		})),
	];
}
