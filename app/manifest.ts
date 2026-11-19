import type { MetadataRoute } from "next";
import { appStoreUrl, googlePlayUrl, products } from "./products";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "New World Code",
		short_name: "New World Code",
		description: "Independent apps for iPhone, iPad, Apple Watch, Mac and Android.",
		start_url: "/",
		display: "browser",
		background_color: "#ffffff",
		theme_color: "#ffffff",
		icons: [
			{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
			{ src: "/apple-icon", sizes: "180x180", type: "image/png" },
		],
		related_applications: products.flatMap((p) => [
			...(appStoreUrl(p) ? [{ platform: "itunes", url: appStoreUrl(p)! }] : []),
			...(googlePlayUrl(p) ? [{ platform: "play", url: googlePlayUrl(p)!, id: p.googlePlayId }] : []),
		]),
	};
}
