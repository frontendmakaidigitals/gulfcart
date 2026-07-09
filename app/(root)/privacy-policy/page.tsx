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

/* ---------- small building blocks ---------- */

function Fill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-[3px] bg-amber-100 px-1.5 py-0.5 font-mono text-[0.85em] text-amber-800 ring-1 ring-inset ring-amber-300">
      {children}
    </span>
  );
}

function RoleTag({ role }: { role: "controller" | "processor" }) {
  const isController = role === "controller";
  return (
    <span
      className={
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide " +
        (isController
          ? "bg-teal-50 text-teal-800 ring-1 ring-inset ring-teal-200"
          : "bg-slate-100 text-slate-700 ring-1 ring-inset ring-slate-300")
      }
    >
      <span
        className={
          "h-1.5 w-1.5 rounded-full " + (isController ? "bg-teal-600" : "bg-slate-500")
        }
      />
      {isController ? "GulfCart = Controller" : "GulfCart = Processor"}
    </span>
  );
}


/* ---------- table of contents data ---------- */

const sections = [
  { id: "who-we-are", n: "01", title: "Who We Are" },
  { id: "scope", n: "02", title: "Scope & Two Categories of Data Subjects" },
  { id: "information-we-collect", n: "03", title: "Information We Collect" },
  { id: "how-we-use", n: "04", title: "How We Use Information" },
  { id: "legal-basis", n: "05", title: "Legal Basis for Processing" },
  { id: "cookies", n: "06", title: "Cookies & Tracking Technologies" },
  { id: "sharing", n: "07", title: "Sharing & Disclosure" },
  { id: "cross-border", n: "08", title: "Cross-Border Data Transfers" },
  { id: "security", n: "09", title: "Data Security" },
  { id: "retention", n: "10", title: "Data Retention" },
  { id: "rights", n: "11", title: "Your Rights" },
  { id: "children", n: "12", title: "Children's Privacy" },
  { id: "third-party", n: "13", title: "Third-Party Links & Integrations" },
  { id: "contact", n: "14", title: "Grievance Officer / DP Contact" },
  { id: "updates", n: "15", title: "Updates to This Policy" },
] as const;

/* ---------- page ---------- */

export default function PrivacyPolicyPage() {
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
      className={`${display.variable} ${body.variable} ${mono.variable} min-h-screen bg-[#FAF8F4]  font-[family-name:var(--font-body)] text-slate-800`}
    >


      {/* hero */}
      <section className="border-b border-slate-200/80 py-16">
        <div className="container">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-teal-700">
            Legal · Data Protection
          </p>
          <h1 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-4xl font-medium leading-[1.1] tracking-tight text-slate-900 sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-slate-600">
            How GulfCart collects, uses, and protects personal data across our
            checkout, dashboard, and buy-now-pay-later services for Shopify
            merchants operating in the GCC.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-2 border-t border-slate-200 pt-5 text-[13px] text-slate-500">
            <span>
              Last updated&nbsp;
              <Fill>01 March 2026</Fill>
            </span>
            <span>
              Effective&nbsp;
              <Fill>01 March 2026</Fill>
            </span>
            <span>
              Entity: Spok Digital Ventures LLC FZ &middot; Ajman Free Zone
              (Nuventures), UAE
            </span>
          </div>
        </div>
      </section>

      <div className=" flex container gap-12  py-14">
        {/* sidebar TOC */}
        <aside
          className={`
            fixed inset-x-0 top-[73px] z-30 h-[calc(100vh-73px)] w-full overflow-y-auto bg-[#FAF8F4] px-6 py-8
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
                    ${
                      active
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
            <Section id="who-we-are" n="01" title="Who We Are">
              <p>
                This Privacy Policy is issued by{" "}
                <strong>Spok Digital Ventures LLC FZ</strong>, trading as{" "}
                <strong>GulfCart</strong> (&quot;GulfCart,&quot;&quot;we,&quot; &quot;us,&quot; &quot;our&quot;), a
                free zone company registered in{" "}
                <strong>Ajman Free Zone (Nuventures)</strong>, United Arab
                Emirates, under trade licence number <Fill>●</Fill>, with its
                registered office at{" "}
                <Fill>Registered Office Address, Ajman Free Zone, Ajman, UAE</Fill>.
              </p>
              <p>
                GulfCart operates a commerce growth platform for
                Shopify-based merchants expanding across the Gulf
                Cooperation Council region (United Arab Emirates, Kingdom of
                Saudi Arabia, Kuwait, Oman, Bahrain, and Qatar), including
                localised checkout, buy-now-pay-later (&quot;BNPL&quot;) management,
                returning-buyer recognition, OTP verification, discounting,
                and related payment, shipping, and tax configuration tools
                (the &quot;Platform&quot; or &quot;Services&quot;).
              </p>
              <p>
                This Policy explains how we collect, use, disclose, and
                protect personal data in connection with the Platform. By
                accessing or using the Platform, you acknowledge that you
                have read and understood this Policy.
              </p>
            </Section>

            <Section id="scope" n="02" title="Scope & Two Categories of Data Subjects">
              <p>
                Because GulfCart sits inside the checkout flow of Shopify
                stores, this Policy addresses two distinct groups, and{" "}
                <strong>
                  the legal basis and our role differ for each
                </strong>
                :
              </p>

              <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-slate-200 bg-white p-5">
                  <RoleTag role="controller" />
                  <p className="mt-3 text-[14px] font-medium text-slate-900">
                    Merchants
                  </p>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-slate-600">
                    The businesses and their authorised personnel who
                    register for, configure, and use the GulfCart dashboard
                    and Services. In respect of Merchant account data,
                    GulfCart acts as a Data Controller.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-200 bg-white p-5">
                  <RoleTag role="processor" />
                  <p className="mt-3 text-[14px] font-medium text-slate-900">
                    Buyers / End-Customers
                  </p>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-slate-600">
                    The shoppers who complete a checkout on a Merchant&quot;s
                    Shopify store where GulfCart is installed. GulfCart
                    processes Buyer checkout data solely on the documented
                    instructions of the Merchant, who remains the Data
                    Controller responsible for obtaining any required
                    consents.
                  </p>
                </div>
              </div>

              <p>
                Merchants are responsible for maintaining their own privacy
                policy toward their Buyers and for ensuring they have a
                lawful basis to share Buyer data with GulfCart. Nothing in
                this Policy relieves a Merchant of that obligation.
              </p>
            </Section>

            <Section id="information-we-collect" n="03" title="Information We Collect">
              <h3>3.1 Merchant Account Information</h3>
              <p>
                Business name, trade licence details, contact person name,
                work email, phone number, billing information, Shopify
                store details, and dashboard usage data.
              </p>

              <h3>3.2 Buyer / Checkout Information (processed on behalf of Merchants)</h3>
              <p>
                Name, phone number, email address, delivery and billing
                addresses, order and cart contents, payment method
                selection, OTP verification data, currency and country
                selected at checkout, BNPL application and eligibility data
                shared with providers such as Tabby and Tamara, and
                returning-buyer recognition identifiers (e.g., hashed
                phone/device identifiers used to recognise a repeat shopper
                across a Merchant&quot;s store).
              </p>
              <p>
                We do <strong>not</strong> store full card numbers, CVV, or
                other sensitive card authentication data — payment card
                processing is handled by PCI-DSS-compliant payment gateways
                and BNPL partners, not by GulfCart directly.
              </p>

              <h3>3.3 Technical and Behavioural Data</h3>
              <p>
                IP address, browser and device type, checkout funnel
                behaviour, conversion and drop-off events, and similar
                analytics data collected automatically via cookies and SDKs
                embedded in the checkout.
              </p>

              <h3>3.4 Correspondence</h3>
              <p>
                Support tickets, emails, and other communications you send
                us.
              </p>
            </Section>

            <Section id="how-we-use" n="04" title="How We Use Information">
              <p>We use personal data to:</p>
              <ul>
                <li>
                  Operate the localised, multi-currency GCC checkout and
                  process orders;
                </li>
                <li>
                  Facilitate BNPL eligibility checks and route applications
                  to Tabby, Tamara, or other connected BNPL providers;
                </li>
                <li>
                  Verify identity via OTP and reduce failed or fraudulent
                  deliveries;
                </li>
                <li>
                  Recognise returning buyers to reduce checkout friction
                  (buyer network);
                </li>
                <li>
                  Apply discounts and configure country-specific payment,
                  COD, shipping, and tax rules;
                </li>
                <li>
                  Provide Merchants with dashboards, analytics, and
                  reporting on conversion rate (CVR) and average order value
                  (AOV) performance;
                </li>
                <li>Detect and prevent fraud and abuse;</li>
                <li>Maintain the security and integrity of the Platform;</li>
                <li>
                  Comply with applicable UAE and GCC legal and regulatory
                  obligations;
                </li>
                <li>
                  Communicate service updates, billing notices, and — with
                  consent where required — product updates.
                </li>
              </ul>
            </Section>

            <Section id="legal-basis" n="05" title="Legal Basis for Processing">
              <p>
                <RoleTag role="controller" /> Where GulfCart acts as
                Controller (Merchant account data), we process personal data
                on the basis of: performance of the contract with the
                Merchant; compliance with a legal obligation; our legitimate
                interest in operating and securing the Platform; or consent,
                where applicable.
              </p>
              <p>
                <RoleTag role="processor" /> Where GulfCart acts as Processor
                (Buyer checkout data), we process personal data strictly on
                the Merchant&quot;s documented instructions, as governed by the
                data processing terms incorporated into our Merchant
                agreement.
              </p>
            </Section>

            <Section id="cookies" n="06" title="Cookies & Tracking Technologies">
              <p>
                GulfCart&quot;s checkout and buyer-recognition features use
                cookies, local storage, and similar technologies to identify
                a returning buyer&quot;s browser/device, remember checkout
                preferences, and measure conversion performance. Some
                cookies are strictly necessary for checkout to function
                (e.g., session and OTP-verification cookies); others are
                used for analytics.
              </p>
              <p>
                Buyers can control cookies through their browser settings.
                Disabling strictly necessary cookies may prevent checkout
                from functioning correctly on a Merchant&quot;s store.
              </p>
            </Section>

            <Section id="sharing" n="07" title="Sharing & Disclosure of Personal Data">
              <p>We may share personal data with:</p>
              <ul>
                <li>
                  <strong>BNPL providers</strong> (Tabby, Tamara, and other
                  providers a Merchant enables) — to process buy-now-pay-later
                  applications and payments;
                </li>
                <li>
                  <strong>Payment gateways and acquiring banks</strong> — to
                  process transactions;
                </li>
                <li>
                  <strong>Shipping and logistics partners</strong> — to
                  fulfil delivery, where enabled by the Merchant;
                </li>
                <li>
                  <strong>Cloud infrastructure and sub-processors</strong> —
                  engaged under written data protection terms to host and
                  operate the Platform;
                </li>
                <li>
                  <strong>The relevant Merchant</strong> — since GulfCart
                  operates inside that Merchant&quot;s checkout, order and buyer
                  data collected there is inherently shared back to that
                  Merchant;
                </li>
                <li>
                  <strong>Group companies and affiliates</strong>, including
                  SPOK Digital, for the purpose of operating and improving
                  the Services;
                </li>
                <li>
                  <strong>Regulators, courts, and law enforcement
                  authorities</strong> in the UAE or another GCC state, where
                  required by law or a valid legal process;
                </li>
                <li>
                  <strong>A successor entity</strong>, in the event of a
                  merger, acquisition, or sale of business assets, subject
                  to equivalent protection of personal data.
                </li>
              </ul>
              <p>
                We do not sell personal data to third parties for their
                independent marketing purposes.
              </p>
            </Section>

            <Section id="cross-border" n="08" title="Cross-Border Data Transfers">
              <p>
                Because GulfCart operates across the UAE, Saudi Arabia,
                Kuwait, Oman, Bahrain, and Qatar, personal data may be
                transferred between these jurisdictions and to cloud
                infrastructure providers that may host data outside the
                UAE. Where such a transfer takes place, we implement
                appropriate safeguards (such as contractual data protection
                clauses with our sub-processors) consistent with{" "}
                <strong>Article 22 of the PDPL</strong> and its Executive
                Regulations, and we assess the destination country&quot;s data
                protection standard before transferring data there.
              </p>
            </Section>

            <Section id="security" n="09" title="Data Security">
              <p>
                We maintain administrative, technical, and organisational
                safeguards designed to protect personal data against
                unauthorised access, alteration, disclosure, or
                destruction, including encryption in transit, access
                controls, and reliance on PCI-DSS-compliant partners for
                card data. No system can be guaranteed 100% secure, and
                Merchants and Buyers are responsible for safeguarding their
                own login credentials.
              </p>
            </Section>

            <Section id="retention" n="10" title="Data Retention">
              <p>
                We retain Merchant account data for as long as the Merchant
                maintains an active account with GulfCart, and thereafter
                for the period required to meet accounting, tax, audit, or
                legal obligations under UAE law. Buyer checkout data is
                retained for the period instructed by the relevant Merchant,
                or as required to detect fraud, resolve disputes, or comply
                with law, after which it is securely deleted or anonymised.
              </p>
            </Section>

            <Section id="rights" n="11" title="Your Rights">
              <p>
                Subject to the PDPL and its exceptions, data subjects may
                have the right to: request access to their personal data;
                request correction of inaccurate data; request erasure;
                object to or restrict certain processing; withdraw
                previously given consent; and request a copy of their data
                in a portable format.
              </p>
              <ul>
                <li>
                  <strong>Merchants</strong> may exercise these rights by
                  contacting us at the details in Section 14.
                </li>
                <li>
                  <strong>Buyers</strong> should, in the first instance,
                  contact the Merchant whose store they transacted on, as
                  the Merchant is the Data Controller for that transaction.
                  GulfCart will support the Merchant in responding to such
                  requests as required under our data processing terms.
                </li>
              </ul>
            </Section>

            <Section id="children" n="12" title="Children's Privacy">
              <p>
                The GulfCart Platform and Merchant dashboard are intended
                for business use by individuals who are at least 18 years
                old and legally capable of contracting. We do not knowingly
                collect personal data directly from children. Where
                checkout data relating to a Buyer is processed on a
                Merchant&quot;s instructions, responsibility for confirming the
                Buyer&quot;s legal capacity rests with the Merchant.
              </p>
            </Section>

            <Section id="third-party" n="13" title="Third-Party Links & Integrations">
              <p>
                The Platform integrates with third-party services
                (including Shopify, Tabby, Tamara, and payment gateways).
                These third parties have their own privacy policies and
                terms, and GulfCart is not responsible for their
                independent data practices. We encourage Merchants and
                Buyers to review those policies separately.
              </p>
            </Section>

            <Section id="contact" n="14" title="Grievance Officer / Data Protection Contact">
              <p>
                Questions, concerns, or complaints about this Policy or our
                handling of personal data can be directed to:
              </p>
              <div className="not-prose my-5 rounded-lg border border-slate-200 bg-white p-5 text-[13.5px] leading-relaxed text-slate-700">
                <p className="font-medium text-slate-900">
                  <Fill>Name</Fill>
                </p>
                <p>Data Protection / Grievance Officer</p>
                <p>GulfCart (SPOK Digital)</p>
                <p>
                  <Fill>Registered Office Address, Ajman Free Zone, Ajman, UAE</Fill>
                </p>
                <p className="mt-2">
                  Email:{" "}
                  <a
                    href="mailto:privacy@gulfcart.ae"
                    className="text-teal-700 underline decoration-teal-300 underline-offset-2"
                  >
                    privacy@gulfcart.ae
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

            <Section id="updates" n="15" title="Updates to This Policy">
              <p>
                We may update this Policy from time to time to reflect
                changes in our practices or legal requirements. The &quot;Last
                updated&quot; date at the top will always reflect the most
                recent revision, and material changes will be notified to
                Merchants via the dashboard or email.
              </p>
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