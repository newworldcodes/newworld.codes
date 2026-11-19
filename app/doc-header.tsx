/** The title block shared by long-form pages (privacy, terms, support). */
export default function DocHeader({
	eyebrow,
	title,
	updated,
}: {
	eyebrow: string;
	title: string;
	/** Human-readable date, e.g. "19 November 2026". */
	updated?: string;
}) {
	return (
		<div className="border-b border-border">
			<div className="mx-auto w-full max-w-[1440px] px-4 py-10 md:px-12 md:py-14">
				<p className="type-micro mb-4 text-muted">{eyebrow}</p>
				<h1 className="type-display-md md:type-display-xl text-fg">{title}</h1>
				{updated && <p className="type-numeric mt-5 text-muted">Last updated: {updated}</p>}
			</div>
		</div>
	);
}
