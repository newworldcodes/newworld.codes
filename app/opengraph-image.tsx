import { ogImage } from "./og";

export const dynamic = "force-static";
export const alt = "New World Code: small, focused apps for the devices you already carry";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
	return ogImage({
		eyebrow: "New World Code Ltd",
		title: "Small, focused apps for the devices you already carry.",
	});
}
