import { appStoreUrl, googlePlayUrl, statusLabel, type Product } from "./products";

/**
 * Store badges for a product, or a plain "coming soon" note when there is no
 * live listing yet. Mac apps get a text button until a Mac App Store badge
 * is added to /public.
 */
export default function StoreBadges({ product: p }: { product: Product }) {
	const apple = appStoreUrl(p);
	const google = googlePlayUrl(p);
	const macOnly = p.platforms.every((x) => x === "Mac");

	if (!apple && !google) {
		return (
			<p className="type-micro-sm inline-flex h-12 items-center self-start rounded-md border border-dashed border-border-strong px-4 text-muted">
				{p.status === "review" ? "Coming soon to the App Store" : statusLabel[p.status]}
			</p>
		);
	}

	return (
		<div className="flex flex-col items-start gap-4 md:flex-row md:items-center">
			{apple &&
				(macOnly ? (
					<a
						href={apple}
						target="_blank"
						rel="noopener noreferrer"
						className="type-label flex h-12 items-center rounded-md bg-fg px-5 text-bg transition-opacity hover:opacity-85"
					>
						Download {p.name} on the Mac App Store
					</a>
				) : (
					<a
						href={apple}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex transition-opacity hover:opacity-80"
					>
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img
							src="/app-store.png"
							alt={`Download ${p.name} on the App Store`}
							className="h-12 w-auto"
						/>
					</a>
				))}
			{google && (
				<a
					href={google}
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex transition-opacity hover:opacity-80"
				>
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img
						src="/badge-google-play.png"
						alt={`Get ${p.name} on Google Play`}
						className="h-12 w-auto"
					/>
				</a>
			)}
		</div>
	);
}
