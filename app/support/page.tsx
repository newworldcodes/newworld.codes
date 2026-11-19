import type { Metadata } from "next";
import Link from "next/link";
import DocHeader from "../doc-header";
import { productUrl, products } from "../products";
import {
	anchorId,
	breadcrumb,
	EMAIL,
	faqPage,
	jsonLdProps,
	SITE,
} from "../structured-data";

const description =
	"Get help with Melodist Studio, Pacer and MD Book: contact New World Code, restore purchases, request refunds, cancel subscriptions and report a bug.";

export const metadata: Metadata = {
	title: "Support",
	description,
	alternates: { canonical: `${SITE}/support` },
};

const faqs = [
	{
		q: "How do I contact support?",
		a: `Email ${EMAIL}. Tell us which app and device you're using, and what happened. We usually reply within two working days.`,
	},
	{
		q: "How do I restore a purchase?",
		a: "Open the app on a device signed in to the same App Store or Google Play account you bought with, and choose Restore Purchases. Purchases can't move between Apple and Google.",
	},
	{
		q: "How do I get a refund?",
		a: "Refunds are handled by the store you bought from. For Apple, use reportaproblem.apple.com. For Google Play, use the refund option in your Google Play order history.",
	},
	{
		q: "How do I cancel a subscription?",
		a: "On iPhone or iPad, go to Settings, your name, Subscriptions. On a Mac, open the App Store, click your name, then Subscriptions. On Android, open Google Play, your profile, Payments & subscriptions. Deleting the app doesn't cancel a subscription.",
	},
	{
		q: "How do I report a bug?",
		a: `Email ${EMAIL} with the app name and version, your device and operating system version, and the steps that cause the problem. A screenshot or the file involved helps a lot.`,
	},
	{
		q: "Do I need an account?",
		a: "No. None of our apps need an account, which also means we can't look anything up for you. Your work is on your device.",
	},
];

export default function Support() {
	return (
		<>
			<script
				{...jsonLdProps({
					"@context": "https://schema.org",
					"@type": "ContactPage",
					name: "Support",
					description,
					url: `${SITE}/support`,
					about: { "@id": `${SITE}/#organization` },
				})}
			/>
			<script {...jsonLdProps(faqPage("/support", faqs))} />
			<script {...jsonLdProps(breadcrumb("Support", "/support"))} />

			<DocHeader eyebrow="New World Code · help" title="Support" />

			<div className="mx-auto w-full max-w-[1440px] px-4 pb-16 md:px-12">
				<div className="doc">
					<section>
						<h2 id="contact">Contact us</h2>
						<p>
							Email <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. Every message is read
							and answered by the person who built the app, usually within two
							working days.
						</p>
					</section>

					<section>
						<h2 id="apps">Help for each app</h2>
						<ul>
							{products.map((p) => (
								<li key={p.slug}>
									<strong>{p.name}</strong>:{" "}
									{p.website ? (
										<>
											see <a href={`${new URL(p.website).origin}/support`}>
												{new URL(p.website).hostname}/support
											</a>
										</>
									) : (
										<>
											see the <Link href={productUrl(p)}>{p.name} page</Link>, or email{" "}
											<a href={`mailto:${EMAIL}?subject=${encodeURIComponent(p.name)}`}>{EMAIL}</a>
										</>
									)}
								</li>
							))}
						</ul>
					</section>

					<section>
						<h2 id="questions">Common questions</h2>
						{faqs.map((faq) => (
							<div key={faq.q} className="mt-7 first:mt-0">
								<h3 id={anchorId(faq.q)}>{faq.q}</h3>
								<p>{faq.a}</p>
							</div>
						))}
					</section>

					<section>
						<h2 id="legal">Privacy and terms</h2>
						<p>
							Read how we handle your information in the{" "}
							<Link href="/privacy">privacy policy</Link>, and the{" "}
							<Link href="/terms">terms of use</Link> for each app.
						</p>
					</section>
				</div>
			</div>
		</>
	);
}
