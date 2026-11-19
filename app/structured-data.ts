import {
	appStoreUrl,
	googlePlayUrl,
	productUrl,
	type Product,
} from "./products";

export const SITE = "https://newworld.codes";
export const COMPANY = "New World Code";
export const LEGAL_NAME = "New World Code Ltd";
export const EMAIL = "hello@newworld.codes";

export const FOUNDER_LINKS = {
	website: "https://dav3.co",
	github: "https://github.com/davemackintosh",
	linkedin: "https://www.linkedin.com/in/dav3",
	mastodon: "https://fosstodon.org/@davemackintosh",
	companyGithub: "https://github.com/newworldcodes",
} as const;

export const PUBLISHER = {
	"@type": "Organization",
	"@id": `${SITE}/#organization`,
	name: COMPANY,
	legalName: LEGAL_NAME,
	url: SITE,
} as const;

export const FOUNDER = {
	"@type": "Person",
	"@id": `${SITE}/about#dave-mackintosh`,
	name: "Dave Mackintosh",
	jobTitle: "Founder",
	url: `${SITE}/about`,
	worksFor: { "@id": `${SITE}/#organization` },
	sameAs: [
		FOUNDER_LINKS.website,
		FOUNDER_LINKS.github,
		FOUNDER_LINKS.linkedin,
		FOUNDER_LINKS.mastodon,
	],
} as const;

function absolute(url: string) {
	return url.startsWith("http") ? url : `${SITE}${url}`;
}

const operatingSystems: Record<string, string> = {
	iPhone: "iOS",
	iPad: "iPadOS",
	"Apple Watch": "watchOS",
	Mac: "macOS",
	Android: "Android",
};

/** A product as a schema.org SoftwareApplication. */
export function softwareApplication(p: Product) {
	const os = [...new Set(p.platforms.map((x) => operatingSystems[x]))];
	const sameAs = [appStoreUrl(p), googlePlayUrl(p), p.website].filter(Boolean);
	const isMobile = p.platforms.some((x) => x !== "Mac");
	return {
		"@type": isMobile && !p.platforms.includes("Mac") ? "MobileApplication" : "SoftwareApplication",
		"@id": `${absolute(productUrl(p))}#app`,
		name: p.name,
		description: p.summary,
		url: absolute(productUrl(p)),
		applicationCategory: p.category,
		operatingSystem: os.join(", "),
		...(p.requirements ? { softwareRequirements: p.requirements } : {}),
		...(p.screenshot ? { screenshot: absolute(p.screenshot.src) } : {}),
		...(p.status === "live" && (p.free || p.price)
			? {
					offers: {
						"@type": "Offer",
						price: p.price?.amount ?? "0",
						priceCurrency: p.price?.currency ?? "GBP",
						...(appStoreUrl(p) ? { url: appStoreUrl(p) } : {}),
						availability: "https://schema.org/InStock",
					},
				}
			: {}),
		...(sameAs.length ? { sameAs } : {}),
		publisher: PUBLISHER,
		author: PUBLISHER,
	};
}

export function breadcrumb(
	name: string,
	path: string,
	parent?: { name: string; path: string },
) {
	const trail = [
		{ name: COMPANY, item: SITE },
		...(parent ? [{ name: parent.name, item: `${SITE}${parent.path}` }] : []),
		{ name, item: `${SITE}${path}` },
	];
	return {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: trail.map((crumb, i) => ({
			"@type": "ListItem",
			position: i + 1,
			...crumb,
		})),
	};
}

export function faqPage(path: string, faqs: { q: string; a: string }[]) {
	return {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		url: `${SITE}${path}`,
		mainEntity: faqs.map((faq) => ({
			"@type": "Question",
			name: faq.q,
			acceptedAnswer: { "@type": "Answer", text: faq.a },
		})),
	};
}

/** A legal or support document, with the date it was last revised. */
export function documentPage({
	name,
	description,
	path,
	dateModified,
}: {
	name: string;
	description: string;
	path: string;
	dateModified: string;
}) {
	return {
		"@context": "https://schema.org",
		"@type": "WebPage",
		name,
		description,
		url: `${SITE}${path}`,
		dateModified,
		inLanguage: "en-GB",
		isPartOf: { "@id": `${SITE}/#website` },
		publisher: PUBLISHER,
	};
}

/** A stable, readable id for a heading, so a passage can be linked to. */
export function anchorId(text: string) {
	return text
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-|-$/g, "");
}

export function jsonLdProps(data: unknown) {
	return {
		type: "application/ld+json",
		dangerouslySetInnerHTML: { __html: JSON.stringify(data) },
	} as const;
}
