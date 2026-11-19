import { hostedHere, platformList, products } from "../products";
import { ogImage } from "../og";

export const dynamic = "force-static";
export const dynamicParams = false;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
	return products.filter(hostedHere).map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const p = products.find((x) => x.slug === slug)!;
	return ogImage({ eyebrow: `${p.name} · ${platformList(p)}`, title: p.tagline, accent: p.accent });
}
