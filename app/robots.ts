import type { MetadataRoute } from "next";
import { SITE } from "./structured-data";

export const dynamic = "force-static";

// Answer-engine crawlers are welcome: the site exists to be found and quoted.
export default function robots(): MetadataRoute.Robots {
	return {
		rules: [{ userAgent: "*", allow: "/" }],
		sitemap: `${SITE}/sitemap.xml`,
		host: SITE,
	};
}
