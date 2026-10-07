/**
 * English content for the /en/ pages, aimed at UK and US companies that employ
 * staff in Morocco. Contact details and address come from SITE in consts.ts.
 *
 * The service and guide pages do not exist yet (in either language), so the
 * English cards point to sections of the home page instead of dead links.
 */
export const SITE_EN = {
  legalName: "CAF — Payroll, HR & Audit",
  tagline: "Payroll, HR compliance & statutory audit in Morocco",
  description:
    "Moroccan payroll and HR for UK and US companies: payslips, CNSS, AMO and income tax filings, employment contracts, HR compliance audits and statutory audit, handled in English by a Casablanca firm.",
} as const;

/** Indicative figures: to be confirmed by the firm before going live. */
export const STATS_EN = [
  { value: "120+", label: "companies supported in Morocco" },
  { value: "8 yrs", label: "of payroll, HR and statutory audit expertise" },
  { value: "100%", label: "of filings made online via Damancom" },
  { value: "24 h", label: "response time on business days" },
] as const;

export const SERVICES_EN = [
  {
    id: 22,
    title: "Payroll & social security filings",
    desc:
      "Monthly payslips, CNSS social security, AMO health insurance and payroll income tax, filed online through Damancom, plus annual returns. Reports in English for your head office.",
  },
  {
    id: 23,
    title: "HR administration",
    desc:
      "Employee files, leave and absence tracking, mandatory registers, onboarding and leavers, and HR dashboards for your local and group managers.",
  },
  {
    id: 24,
    title: "Employment contracts",
    desc:
      "Permanent and fixed-term contracts, amendments and specific clauses drafted under the Moroccan Labour Code, with English versions for your HR team.",
  },
  {
    id: 20,
    title: "HR compliance audit",
    desc:
      "A review of your Moroccan entity against the Labour Code and CNSS rules, a risk map and a remediation plan. Useful before an acquisition or a CNSS inspection.",
  },
] as const;

export const GUIDES_EN = [
  {
    title: "How Moroccan payroll works: CNSS, AMO, income tax",
    desc: "How employer and employee contributions and payroll income tax are calculated.",
  },
  {
    title: "Minimum wage & current rates",
    desc: "The statutory minimum wage (SMIG), income tax bands and contribution ceilings.",
  },
  {
    title: "Permanent vs fixed-term contracts",
    desc: "Mandatory clauses, durations, probation periods and common pitfalls.",
  },
  {
    title: "Internal work rules",
    desc: "When they become mandatory, what they must contain and how to file them with the labour inspectorate.",
  },
  {
    title: "Preparing for a CNSS inspection",
    desc: "The documents to gather and what inspectors look at.",
  },
  {
    title: "Final settlement when an employee leaves",
    desc: "What the final pay must include, the settlement receipt and deadlines.",
  },
] as const;

export const FAQ_EN = [
  {
    q: "Do we need a Moroccan entity to employ staff in Morocco?",
    a:
      "In practice, yes. To run Moroccan payroll you must register with the CNSS as an employer, which usually means setting up a subsidiary or a branch. Our sister team handles company formation, and we take over payroll from the first hire.",
  },
  {
    q: "How is payroll calculated in Morocco (CNSS, AMO, income tax)?",
    a:
      "Gross salary is the base for CNSS social security contributions (up to a ceiling) and for AMO health insurance. Income tax is then calculated on net taxable pay using progressive bands. On top come the employer’s share, the vocational training levy and, where applicable, supplementary pension contributions.",
  },
  {
    q: "Can you report payroll costs to our UK or US head office?",
    a:
      "Yes. Alongside Moroccan payslips and filings, we produce a monthly payroll summary in English, mapped to your group’s cost centres, so your finance team can book and consolidate it.",
  },
  {
    q: "What is the minimum wage in Morocco?",
    a:
      "The minimum wage (SMIG for industry, trade and services; SMAG for agriculture) is set by decree and revised periodically. We always apply the rate in force on the payroll date.",
  },
  {
    q: "When is a statutory auditor required?",
    a:
      "A statutory auditor (commissaire aux comptes) is mandatory for every SA (joint-stock company), and for SARLs and partnerships whose revenue exceeds the legal threshold of MAD 50 million excluding VAT. Shareholders or a court can also request one.",
  },
  {
    q: "Are internal work rules mandatory?",
    a:
      "Yes, for any company that normally employs at least 10 people. The rules must be submitted to staff representatives and approved by the labour inspectorate within two years of the business opening.",
  },
  {
    q: "What does the final settlement include when an employee leaves?",
    a:
      "The month’s salary, pay in lieu of untaken leave, any notice and severance pay, pro-rata bonuses, and the end-of-contract documents: employment certificate and signed settlement receipt.",
  },
] as const;
