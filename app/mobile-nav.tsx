"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { isCurrent, navLinks } from "./nav-links";

export default function MobileNav() {
	const [open, setOpen] = useState(false);
	const panelRef = useRef<HTMLDivElement>(null);
	const pathname = usePathname();

	useEffect(() => {
		if (!open) return;

		function onKeyDown(event: KeyboardEvent) {
			if (event.key === "Escape") setOpen(false);
		}

		function onPointerDown(event: PointerEvent) {
			if (!panelRef.current?.contains(event.target as Node)) setOpen(false);
		}

		document.addEventListener("keydown", onKeyDown);
		document.addEventListener("pointerdown", onPointerDown);
		return () => {
			document.removeEventListener("keydown", onKeyDown);
			document.removeEventListener("pointerdown", onPointerDown);
		};
	}, [open]);

	return (
		<div ref={panelRef} className="md:hidden">
			<button
				type="button"
				aria-expanded={open}
				aria-controls="mobile-nav-panel"
				onClick={() => setOpen((value) => !value)}
				className="type-micro-sm flex h-11 w-11 items-center justify-center rounded-sm border border-border text-fg transition-colors hover:border-border-strong"
			>
				{open ? "Close" : "Menu"}
			</button>

			<div
				id="mobile-nav-panel"
				hidden={!open}
				className="absolute left-0 right-0 top-14 z-20 border-b border-border bg-bg"
			>
				<nav aria-label="Main navigation">
					<ul className="flex flex-col">
						{navLinks.map((link) => (
							<li key={link.href} className="border-t border-border">
								<Link
									href={link.href}
									onClick={() => setOpen(false)}
									aria-current={isCurrent(pathname, link.href) ? "page" : undefined}
									className={`type-title flex h-14 items-center border-l-2 px-4 text-fg ${
										isCurrent(pathname, link.href) ? "border-accent" : "border-transparent"
									}`}
								>
									{link.label}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</div>
	);
}
