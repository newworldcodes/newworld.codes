/**
 * The New World Code catalogue. Every page, the sitemap, llms.txt and the
 * structured data read from this list, so adding a product is one entry here.
 *
 * `appStoreId` is the numeric id from the App Store URL (…/id1234567890).
 * Leave it undefined until the listing is live: the site then shows the
 * product as coming soon instead of linking to a store page that 404s.
 */

export type Status = "live" | "review" | "development";

export type Platform = "iPhone" | "iPad" | "Apple Watch" | "Mac" | "Android";

export type Product = {
	slug: string;
	name: string;
	/** One line: what it is, for cards and meta descriptions. */
	tagline: string;
	/** Two or three sentences, quotable on their own. */
	summary: string;
	status: Status;
	platforms: Platform[];
	/** schema.org applicationCategory. */
	category: string;
	/** Free to download. Undefined when pricing isn't settled. */
	free?: boolean;
	appStoreId?: string;
	appStoreUrl?: string;
	googlePlayId?: string;
	/** The product's own website, when it has one. */
	website?: string;
	/** Minimum OS, shown on the product page. */
	requirements?: string;
	accent: string;
	features: { title: string; body: string }[];
	faqs: { q: string; a: string }[];
	/** What the app does with your data, in a sentence. Detail is in /privacy. */
	privacy: string;
	screenshot?: { src: string; alt: string };
	/** A product-specific policy that takes precedence over the company one. */
	privacyUrl?: string;
	termsUrl?: string;
	/** When the product page's content last changed (YYYY-MM-DD). */
	dateModified: string;
};

export const products: Product[] = [
	{
		slug: "melodist-studio",
		name: "Melodist Studio",
		tagline: "Music tools for phone and tablet that work offline and need no account.",
		summary:
			"Melodist Studio makes music apps for iPhone, iPad and Android. Its first, Melodist Composer, is a free tab editor that opens Guitar Pro, MIDI and MusicXML files and keeps every version of a song. Liza, an on-device music theory assistant, is in development.",
		status: "live",
		platforms: ["iPhone", "iPad", "Android"],
		category: "MultimediaApplication",
		free: true,
		appStoreId: "6757950909",
		appStoreUrl:
			"https://apps.apple.com/gb/app/melodist-composer-tab-editor/id6757950909",
		googlePlayId: "studio.melodist.composer",
		website: "https://melodist.studio",
		accent: "#3b82f6",
		features: [
			{ title: "Tab editor", body: "Melodist Composer: guitar, bass, ukulele and drum tabs." },
			{ title: "Every version kept", body: "Branching history, so nothing is overwritten." },
			{ title: "Guitar Pro, MIDI, MusicXML", body: "Opens the files you already have." },
			{ title: "Offline", body: "Songs stay on your device." },
		],
		faqs: [],
		privacy:
			"Songs stay on your device. The apps send crash reports and install attribution, and purchases go through RevenueCat, Apple and Google. Full detail is in Melodist Studio's own privacy policy.",
		privacyUrl: "https://melodist.studio/privacy",
		termsUrl: "https://melodist.studio/terms",
		dateModified: "2026-11-19",
	},
	{
		slug: "md-book",
		name: "MD Book",
		tagline: "A Markdown book reader and editor for the Mac.",
		summary:
			"MD Book opens a folder of Markdown files and treats it as a book, with chapters, a table of contents and previous and next navigation. You can read it, edit it in a live WYSIWYG editor or in plain source, and export a chapter or the whole book to HTML, PDF or EPUB.",
		status: "review",
		platforms: ["Mac"],
		category: "ProductivityApplication",
		requirements: "macOS 15.6 or later",
		accent: "#a855f7",
		features: [
			{
				title: "Books, not just files",
				body: "Open any folder of Markdown. If it has an mdBook SUMMARY.md, MD Book follows its chapters, parts and reading order; otherwise it uses the folder tree.",
			},
			{
				title: "Edit how you like",
				body: "A WYSIWYG editor that hides Markdown syntax until your cursor reaches it, a monospaced source editor, or the source beside a rendered preview.",
			},
			{
				title: "Tables that fit",
				body: "Wide tables wrap their cells to fit the window, and reformat into aligned source when you edit them.",
			},
			{
				title: "Export to HTML, PDF and EPUB",
				body: "Export one chapter or the whole book. HTML is a single self-contained file, and links between chapters become links within the book.",
			},
			{
				title: "Search the whole book",
				body: "Find in Project searches every file, ignoring case and accents, and jumps straight to the match.",
			},
			{
				title: "Your files, untouched",
				body: "Edits autosave to your own files, in the encoding they were written in. If another app changes a file, MD Book asks before overwriting anything.",
			},
		],
		faqs: [
			{
				q: "What is MD Book?",
				a: "MD Book is a Mac app for reading and editing books and documentation written in Markdown. It opens a folder, shows its chapters in a sidebar and lets you edit, search and export them.",
			},
			{
				q: "Does MD Book work with mdBook projects?",
				a: "Yes. It reads SUMMARY.md from the folder root, from book.toml's src setting or from src/, including numbered, nested and draft chapters and parts.",
			},
			{
				q: "Which Markdown features does it support?",
				a: "CommonMark and GitHub-flavoured Markdown, including tables, task lists, footnotes, inline and block maths, emoji shortcodes and syntax highlighting for around 20 languages.",
			},
			{
				q: "Can I export to PDF or EPUB?",
				a: "Yes. File, Export can save a chapter or a whole book as HTML, PDF or EPUB 3, and you can print from any chapter.",
			},
			{
				q: "Does MD Book upload my documents?",
				a: "No. MD Book has no account and no analytics. Your files stay where they are on your Mac.",
			},
		],
		privacy:
			"MD Book collects no data. Your files stay on your Mac. If a document links to an image on the web, the image is fetched directly from the site that hosts it.",
		dateModified: "2026-11-19",
	},
	{
		slug: "pacer",
		name: "Pacer",
		tagline: "A running cadence metronome for iPhone and Apple Watch.",
		summary:
			"Pacer keeps your running cadence steady with a click and a haptic tap at the steps per minute you choose. It plays over your music or podcasts without pausing them, and keeps time on your wrist with Apple Watch.",
		status: "development",
		platforms: ["iPhone", "Apple Watch"],
		category: "HealthApplication",
		requirements: "iOS 26.5 or later · watchOS 26.5 or later",
		accent: "#f97316",
		features: [
			{
				title: "Set your cadence",
				body: "Type a pace or slide anywhere from 40 to 240 steps per minute, or tap a preset for 160, 170 or 180.",
			},
			{
				title: "Plays over your music",
				body: "The click mixes with Apple Music, Spotify or a podcast instead of pausing it, and has its own volume.",
			},
			{
				title: "Feel the beat",
				body: "A haptic tap on every step, on your phone or your wrist, for when you'd rather not hear it.",
			},
			{
				title: "On your wrist",
				body: "The Apple Watch app keeps tapping with your wrist down, and stays in sync with your iPhone: change the pace on one and the other follows.",
			},
			{
				title: "Know what to aim for",
				body: "Rough targets for ground contact time and vertical oscillation at your chosen cadence, as a guide to your form.",
			},
		],
		faqs: [
			{
				q: "What is Pacer?",
				a: "Pacer is a metronome for runners. It clicks and taps at a steady number of steps per minute so you can hold or build your running cadence.",
			},
			{
				q: "Will Pacer stop my music?",
				a: "No. Pacer plays its click alongside Apple Music, Spotify, podcasts and other audio without pausing them.",
			},
			{
				q: "Does Pacer work on Apple Watch?",
				a: "Yes. The Apple Watch app taps on every beat, keeps running with your wrist down, and syncs pace, volume and start and stop with your iPhone.",
			},
			{
				q: "What cadence should I run at?",
				a: "Many runners aim for around 170 to 180 steps per minute, but the right number depends on you. Pacer's presets of 160, 170 and 180 are a starting point.",
			},
		],
		privacy:
			"Pacer collects no data. It needs no account, has no analytics, and your iPhone and Apple Watch talk to each other directly.",
		dateModified: "2026-11-19",
	},
];

export function product(slug: string) {
	const found = products.find((p) => p.slug === slug);
	if (!found) throw new Error(`Unknown product: ${slug}`);
	return found;
}

/** Products with their own page on this site, rather than a sister site. */
export const hostedHere = (p: Product) => !p.website;

export function productUrl(p: Product) {
	return p.website ?? `/${p.slug}`;
}

export function appStoreUrl(p: Product) {
	if (p.appStoreUrl) return p.appStoreUrl;
	if (!p.appStoreId) return undefined;
	return `https://apps.apple.com/app/id${p.appStoreId}`;
}

export function googlePlayUrl(p: Product) {
	return p.googlePlayId
		? `https://play.google.com/store/apps/details?id=${p.googlePlayId}`
		: undefined;
}

export const statusLabel: Record<Status, string> = {
	live: "Available now",
	review: "Coming soon",
	development: "In development",
};

export const platformList = (p: Product) => p.platforms.join(" · ");
