import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import Logo from "./logo";
import MobileNav from "./mobile-nav";
import DesktopNav from "./nav-links";
import { productUrl, products } from "./products";
import {
	COMPANY,
	EMAIL,
	FOUNDER,
	FOUNDER_LINKS,
	LEGAL_NAME,
	SITE,
	jsonLdProps,
} from "./structured-data";
import ThemeToggle from "./theme-toggle";
import "./globals.css";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
	variable: "--font-jetbrains-mono",
	subsets: ["latin"],
});

// Applies a stored theme choice before first paint. Anything other than an
// explicit choice falls through to the prefers-color-scheme media query.
const themeScript = `try{var t=localStorage.getItem("theme");if(t==="dark"||t==="light"){document.documentElement.dataset.theme=t}}catch(e){}`;

const description =
	"New World Code Ltd is an independent UK software company making apps for iPhone, iPad, Apple Watch, Mac and Android, including Melodist Studio, Pacer and MD Book.";

export const metadata: Metadata = {
	title: {
		default: "New World Code: Independent apps for Apple platforms and Android",
		template: "%s | New World Code",
	},
	description,
	metadataBase: new URL(SITE),
	applicationName: COMPANY,
	openGraph: {
		type: "website",
		locale: "en_GB",
		url: SITE,
		siteName: COMPANY,
		title: "New World Code: Independent apps for Apple platforms and Android",
		description,
	},
	twitter: {
		card: "summary_large_image",
		title: "New World Code",
		description,
	},
	alternates: { canonical: SITE },
	manifest: "/manifest.webmanifest",
	authors: [{ name: LEGAL_NAME, url: SITE }],
	creator: LEGAL_NAME,
	publisher: LEGAL_NAME,
	robots: { index: true, follow: true },
};

// Matches the painted ground in each theme, so the browser chrome agrees.
export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "#ffffff" },
		{ media: "(prefers-color-scheme: dark)", color: "#0a0a0b" },
	],
};

const organizationJsonLd = {
	"@context": "https://schema.org",
	"@type": "Organization",
	"@id": `${SITE}/#organization`,
	name: COMPANY,
	legalName: LEGAL_NAME,
	url: SITE,
	logo: `${SITE}/icon.svg`,
	email: EMAIL,
	description,
	founder: FOUNDER,
	address: { "@type": "PostalAddress", addressCountry: "GB" },
	contactPoint: [
		{
			"@type": "ContactPoint",
			contactType: "customer support",
			email: EMAIL,
			url: `${SITE}/support`,
			availableLanguage: "English",
		},
	],
	brand: products.map((p) => ({ "@type": "Brand", name: p.name, url: p.website ?? `${SITE}/${p.slug}` })),
	sameAs: [FOUNDER_LINKS.companyGithub],
};

const websiteJsonLd = {
	"@context": "https://schema.org",
	"@type": "WebSite",
	"@id": `${SITE}/#website`,
	name: COMPANY,
	url: SITE,
	inLanguage: "en-GB",
	publisher: { "@id": `${SITE}/#organization` },
};

const footerLink = "type-body text-fg transition-colors hover:text-accent";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en-GB" suppressHydrationWarning>
			<body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
				<script dangerouslySetInnerHTML={{ __html: themeScript }} />
				<script {...jsonLdProps(organizationJsonLd)} />
				<script {...jsonLdProps(websiteJsonLd)} />
				<a href="#main-content" className="skip-to-content">
					Skip to content
				</a>
				<div className="flex min-h-screen flex-col overflow-x-hidden bg-bg font-sans">
					<header className="relative border-b border-border bg-bg">
						<div className="mx-auto flex h-14 w-full max-w-[1440px] items-center justify-between px-4 md:h-18 md:px-12">
							<div className="flex items-center gap-8">
								<Link href="/" className="flex items-center gap-2.5 text-fg">
									<Logo size={28} />
									<span className="whitespace-nowrap text-[17px] font-extrabold leading-none tracking-[-0.6px] md:text-[19px]">
										New World Code
									</span>
								</Link>
								<DesktopNav />
							</div>

							<div className="flex items-center gap-2 md:gap-4">
								<ThemeToggle />
								<a
									href={`mailto:${EMAIL}`}
									className="type-label hidden whitespace-nowrap rounded-md bg-accent px-3.5 py-3 text-accent-fg shadow-[var(--shadow-accent)] transition hover:brightness-105 active:brightness-95 lg:inline-block"
								>
									Get in touch
								</a>
								<MobileNav />
							</div>
						</div>
					</header>

					<div id="main-content" className="flex-1">
						{children}
					</div>

					<footer aria-label="Site footer" className="border-t border-border">
						<div className="mx-auto grid w-full max-w-[1440px] gap-10 px-4 py-10 md:grid-cols-[minmax(0,1fr)_180px_160px_160px_160px] md:gap-8 md:px-12 md:py-12">
							<div className="flex flex-col gap-3">
								<div className="flex items-center gap-2.5 text-fg">
									<Logo size={28} />
									<span className="whitespace-nowrap text-[17px] font-extrabold leading-none tracking-[-0.6px] md:text-[19px]">
										New World Code
									</span>
								</div>
								<p className="type-micro-sm text-muted">
									{LEGAL_NAME} · United Kingdom
								</p>
							</div>

							<div className="flex flex-col gap-3">
								<h2 className="type-micro-sm text-muted">Products</h2>
								{products.map((p) => (
									<Link key={p.slug} href={productUrl(p)} className={footerLink}>
										{p.name}
									</Link>
								))}
							</div>

							<div className="flex flex-col gap-3">
								<h2 className="type-micro-sm text-muted">Company</h2>
								<Link href="/about" className={footerLink}>
									About
								</Link>
								<Link href="/open-source" className={footerLink}>
									Open source
								</Link>
								<Link href="/support" className={footerLink}>
									Support
								</Link>
							</div>

							<div className="flex flex-col gap-3">
								<h2 className="type-micro-sm text-muted">Legal</h2>
								<Link href="/privacy" className={footerLink}>
									Privacy policy
								</Link>
								<Link href="/terms" className={footerLink}>
									Terms of use
								</Link>
							</div>

							<div className="flex flex-col gap-3">
								<h2 className="type-micro-sm text-muted">Contact</h2>
								<a href={`mailto:${EMAIL}`} className={footerLink}>
									Email us
								</a>
								<a href={FOUNDER_LINKS.companyGithub} rel="me noopener" className={footerLink}>
									GitHub
								</a>
								<a href={FOUNDER_LINKS.website} className={footerLink}>
									dav3.co
								</a>
							</div>
						</div>
					</footer>
				</div>
			</body>
		</html>
	);
}
