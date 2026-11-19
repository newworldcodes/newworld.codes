"use client";

import { useSyncExternalStore } from "react";

type Theme = "light" | "dark" | "system";

const options: { value: Theme; short: string; label: string }[] = [
	{ value: "light", short: "L", label: "Light" },
	{ value: "dark", short: "D", label: "Dark" },
	{ value: "system", short: "S", label: "System" },
];

// The stored choice is external state, so the toggle subscribes to it rather
// than mirroring it into React state on mount.
let listeners: (() => void)[] = [];

function subscribe(onChange: () => void) {
	listeners.push(onChange);
	window.addEventListener("storage", onChange);
	return () => {
		listeners = listeners.filter((listener) => listener !== onChange);
		window.removeEventListener("storage", onChange);
	};
}

function getSnapshot(): Theme {
	try {
		const stored = localStorage.getItem("theme");
		if (stored === "light" || stored === "dark") return stored;
	} catch {
		// Private browsing or blocked storage — fall back to following the system.
	}
	return "system";
}

// Server and first hydration render: nothing is stored yet as far as we know.
function getServerSnapshot(): Theme {
	return "system";
}

function apply(theme: Theme) {
	const root = document.documentElement;
	if (theme === "system") {
		delete root.dataset.theme;
	} else {
		root.dataset.theme = theme;
	}

	try {
		if (theme === "system") {
			localStorage.removeItem("theme");
		} else {
			localStorage.setItem("theme", theme);
		}
	} catch {
		// The choice applies for this page view but won't persist.
	}

	for (const listener of listeners) listener();
}

export default function ThemeToggle() {
	const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

	return (
		<div
			role="group"
			aria-label="Colour theme"
			className="flex h-11 overflow-hidden rounded-[999px] border border-border bg-surface-alt md:h-8"
		>
			{options.map((option) => {
				const active = theme === option.value;
				return (
					<button
						key={option.value}
						type="button"
						aria-pressed={active}
						title={option.label}
						onClick={() => apply(option.value)}
						className={`type-micro-sm flex w-11 items-center justify-center transition-colors md:w-9 ${
							active ? "bg-fg text-bg" : "text-muted hover:text-fg"
						}`}
					>
						<span aria-hidden="true">{option.short}</span>
						<span className="sr-only">{option.label}</span>
					</button>
				);
			})}
		</div>
	);
}
