import { useEffect, useState } from "react";
import { GOOGLE_FORM_URL } from "./googleForm.js";

const routes = {
  "/en": {
    title: "Business Services in Morocco | CAF Management",
    description: "Build and operate your business in Morocco with one local team for company formation, accounting, tax, legal, payroll and market entry.",
    label: "International business support",
  },
  "/en/company-formation-morocco": {
    title: "Company Formation in Morocco | CAF Management",
    description: "Create your company in Morocco with local support for structure selection, registration, tax identification, compliance and ongoing management.",
    label: "Company formation in Morocco",
  },
  "/en/accounting-tax-morocco": {
    title: "Accounting and Tax Services in Morocco | CAF Management",
    description: "English-speaking accounting and tax support in Morocco for international founders, foreign-owned companies and growing businesses.",
    label: "Accounting and tax in Morocco",
  },
  "/en/market-entry-morocco": {
    title: "Morocco Market Entry Advisory | CAF Management",
    description: "Enter the Moroccan market with support for strategy, compliance, company setup, finance, due diligence and local operations.",
    label: "Market entry in Morocco",
  },
  "/en/services": {
    title: "Accounting, Tax, Audit and Advisory Services | CAF Management",
    description: "Explore CAF Management's complete services in Morocco: accounting, tax, audit, legal, payroll, company creation, restructuring, finance and investor support.",
    label: "Our complete services",
  },
  "/en/tax-advisory-morocco": {
    title: "Tax Advisory in Morocco | CAF Management",
    description: "Tax strategy, compliance, international structuring, risk review and dispute support for businesses and investors operating in Morocco.",
    label: "Tax advisory in Morocco",
  },
  "/en/audit-accounting-morocco": {
    title: "Audit and Accounting in Morocco | CAF Management",
    description: "Annual and specific audits, complete accounting, closings, internal-process review and financial reporting in Morocco.",
    label: "Audit and accounting in Morocco",
  },
  "/en/legal-payroll-morocco": {
    title: "Legal, Payroll and HR Services in Morocco | CAF Management",
    description: "Business law, corporate governance, contracts, payroll, social contributions, HR processes and employment support in Morocco.",
    label: "Legal, payroll and HR in Morocco",
  },
  "/en/invest-in-morocco-cfc": {
    title: "Invest in Morocco and CFC Status | CAF Management",
    description: "Understand Casablanca Finance City eligibility, verified CFC incentives and how CAF Management supports international investors in Morocco.",
    label: "Invest in Morocco and CFC status",
  },
  "/en/about": {
    title: "About CAF Management | Casablanca Advisory Firm",
    description: "Meet CAF Management, a Casablanca advisory, accounting and audit firm supporting businesses in Morocco since 1993.",
    label: "About CAF Management",
  },
  "/en/contact": {
    title: "Contact CAF Management | Start a Project in Morocco",
    description: "Tell CAF Management about your business project in Morocco and arrange a first conversation with the Casablanca team.",
    label: "Contact CAF Management",
  },
};

const formationSteps = [
  ["01", "Understand the project", "We clarify your activity, ownership, priorities and intended timeline."],
  ["02", "Select the structure", "The team helps you evaluate the legal structure that fits the project."],
  ["03", "Prepare the formation", "CAF coordinates the required documents, registration and tax identification steps."],
  ["04", "Set up operations", "Accounting, tax, payroll and compliance are prepared from the beginning."],
  ["05", "Continue with one team", "Your CAF team remains available as the company starts operating and grows."],
];

const formationFaqs = [
  ["Can a foreigner create a company in Morocco?", "International founders can establish businesses in Morocco. The appropriate setup depends on the activity, ownership, financing and regulatory context, which CAF reviews with you before the process begins."],
  ["Can CAF support the company after registration?", "Yes. CAF brings together accounting, tax, payroll, legal, audit and advisory services so the same team can support the company after formation."],
  ["Can the initial work be handled remotely?", "Many preparation and coordination steps can begin remotely. The team will identify which documents and actions are required for your specific project."],
  ["Which company structure should I choose?", "That decision depends on the business model, shareholders, investment plan and tax situation. CAF helps frame the choice rather than applying a one-size-fits-all answer."],
];

const accountingServices = [
  ["Accounting management", "Day-to-day accounting, bank reconciliation, accounts payable and receivable, and dependable records."],
  ["Closing and reporting", "Monthly, quarterly and annual closing support designed to improve clarity and control."],
  ["Tax compliance", "Preparation and filing support, regulatory monitoring and clear visibility over obligations."],
  ["Payroll and social obligations", "Payroll processing, contributions and assistance with employment-related administration."],
  ["Audit and internal review", "Financial audits, process analysis and recommendations to strengthen internal controls."],
  ["International coordination", "A local team able to work with international founders, finance teams and advisers."],
];

const marketEntryServices = [
  ["Market framing", "Industry context, opportunities, constraints and the practical implications of operating in Morocco."],
  ["Entry structure", "Support selecting and establishing the structure through which the business will enter the market."],
  ["Regulatory coordination", "Guidance around relevant compliance requirements and relationships with local stakeholders."],
  ["Financial planning", "Business planning, financial models, funding requirements and decision-ready scenarios."],
  ["Due diligence", "Structured review to support credible investment, partnership and transaction decisions."],
  ["Operational continuity", "Accounting, tax, payroll, legal and advisory support after the initial market entry."],
];

const expertiseAreas = [
  ["Company creation & follow-up", "Legal structure selection, registration, regulatory compliance and practical guidance through launch."],
  ["Accounting & reporting", "Complete accounting management, dependable records, monthly and annual closings, and decision-ready reporting."],
  ["Tax advisory", "Tailored tax strategies, filings, compliance, disputes and support for international structures."],
  ["Audit & internal control", "Annual audits, process reviews, risk analysis and recommendations that strengthen governance."],
  ["Legal, payroll & HR", "Business and labor law, payroll, social contributions, dispute management and HR optimization."],
  ["Strategic advisory", "Diagnostics, benchmarking, action plans, cost optimization and a practical roadmap for growth."],
  ["Market entry & investment", "Market analysis, regulatory guidance, due diligence, stakeholder connections and local execution."],
  ["Finance & transactions", "Business plans, financial models, investor identification, financing needs and transaction structuring."],
];

const additionalServices = [
  ["French accounting", "Pennylane-certified accounting management aligned with French standards for entities in France."],
  ["CNDP compliance", "Compliance audits, filings, authorizations and the regulatory actions required for personal-data processing."],
  ["Termination procedures", "Legal support for termination procedures in accordance with Moroccan labor law."],
  ["Business plans & financing", "Robust business plans, financial projections and assistance with financing applications."],
  ["VAT credit claims", "Preparation and follow-up of VAT credit refund claims with the tax authorities."],
  ["Tax disputes", "Representation before tax authorities and full management of disputes and appeals."],
  ["Legal disputes", "Assistance in commercial, labor and contractual disputes, from negotiation through proceedings."],
  ["Payment deadlines", "Invoice and deadline review, SIMPL declarations and preparation of the related certificate."],
];

const teamMembers = [
  { name: "Abdelmjid Samri", role: "Managing Partner", image: "/assets/extracted/deck2-p04-01.jpg" },
  { name: "Mustapha Kablaoui", role: "Audit Director", image: "/assets/extracted/deck2-p07-04.jpg" },
  { name: "Naima Imzoughne", role: "Compliance & Payroll Director", image: "/assets/extracted/deck2-p07-01.jpg" },
  { name: "Rania Samri", role: "Finance & Restructuring Manager", image: "/assets/extracted/deck2-p07-05.jpg" },
  { name: "Youssef Hassani", role: "Audit Manager", image: "/assets/extracted/deck2-p07-02.jpg" },
  { name: "Hiba Samri", role: "Legal & Advisory Director", image: "/assets/extracted/deck2-p07-03.jpg" },
];

const milestones = [
  ["1993", "CAF Management is founded in Casablanca with a focus on accounting, tax and close client support."],
  ["2005", "The firm expands its departments and deepens its multidisciplinary one-stop-shop model."],
  ["2011", "CAF diversifies its advisory, audit, legal, payroll and finance capabilities."],
  ["2023", "International expansion accelerates across Europe, Africa and the MENA region."],
];

const clientLogos = Array.from({ length: 15 }, (_, index) =>
  `/assets/extracted/deck1-p08-${String(index + 1).padStart(2, "0")}.png`
);

const operatingJourney = [
  ["01", "Creation", "Bylaws, registration and tax identification."],
  ["02", "Management", "Day-to-day accounting, payroll and tax."],
  ["03", "Advisory", "Tax, strategy, legal guidance and optimization."],
  ["04", "Audit", "Control, compliance and reporting."],
  ["05", "Partnership", "Ongoing, proactive support as the business evolves."],
];

const detailedServices = [
  {
    id: "tax-consulting",
    title: "Tax consulting",
    intro: "Tax decisions are treated as part of the wider business strategy, with attention to both opportunity and risk.",
    bullets: [
      "Customized tax strategies designed to maximize available benefits.",
      "Identification of opportunities to reduce tax exposure and improve savings.",
      "Preparation and filing of tax returns in line with local and international requirements.",
      "Assessment of potential tax risks and development of mitigation plans.",
      "Representation and assistance during tax disputes and appeals.",
      "Advice on international tax structures and cross-border tax burdens.",
    ],
  },
  {
    id: "audit-accounting",
    title: "Audit & accounting",
    intro: "Reliable books, rigorous reviews and clearer internal processes give leaders a dependable view of the business.",
    bullets: [
      "Annual financial audits against national and international accounting standards.",
      "Specific audits requested by shareholders, investors or other stakeholders.",
      "Analysis of internal processes to identify weaknesses and recommend improvements.",
      "Complete accounting management and dependable financial records.",
      "Support for monthly, quarterly and annual closing processes.",
      "End-to-end audit visibility that improves understanding of the business.",
    ],
  },
  {
    id: "legal-governance",
    title: "Legal, governance & disputes",
    intro: "CAF connects business law, employment matters and corporate governance to the company’s operational reality.",
    bullets: [
      "Advice on business, labor and tax law.",
      "Assistance with compliance and corporate governance.",
      "Review of contracts and legal documents to identify weaknesses.",
      "Management of commercial, contractual and employment disputes.",
      "Support through negotiation, litigation and termination procedures.",
    ],
  },
  {
    id: "payroll-operations",
    title: "Payroll, social responsibility & finance operations",
    intro: "The team handles recurring financial and employment obligations while improving the processes behind them.",
    bullets: [
      "Payroll processing, tax calculation and filing.",
      "Employee benefits management and direct-deposit setup.",
      "Payroll reporting and advice on social security contributions.",
      "Support in relations with employee representative bodies.",
      "Diagnosis and optimization of HR processes.",
      "Monthly financial statements and year-end tax preparation.",
      "Accounts payable and receivable management.",
      "Bank reconciliation and expense tracking.",
    ],
  },
  {
    id: "company-creation",
    title: "Company creation & follow-up",
    intro: "CAF turns a business project into a compliant Moroccan operating structure and stays involved after registration.",
    bullets: [
      "Evaluation and selection of the appropriate legal structure.",
      "Preparation of bylaws and complete company-registration support.",
      "Tax identification and initial regulatory compliance.",
      "Accounting, payroll and reporting setup from the beginning.",
      "Strategic guidance and ongoing operational follow-up.",
    ],
  },
  {
    id: "restructuring",
    title: "Business restructuring",
    intro: "When performance, organization or financing needs to change, CAF builds a practical view of the options and consequences.",
    bullets: [
      "In-depth analysis of challenges and opportunities specific to the industry.",
      "Diagnostics and benchmarking of the current position.",
      "Customized strategies for growth, recovery and optimization.",
      "Assessment of financial needs and strategic recommendations.",
      "Tailored action plans, cost optimization and a clear roadmap.",
      "Due-diligence management to support credible decisions.",
    ],
  },
  {
    id: "market-entry-investors",
    title: "Market entry & investor support",
    intro: "International businesses and investors receive support from early market assessment through financing and local execution.",
    bullets: [
      "Market analysis and strategic planning tailored to the industry.",
      "Guidance on regulatory requirements and compliance in target markets.",
      "Connections with key stakeholders, local authorities and investors.",
      "Due diligence for a smooth and credible market entry.",
      "Assessment of financing needs and preparation of recommendations.",
      "Business plans, pitch decks and detailed financial models.",
      "Identification and proactive approach to potential investors.",
      "Preparation and management of investor due diligence.",
      "Support in negotiating and structuring transactions to improve financing conditions.",
    ],
  },
];

const serviceDestinations = [
  { number: "01", title: "Company formation", text: "From legal structure and registration to the systems required to begin operating.", href: "/en/company-formation-morocco", image: "/assets/generated/caf-casablanca-hero.webp" },
  { number: "02", title: "Tax advisory", text: "Strategy, compliance, international structuring, tax-risk review and dispute support.", href: "/en/tax-advisory-morocco", image: "/assets/generated/caf-tax-advisory-editorial.webp" },
  { number: "03", title: "Audit & accounting", text: "Complete accounting, financial audits, closings, reporting and internal-process analysis.", href: "/en/audit-accounting-morocco", image: "/assets/generated/caf-audit-accounting-editorial.webp" },
  { number: "04", title: "Legal, payroll & HR", text: "Business law, governance, contracts, payroll, social obligations and HR processes.", href: "/en/legal-payroll-morocco", image: "/assets/generated/caf-legal-payroll-editorial.webp" },
  { number: "05", title: "Market entry & investors", text: "Market analysis, due diligence, local setup, investor materials and transaction support.", href: "/en/market-entry-morocco", image: "/assets/generated/caf-market-entry-gateway.webp" },
  { number: "06", title: "Invest in Morocco & CFC", text: "CFC eligibility, verified incentives, establishment and continuing compliance in one journey.", href: "/en/invest-in-morocco-cfc", image: "/assets/generated/caf-invest-morocco-cfc.webp" },
];

function normalizedPath() {
  const clean = window.location.pathname.replace(/\/+$/, "");
  return clean || "/";
}

function useSeo(route) {
  useEffect(() => {
    const page = routes[route] || routes["/en"];
    document.documentElement.lang = "en";
    document.title = page.title;

    let description = document.querySelector('meta[name="description"]');
    if (!description) {
      description = document.createElement("meta");
      description.name = "description";
      document.head.appendChild(description);
    }
    description.content = page.description;

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `https://www.caf.ma${route === "/en" ? "/en/" : route}`;

    let schema = document.getElementById("caf-structured-data");
    if (!schema) {
      schema = document.createElement("script");
      schema.id = "caf-structured-data";
      schema.type = "application/ld+json";
      document.head.appendChild(schema);
    }
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "CAF Management",
      url: "https://www.caf.ma",
      telephone: "+212522945382",
      email: "info@caf.ma",
      foundingDate: "1993",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Hay Hana, rue Mhiwla n°17",
        postalCode: "20210",
        addressLocality: "Casablanca",
        addressCountry: "MA",
      },
      areaServed: ["Morocco", "Africa", "MENA", "Europe"],
      description: page.description,
    });
  }, [route]);
}

function EnglishHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className="en-topbar">
        <div className="shell en-topbar-inner"><span>Advisory · Audit · Finance</span><span>Casablanca · Since 1993</span></div>
      </div>
      <header className="en-header">
        <div className="shell en-header-inner">
          <a className="en-brand" href="/en/" aria-label="CAF Management English home">
            <img src="/assets/brand/caf-primary-mark.webp" alt="CAF Management" />
          </a>
          <nav className={menuOpen ? "en-nav en-nav-open" : "en-nav"} aria-label="English navigation">
            <details className="en-services-menu">
              <summary>Services</summary>
              <div><a href="/en/services">All services</a><a href="/en/company-formation-morocco">Company formation</a><a href="/en/tax-advisory-morocco">Tax advisory</a><a href="/en/audit-accounting-morocco">Audit & accounting</a><a href="/en/legal-payroll-morocco">Legal, payroll & HR</a><a href="/en/market-entry-morocco">Market entry</a></div>
            </details>
            <a href="/en/invest-in-morocco-cfc">Invest & CFC</a>
            <a href="/en/about">About</a>
            <a href="/en/contact">Contact</a>
            <a className="en-language" href="/" lang="fr">FR</a>
          </nav>
          <a className="en-header-cta" href="/en/contact">Discuss your project</a>
          <button className="en-menu" onClick={() => setMenuOpen((value) => !value)} aria-expanded={menuOpen}>{menuOpen ? "Close" : "Menu"}</button>
        </div>
      </header>
    </>
  );
}

function EnglishFooter() {
  return (
    <footer className="en-footer">
      <div className="shell en-footer-grid">
        <div className="en-footer-brand"><img src="/assets/brand/caf-primary-mark.webp" alt="CAF Management" /><p>Your trusted business partner in Morocco since 1993.</p></div>
        <div><strong>Expertise</strong><a href="/en/services">All services</a><a href="/en/company-formation-morocco">Company formation</a><a href="/en/tax-advisory-morocco">Tax advisory</a><a href="/en/audit-accounting-morocco">Audit & accounting</a><a href="/en/legal-payroll-morocco">Legal, payroll & HR</a><a href="/en/market-entry-morocco">Market entry</a></div>
        <div><strong>CAF Management</strong><a href="/en/about">About the firm</a><a href="/en/about#our-team">The team</a><a href="https://www.linkedin.com/company/caf-management/" target="_blank" rel="noreferrer">LinkedIn</a><a href="/">Français</a></div>
        <div><strong>Casablanca</strong><span>+212 5 22 94 53 82 / 83 / 84</span><a href="mailto:info@caf.ma">info@caf.ma</a><span>Hay Hana, rue Mhiwla n°17</span></div>
      </div>
      <div className="shell en-footer-bottom"><span>© CAF Management</span><span>Consulting · Audit · Finance</span></div>
    </footer>
  );
}

function ProofBand() {
  return (
    <section className="en-proof" aria-label="CAF Management facts">
      <div><strong>1993</strong><span>Founded in Casablanca</span></div>
      <div><strong>300+</strong><span>Active clients</span></div>
      <div><strong>30+</strong><span>Years of experience</span></div>
      <div><strong>970M</strong><span>DHS client portfolio</span></div>
    </section>
  );
}

function LeadPanel({ title = "Tell us about your project" }) {
  return (
    <div className="en-lead-card">
      <div className="en-form-heading"><span>First conversation</span><h3>{title}</h3></div>
      <p>A few questions about your business, your country and the service you need. A member of the CAF team will get back to you to arrange a first conversation.</p>
      <a className="en-primary" href={GOOGLE_FORM_URL} target="_blank" rel="noopener">Fill in the form</a>
      <small>The form opens in a new tab (Google Forms, in French).</small>
    </div>
  );
}

function PageIntro({ eyebrow, title, text, image, imageAlt, children, tone = "dark" }) {
  return (
    <section className={`en-page-hero en-page-hero-${tone}`}>
      <div className="shell en-page-hero-grid">
        <div className="en-page-hero-copy">
          <p className="en-eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{text}</p>
          <div className="en-page-actions">{children}</div>
        </div>
        <div className="en-page-hero-image"><img src={image} alt={imageAlt} fetchPriority="high" /></div>
      </div>
    </section>
  );
}

function EnglishHome() {
  return (
    <>
      <section className="en-home-hero">
        <img src="/assets/generated/caf-casablanca-hero.webp" alt="Casablanca business skyline at blue hour" fetchPriority="high" />
        <div className="en-home-shade" aria-hidden="true" />
        <div className="shell en-home-content">
          <p className="en-eyebrow">Company formation · Accounting · Tax · Advisory</p>
          <h1>Build your company in Morocco.<br /><span>With one local team.</span></h1>
          <p>English-speaking support for international founders and businesses—from the first decision to day-to-day operations.</p>
          <div className="en-home-actions"><a className="en-primary" href="/en/company-formation-morocco">Create a company in Morocco</a><a className="en-secondary" href="/en/contact">Discuss your project</a></div>
          <div className="en-home-note"><strong>CAF Management</strong><span>Based in Casablanca. Supporting business since 1993.</span></div>
        </div>
      </section>
      <ProofBand />

      <section className="en-company-intro">
        <div className="en-company-intro-image"><img src="/assets/extracted/deck2-p06-01.jpg" alt="CAF Management team in Casablanca" loading="lazy" /></div>
        <div className="en-company-intro-copy">
          <p className="en-eyebrow">CAF Management · Since 1993</p>
          <h2>A whole firm behind every business decision.</h2>
          <p>CAF Management is a Casablanca-based advisory, accounting and audit firm built around one idea: clients should not have to coordinate separate specialists. Our multidisciplinary team connects company creation, accounting, tax, legal, payroll, audit, finance and strategy.</p>
          <p>For international founders, investors and established businesses, that means informed decisions, dependable local execution and one continuing relationship.</p>
          <a className="en-text-link" href="/en/about">Meet the firm and its team</a>
        </div>
      </section>

      <section className="en-section en-intent-section">
        <div className="shell">
          <div className="en-heading-row"><div><p className="en-eyebrow">Start with your objective</p><h2>What brings you to Morocco?</h2></div><p>Each path answers a different business need, while the same CAF team keeps the work coordinated.</p></div>
          <div className="en-intent-grid">
            <a href="/en/company-formation-morocco"><span>01</span><h3>I want to create a company</h3><p>Structure, registration, tax identification, compliance and operational setup.</p><b>Explore company formation</b></a>
            <a href="/en/accounting-tax-morocco"><span>02</span><h3>I need accounting and tax support</h3><p>Clear records, filings, payroll, reporting and ongoing local compliance.</p><b>Explore accounting & tax</b></a>
            <a href="/en/market-entry-morocco"><span>03</span><h3>My business is entering Morocco</h3><p>Market framing, due diligence, setup, finance and operational continuity.</p><b>Explore market entry</b></a>
          </div>
        </div>
      </section>

      <section className="en-cfc-teaser">
        <div className="en-cfc-teaser-image"><img src="/assets/generated/caf-invest-morocco-cfc.webp" alt="Casablanca financial district and Atlantic coast" loading="lazy" /></div>
        <div className="en-cfc-teaser-copy"><p className="en-eyebrow">Invest in Morocco · CFC status</p><h2>Make Morocco the base for wider growth.</h2><p>Explore Morocco’s investment proposition, the Casablanca Finance City framework and the eligibility questions that should shape an international setup.</p><div><a className="en-primary" href="/en/invest-in-morocco-cfc">Explore Morocco & CFC</a><a className="en-text-link" href="/en/services">View all expertise</a></div></div>
      </section>

      <section className="en-editorial">
        <div className="en-editorial-image"><img src="/assets/generated/caf-cross-border-advisory.webp" alt="International business advisory meeting in Casablanca" loading="lazy" /></div>
        <div className="en-editorial-copy"><p className="en-eyebrow">Your one-stop shop</p><h2>Local expertise without fragmented coordination.</h2><p>CAF brings accounting, tax, audit, legal, payroll and strategic advisory together. You keep one view of the project while the specialists work as one team.</p><a className="en-text-link" href="/en/about">Discover CAF Management</a></div>
      </section>

      <section className="en-proof-library">
        <div className="shell">
          <div className="en-proof-library-heading"><div><p className="en-eyebrow">Trust, documented</p><h2>Clients and recognized capabilities.</h2></div><p>CAF works with more than 300 active clients and maintains specialist capabilities for Moroccan and cross-border requirements.</p></div>
          <div className="en-client-logos" aria-label="Selected CAF Management clients">{clientLogos.slice(0, 10).map((logo, index) => <div key={logo}><img src={logo} alt={`Selected CAF Management client ${index + 1}`} loading="lazy" /></div>)}</div>
          <div className="en-certifications">
            <div><img src="/assets/extracted/deck1-p05-01.png" alt="Pennylane accounting interface certification" loading="lazy" /></div>
            <div><img src="/assets/extracted/deck1-p05-02.png" alt="CNDP Morocco" loading="lazy" /></div>
            <p><strong>Internationally minded, locally accountable.</strong><br />CAF supports work across Morocco, Africa, the MENA region and Europe.</p>
          </div>
        </div>
      </section>

      <section className="en-section en-home-cta"><div className="shell"><p className="en-eyebrow">A first conversation</p><h2>Tell us what you want to build in Morocco.</h2><p>We will help you identify the right starting point and the expertise the project requires.</p><a className="en-primary" href="/en/contact">Start the conversation</a></div></section>
    </>
  );
}

function ServicesPage() {
  return (
    <>
      <PageIntro eyebrow="Consulting · Audit · Finance" title="Choose the expertise your project needs." text="CAF Management connects specialized teams around one business. Begin with the relevant area below; the firm keeps the wider legal, financial and operational picture coordinated." image="/assets/extracted/deck2-p08-01.jpg" imageAlt="CAF Management office environment in Casablanca" tone="light">
        <a className="en-primary" href="#expertise-pages">Explore the expertise</a><a className="en-secondary" href="/en/contact">Discuss your needs</a>
      </PageIntro>

      <section className="en-operating-model"><div className="shell"><div className="en-operating-heading"><p className="en-eyebrow">One stop shop since 1993</p><h2>From creation to ongoing support.</h2><p>One point of contact keeps the legal, financial, tax and operational work connected.</p></div><div className="en-operating-journey">{operatingJourney.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className="en-section en-expertise-pages" id="expertise-pages">
        <div className="shell">
          <div className="en-heading-row"><div><p className="en-eyebrow">Focused pages, complete answers</p><h2>Go directly to the work that matters.</h2></div><p>Detailed capabilities now live on their own pages, making the site easier to scan and each service easier to understand.</p></div>
          <div className="en-expertise-page-grid">{serviceDestinations.map((service) => <a key={service.title} href={service.href}><div><img src={service.image} alt="" loading="lazy" /></div><span>{service.number}</span><h3>{service.title}</h3><p>{service.text}</p><b>Explore this expertise</b></a>)}</div>
        </div>
      </section>

      <section className="en-section en-home-cta"><div className="shell"><p className="en-eyebrow">A multidisciplinary response</p><h2>Bring CAF the whole business question.</h2><p>The team will identify the legal, financial, tax and operational expertise required.</p><a className="en-primary" href="/en/contact">Request a conversation</a></div></section>
    </>
  );
}

function FocusedCapabilities({ eyebrow, title, intro, bullets }) {
  return (
    <section className="en-section en-focus-section">
      <div className="shell en-focus-grid">
        <div><p className="en-eyebrow">{eyebrow}</p><h2>{title}</h2><p>{intro}</p></div>
        <div className="en-focus-list">{bullets.map((bullet, index) => <article key={bullet}><span>{String(index + 1).padStart(2, "0")}</span><p>{bullet}</p></article>)}</div>
      </div>
    </section>
  );
}

function TaxAdvisoryPage() {
  const tax = detailedServices.find((service) => service.id === "tax-consulting");
  return (
    <>
      <PageIntro eyebrow="Tax advisory in Morocco" title="Tax clarity for decisions that cross borders." text="CAF Management connects Moroccan tax compliance with the commercial and international structure of the business." image="/assets/generated/caf-tax-advisory-editorial.webp" imageAlt="Cross-border tax planning session in Casablanca" tone="light"><a className="en-primary" href="/en/contact">Discuss your tax position</a><a className="en-secondary" href="#tax-capabilities">View capabilities</a></PageIntro>
      <div id="tax-capabilities"><FocusedCapabilities eyebrow="Tax strategy, compliance and disputes" title="A complete view of exposure and opportunity." intro={tax.intro} bullets={tax.bullets} /></div>
      <section className="en-section en-special-assignments"><div className="shell"><div className="en-heading-row"><div><p className="en-eyebrow">Focused tax assignments</p><h2>Support beyond the annual filing cycle.</h2></div><p>CAF also handles matters that need focused analysis, representation or a cross-border view.</p></div><div className="en-special-row"><article><span>01</span><h3>VAT credit claims</h3><p>Preparation and follow-up of VAT refund claims with the tax authorities.</p></article><article><span>02</span><h3>Tax disputes</h3><p>Defense, representation and management of disputes and appeals.</p></article><article><span>03</span><h3>International structures</h3><p>Advice on cross-border structures, tax burdens and applicable compliance.</p></article></div></div></section>
      <section className="en-section en-home-cta"><div className="shell"><p className="en-eyebrow">Tax advisory enquiry</p><h2>Bring the structure, the transaction and the risk into one conversation.</h2><a className="en-primary" href="/en/contact">Speak with CAF Management</a></div></section>
    </>
  );
}

function AuditAccountingPage() {
  const audit = detailedServices.find((service) => service.id === "audit-accounting");
  return (
    <>
      <PageIntro eyebrow="Audit and accounting in Morocco" title="Reliable numbers. Stronger internal control." text="Complete accounting, rigorous audits and clear closing support for companies that need dependable local reporting." image="/assets/generated/caf-audit-accounting-editorial.webp" imageAlt="Audit and accounting review in a Casablanca office" tone="light"><a className="en-primary" href="/en/contact">Discuss your finance function</a><a className="en-secondary" href="#audit-capabilities">View capabilities</a></PageIntro>
      <div id="audit-capabilities"><FocusedCapabilities eyebrow="Audit, accounting and reporting" title="See the business clearly—and strengthen what sits behind the numbers." intro={audit.intro} bullets={audit.bullets} /></div>
      <section className="en-detail-split"><div className="en-detail-image"><img src="/assets/generated/caf-tax-advisory-editorial.webp" alt="Financial reporting and accounting review" loading="lazy" /></div><div className="en-detail-copy"><p className="en-eyebrow">Recurring finance operations</p><h2>From monthly records to year-end readiness.</h2><ul><li>Monthly financial statements</li><li>Accounts payable and receivable</li><li>Bank reconciliation and expense tracking</li><li>Quarterly and annual closings</li><li>Year-end tax preparation</li><li>Pennylane-certified French accounting support</li></ul></div></section>
      <section className="en-section en-home-cta"><div className="shell"><p className="en-eyebrow">Audit and accounting enquiry</p><h2>Give decision-makers a dependable local finance function.</h2><a className="en-primary" href="/en/contact">Speak with CAF Management</a></div></section>
    </>
  );
}

function LegalPayrollPage() {
  const legal = detailedServices.find((service) => service.id === "legal-governance");
  const payroll = detailedServices.find((service) => service.id === "payroll-operations");
  return (
    <>
      <PageIntro eyebrow="Legal, payroll and HR in Morocco" title="A compliant company is built through everyday decisions." text="CAF Management links business law, governance, employment obligations, payroll and HR processes to the realities of operating in Morocco." image="/assets/generated/caf-legal-payroll-editorial.webp" imageAlt="Legal and people-operations advisory meeting in Casablanca" tone="light"><a className="en-primary" href="/en/contact">Discuss your legal or HR needs</a><a className="en-secondary" href="#legal-capabilities">View capabilities</a></PageIntro>
      <div id="legal-capabilities"><FocusedCapabilities eyebrow="Legal and governance" title="Protect the company, its relationships and its decisions." intro={legal.intro} bullets={legal.bullets} /></div>
      <section className="en-section en-focus-section en-focus-dark"><div className="shell en-focus-grid"><div><p className="en-eyebrow">Payroll and social obligations</p><h2>Keep the employment cycle accurate and controlled.</h2><p>{payroll.intro}</p></div><div className="en-focus-list">{payroll.bullets.map((bullet, index) => <article key={bullet}><span>{String(index + 1).padStart(2, "0")}</span><p>{bullet}</p></article>)}</div></div></section>
      <section className="en-section en-special-assignments"><div className="shell"><div className="en-heading-row"><div><p className="en-eyebrow">Special situations</p><h2>Support when routine processes become sensitive.</h2></div><p>The team can coordinate the legal, HR and regulatory dimensions of matters that require particular care.</p></div><div className="en-special-row"><article><span>01</span><h3>CNDP compliance</h3><p>Audits, filings and authorizations for personal-data processing.</p></article><article><span>02</span><h3>Termination procedures</h3><p>Legal support aligned with Moroccan labor requirements.</p></article><article><span>03</span><h3>Legal disputes</h3><p>Commercial, labor and contractual support from negotiation through proceedings.</p></article></div></div></section>
      <section className="en-section en-home-cta"><div className="shell"><p className="en-eyebrow">Legal and people operations</p><h2>Resolve today’s obligation without losing sight of the wider business.</h2><a className="en-primary" href="/en/contact">Speak with CAF Management</a></div></section>
    </>
  );
}

function InvestMoroccoPage() {
  const cfcBenefits = [
    ["Corporate income tax", "Total exemption for the first five consecutive fiscal years from the first year CFC status is granted, followed by the specific 20% rate."],
    ["Personal income tax", "A specific 20% rate for CFC employees for a maximum period of ten years."],
    ["Dividends", "Permanent withholding-tax exemption on dividends and similar income paid to non-residents."],
    ["Registration fees", "Exemption relating to company creation and capital increases."],
    ["Capital mobility", "Foreign-currency account access, freedom to manage currency holdings and transfer of qualifying group management and technical-assistance fees."],
  ];
  return (
    <>
      <PageIntro eyebrow="Invest in Morocco · Casablanca Finance City" title="A base in Morocco. A platform for wider growth." text="CAF Management helps international companies evaluate Morocco, establish the right structure and determine whether Casablanca Finance City status fits the project." image="/assets/generated/caf-invest-morocco-cfc.webp" imageAlt="Casablanca financial district and Atlantic coast" tone="light"><a className="en-primary" href="#cfc-status">Understand CFC status</a><a className="en-secondary" href="/en/contact">Discuss your investment</a></PageIntro>
      <section className="en-invest-band"><div><strong>#1</strong><span>Africa’s leading financial centre since 2016</span></div><div><strong>200+</strong><span>Companies in the CFC member community</span></div><div><strong>80</strong><span>Countries reached in Africa and beyond</span></div></section>
      <section className="en-section en-invest-intro"><div className="shell en-story-grid"><div><p className="en-eyebrow">Why Morocco</p><h2>Where Europe, Africa and the Mediterranean connect.</h2></div><div><p>Morocco combines political and institutional stability, modern infrastructure, international connectivity and a strategic position between major markets. Casablanca Finance City adds a dedicated framework for companies using Morocco as a regional base.</p><p>CFC status is selective. The value begins with determining whether the intended activity, operating substance and regional ambition satisfy the official criteria.</p></div></div></section>
      <section className="en-section en-cfc-eligibility" id="cfc-status"><div className="shell"><div className="en-heading-row"><div><p className="en-eyebrow">Who may qualify</p><h2>CFC status is designed for defined categories of business.</h2></div><p>Eligibility also depends on operational substance, management from CFC, international experience and contribution to the centre’s development.</p></div><div className="en-cfc-categories"><article><span>01</span><h3>Financial companies</h3><p>Financial institutions, investment companies, qualifying investment-service providers, holdings and related structures.</p></article><article><span>02</span><h3>Auxiliary services</h3><p>Legal, tax, audit, strategy, HR and other professional service providers.</p></article><article><span>03</span><h3>Technical & administrative services</h3><p>Regional coordination, management and technical services meeting the required activity tests.</p></article><article><span>04</span><h3>Trading companies</h3><p>Qualifying trading and related logistics, storage, transit, networking or trade-advisory activities.</p></article></div></div></section>
      <section className="en-cfc-benefits"><div className="shell en-cfc-benefits-grid"><div><p className="en-eyebrow">Verified CFC framework</p><h2>The incentives, with the conditions kept visible.</h2><p>These benefits are subject to obtaining and maintaining CFC status. Sector-specific rules may apply, particularly for regulated financial activities.</p></div><div>{cfcBenefits.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
      <section className="en-section en-cfc-process"><div className="shell"><div className="en-heading-row"><div><p className="en-eyebrow">How CAF supports the journey</p><h2>From eligibility question to compliant operation.</h2></div><p>The CFC application is one part of the wider establishment project. CAF keeps the entity, tax, people and reporting work connected.</p></div><div className="en-process-list"><article><span>01</span><div><h3>Eligibility review</h3><p>Assess the intended activity, category, substance and regional business plan.</p></div></article><article><span>02</span><div><h3>CFC application</h3><p>Coordinate the letter of intent, business plan, application documents and supporting information.</p></div></article><article><span>03</span><div><h3>Company establishment</h3><p>Set up the entity and align the legal and tax structure with the approved project.</p></div></article><article><span>04</span><div><h3>People and operations</h3><p>Coordinate payroll, HR, work-permit and operational compliance requirements.</p></div></article><article><span>05</span><div><h3>Ongoing compliance</h3><p>Maintain accounting, audit, tax, reporting and annual CFC obligations.</p></div></article></div><p className="en-cfc-source">Current framework checked against the official <a href="https://casablancafinancecity.com/en/doingbusiness" target="_blank" rel="noreferrer">CFC Doing Business</a> and <a href="https://casablancafinancecity.com/en/node/101" target="_blank" rel="noreferrer">membership criteria</a> pages. Final eligibility and treatment depend on the approved application and applicable law.</p></div></section>
      <section className="en-section en-home-cta"><div className="shell"><p className="en-eyebrow">International investment enquiry</p><h2>Start with the project—not with a tax promise.</h2><p>CAF will examine the activity, ownership, operating substance and regional ambition before recommending a structure.</p><a className="en-primary" href="/en/contact">Discuss Morocco and CFC status</a></div></section>
    </>
  );
}

function FormationPage() {
  return (
    <>
      <PageIntro eyebrow="Company formation in Morocco" title="Create your company in Morocco." text="A coordinated English-speaking team for structure selection, registration, tax setup and the practical work required to begin operating." image="/assets/generated/caf-casablanca-hero.webp" imageAlt="Casablanca skyline and contemporary business architecture">
        <a className="en-primary" href="#formation-enquiry">Discuss your company</a><a className="en-secondary" href="#formation-process">See the process</a>
      </PageIntro>
      <section className="en-search-statement"><div className="shell"><span>For international founders</span><strong>Company formation, followed by accounting, tax, payroll and advisory under one roof.</strong></div></section>
      <section className="en-section" id="formation-process"><div className="shell"><div className="en-heading-row"><div><p className="en-eyebrow">From idea to operations</p><h2>A clear formation process.</h2></div><p>The exact requirements depend on your activity and structure. CAF turns them into a coordinated sequence for your project.</p></div><div className="en-process-list">{formationSteps.map(([number, title, text]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>
      <section className="en-detail-split"><div className="en-detail-image"><img src="/assets/generated/caf-cross-border-advisory.webp" alt="Advisers reviewing an international business project" loading="lazy" /></div><div className="en-detail-copy"><p className="en-eyebrow">What CAF coordinates</p><h2>More than registration.</h2><ul><li>Legal structure framing</li><li>Company registration support</li><li>Tax identification and compliance setup</li><li>Accounting and reporting preparation</li><li>Payroll, social and HR coordination</li><li>Ongoing legal, tax and strategic advice</li></ul></div></section>
      <section className="en-section en-faq-section"><div className="shell en-faq-grid"><div><p className="en-eyebrow">Common questions</p><h2>Before you begin.</h2></div><div>{formationFaqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>
      <section className="en-enquiry" id="formation-enquiry"><div className="shell en-enquiry-grid"><div><p className="en-eyebrow">Start with the right questions</p><h2>Describe the company you want to create.</h2><p>Share the activity, founders, timing and what you already know. CAF will use that context to prepare the first conversation.</p></div><LeadPanel title="Discuss your company" /></div></section>
    </>
  );
}

function AccountingPage() {
  return (
    <>
      <PageIntro eyebrow="Accounting and tax services in Morocco" title="Reliable local numbers. Clear international communication." text="Ongoing accounting, tax, payroll, reporting and audit support for companies operating in Morocco." image="/assets/generated/caf-architectural-signature.webp" imageAlt="Contemporary Moroccan architecture with stone and blue glass" tone="stone">
        <a className="en-primary" href="#accounting-enquiry">Discuss your needs</a><a className="en-secondary" href="/en/about">Why CAF</a>
      </PageIntro>
      <ProofBand />
      <section className="en-section"><div className="shell"><div className="en-heading-row"><div><p className="en-eyebrow">One coordinated finance function</p><h2>Support that continues after setup.</h2></div><p>CAF combines day-to-day execution with senior advisory, helping international decision-makers understand the local position.</p></div><div className="en-service-list">{accountingServices.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
      <section className="en-quote-section"><div className="shell"><blockquote>“One firm. Complete expertise. Zero coordination on your end.”</blockquote><p>CAF Management’s one-stop-shop model brings specialists together around the same business.</p></div></section>
      <section className="en-enquiry" id="accounting-enquiry"><div className="shell en-enquiry-grid"><div><p className="en-eyebrow">Accounting and tax enquiry</p><h2>Give your business a dependable local finance team.</h2><p>Tell us whether the company already operates in Morocco, what reporting you need and where the current pressure points are.</p></div><LeadPanel title="Discuss accounting and tax" /></div></section>
    </>
  );
}

function MarketEntryPage() {
  return (
    <>
      <PageIntro eyebrow="Market entry in Morocco" title="Enter Morocco with a team that knows the terrain." text="Practical support for international businesses evaluating, establishing and operating in the Moroccan market." image="/assets/generated/caf-market-entry-gateway.webp" imageAlt="Casablanca port, business district and regional trade gateway">
        <a className="en-primary" href="#market-enquiry">Discuss market entry</a><a className="en-secondary" href="#market-support">View the support</a>
      </PageIntro>
      <section className="en-section" id="market-support"><div className="shell"><div className="en-heading-row"><div><p className="en-eyebrow">From assessment to continuity</p><h2>A local partner across the entry journey.</h2></div><p>CAF connects strategic decisions with the legal, financial and operational work required to make them real.</p></div><div className="en-service-list en-service-list-dark">{marketEntryServices.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
      <section className="en-detail-split en-detail-reverse"><div className="en-detail-image"><img src="/assets/extracted/deck2-p14-01.jpg" alt="CAF Management office entrance in Casablanca" loading="lazy" /></div><div className="en-detail-copy"><p className="en-eyebrow">Based in Casablanca</p><h2>International perspective. Local execution.</h2><p>CAF has supported businesses across Africa, the MENA region and Europe. The team helps international decision-makers move from opportunity to a credible local operating model.</p><a className="en-text-link" href="/en/about">Meet the firm</a></div></section>
      <section className="en-enquiry" id="market-enquiry"><div className="shell en-enquiry-grid"><div><p className="en-eyebrow">Market-entry enquiry</p><h2>Tell us what Morocco means for your business.</h2><p>Share the industry, intended activity, current stage and the decisions your team needs to make.</p></div><LeadPanel title="Discuss market entry" /></div></section>
    </>
  );
}

function AboutPage() {
  return (
    <>
      <PageIntro eyebrow="CAF Management · Casablanca" title="Built on proximity. Proven through experience." text="Since 1993, CAF Management has supported businesses of different sizes and industries through creation, management, audit and growth." image="/assets/extracted/deck2-p06-01.jpg" imageAlt="CAF Management team" tone="light">
        <a className="en-primary" href="/en/contact">Meet your local partner</a>
      </PageIntro>
      <ProofBand />
      <section className="en-section"><div className="shell en-story-grid"><div><p className="en-eyebrow">Our story</p><h2>One firm around the whole business.</h2></div><div><p>CAF Management was created in Casablanca in 1993 to give business leaders rigorous expertise without losing the value of a close relationship. Over three decades, the firm expanded its departments, services and international reach.</p><p>Today, CAF combines tax, audit, accounting, legal, payroll, finance and strategic expertise. Specialists work together, decisions stay connected, and the relationship continues well beyond a single transaction.</p><p>That one-stop-shop model supports more than 300 active clients and a client portfolio representing 970 million dirhams.</p></div></div></section>
      <section className="en-timeline-section"><div className="shell"><div className="en-timeline-heading"><p className="en-eyebrow">Three decades of development</p><h2>Built over time. Ready for what comes next.</h2></div><div className="en-timeline">{milestones.map(([year, text]) => <article key={year}><strong>{year}</strong><p>{text}</p></article>)}</div></div></section>
      <section className="en-team-feature"><div className="shell en-team-grid"><div className="en-team-portrait"><img src="/assets/extracted/deck2-p04-01.jpg" alt="Abdelmjid Samri, Managing Partner of CAF Management" loading="lazy" /></div><div><p className="en-eyebrow">A word from the CEO</p><h2>Abdelmjid Samri</h2><blockquote>“From market entry to financial optimization, we partner with businesses to navigate complex investment landscapes, unlock opportunities and build sustainable growth.”</blockquote><p>For more than 30 years, CAF Management has relied on the diversity and skill of its people to support clients of every size and industry across Africa, the MENA region and Europe. Proximity between the team and each client makes it possible to resolve complex questions efficiently and build lasting relationships.</p><p>Strategic problem-solving, international expertise and useful technology come together to strengthen decisions and investor confidence in Morocco’s competitive market.</p></div></div></section>
      <section className="en-section en-team-section en-about-team" id="our-team"><div className="shell"><div className="en-heading-row"><div><p className="en-eyebrow">The CAF team</p><h2>The energy of unity.</h2></div><p>The team is the cornerstone of CAF’s work. Experienced, multilingual specialists bring different perspectives to a common goal: fitted solutions, rigorous execution and greater confidence in a complex business environment.</p></div><div className="en-team-documentary"><img src="/assets/extracted/deck2-p06-01.jpg" alt="CAF Management team together in Casablanca" loading="lazy" /><p>CAF’s vision is to create leaders, inspire people and bring ideas together around what matters most.</p></div><div className="en-team-cards">{teamMembers.map((member) => <article className="en-team-card" key={member.name}><div><img src={member.image} alt={`${member.name}, ${member.role} at CAF Management`} loading="lazy" /></div><h3>{member.name}</h3><p>{member.role}</p></article>)}</div></div></section>
      <section className="en-section en-purpose-section"><div className="shell en-purpose-grid"><article><p className="en-eyebrow">Vision</p><h2>A trusted partner for informed decisions.</h2><p>CAF develops dynamic solutions based on trust, helping decision-makers see clearly, act confidently and create sustainable value.</p></article><article><p className="en-eyebrow">Mission</p><h2>Expertise that also builds capability.</h2><p>Beyond solving today’s business questions, CAF contributes to developing future executives through knowledge, rigor and hands-on partnership.</p></article><article><p className="en-eyebrow">Reach</p><h2>Casablanca at the center of a wider network.</h2><p>The team supports companies and investors operating between Morocco, Africa, the MENA region and Europe.</p></article></div></section>
      <section className="en-principles"><div className="shell"><article><span>01</span><h3>Collaborative</h3><p>By combining skills and experience, the team develops more comprehensive and innovative answers.</p></article><article><span>02</span><h3>Trust</h3><p>Relationships are built for the long term, with the client’s success and satisfaction at the center.</p></article><article><span>03</span><h3>Transparency</h3><p>Clear communication creates mutual respect and makes every collaboration more effective.</p></article></div></section>
      <section className="en-section en-values"><div className="shell"><p className="en-eyebrow">The values that guide every project</p><h2>Quality, rigor, transparency and proximity.</h2><p className="en-values-intro">Integrity earns trust. Excellence raises the quality of the work. Innovation makes solutions more effective. Close client relationships reveal the real need. Engagement turns advice into concrete, lasting results.</p><div><span>Integrity</span><span>Innovation</span><span>Engagement</span><span>Collaboration</span><span>Responsibility</span></div></div></section>
      <section className="en-section en-home-cta"><div className="shell"><p className="en-eyebrow">Work with CAF Management</p><h2>Bring your Morocco project to the team.</h2><a className="en-primary" href="/en/contact">Request a conversation</a></div></section>
    </>
  );
}

function ContactPage() {
  return (
    <section className="en-contact-page">
      <div className="shell en-contact-grid">
        <div><p className="en-eyebrow">Contact CAF Management</p><h1>Let’s discuss your project in Morocco.</h1><p>Tell us what you are planning, where the business stands today and what kind of support you need.</p><div className="en-contact-details"><span>+212 5 22 94 53 82 / 83 / 84</span><a href="mailto:info@caf.ma">info@caf.ma</a><a href="mailto:hiba@caf.ma">hiba@caf.ma</a><a href="https://www.linkedin.com/company/caf-management/" target="_blank" rel="noreferrer">LinkedIn · CAF Management</a><span>Hay Hana, rue Mhiwla n°17<br />20210 Casablanca, Morocco</span></div><img src="/assets/extracted/deck2-p14-01.jpg" alt="CAF Management office in Casablanca" /></div>
        <LeadPanel title="Tell us about your project" />
      </div>
    </section>
  );
}

function NotFoundPage() {
  return <section className="en-not-found"><div className="shell"><p className="en-eyebrow">Page not found</p><h1>Let’s get you back to Morocco.</h1><a className="en-primary" href="/en/">Return to the English home</a></div></section>;
}

export function EnglishSite() {
  const route = normalizedPath();
  useSeo(route);
  useEffect(() => {
    if (!window.location.hash) return;
    const targetId = decodeURIComponent(window.location.hash.slice(1));
    const frame = window.requestAnimationFrame(() => {
      document.getElementById(targetId)?.scrollIntoView({ block: "start" });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [route]);
  let page;
  if (route === "/en") page = <EnglishHome />;
  else if (route === "/en/services") page = <ServicesPage />;
  else if (route === "/en/company-formation-morocco") page = <FormationPage />;
  else if (route === "/en/accounting-tax-morocco") page = <AccountingPage />;
  else if (route === "/en/tax-advisory-morocco") page = <TaxAdvisoryPage />;
  else if (route === "/en/audit-accounting-morocco") page = <AuditAccountingPage />;
  else if (route === "/en/legal-payroll-morocco") page = <LegalPayrollPage />;
  else if (route === "/en/market-entry-morocco") page = <MarketEntryPage />;
  else if (route === "/en/invest-in-morocco-cfc") page = <InvestMoroccoPage />;
  else if (route === "/en/about") page = <AboutPage />;
  else if (route === "/en/contact") page = <ContactPage />;
  else page = <NotFoundPage />;

  return <main className="english-site"><EnglishHeader />{page}<EnglishFooter /></main>;
}
