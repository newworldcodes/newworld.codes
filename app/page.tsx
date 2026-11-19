import Link from "next/link";
import ProductRow from "./product-row";
import { products } from "./products";
import SectionLabel from "./section-label";
import {
	EMAIL,
	anchorId,
	faqPage,
	jsonLdProps,
	softwareApplication,
} from "./structured-data";

// The catalogue, stated plainly for search and answer engines.
const catalogueJsonLd = {
	"@context": "https://schema.org",
	"@type": "ItemList",
	name: "Apps by New World Code",
	itemListOrder: "https://schema.org/ItemListUnordered",
	numberOfItems: products.length,
	itemListElement: products.map((p, i) => ({
		"@type": "ListItem",
		position: i + 1,
		item: softwareApplication(p),
	})),
};

const principles = [
	{
		label: "01 · private",
		title: "No accounts, no tracking",
		body: "Our apps work without signing up, and what you make stays on your device. None of them use analytics to watch how you use them.",
	},
	{
		label: "02 · native",
		title: "Built for each platform",
		body: "Each app is written natively for the device it runs on, so it looks, feels and performs like it belongs there.",
	},
	{
		label: "03 · independent",
		title: "Made and supported by one person",
		body: "New World Code is small on purpose. The person who reads your support email is the person who wrote the app.",
	},
];

// Answers are kept short enough to be quoted directly.
const faqs = [
	{
		q: "What is New World Code?",
		a: "New World Code Ltd is an independent software company in the United Kingdom. It makes apps for iPhone, iPad, Apple Watch, Mac and Android, including Melodist Studio, Pacer and MD Book.",
	},
	{
		q: "Who runs New World Code?",
		a: "New World Code was founded by Dave Mackintosh, a software engineer and engineering manager with more than 20 years' experience building software.",
	},
	{
		q: "What apps does New World Code make?",
		a: `${products.map((p) => `${p.name}, ${p.tagline.charAt(0).toLowerCase()}${p.tagline.slice(1, -1)}`).join("; ")}.`,
	},
	{
		q: "Do New World Code apps collect my data?",
		a: "As little as possible. Pacer and MD Book collect no data at all. Melodist Studio's apps keep your songs on your device and only send crash reports, install attribution and purchase records. The privacy policy has the detail.",
	},
	{
		q: "How do I get support for an app?",
		a: `Email ${EMAIL}. The support page has answers about purchases, refunds and restoring purchases.`,
	},
	{
		q: "Is Melodist Studio part of New World Code?",
		a: "Yes. Melodist Studio is a trading name of New World Code Ltd, with its own website at melodist.studio.",
	},
];

export default function Home() {
	const live = products.filter((p) => p.status === "live").length;
	const platforms = [...new Set(products.flatMap((p) => p.platforms))];

	return (
		<>
			<script {...jsonLdProps(catalogueJsonLd)} />
			<script {...jsonLdProps(faqPage("", faqs))} />

			{/* Fold */}
			<main className="mx-auto w-full max-w-[1440px] px-4 md:px-12">
				<section className="grid items-end gap-8 py-10 md:gap-20 md:pb-24 md:pt-30 lg:grid-cols-[minmax(0,1fr)_400px]">
					<div className="flex flex-col gap-5 md:gap-8">
						<p className="type-micro-sm md:type-micro text-muted">New World Code Ltd</p>
						<h1 className="type-display-md md:type-display-xl max-w-[900px] text-pretty text-fg">
							Small, focused apps for the devices you already carry.
						</h1>
						<p className="type-title max-w-[720px] leading-[1.5] text-muted">
							New World Code is an independent software company in the United
							Kingdom. We make {products.map((p) => p.name).join(", ").replace(/, ([^,]*)$/, " and $1")}:
							apps for iPhone, iPad, Apple Watch, Mac and Android that do one job
							well, without accounts or tracking.
						</p>
						<div className="flex flex-col gap-2.5 md:flex-row md:items-center md:gap-3">
							<Link
								href="#products"
								className="type-label flex h-12 items-center justify-center rounded-md bg-accent px-3.5 text-accent-fg shadow-[var(--shadow-accent)] transition hover:brightness-105 active:brightness-95 md:h-auto md:py-3"
							>
								See our apps
							</Link>
							<Link
								href="/about"
								className="type-label flex h-12 items-center justify-center rounded-md border border-border px-3.5 text-fg transition-colors hover:bg-surface md:h-auto md:py-3"
							>
								Who we are
							</Link>
						</div>
					</div>
					<p className="type-body hidden leading-[1.7] text-muted md:block">
						Founded by Dave Mackintosh after more than 20 years building software
						for companies including Google, Harrods and Sleepio.{" "}
						<Link href="/about" className="inline-link">
							About Dave
						</Link>
					</p>
				</section>
			</main>

			{/* Products */}
			<section id="products" className="scroll-mt-4 border-t border-border">
				<div className="mx-auto w-full max-w-[1440px] px-4 md:px-12">
					<div className="flex items-center justify-between py-3.5 md:py-4.5">
						<SectionLabel title="Products" count={products.length} />
						<p className="type-micro hidden text-slate md:block">{platforms.join(" · ")}</p>
					</div>
					{products.map((p) => (
						<ProductRow key={p.slug} product={p} />
					))}
				</div>
			</section>

			{/* Principles */}
			<section className="border-t border-border bg-surface-alt">
				<div className="mx-auto grid w-full max-w-[1440px] gap-6 px-4 py-7 md:grid-cols-3 md:gap-12 md:px-12 md:py-14">
					{principles.map((principle) => (
						<div key={principle.label} className="flex flex-col gap-2 md:gap-3">
							<p className="type-micro-sm text-muted">{principle.label}</p>
							<h2 className="type-title-sm md:type-title text-fg">{principle.title}</h2>
							<p className="type-body leading-[1.7] text-muted">{principle.body}</p>
						</div>
					))}
				</div>
			</section>

			{/* Questions */}
			<section className="border-t border-border">
				<div className="mx-auto w-full max-w-[1440px] px-4 py-7 md:px-12 md:py-14">
					<SectionLabel title="Questions" count={faqs.length} className="mb-6 md:mb-10" />
					<div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
						{faqs.map((faq) => (
							<div key={faq.q} className="flex flex-col gap-2">
								<h3 id={anchorId(faq.q)} className="type-title scroll-mt-6 text-fg">
									{faq.q}
								</h3>
								<p className="type-body max-w-[520px] leading-[1.7] text-muted">{faq.a}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Contact */}
			<section className="border-t border-border">
				<div className="mx-auto flex w-full max-w-[1440px] flex-col gap-3.5 px-4 py-7 md:flex-row md:items-center md:justify-between md:gap-12 md:px-12 md:py-14">
					<div className="flex flex-col gap-3">
						<h2 className="type-display-md md:type-display text-fg">
							{live > 0 ? "Questions, ideas or a bug to report?" : "Get in touch"}
						</h2>
						<p className="type-body leading-[1.7] text-muted">
							Every email is read and answered by the person who built the app.
						</p>
					</div>
					<a
						href={`mailto:${EMAIL}`}
						className="type-label flex h-12 items-center justify-center self-start rounded-md border border-border px-5 text-fg transition-colors hover:bg-surface md:self-auto"
					>
						{EMAIL}
					</a>
				</div>
			</section>
		</>
	);
}
