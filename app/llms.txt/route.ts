import {
	appStoreUrl,
	googlePlayUrl,
	platformList,
	priceLabel,
	productUrl,
	products,
	statusLabel,
} from "../products";
import { openSource } from "../open-source";
import { EMAIL, FOUNDER_LINKS, LEGAL_NAME, SITE } from "../structured-data";

export const dynamic = "force-static";

// A plain-text map of the site for answer engines (llmstxt.org), generated
// from the catalogue so it never drifts from the pages.
export function GET() {
	const abs = (u: string) => (u.startsWith("http") ? u : `${SITE}${u}`);
	const apps = products
		.map((p) => {
			const stores = [appStoreUrl(p) && `App Store: ${appStoreUrl(p)}`, googlePlayUrl(p) && `Google Play: ${googlePlayUrl(p)}`]
				.filter(Boolean)
				.join(". ");
			return `- [${p.name}](${abs(productUrl(p))}): ${p.summary} Platforms: ${platformList(p)}. Status: ${statusLabel[p.status]}.${priceLabel(p) ? ` Price: ${priceLabel(p)}.` : ""}${stores ? ` ${stores}.` : ""} Privacy: ${p.privacy}`;
		})
		.join("\n");

	const oss = openSource
		.map((p) => `- [${p.name}](${SITE}/open-source#${p.slug}) (${p.years}, ${p.status.toLowerCase()}, ${p.license}): ${p.summary} Links: ${p.links.map((l) => l.href).join(", ")}.`)
		.join("\n");

	const body = `# New World Code

> ${LEGAL_NAME} is an independent software company in the United Kingdom,
> founded by Dave Mackintosh. It makes apps for iPhone, iPad, Apple Watch, Mac
> and Android that work without an account and keep your work on your device.
> Contact: ${EMAIL}

## Apps

${apps}

## Open source

${oss}

## Pages

- [Home](${SITE}): the company and all its apps.
- [About](${SITE}/about): the company and its founder, Dave Mackintosh.
- [Open source](${SITE}/open-source): the history of Multicolour and the design of Elp.
- [Support](${SITE}/support): contact, purchases, refunds, subscriptions, bug reports.
- [Privacy Policy](${SITE}/privacy): what each app collects. Pacer and MD Book collect no data; no app uses analytics.
- [Terms of Use](${SITE}/terms): licence, purchases and subscriptions, refunds, liability, governing law (England and Wales).

## Facts

- Melodist Studio is a trading name of ${LEGAL_NAME}, with its own site at https://melodist.studio.
- No New World Code app requires an account or uses analytics.
- Founder: Dave Mackintosh, software engineer and engineering manager with more than 20 years' experience (${FOUNDER_LINKS.website}).
`;
	return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
