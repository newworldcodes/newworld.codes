import type { Metadata } from "next";
import Link from "next/link";
import { openSource } from "../open-source";
import SectionLabel from "../section-label";
import { breadcrumb, jsonLdProps, SITE, sourceCodeJsonLd } from "../structured-data";

const description =
	"Open-source work from New World Code and Dave Mackintosh: Elp, a programming language for native apps on every platform, and Multicolour, a REST API and ORM generator for Node.js run from 2015 to 2021.";

export const metadata: Metadata = {
	title: "Open source: Elp and Multicolour",
	description,
	alternates: { canonical: `${SITE}/open-source` },
	openGraph: { title: "Open source at New World Code", description, url: `${SITE}/open-source` },
};

const pageJsonLd = {
	"@context": "https://schema.org",
	"@type": "CollectionPage",
	name: "Open source at New World Code",
	description,
	url: `${SITE}/open-source`,
	inLanguage: "en-GB",
	isPartOf: { "@id": `${SITE}/#website` },
	mainEntity: {
		"@type": "ItemList",
		itemListElement: openSource.map((p, i) => ({
			"@type": "ListItem",
			position: i + 1,
			item: sourceCodeJsonLd(p),
		})),
	},
};

export default function OpenSourcePage() {
	return (
		<>
			<script {...jsonLdProps(pageJsonLd)} />
			<script {...jsonLdProps(breadcrumb("Open source", "/open-source"))} />

			<main className="mx-auto w-full max-w-[1440px] px-4 md:px-12">
				<section className="flex max-w-[900px] flex-col gap-5 py-10 md:gap-6 md:pb-20 md:pt-24">
					<p className="type-micro-sm md:type-micro text-muted">Open source</p>
					<h1 className="type-display-md md:type-display-lg text-pretty text-fg">
						Tools for other developers, built in the open.
					</h1>
					<p className="type-title max-w-[680px] leading-[1.5] text-muted">
						Alongside its apps, New World Code has published open-source
						software for more than a decade: a REST API generator for Node.js
						that ran for six years, and now a programming language.
					</p>
				</section>
			</main>

			{openSource.map((p) => (
				<section
					key={p.slug}
					id={p.slug}
					style={{ "--accent": p.accent } as React.CSSProperties}
					className="scroll-mt-4 border-t border-border"
				>
					<div className="mx-auto grid w-full max-w-[1440px] gap-6 px-4 py-7 md:grid-cols-[220px_minmax(0,1fr)] md:gap-12 md:px-12 md:py-14 xl:grid-cols-[220px_minmax(0,1fr)_320px]">
						<div className="flex items-baseline justify-between self-start md:flex-col md:items-start md:gap-2.5">
							<h2 className="type-display text-fg">{p.name}</h2>
							<p className="type-micro-sm text-accent">
								{p.status} · {p.years}
							</p>
						</div>

						<div className="flex max-w-[760px] flex-col gap-4">
							<p className="type-title leading-[1.45] text-fg">{p.tagline}</p>
							{p.story.map((para) => (
								<p key={para.slice(0, 32)} className="type-body leading-[1.7] text-muted">
									{para}
								</p>
							))}
							<ul className="flex flex-wrap gap-x-6 gap-y-2 pt-1">
								{p.links.map((l) => (
									<li key={l.href}>
										<a
											href={l.href}
											className="type-label flex h-11 items-center border-b-[1.5px] border-accent pb-0.5 text-fg md:h-auto"
										>
											{l.label} →
										</a>
									</li>
								))}
							</ul>
						</div>

						<dl className="grid self-start grid-cols-2 gap-x-6 gap-y-4 border-t border-border pt-5 md:col-start-2 xl:col-start-auto xl:grid-cols-1 xl:border-l xl:border-t-0 xl:pl-8 xl:pt-0">
							{[
								...p.facts,
								{ label: "Language", value: p.language },
								{ label: "Licence", value: p.license },
							].map((f) => (
								<div key={f.label} className="flex flex-col gap-1">
									<dt className="type-micro-sm text-muted">{f.label}</dt>
									<dd className="type-body text-fg">{f.value}</dd>
								</div>
							))}
						</dl>
					</div>
				</section>
			))}

			<section className="border-t border-border bg-surface-alt">
				<div className="mx-auto grid w-full max-w-[1440px] gap-4 px-4 py-7 md:grid-cols-[220px_minmax(0,1fr)] md:gap-12 md:px-12 md:py-14">
					<SectionLabel title="Get involved" />
					<p className="type-body max-w-[760px] leading-[1.7] text-muted">
						Elp&apos;s design is open for discussion on{" "}
						<a href="https://github.com/elp-lang/elp" className="inline-link">
							GitHub
						</a>
						: read the design docs, open an issue or send a pull request. More
						about who builds all this is on the{" "}
						<Link href="/about" className="inline-link">
							about page
						</Link>
						.
					</p>
				</div>
			</section>
		</>
	);
}
