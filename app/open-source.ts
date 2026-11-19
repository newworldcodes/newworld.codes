/**
 * Open-source work by New World Code and its founder. Read by the homepage
 * section, /open-source, llms.txt and the structured data.
 *
 * Facts here are checked against the npm registry (Multicolour) and the
 * repository (Elp). Keep them that way: answer engines quote this page.
 */

export type OpenSourceProject = {
	slug: string;
	name: string;
	/** e.g. "2015–2021" or "2024–present". */
	years: string;
	status: "Retired" | "Design phase" | "Active";
	tagline: string;
	summary: string;
	/** Longer account for /open-source, one paragraph per entry. */
	story: string[];
	facts: { label: string; value: string }[];
	/** The project's own website, when it has one. Listed first everywhere. */
	website?: string;
	links: { label: string; href: string }[];
	language: string;
	license: string;
	accent: string;
};

export const openSource: OpenSourceProject[] = [
	{
		slug: "elp",
		name: "Elp",
		years: "2024–present",
		status: "Design phase",
		tagline: "A programming language for building native apps on every platform from one codebase.",
		summary:
			"Elp is a programming language in design, inspired by SwiftUI and Jetpack Compose. It aims to compile one codebase to native binaries for iOS, Android, Mac, Windows and Linux, and to HTML, CSS and JavaScript for the web, with no web views and no corporate owner.",
		story: [
			"Elp (short for ellipsis, and English slang for “help”) comes from years of building the same app several times over: once per platform, or once in a cross-platform framework that never quite feels native. The goal is a single language that compiles to a real native binary for each target, so a declarative UI written once runs as a native app on iPhone, Android, Mac, Windows and Linux, and as plain HTML, CSS and JavaScript on the web.",
			"The language is designed to be memory safe and type safe, to make testing and accessibility the default rather than an afterthought, and to ship with its own tooling for packages, testing with coverage, profiling and supply-chain management.",
			"It is deliberately in a design phase. An early lexer, parser and syntax tree were written in Rust and then removed, because a compiler built against a design that is still moving is rework rather than progress. The repository now holds the design record: specifications for the memory model, aliasing, generics, interfaces, macros, reactivity, error handling and more, each tested against a corpus of probe programs, from an HTTP server and a SQLite binding to a Vulkan triangle and a real-time audio playhead.",
			"Elp is licensed under the GPL and is intended to stay community-owned. Its stated goal is to “actively, and consciously, design away mechanisms designed to screw anyone else over.”",
		],
		facts: [
			{ label: "Targets", value: "iOS, Android, macOS, Windows, Linux, web" },
			{ label: "Inspired by", value: "SwiftUI, Jetpack Compose" },
			{ label: "Design record", value: "18 specifications, 19 example programs" },
		],
		website: "https://elplang.org",
		links: [
			{ label: "elplang.org", href: "https://elplang.org" },
			{ label: "github.com/elp-lang/elp", href: "https://github.com/elp-lang/elp" },
			{ label: "Goals", href: "https://github.com/elp-lang/elp/blob/main/GOALS.md" },
			{ label: "Design docs", href: "https://github.com/elp-lang/elp/tree/main/docs" },
		],
		language: "Elp (design), Rust (prototype)",
		license: "GPL-3.0",
		accent: "#10b981",
	},
	{
		slug: "multicolour",
		name: "Multicolour",
		years: "2015–2021",
		status: "Retired",
		tagline: "A REST API and ORM generator for Node.js: describe your data in JSON, get an API.",
		summary:
			"Multicolour generated a complete REST API from JSON model definitions, on almost any database. Started in 2015 and run for six years, it grew from one package into a plugin ecosystem of servers, authentication, SDK generators and storage adapters.",
		story: [
			"Multicolour began in 2015 with a simple idea: most APIs are the same create, read, update and delete operations over different data, so you should be able to describe your data and get the API for free. Its tagline was “Generate your REST API with JSON and use almost any DB tech.”",
			"You installed it globally, ran multicolour init, answered a few questions, and described your models (blueprints) in JSON. Multicolour validated them with Joi, stored them through the Waterline ORM, whose adapters let the same API run on Postgres, MySQL, MongoDB or in memory, and generated REST endpoints for every model.",
			"The core stayed small and everything else was a plugin. Over its life the project grew a family of packages: a Hapi server generator, JWT and OAuth authentication, JSON API responses, a JavaScript SDK generated from your models, seed data, S3 storage for uploads, a live REPL into a running server and a Polymer front-end template. Other developers contributed plugins too.",
			"Dave ran Multicolour for six years, publishing more than 90 releases of the core package, and rebuilt it in TypeScript before retiring it. It was published and sponsored by New World Code, which makes it the company's longest-running open-source project.",
		],
		facts: [
			{ label: "First release", value: "August 2015 (v0.0.1)" },
			{ label: "Releases", value: "90+ of the core, 0.6.45 the last" },
			{ label: "Plugins", value: "10 published packages" },
		],
		links: [
			{ label: "multicolour on npm", href: "https://www.npmjs.com/package/multicolour" },
			{ label: "multicolour-server-hapi", href: "https://www.npmjs.com/package/multicolour-server-hapi" },
		],
		language: "JavaScript, later TypeScript",
		license: "MIT",
		accent: "#ec4899",
	},
];
