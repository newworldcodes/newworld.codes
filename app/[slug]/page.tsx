import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
	appStoreUrl,
	hostedHere,
	platformList,
	products,
	statusLabel,
} from "../products";
import SectionLabel from "../section-label";
import StoreBadges from "../store-badges";
import {
	EMAIL,
	SITE,
	anchorId,
	breadcrumb,
	faqPage,
	jsonLdProps,
	softwareApplication,
} from "../structured-data";

// Only products without a site of their own get a page here.
export const dynamicParams = false;

export function generateStaticParams() {
	return products.filter(hostedHere).map((p) => ({ slug: p.slug }));
}

function find(slug: string) {
	return products.filter(hostedHere).find((p) => p.slug === slug);
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>;
}): Promise<Metadata> {
	const p = find((await params).slug);
	if (!p) return {};
	const title = `${p.name}: ${p.tagline.replace(/\.$/, "")}`;
	const url = `${SITE}/${p.slug}`;
	return {
		title: { absolute: `${title} | New World Code` },
		description: p.summary,
		alternates: { canonical: url },
		openGraph: { title, description: p.summary, url, type: "website" },
		twitter: { card: "summary_large_image", title, description: p.summary },
		// Smart App Banner in Safari, once the listing is live.
		...(p.appStoreId ? { itunes: { appId: p.appStoreId } } : {}),
	};
}

export default async function ProductPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const p = find((await params).slug);
	if (!p) notFound();

	const appJsonLd = { "@context": "https://schema.org", ...softwareApplication(p) };
	const store = appStoreUrl(p);

	return (
		<div style={{ "--accent": p.accent } as React.CSSProperties}>
			<script {...jsonLdProps(appJsonLd)} />
			<script {...jsonLdProps(breadcrumb(p.name, `/${p.slug}`))} />
			{p.faqs.length > 0 && <script {...jsonLdProps(faqPage(`/${p.slug}`, p.faqs))} />}

			{/* Fold */}
			<main className="mx-auto w-full max-w-[1440px] px-4 md:px-12">
				<section className="grid items-end gap-8 py-10 md:gap-20 md:pb-20 md:pt-24 lg:grid-cols-[minmax(0,1fr)_360px]">
					<div className="flex flex-col gap-5 md:gap-7">
						<div className="flex items-center gap-2">
							<span
								className={`h-2 w-2 rounded-[999px] ${
									p.status === "live" ? "bg-accent" : "border-[1.5px] border-accent"
								}`}
								aria-hidden="true"
							/>
							<p className="type-micro-sm md:type-micro text-accent">
								{p.name} · {statusLabel[p.status]}
							</p>
						</div>
						<h1 className="type-display-md md:type-display-xl max-w-[900px] text-pretty text-fg">
							{p.tagline}
						</h1>
						<p className="type-title max-w-[720px] leading-[1.5] text-muted">{p.summary}</p>
						<StoreBadges product={p} />
					</div>
					<dl className="grid grid-cols-2 gap-x-6 gap-y-4 border-t border-border pt-5 lg:grid-cols-1 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
						<div className="flex flex-col gap-1">
							<dt className="type-micro-sm text-muted">Platforms</dt>
							<dd className="type-body text-fg">{platformList(p)}</dd>
						</div>
						{p.requirements && (
							<div className="flex flex-col gap-1">
								<dt className="type-micro-sm text-muted">Requires</dt>
								<dd className="type-body text-fg">{p.requirements}</dd>
							</div>
						)}
						<div className="flex flex-col gap-1">
							<dt className="type-micro-sm text-muted">Developer</dt>
							<dd className="type-body text-fg">
								<Link href="/about" className="inline-link">
									New World Code Ltd
								</Link>
							</dd>
						</div>
						<div className="flex flex-col gap-1">
							<dt className="type-micro-sm text-muted">Your data</dt>
							<dd className="type-body text-fg">
								{p.privacy.split(".")[0]}.{" "}
								<Link href={`/privacy#${p.slug}`} className="inline-link">
									Privacy
								</Link>
							</dd>
						</div>
					</dl>
				</section>
			</main>

			{/* Features */}
			<section className="border-t border-border bg-surface-alt">
				<div className="mx-auto w-full max-w-[1440px] px-4 py-7 md:px-12 md:py-14">
					<SectionLabel title="Features" count={p.features.length} className="mb-6 md:mb-10" />
					<ul className="grid gap-x-12 gap-y-8 md:grid-cols-2 xl:grid-cols-3">
						{p.features.map((f, i) => (
							<li key={f.title} className="flex flex-col gap-2 md:gap-3">
								<p className="type-micro-sm text-muted">
									{String(i + 1).padStart(2, "0")}
								</p>
								<h2 className="type-title text-fg">{f.title}</h2>
								<p className="type-body leading-[1.7] text-muted">{f.body}</p>
							</li>
						))}
					</ul>
				</div>
			</section>

			{/* Privacy */}
			<section className="border-t border-border">
				<div className="mx-auto grid w-full max-w-[1440px] gap-4 px-4 py-7 md:grid-cols-[220px_minmax(0,1fr)] md:gap-12 md:px-12 md:py-14">
					<h2 className="type-micro text-muted md:pt-2">Privacy</h2>
					<div className="flex max-w-[760px] flex-col gap-4">
						<p className="type-display-md text-fg">{p.privacy.split(".")[0]}.</p>
						<p className="type-body leading-[1.7] text-muted">
							{p.privacy.split(". ").slice(1).join(". ")}{" "}
							Read the{" "}
							<Link href={`/privacy#${p.slug}`} className="inline-link">
								privacy policy
							</Link>{" "}
							for the detail.
						</p>
					</div>
				</div>
			</section>

			{/* Questions */}
			{p.faqs.length > 0 && (
				<section className="border-t border-border">
					<div className="mx-auto w-full max-w-[1440px] px-4 py-7 md:px-12 md:py-14">
						<SectionLabel title="Questions" count={p.faqs.length} className="mb-6 md:mb-10" />
						<div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
							{p.faqs.map((faq) => (
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
			)}

			{/* Download */}
			<section className="border-t border-border">
				<div className="mx-auto flex w-full max-w-[1440px] flex-col gap-4 px-4 py-7 md:flex-row md:items-center md:justify-between md:gap-12 md:px-12 md:py-14">
					<div className="flex flex-col gap-3">
						<h2 className="type-display-md md:type-display text-fg">
							{store ? `Get ${p.name}.` : `${p.name} is ${statusLabel[p.status].toLowerCase()}.`}
						</h2>
						<p className="type-body leading-[1.7] text-muted">
							Questions or feedback? Email{" "}
							<a href={`mailto:${EMAIL}?subject=${encodeURIComponent(p.name)}`} className="inline-link">
								{EMAIL}
							</a>{" "}
							or visit{" "}
							<Link href="/support" className="inline-link">
								support
							</Link>
							.
						</p>
					</div>
					<StoreBadges product={p} />
				</div>
			</section>
		</div>
	);
}
