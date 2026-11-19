import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Reuses the favicon artwork so the two never drift.
export default async function AppleIcon() {
	const { readFile } = await import("node:fs/promises");
	const svg = await readFile(new URL("./icon.svg", import.meta.url), "utf8");
	const src = `data:image/svg+xml;base64,${Buffer.from(svg.replace('rx="22"', 'rx="0"')).toString("base64")}`;
	return new ImageResponse(
		<img src={src} width={180} height={180} alt="" />,
		size,
	);
}
