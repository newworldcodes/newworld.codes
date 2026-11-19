import { ImageResponse } from "next/og";

/** Shared renderer for Open Graph images: title, subtitle, wordmark. */
export function ogImage({
	eyebrow,
	title,
	accent = "#fafafa",
}: {
	eyebrow: string;
	title: string;
	accent?: string;
}) {
	return new ImageResponse(
		(
			<div
				style={{
					width: "100%",
					height: "100%",
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					background: "#0a0a0b",
					color: "#fafafa",
					padding: "72px 80px",
					fontFamily: "sans-serif",
				}}
			>
				<div style={{ display: "flex", alignItems: "center", gap: 18 }}>
					<div style={{ width: 16, height: 16, borderRadius: 999, background: accent }} />
					<div style={{ fontSize: 26, letterSpacing: 4, textTransform: "uppercase", color: "#a1a1aa" }}>
						{eyebrow}
					</div>
				</div>
				<div style={{ fontSize: 76, fontWeight: 800, letterSpacing: -3, lineHeight: 1.05, maxWidth: 1000 }}>
					{title}
				</div>
				<div style={{ fontSize: 30, fontWeight: 700, color: "#a1a1aa" }}>newworld.codes</div>
			</div>
		),
		{ width: 1200, height: 630 },
	);
}
