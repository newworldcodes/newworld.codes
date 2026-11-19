/**
 * A small eyebrow heading for a section, with an optional count beside it.
 * The count sits outside the heading so the document outline stays clean.
 */
export default function SectionLabel({
	title,
	count,
	className = "",
}: {
	title: string;
	count?: number;
	className?: string;
}) {
	return (
		<div className={`flex items-baseline gap-1.5 ${className}`}>
			<h2 className="type-micro text-muted">{title}</h2>
			{count !== undefined && (
				<span className="type-micro text-muted">· {count}</span>
			)}
		</div>
	);
}
