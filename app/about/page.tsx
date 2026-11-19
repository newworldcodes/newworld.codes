import type { Metadata } from "next";
import Link from "next/link";
import { productUrl, products } from "../products";
import {
	EMAIL,
	FOUNDER,
	FOUNDER_LINKS,
	LEGAL_NAME,
	SITE,
	breadcrumb,
	jsonLdProps,
} from "../structured-data";

const description =
	"New World Code Ltd is an independent UK software company founded by Dave Mackintosh, an engineer and engineering manager with more than 20 years' experience. It makes Melodist Studio, Pacer and MD Book.";

export const metadata: Metadata = {
	title: "About New World Code and Dave Mackintosh",
	description,
	alternates: { canonical: `${SITE}/about` },
	openGraph: {
		title: "About New World Code",
		description,
		url: `${SITE}/about`,
		type: "profile",
	},
};

const pageJsonLd = {
	"@context": "https://schema.org",
	"@type": "AboutPage",
	name: "About New World Code",
	description,
	url: `${SITE}/about`,
	inLanguage: "en-GB",
	about: { "@id": `${SITE}/#organization` },
	mainEntity: {
		...FOUNDER,
		description:
			"Software engineer and engineering manager with more than 20 years' experience, founder of New World Code Ltd.",
		knowsAbout: [
			"Software engineering",
			"Engineering management",
			"Swift",
			"Rust",
			"Go",
			"TypeScript",
			"Kotlin",
			"Serverless architecture",
			"Programming language design",
			"Open source",
			"Music",
		],
		nationality: { "@type": "Country", name: "United Kingdom" },
	},
};

const clients = [
	"Google",
	"Harrods",
	"Breitling",
	"Debenhams",
	"ABRSM",
	"Sleepio",
	"Škoda",
	"the National Army Museum",
];

const profiles = [
	{ name: "dav3.co", href: FOUNDER_LINKS.website },
	{ name: "GitHub", href: FOUNDER_LINKS.github },
	{ name: "LinkedIn", href: FOUNDER_LINKS.linkedin },
	{ name: "Mastodon", href: FOUNDER_LINKS.mastodon },
];

const principles = [
	{
		title: "Do one job well",
		body: "Each app solves one problem properly rather than many badly.",
	},
	{
		title: "No account needed",
		body: "You shouldn't have to sign up to use a metronome or open a file.",
	},
	{
		title: "Your work stays yours",
		body: "What you make stays on your device, in formats you can take elsewhere.",
	},
	{
		title: "Native, not wrapped",
		body: "Apps are built for the platform they run on, not as a web page in a frame.",
	},
];

export default function AboutPage() {
	return (
		<>
			<script {...jsonLdProps(pageJsonLd)} />
			<script {...jsonLdProps(breadcrumb("About", "/about"))} />

			<main className="mx-auto w-full max-w-[1440px] px-4 md:px-12">
				<section className="flex max-w-[900px] flex-col gap-5 py-10 md:gap-6 md:pb-20 md:pt-24">
					<p className="type-micro-sm md:type-micro text-muted">About</p>
					<h1 className="type-display-md md:type-display-lg text-pretty text-fg">
						New World Code is a one-person software company.
					</h1>
					<p className="type-title max-w-[680px] leading-[1.5] text-muted">
						{LEGAL_NAME} is an independent software company in the United
						Kingdom, founded and run by Dave Mackintosh. It makes{" "}
						{products.length} apps today, with more on the way.
					</p>
				</section>
			</main>

			{/* Dave */}
			<section id="dave-mackintosh" className="scroll-mt-4 border-t border-border">
				<div className="mx-auto grid w-full max-w-[1440px] gap-4 px-4 py-7 md:grid-cols-[220px_minmax(0,1fr)] md:gap-12 md:px-12 md:py-14">
					<h2 className="type-micro text-muted md:pt-2">Dave Mackintosh</h2>
					<div className="flex max-w-[760px] flex-col gap-4">
						<p className="type-display-md text-fg">Founder, engineer, musician.</p>
						<p className="type-body leading-[1.7] text-muted">
							I&apos;m Dave, and I&apos;ve been building software for more than
							20 years. I started as a full-stack developer and moved through
							creative technology, agency work and start-ups to leading
							engineering teams, building products for{" "}
							{clients.slice(0, -1).join(", ")} and {clients.at(-1)} along the way.
						</p>
						<p className="type-body leading-[1.7] text-muted">
							These days I work as a lead developer and engineering manager,
							mentoring teams and designing systems in Rust, Go and TypeScript on
							serverless infrastructure. I care about putting people first, and
							about explaining technical problems to people who aren&apos;t
							engineers.
						</p>
						<p className="type-body leading-[1.7] text-muted">
							I&apos;ve also been playing music for nearly 30 years, which is
							where{" "}
							<Link href="https://melodist.studio" className="inline-link">
								Melodist Studio
							</Link>{" "}
							came from. New World Code is where I build the tools I couldn&apos;t
							find: a tab editor for my phone, a metronome for my runs and a
							proper Markdown book editor for my Mac.
						</p>
						<p className="type-body leading-[1.7] text-muted">
							I&apos;ve worked in the open for a long time, too. From 2015 to 2021
							I ran{" "}
							<Link href="/open-source#multicolour" className="inline-link">
								Multicolour
							</Link>
							, a REST API generator for Node.js, and I&apos;m now designing{" "}
							<Link href="/open-source#elp" className="inline-link">
								Elp
							</Link>
							, a programming language for building native apps on every platform.
						</p>
						<ul className="flex flex-wrap gap-2 pt-1">
							{profiles.map((profile) => (
								<li key={profile.href}>
									<a
										href={profile.href}
										rel="me noopener"
										className="type-micro-sm inline-flex h-9 items-center rounded-[999px] border border-border px-3.5 text-fg transition-colors hover:border-border-strong hover:bg-surface"
									>
										{profile.name}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</section>

			{/* What */}
			<section className="border-t border-border bg-surface-alt">
				<div className="mx-auto grid w-full max-w-[1440px] gap-4 px-4 py-7 md:grid-cols-[220px_minmax(0,1fr)] md:gap-12 md:px-12 md:py-14">
					<h2 className="type-micro text-muted md:pt-2">What we make</h2>
					<ul className="flex max-w-[760px] flex-col gap-4">
						{products.map((p) => (
							<li key={p.slug} className="type-body leading-[1.7] text-muted">
								<Link href={productUrl(p)} className="inline-link">
									{p.name}
								</Link>
								: {p.tagline.charAt(0).toLowerCase()}
								{p.tagline.slice(1)}
							</li>
						))}
					</ul>
				</div>
			</section>

			{/* How */}
			<section className="border-t border-border">
				<div className="mx-auto grid w-full max-w-[1440px] gap-4 px-4 py-7 md:grid-cols-[220px_minmax(0,1fr)] md:gap-12 md:px-12 md:py-14">
					<h2 className="type-micro text-muted md:pt-2">How we build</h2>
					<ul className="grid max-w-[760px] gap-x-12 gap-y-6 md:grid-cols-2">
						{principles.map((item) => (
							<li key={item.title} className="flex flex-col gap-1.5">
								<h3 className="type-title text-fg">{item.title}</h3>
								<p className="type-body leading-[1.7] text-muted">{item.body}</p>
							</li>
						))}
					</ul>
				</div>
			</section>

			{/* Company */}
			<section className="border-t border-border bg-surface-alt">
				<div className="mx-auto grid w-full max-w-[1440px] gap-4 px-4 py-7 md:grid-cols-[220px_minmax(0,1fr)] md:gap-12 md:px-12 md:py-14">
					<h2 className="type-micro text-muted md:pt-2">Company</h2>
					<div className="flex max-w-[760px] flex-col gap-4">
						<p className="type-body leading-[1.7] text-muted">
							{LEGAL_NAME} is a private limited company in the United Kingdom.
							Melodist Studio is one of its trading names. Email{" "}
							<a href={`mailto:${EMAIL}`} className="inline-link">
								{EMAIL}
							</a>{" "}
							for anything about the company or its apps, or see the{" "}
							<Link href="/support" className="inline-link">
								support page
							</Link>
							.
						</p>
					</div>
				</div>
			</section>
		</>
	);
}
