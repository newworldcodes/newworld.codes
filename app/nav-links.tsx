"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { productUrl, products } from "./products";

export const navLinks = [
	...products.map((p) => ({ href: productUrl(p), label: p.name })),
	{ href: "/about", label: "About" },
	{ href: "/support", label: "Support" },
];

/** True on the link's own page and anything below it. */
export function isCurrent(pathname: string, href: string) {
	if (href.includes("#")) return false;
	return pathname === href || pathname.startsWith(`${href}/`);
}

/**
 * Header links at full contrast, underlined like the site's inline links.
 * The current page's underline is the accent colour.
 */
export default function DesktopNav() {
	const pathname = usePathname();

	return (
		<nav aria-label="Main navigation" className="hidden items-center gap-6 md:flex">
			{navLinks.map((link) => {
				const current = isCurrent(pathname, link.href);
				return (
					<Link
						key={link.href}
						href={link.href}
						aria-current={current ? "page" : undefined}
						className={`type-label whitespace-nowrap text-fg underline decoration-[1.5px] underline-offset-[6px] transition-colors hover:decoration-accent ${
							current ? "decoration-accent" : "decoration-border-strong"
						}`}
					>
						{link.label}
					</Link>
				);
			})}
		</nav>
	);
}
