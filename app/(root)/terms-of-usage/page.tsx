"use client";

import { useEffect, useRef, useState } from "react";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
});
const body = Inter({ subsets: ["latin"], variable: "--font-body" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

/* ---------- small building blocks (shared visual language with /privacy-policy) ---------- */

function Fill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-[3px] bg-amber-100 px-1.5 py-0.5 font-mono text-[0.85em] text-amber-800 ring-1 ring-inset ring-amber-300">
      {children}
    </span>
  );
}

function OpenChoice({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-[3px] bg-rose-50 px-1.5 py-0.5 text-[0.9em] text-rose-800 ring-1 ring-inset ring-rose-200">
      {children}
    </span>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="not-prose mb-10 rounded-lg border border-amber-300/70 bg-amber-50/70 px-5 py-4 text-[13.5px] leading-relaxed text-amber-900">
      <p className="mb-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-amber-700">
        Drafting note — remove before publishing
      </p>
      {children}
    </div>
  );
}

function DecisionCallout({ children }: { children: React.ReactNode }) {
  return (
    <div className="not-prose my-6 rounded-lg border border-rose-200 bg-rose-50/60 px-5 py-4 text-[13.5px] leading-relaxed text-rose-900">
      <p className="mb-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-rose-700">
        Open decision — fix before publishing
      </p>
      {children}
    </div>
  );
}

/* ---------- table of contents data ---------- */

const sections = [
  { id: "what-gulfcart-is", n: "01", title: "What GulfCart Is" },
  { id: "eligibility", n: "02", title: "Eligibility & Account Registration" },
  { id: "merchant-obligations", n: "03", title: "Merchant Obligations" },
  { id: "fees-billing", n: "04", title: "Fees and Billing" },
  { id: "third-party", n: "05", title: "Third-Party Services" },
  { id: "data-protection", n: "06", title: "Data Protection" },
  { id: "ip", n: "07", title: "Intellectual Property" },
  { id: "prohibited", n: "08", title: "Prohibited Products & Uses" },
  { id: "suspension", n: "09", title: "Suspension and Termination" },
  { id: "warranties", n: "10", title: "Warranties and Disclaimers" },
  { id: "liability", n: "11", title: "Limitation of Liability" },
  { id: "indemnification", n: "12", title: "Indemnification" },
  { id: "confidentiality", n: "13", title: "Confidentiality" },
  { id: "force-majeure", n: "14", title: "Force Majeure" },
  { id: "governing-law", n: "15", title: "Governing Law & Dispute Resolution" },
  { id: "changes", n: "16", title: "Changes to These Terms" },
  { id: "general", n: "17", title: "General" },
  { id: "contact", n: "18", title: "Grievance and Contact" },
] as const;

/* ---------- page ---------- */

export default function TermsOfUsePage() {
  const [activeId, setActiveId] = useState<string>(sections[0].id);
  const [tocOpen, setTocOpen] = useState(false);
  const observerSet = useRef(false);

  useEffect(() => {
    if (observerSet.current) return;
    observerSet.current = true;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`${display.variable} ${body.variable} ${mono.variable} min-h-screen bg-[#FAF8F4] font-[family-name:var(--font-body)] text-slate-800`}
    >


      {/* hero */}
      <section className="border-b  py-16">
        <div className="container">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-teal-700">
            Legal · Merchant Agreement
          </p>
          <h1 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-4xl font-medium leading-[1.1] tracking-tight text-slate-900 sm:text-5xl">
            Terms of Use
          </h1>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-slate-600">
            The binding agreement between Your business and GulfCart
            covering checkout, BNPL routing, fees, and the rest of the
            Platform across the GCC.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-2 border-t border-slate-200 pt-5 text-[13px] text-slate-500">
            <span>
              Effective&nbsp;
              <Fill>01 March 2026</Fill>
            </span>
            <span>
              Entity: Spok Digital Ventures LLC FZ &middot; Ajman Free Zone
              (Nuventures), UAE
            </span>
            <span>Billing: subscription + GMV% via Stripe</span>
          </div>
        </div>
      </section>

      <div className="mx-auto flex container gap-12  py-14">
        {/* sidebar TOC */}
        <aside
          className={`
            fixed inset-x-0 top-[73px] z-30 h-[calc(100vh-73px)] w-full overflow-y-auto  px-6 py-8
            transition-transform duration-200 lg:sticky lg:top-24 lg:h-fit lg:w-64 lg:shrink-0 lg:translate-x-0 lg:bg-transparent lg:px-0 lg:py-0
            ${tocOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          `}
        >
          <p className="mb-4 font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-400">
            Contents
          </p>
          <nav className="space-y-0.5 border-l border-slate-200">
            {sections.map((s) => {
              const active = activeId === s.id;
              return (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  onClick={() => setTocOpen(false)}
                  className={`
                    -ml-px flex gap-3 border-l py-1.5 pl-4 text-[13px] leading-snug transition-colors
                    ${active
                      ? "border-teal-600 font-medium text-slate-900"
                      : "border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-800"
                    }
                  `}
                >
                  <span className="font-mono text-[11px] text-slate-400">{s.n}</span>
                  <span>{s.title}</span>
                </a>
              );
            })}
          </nav>

        </aside>

        {/* article */}
        <main className="min-w-0 flex-1">


          <article className="prose prose-slate max-w-none prose-headings:font-[family-name:var(--font-display)] prose-headings:font-medium prose-headings:tracking-tight prose-p:leading-relaxed prose-p:text-slate-700 prose-li:text-slate-700">
            <Section id="what-gulfcart-is" n="01" title="What GulfCart Is">
              <p>
                GulfCart is a commerce growth platform for Shopify merchants
                expanding across the GCC (UAE, Saudi Arabia, Kuwait, Oman,
                Bahrain, and Qatar). The Services include, among other
                things:
              </p>
              <ul>
                <li>
                  Localised, multi-currency checkout across all six GCC
                  markets;
                </li>
                <li>
                  Centralised management of connected buy-now-pay-later
                  (&quot;BNPL&quot;) providers, including Tabby and Tamara;
                </li>
                <li>
                  Returning-buyer recognition (&quot;buyer network&quot;) to reduce
                  checkout friction for repeat shoppers;
                </li>
                <li>
                  OTP-based verification to reduce failed and fraudulent
                  orders;
                </li>
                <li>A discount engine configurable at the checkout level;</li>
                <li>
                  Cash-on-delivery (&quot;COD&quot;) fee configuration and
                  country-level payment, shipping, and tax rules;
                </li>
                <li>Arabic-language checkout UI;</li>
                <li>
                  Reporting and analytics on checkout conversion and order
                  performance.
                </li>
              </ul>
              <p>
                GulfCart centralises and manages access to third-party BNPL
                and payment providers; it does not itself act as a lender,
                payment institution, or BNPL provider, and GulfCart&quot;s role
                in respect of any such third-party product is limited to
                integration and management within the Merchant&quot;s checkout.
              </p>
            </Section>

            <Section id="eligibility" n="02" title="Eligibility & Account Registration">
              <p>
                <strong>2.1</strong> You must be a duly registered business
                entity, at least 18 years of age, and legally authorised to
                bind that entity to these Terms.
              </p>
              <p>
                <strong>2.2</strong> You are responsible for the accuracy of
                the information You provide during onboarding (including
                trade licence details, contact information, and Shopify
                store details) and for promptly updating it.
              </p>
              <p>
                <strong>2.3</strong> You are responsible for maintaining the
                confidentiality of Your account credentials and for all
                activity conducted under Your account, whether or not
                authorised by You.
              </p>
              <p>
                <strong>2.4</strong> GulfCart may suspend or terminate an
                account where information provided is found to be false,
                incomplete, or misleading, or where required by applicable
                law or a competent UAE or GCC regulator.
              </p>
            </Section>

            <Section id="merchant-obligations" n="03" title="Merchant Obligations">
              <p>You represent, warrant, and agree that:</p>
              <p>
                <strong>(a)</strong> You are duly incorporated and
                authorised to conduct business in the jurisdiction(s) in
                which You operate;
              </p>
              <p>
                <strong>(b)</strong> Your use of the Services, and the
                products or services You sell through Your Shopify store,
                comply with applicable law in each jurisdiction in which
                You sell, including UAE Federal Law No. 15 of 2020 on
                Consumer Protection and its Executive Regulations, and
                equivalent consumer protection and e-commerce laws in Saudi
                Arabia, Kuwait, Oman, Bahrain, and Qatar where applicable;
              </p>
              <p>
                <strong>(c)</strong> You have obtained all consents
                required from Your Buyers to share their personal data with
                GulfCart and connected third-party providers (BNPL,
                payment, shipping) for the purpose of completing and
                fulfilling orders, consistent with GulfCart&quot;s Privacy
                Policy and data processing terms;
              </p>
              <p>
                <strong>(d)</strong> You will not use the Services to sell
                prohibited products or services (see Section 8);
              </p>
              <p>
                <strong>(e)</strong> You are solely responsible for
                delivery, after-sales service, returns, invoicing, and any
                other obligation owed to Your Buyers arising from the sale
                itself — GulfCart&quot;s role is limited to the checkout,
                payment-routing, and related technology layer.
              </p>
            </Section>

            <Section id="fees-billing" n="04" title="Fees and Billing">
              <div className="not-prose mb-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-slate-200 bg-white p-5">
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-teal-700">
                    Flat subscription
                  </p>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-slate-600">
                    Set out in Your order form or account dashboard, billed
                    via Stripe.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-200 bg-white p-5">
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-teal-700">
                    + GMV percentage
                  </p>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-slate-600">
                    A percentage of gross merchandise value processed
                    through the Platform, billed via Stripe.
                  </p>
                </div>
              </div>
              <p>
                <strong>4.1</strong> Fees for the Services consist of a flat
                monthly subscription fee plus a percentage of gross
                merchandise value (&quot;GMV&quot;) processed through the Platform,
                as set out in Your order form or account dashboard, and
                billed via Stripe.
              </p>
              <p>
                <strong>4.2</strong> Fees are exclusive of applicable VAT
                and other taxes, which will be added where required by UAE
                or GCC law.
              </p>
              <p>
                <strong>4.3</strong> GulfCart may suspend checkout
                functionality on Your store (a &quot;checkout kill switch&quot;)
                automatically upon payment failure, until the outstanding
                amount is settled.
              </p>
              <p>
                <strong>4.4</strong> GulfCart may revise its fees from time
                to time upon reasonable prior notice; continued use of the
                Services after such notice constitutes acceptance of the
                revised fees.
              </p>
              <p>
                <strong>4.5</strong> Any billing dispute must be raised in
                writing within ten (10) days of the relevant invoice date,
                after which the invoice is deemed accepted.
              </p>
            </Section>

            <Section id="third-party" n="05" title="Third-Party Services">
              <p>
                The Services integrate with third-party providers,
                including Shopify, Tabby, Tamara, Stripe, and
                shipping/logistics partners. Each such provider has its own
                terms and privacy practices. GulfCart is not responsible
                for the acts, omissions, availability, or performance of
                these third parties, and Your use of any such integrated
                provider is subject to that provider&quot;s own terms, which You
                are responsible for reviewing and accepting separately.
              </p>
            </Section>

            <Section id="data-protection" n="06" title="Data Protection">
              <p>
                Use of the Services is subject to GulfCart&quot;s{" "}
                <a
                  href="/privacy-policy"
                  className="text-teal-700 underline decoration-teal-300 underline-offset-2"
                >
                  Privacy Policy
                </a>
                . Where GulfCart processes Buyer personal data on Your
                behalf as a data processor, the parties agree to comply
                with applicable data protection law, including UAE Federal
                Decree-Law No. 45 of 2021 (PDPL) and, where applicable, the
                data protection law of any other GCC jurisdiction in which
                You operate. You remain the data controller in respect of
                Your Buyers&quot;s personal data and are responsible for the
                lawfulness of any instruction You give GulfCart in respect
                of that data.
              </p>
            </Section>

            <Section id="ip" n="07" title="Intellectual Property">
              <p>
                <strong>7.1</strong> GulfCart and its licensors retain all
                right, title, and interest in the Platform, the GulfCart
                name and logo, and all underlying technology, whether
                registered or unregistered. Nothing in these Terms
                transfers any such right to You.
              </p>
              <p>
                <strong>7.2</strong> GulfCart grants You a limited,
                non-exclusive, non-transferable licence to access and use
                the Platform solely for Your internal business purposes for
                as long as these Terms remain in effect.
              </p>
              <p>
                <strong>7.3</strong> You may not copy, reverse-engineer,
                resell, sublicense, or create derivative works from the
                Platform.
              </p>
              <p>
                <strong>7.4</strong> By providing Your trademarks, store
                content, or other materials to GulfCart, You grant GulfCart
                a limited, royalty-free licence to use such materials
                solely to provide, support, and (with Your consent)
                reference the Services, including in aggregated or
                anonymised performance case studies.
              </p>
            </Section>

            <Section id="prohibited" n="08" title="Prohibited Products & Uses">
              <p>
                You may not use the Services to sell, promote, or process
                transactions relating to:
              </p>
              <div className="not-prose my-5 flex flex-wrap gap-2">
                {[
                  "Illegal narcotics",
                  "Weapons or firearms",
                  "Counterfeit goods",
                  "Adult or pornographic content",
                  "Gambling services",
                  "Unlicensed financial or lending products",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-300 bg-white px-3 py-1 text-[12.5px] text-slate-600"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <p>
                — or any goods or services prohibited under UAE federal law
                or the law of any other GCC jurisdiction in which You
                operate. GulfCart may suspend the Services immediately,
                without prior notice, upon discovering a violation of this
                Section.
              </p>
            </Section>

            <Section id="suspension" n="09" title="Suspension and Termination">
              <p>
                <strong>9.1</strong> Either party may terminate these Terms
                for convenience upon <Fill>30</Fill> days&quot;s written notice.
              </p>
              <p>
                <strong>9.2</strong> GulfCart may suspend or terminate the
                Services immediately where: You breach these Terms; Your
                account is used for unlawful, fraudulent, or abusive
                activity; a competent regulator instructs GulfCart to do
                so; or fees remain unpaid after notice.
              </p>
              <p>
                <strong>9.3</strong> Termination does not relieve either
                party of obligations accrued prior to termination,
                including payment of outstanding fees.
              </p>
            </Section>

            <Section id="warranties" n="10" title="Warranties and Disclaimers">
              <p>
                The Services are provided on an &quot;as is&quot; and &quot;as available&quot;
                basis. GulfCart does not warrant that the Services will be
                uninterrupted, error-free, or free of security
                vulnerabilities, and disclaims all implied warranties to
                the maximum extent permitted under UAE law.
              </p>
            </Section>

            <Section id="liability" n="11" title="Limitation of Liability">
              <p>
                <strong>11.1</strong> To the maximum extent permitted by
                applicable law, GulfCart shall not be liable for any
                indirect, incidental, special, consequential, or punitive
                damages, or for any loss of profits, revenue, data, or
                goodwill, arising out of or in connection with the
                Services.
              </p>
              <p>
                <strong>11.2</strong> GulfCart&quot;s total aggregate liability
                arising out of or in connection with these Terms shall not
                exceed the total fees paid by You to GulfCart in the{" "}
                <OpenChoice>three (3) / six (6)</OpenChoice> months
                immediately preceding the event giving rise to the claim.
              </p>
              <p>
                <strong>11.3</strong> Nothing in these Terms limits
                liability that cannot lawfully be limited or excluded under
                UAE law, including liability for fraud or wilful
                misconduct.
              </p>
            </Section>

            <Section id="indemnification" n="12" title="Indemnification">
              <p>
                You agree to indemnify and hold harmless GulfCart, its
                affiliates, and its officers and employees against any
                claims, losses, or damages arising from: Your breach of
                these Terms; the products or services You sell; Your
                violation of applicable law; or Your failure to obtain
                necessary Buyer consents.
              </p>
            </Section>

            <Section id="confidentiality" n="13" title="Confidentiality">
              <p>
                Each party agrees to keep confidential any non-public
                business, technical, or financial information disclosed by
                the other party in connection with the Services, and to use
                it solely for the purposes of these Terms.
              </p>
            </Section>

            <Section id="force-majeure" n="14" title="Force Majeure">
              <p>
                Neither party shall be liable for delay or failure to
                perform its obligations (other than payment obligations)
                due to events beyond its reasonable control, including
                natural disaster, war, governmental action, or failure of
                third-party infrastructure or payment networks.
              </p>
            </Section>

            <Section id="governing-law" n="15" title="Governing Law & Dispute Resolution">
              <p>
                These Terms are governed by UAE federal law, without
                prejudice to the regulations of Ajman Free Zone applicable
                to GulfCart as a free zone-registered entity. The parties
                submit to the exclusive jurisdiction of{" "}
                <OpenChoice>
                  the courts of the Emirate of Ajman / the courts of Dubai,
                  by agreement of the parties
                </OpenChoice>
                , <OpenChoice>
                  or, if preferred: to arbitration administered by the
                  Dubai International Arbitration Centre (DIAC) or the
                  Ajman-seated equivalent, in the English language, before
                  a sole arbitrator
                </OpenChoice>
                , save that either party may seek urgent injunctive relief
                before any court of competent jurisdiction.
              </p>

            </Section>

            <Section id="changes" n="16" title="Changes to These Terms">
              <p>
                GulfCart may amend these Terms from time to time. Material
                changes will be notified via the dashboard or by email, and
                continued use of the Services after the effective date of
                such changes constitutes acceptance.
              </p>
            </Section>

            <Section id="general" n="17" title="General">
              <p>
                <strong>17.1 Severability:</strong> If any provision of
                these Terms is held invalid, the remaining provisions
                continue in full force.
              </p>
              <p>
                <strong>17.2 No Waiver:</strong> Failure to enforce a
                provision is not a waiver of GulfCart&quot;s right to enforce it
                later.
              </p>
              <p>
                <strong>17.3 Assignment:</strong> You may not assign these
                Terms without GulfCart&quot;s prior written consent; GulfCart
                may assign these Terms in connection with a merger,
                acquisition, or sale of assets.
              </p>
              <p>
                <strong>17.4 Entire Agreement:</strong> These Terms,
                together with the Privacy Policy and any signed order form,
                constitute the entire agreement between the parties
                regarding the Services.
              </p>
            </Section>

            <Section id="contact" n="18" title="Grievance and Contact">
              <p>
                Questions or complaints regarding these Terms may be
                directed to:
              </p>
              <div className="not-prose my-5 rounded-lg border border-slate-200 bg-white p-5 text-[13.5px] leading-relaxed text-slate-700">
                <p className="font-medium text-slate-900">
                  <Fill>Name</Fill>
                </p>
                <p>Grievance Officer</p>
                <p>GulfCart (SPOK Digital)</p>
                <p>
                  <Fill>
                    Registered Office Address, Ajman Free Zone, Ajman, UAE
                  </Fill>
                </p>
                <p className="mt-2">
                  Email:{" "}
                  <a
                    href="mailto:legal@gulfcart.ae"
                    className="text-teal-700 underline decoration-teal-300 underline-offset-2"
                  >
                    legal@gulfcart.ae
                  </a>
                </p>
                <p>
                  General support:{" "}
                  <a
                    href="mailto:support@gulfcart.ae"
                    className="text-teal-700 underline decoration-teal-300 underline-offset-2"
                  >
                    support@gulfcart.ae
                  </a>
                </p>
              </div>
            </Section>
          </article>

          <footer className="mt-16 border-t border-slate-200 pt-8 text-[12.5px] text-slate-400">
            <p>
              &copy; {new Date().getFullYear()} Spok Digital Ventures LLC FZ,
              trading as GulfCart. Ajman Free Zone (Nuventures), United Arab
              Emirates.
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}

function Section({
  id,
  n,
  title,
  children,
}: {
  id: string;
  n: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-slate-200 py-10 first:border-t-0 first:pt-0">
      <div className="mb-5 flex items-baseline gap-3">
        <span className="font-mono text-sm text-teal-600">{n}</span>
        <h2 className="m-0 text-2xl">{title}</h2>
      </div>
      {children}
    </section>
  );
}