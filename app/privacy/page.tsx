import type { Metadata } from "next";
import Link from "next/link";
import DocHeader from "../doc-header";
import { breadcrumb, documentPage, EMAIL, jsonLdProps, LEGAL_NAME, SITE } from "../structured-data";

const UPDATED = "2026-11-19";
const UPDATED_LABEL = "19 November 2026";

const description =
	"How New World Code Ltd handles your information across its apps and this website. Pacer and MD Book collect no data; Melodist Studio's apps keep your songs on your device. No app uses analytics or sells data.";

export const metadata: Metadata = {
	title: "Privacy Policy",
	description,
	alternates: { canonical: `${SITE}/privacy` },
};

export default function PrivacyPolicy() {
	return (
		<>
			<script
				{...jsonLdProps(
					documentPage({ name: "Privacy Policy", description, path: "/privacy", dateModified: UPDATED }),
				)}
			/>
			<script {...jsonLdProps(breadcrumb("Privacy Policy", "/privacy"))} />

			<DocHeader eyebrow="New World Code · legal" title="Privacy policy" updated={UPDATED_LABEL} />

			<div className="mx-auto w-full max-w-[1440px] px-4 pb-16 md:px-12">
				<div className="doc">
					<section>
						<h2 id="introduction">Introduction</h2>
						<p>
							{LEGAL_NAME} (&quot;New World Code&quot;, &quot;we&quot;,
							&quot;our&quot; or &quot;us&quot;) is a company in the United Kingdom
							that makes software. This policy explains how we handle information
							when you use our apps (each an &quot;App&quot;) and this website,
							newworld.codes.
						</p>
						<p>
							We are the data controller for the information described here. Our
							apps are built to work without an account and to keep what you make
							on your own device, so for most of them there is very little to
							describe.
						</p>
						<p>
							Some Apps are published under a trading name with its own privacy
							policy. Where that is the case, the App&apos;s own policy applies and
							takes precedence over this one. This currently covers{" "}
							<strong>Melodist Studio</strong> (Melodist Composer and Liza), whose
							policy is at{" "}
							<a href="https://melodist.studio/privacy">melodist.studio/privacy</a>.
						</p>
					</section>

					<section>
						<h2 id="summary">Summary</h2>
						<ul>
							<li>We don&apos;t require an account for any App.</li>
							<li>We don&apos;t use analytics or advertising tracking in any App.</li>
							<li>We don&apos;t sell or rent your information to anyone.</li>
							<li>
								What you create in our Apps (documents, songs, settings) stays on
								your device unless you choose to export or share it.
							</li>
						</ul>
					</section>

					<section>
						<h2 id="apps">Information each App handles</h2>

						<h3 id="pacer">Pacer</h3>
						<p>
							Pacer collects no personal data. Your chosen cadence, volume and
							haptic setting stay on your device. When you use Pacer on
							iPhone and Apple Watch together, the two devices exchange those
							settings directly through Apple&apos;s Watch Connectivity framework.
							That information is not sent to us or to any third party.
						</p>

						<h3 id="md-book">MD Book</h3>
						<p>
							MD Book collects no personal data. It opens the folders and files you
							choose, and edits and exports are saved back to your Mac. We have no
							access to your documents.
						</p>
						<p>
							If a document you open contains a link to an image on the web, MD
							Book fetches that image directly from the website that hosts it so it
							can be displayed. That website will receive your IP address and a
							standard request, as it would if you opened the image in a browser.
							No information is sent to us.
						</p>

						<h3 id="melodist-studio">Melodist Studio (Melodist Composer and Liza)</h3>
						<p>
							Your songs stay on your device. The apps send crash reports through
							Firebase Crashlytics, measure which campaigns lead to installs with
							AppsFlyer, and process purchases and subscriptions through
							RevenueCat, Apple and Google. They use no analytics. Full detail is in
							the <a href="https://melodist.studio/privacy">Melodist Studio privacy policy</a>.
						</p>

						<h3 id="new-apps">New Apps</h3>
						<p>
							When we release a new App, we will add it to this policy before it is
							available, including any third-party service it uses.
						</p>
					</section>

					<section>
						<h2 id="purchases">Purchases</h2>
						<p>
							Where an App is sold or offers in-app purchases, payment is handled by
							Apple (App Store) or Google (Google Play) under their own privacy
							policies. We never see your card details. Apple and Google may share
							limited, non-identifying information with us, such as sales figures
							and country, for accounting and reporting.
						</p>
					</section>

					<section>
						<h2 id="platform-data">Information from Apple and Google</h2>
						<p>
							If you have chosen to share diagnostics with app developers in your
							device settings, Apple or Google may provide us with anonymous crash
							reports and aggregate usage figures, such as the number of installs.
							These don&apos;t identify you, and you can turn sharing off in your
							device settings at any time.
						</p>
					</section>

					<section>
						<h2 id="website">This website</h2>
						<p>
							newworld.codes is a static website hosted by Cloudflare. It sets no
							cookies, has no analytics and loads no third-party scripts. Like any
							web server, Cloudflare processes your IP address and basic request
							information to deliver pages and protect the site from abuse.
						</p>
						<p>
							If you choose a light or dark theme, your choice is saved in your
							browser&apos;s local storage. It is never sent to us.
						</p>
					</section>

					<section>
						<h2 id="contacting-us">When you contact us</h2>
						<p>
							If you email us, we receive your email address, your message and
							anything you attach. We use it only to reply and to help with your
							question, and we keep it for as long as needed to do that, normally no
							more than two years after the conversation ends.
						</p>
					</section>

					<section>
						<h2 id="legal-basis">Legal basis</h2>
						<p>
							Under UK data protection law, we process the limited information
							described here on the basis of our legitimate interests: running and
							improving our Apps, fixing crashes, answering your messages and
							keeping this website secure. Where an App processes purchase
							information, we do so to perform our contract with you and to meet our
							legal obligations, such as keeping tax and accounting records.
						</p>
					</section>

					<section>
						<h2 id="sharing">Sharing and transfers</h2>
						<p>
							We don&apos;t sell, rent or trade your information. We only share it
							with the service providers named in this policy or in an App&apos;s own
							policy, who process it on our behalf, and where the law requires it.
						</p>
						<p>
							Some providers are based outside the United Kingdom, including in the
							United States. Where information is transferred, we rely on
							safeguards recognised under UK law, such as the UK International Data
							Transfer Addendum or standard contractual clauses.
						</p>
					</section>

					<section>
						<h2 id="security">Security</h2>
						<p>
							Because our Apps keep your work on your device, its security depends
							largely on your device. We recommend using a passcode or biometric
							lock, keeping your operating system up to date and backing up your
							device regularly.
						</p>
					</section>

					<section>
						<h2 id="children">Children</h2>
						<p>
							Our Apps don&apos;t require any personal information, so they can be
							used at any age. We don&apos;t knowingly collect personal information
							from children under 13. If you believe a child has sent us personal
							information, contact us and we will delete it.
						</p>
					</section>

					<section>
						<h2 id="your-rights">Your rights</h2>
						<p>Under UK data protection law, you have the right to:</p>
						<ul>
							<li>ask for a copy of the personal information we hold about you;</li>
							<li>ask us to correct or delete it;</li>
							<li>object to or ask us to restrict how we use it;</li>
							<li>ask us to transfer it to you or another organisation.</li>
						</ul>
						<p>
							To use any of these rights, email <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
							You can delete everything an App has stored on your device by
							deleting the App.
						</p>
						<p>
							If you are unhappy with how we have handled your information, you can
							complain to the Information Commissioner&apos;s Office at{" "}
							<a href="https://ico.org.uk">ico.org.uk</a>.
						</p>
					</section>

					<section>
						<h2 id="changes">Changes to this policy</h2>
						<p>
							We may update this policy from time to time, for example when we
							release a new App. When we do, we will change the &quot;Last
							updated&quot; date at the top of this page. If a change materially
							affects how we handle your information, we will tell you in the App
							concerned.
						</p>
					</section>

					<section>
						<h2 id="contact">Contact</h2>
						<p>
							Questions about this policy or your information:{" "}
							<a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
						</p>
						<p>
							Data controller: <strong>{LEGAL_NAME}</strong>, United Kingdom. See
							also our <Link href="/terms">terms of use</Link>.
						</p>
					</section>
				</div>
			</div>
		</>
	);
}
