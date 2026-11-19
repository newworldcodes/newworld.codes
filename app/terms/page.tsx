import type { Metadata } from "next";
import Link from "next/link";
import DocHeader from "../doc-header";
import { breadcrumb, documentPage, EMAIL, jsonLdProps, LEGAL_NAME, SITE } from "../structured-data";

const UPDATED = "2026-11-19";
const UPDATED_LABEL = "19 November 2026";

const description =
	"The terms for using apps from New World Code Ltd, including Pacer and MD Book: your licence, purchases and subscriptions through Apple and Google, refunds, your content, liability and governing law.";

export const metadata: Metadata = {
	title: "Terms of Use",
	description,
	alternates: { canonical: `${SITE}/terms` },
};

export default function Terms() {
	return (
		<>
			<script
				{...jsonLdProps(
					documentPage({ name: "Terms of Use", description, path: "/terms", dateModified: UPDATED }),
				)}
			/>
			<script {...jsonLdProps(breadcrumb("Terms of Use", "/terms"))} />

			<DocHeader eyebrow="New World Code · legal" title="Terms of use" updated={UPDATED_LABEL} />

			<div className="mx-auto w-full max-w-[1440px] px-4 pb-16 md:px-12">
				<div className="doc">
					<section>
						<h2 id="introduction">Introduction</h2>
						<p>
							These terms govern your use of the apps published by {LEGAL_NAME}{" "}
							(&quot;New World Code&quot;, &quot;we&quot;, &quot;our&quot; or
							&quot;us&quot;), including Pacer and MD Book (each an
							&quot;App&quot;), and of this website. By downloading or using an App,
							you agree to these terms. If you don&apos;t agree, please don&apos;t
							use the App.
						</p>
						<p>
							Some Apps are published under a trading name with its own terms. Where
							that is the case, the App&apos;s own terms apply and take precedence
							over these. This currently covers <strong>Melodist Studio</strong>{" "}
							(Melodist Composer and Liza), whose terms are at{" "}
							<a href="https://melodist.studio/terms">melodist.studio/terms</a>.
						</p>
						<p>Nothing in these terms affects your statutory rights as a consumer.</p>
					</section>

					<section>
						<h2 id="licence">Licence to use an App</h2>
						<p>
							We grant you a personal, non-exclusive, non-transferable, revocable
							licence to use each App on devices you own or control, as permitted by
							the usage rules of the App Store or Google Play you downloaded it from.
						</p>
						<p>You agree not to:</p>
						<ul>
							<li>copy, modify or make derivative works of an App, except as the law allows;</li>
							<li>
								reverse engineer, decompile or disassemble an App, except where the
								law expressly permits it;
							</li>
							<li>get around any purchase, subscription or licence check;</li>
							<li>rent, lease, sell or sublicense an App or any paid feature;</li>
							<li>use an App for anything unlawful.</li>
						</ul>
					</section>

					<section>
						<h2 id="purchases">Prices, purchases and subscriptions</h2>
						<p>
							An App may be free, paid, or free with optional paid features offered
							as a one-off in-app purchase or an auto-renewing subscription. What is
							included, and the price, is shown before you buy.
						</p>

						<h3 id="billing">Billing</h3>
						<p>
							All purchases are made through Apple&apos;s App Store or Google Play,
							in your local currency, with taxes applied by the store. We never see
							or store your payment details.
						</p>

						<h3 id="auto-renewal">Auto-renewal</h3>
						<p>
							Subscriptions renew automatically unless you cancel at least 24 hours
							before the end of the current period. Your account is charged for
							renewal within the 24 hours before the period ends, at the price then
							in effect. If a price changes, Apple or Google will tell you in advance
							and ask for your consent where required.
						</p>

						<h3 id="free-trials">Free trials</h3>
						<p>
							Where a free trial is offered, it is limited to one per person per store
							account. Unless you cancel at least 24 hours before the trial ends, the
							subscription begins and you are charged automatically.
						</p>

						<h3 id="cancelling">Managing and cancelling</h3>
						<ul>
							<li>
								<strong>iPhone, iPad and Mac:</strong> Settings, your name,
								Subscriptions (or App Store, your account, Subscriptions on Mac).
							</li>
							<li>
								<strong>Android:</strong> Google Play, your profile, Payments &amp;
								subscriptions, Subscriptions.
							</li>
						</ul>
						<p>
							Deleting an App doesn&apos;t cancel its subscription. After you cancel,
							you keep access until the end of the period you have paid for.
						</p>

						<h3 id="restoring">Restoring purchases</h3>
						<p>
							You can restore purchases on another device signed in to the same store
							account. Purchases can&apos;t be moved between Apple and Google.
						</p>
					</section>

					<section>
						<h2 id="refunds">Refunds</h2>
						<p>
							Refunds are handled by the store you bought from. For Apple, use{" "}
							<a href="https://reportaproblem.apple.com">reportaproblem.apple.com</a>.
							For Google Play, see{" "}
							<a href="https://support.google.com/googleplay/answer/2479637">
								Google Play&apos;s refund policy
							</a>
							. If you have a problem with a purchase, email us and we will do what we
							can to help.
						</p>
					</section>

					<section>
						<h2 id="changes-to-apps">Changes to Apps</h2>
						<p>
							We update our Apps to fix problems and add features, and may change or
							remove features over time. We won&apos;t remove a paid feature during a
							subscription period you have already paid for without good reason.
						</p>
					</section>

					<section>
						<h2 id="your-content">Your content</h2>
						<p>
							You own what you create with our Apps. We claim no rights over it, and
							for content stored on your device we have no access to it. You are
							responsible for having the right to use any files you open or import.
						</p>
						<p>
							Because your content lives on your device, it can be lost if the device
							is lost, damaged or reset, or if you delete the App. Please keep your
							own backups.
						</p>
					</section>

					<section>
						<h2 id="guidance">Guidance and estimates</h2>
						<p>
							Some Apps show estimates or guidance, such as Pacer&apos;s cadence and
							running form targets. These are general guides, not measurements or
							medical, fitness or professional advice. Use your own judgement, and
							speak to a qualified professional before changing how you exercise if
							you have any health concerns.
						</p>
					</section>

					<section>
						<h2 id="third-parties">Third-party services</h2>
						<p>
							Our Apps rely on services from Apple and Google, and some use other
							providers named in our <Link href="/privacy">privacy policy</Link>.
							Your use of those services is also subject to their own terms.
						</p>
					</section>

					<section>
						<h2 id="intellectual-property">Intellectual property</h2>
						<p>
							The Apps, including their design, code, graphics and names, and this
							website are owned by {LEGAL_NAME}. These terms don&apos;t give you any
							right to use our names, logos or trade marks.
						</p>
					</section>

					<section>
						<h2 id="app-store">App store terms</h2>
						<p>
							If you downloaded an App from Apple&apos;s App Store, you also agree to
							Apple&apos;s{" "}
							<a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">
								Licensed Application End User License Agreement
							</a>
							. You and we acknowledge that:
						</p>
						<ul>
							<li>these terms are between you and {LEGAL_NAME}, not Apple;</li>
							<li>Apple has no obligation to provide maintenance or support for the App;</li>
							<li>
								if the App fails to meet any applicable warranty, you may notify
								Apple, which may refund the purchase price, and Apple has no other
								warranty obligation for the App;
							</li>
							<li>
								Apple is not responsible for any product liability, consumer
								protection or intellectual property claim relating to the App;
							</li>
							<li>
								you confirm you are not located in a country subject to a US
								Government embargo and are not on any US Government list of
								prohibited or restricted parties;
							</li>
							<li>
								Apple and its subsidiaries are third-party beneficiaries of these
								terms and may enforce them against you.
							</li>
						</ul>
						<p>
							If you downloaded an App from Google Play, you are also subject to the{" "}
							<a href="https://play.google.com/about/play-terms/">Google Play Terms of Service</a>.
						</p>
					</section>

					<section>
						<h2 id="disclaimer">Disclaimer</h2>
						<p>
							To the extent the law allows, our Apps and this website are provided
							&quot;as is&quot; and &quot;as available&quot;. We don&apos;t
							guarantee that they will be error-free or uninterrupted, work on every
							device, or never lose data.
						</p>
						<p>
							This doesn&apos;t affect your legal rights as a consumer, including
							your right to digital content that is of satisfactory quality, fit for
							purpose and as described.
						</p>
					</section>

					<section>
						<h2 id="liability">Limitation of liability</h2>
						<p>
							To the extent the law allows, we are not liable for loss of data, loss
							of profits, or any indirect or consequential loss arising from your use
							of an App or this website. Our total liability to you for any claim is
							limited to the amount you paid us for the App and its paid features in
							the 12 months before the claim.
						</p>
						<p>
							Nothing in these terms limits our liability for death or personal
							injury caused by our negligence, for fraud, or for anything else that
							can&apos;t be limited by law.
						</p>
					</section>

					<section>
						<h2 id="termination">Termination</h2>
						<p>
							You can stop using an App at any time by deleting it; remember to cancel
							any subscription separately. We may suspend or end your licence if you
							seriously or repeatedly break these terms. The sections on your
							content, intellectual property, the disclaimer and limitation of
							liability continue to apply afterwards.
						</p>
					</section>

					<section>
						<h2 id="changes">Changes to these terms</h2>
						<p>
							We may update these terms from time to time and will change the
							&quot;Last updated&quot; date when we do. If a change is significant,
							we will tell you in the App concerned. If you keep using an App after a
							change, you accept the updated terms.
						</p>
					</section>

					<section>
						<h2 id="governing-law">Governing law</h2>
						<p>
							These terms are governed by the laws of England and Wales, and the
							courts of England and Wales have non-exclusive jurisdiction. If you
							live elsewhere in the United Kingdom or abroad, you keep the protection
							of any mandatory consumer laws where you live and may bring a claim in
							your local courts.
						</p>
					</section>

					<section>
						<h2 id="contact">Contact</h2>
						<p>
							Questions about these terms: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
						</p>
						<p>
							Developer: <strong>{LEGAL_NAME}</strong>, United Kingdom.
						</p>
					</section>
				</div>
			</div>
		</>
	);
}
