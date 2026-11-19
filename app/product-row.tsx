import Image from "next/image";
import Link from "next/link";
import { platformList, productUrl, statusLabel, type Product } from "./products";

/**
 * One product in the catalogue: name and status, what it is, and a picture
 * or a tinted placeholder in the product's accent colour.
 */
export default function ProductRow({ product: p }: { product: Product }) {
	const href = productUrl(p);
	const external = href.startsWith("http");
	const live = p.status === "live";

	return (
		<article
			id={p.slug}
			style={{ "--accent": p.accent } as React.CSSProperties}
			className="grid scroll-mt-6 gap-4 border-t border-border py-7 md:grid-cols-[220px_minmax(0,1fr)] md:items-start md:gap-12 md:py-11 xl:grid-cols-[220px_minmax(0,1fr)_440px]"
		>
			<div className="flex items-baseline justify-between md:flex-col md:items-start md:gap-2.5">
				<h3 className="type-display text-fg">{p.name}</h3>
				<div className="flex items-center gap-2">
					<span
						className={`hidden h-2 w-2 rounded-[999px] md:block ${
							live ? "bg-accent" : "border-[1.5px] border-accent"
						}`}
						aria-hidden="true"
					/>
					<p className="type-micro-sm text-accent">
						{statusLabel[p.status]}
						{live && p.free ? " · free" : ""}
					</p>
				</div>
			</div>

			<div className="flex flex-col gap-4 md:gap-5">
				<p className="type-title leading-[1.45] text-fg">{p.tagline}</p>
				<p className="type-body leading-[1.7] text-muted">{p.summary}</p>
				<ul className="hidden flex-wrap gap-2 md:flex">
					{p.features.map((f) => (
						<li
							key={f.title}
							className="type-micro-sm rounded-[999px] border border-border px-3 py-1.5 text-muted"
						>
							{f.title}
						</li>
					))}
				</ul>
				<div className="flex flex-wrap items-center gap-x-6 gap-y-2 md:pt-1">
					<Link
						href={href}
						className="type-label flex h-11 items-center border-b-[1.5px] border-accent pb-0.5 text-fg md:h-auto"
					>
						{external ? `${p.name} on ${new URL(href).hostname} →` : `${p.name} →`}
					</Link>
					<p className="type-numeric text-slate">{platformList(p)}</p>
				</div>
			</div>

			{p.screenshot ? (
				<div className="relative h-[260px] overflow-hidden rounded-md border border-border bg-surface-alt md:col-start-2 md:h-[300px] xl:col-start-auto">
					<Image
						src={p.screenshot.src}
						alt={p.screenshot.alt}
						fill
						sizes="(min-width: 1280px) 440px, (min-width: 768px) 60vw, 100vw"
						className="object-cover object-top"
					/>
				</div>
			) : (
				<div
					className="hidden h-[300px] flex-col justify-between rounded-md border border-border p-5 xl:flex"
					style={{
						background:
							"linear-gradient(135deg, color-mix(in srgb, var(--accent) 16%, var(--surface-alt)), var(--surface-alt) 70%)",
					}}
				>
					<p className="text-[44px] font-extrabold leading-none tracking-[-2px] text-fg opacity-90">
						{p.name}
					</p>
					<p className="type-micro-sm text-muted">{platformList(p)}</p>
				</div>
			)}
		</article>
	);
}
