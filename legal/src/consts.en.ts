/**
 * English content for the /en/ pages, aimed at UK and US groups with a
 * subsidiary in Morocco. Contact details and address come from SITE in consts.ts.
 *
 * The service and guide pages do not exist yet (in either language), so the
 * English cards point to sections of the home page instead of dead links.
 */
export const SITE_EN = {
  legalName: "CAF — Audit & Assurance",
  tagline: "Statutory audit, internal audit & group reporting in Morocco",
  description:
    "Audit firm in Casablanca for UK and US groups with Moroccan subsidiaries: statutory audit, group reporting packages, internal audit, consolidation and performance audit, under ISA and Moroccan standards, reported in English.",
} as const;

/** Indicative figures: to be confirmed by the firm before going live. */
export const STATS_EN = [
  { value: "ISA", label: "international and Moroccan standards applied" },
  { value: "60+", label: "statutory audit engagements" },
  { value: "4", label: "types of audit under one roof" },
  { value: "100%", label: "engagements documented in a standard audit file" },
] as const;

export const SERVICES_EN = [
  {
    id: 18,
    title: "Statutory audit of your Moroccan subsidiary",
    desc:
      "Audit opinion on the annual and consolidated accounts, general and special reports, legally required checks, and communication with those charged with governance, with a summary in English for head office.",
  },
  {
    id: 14,
    title: "Internal audit",
    desc:
      "Assessment of internal controls, processes and risk management at your Moroccan operations, prioritised recommendations and follow-up on implementation.",
  },
  {
    id: 16,
    title: "Consolidation & group reporting audit",
    desc:
      "Review of the group reporting package, consolidation scope, methods and adjustments, intra-group eliminations and deferred tax. We work alongside your group auditors as component auditor.",
  },
  {
    id: 17,
    title: "Performance audit",
    desc:
      "Analysis of the economy, efficiency and effectiveness of an organisation, a project or a grant, with indicators and an improvement plan.",
  },
] as const;

export const GUIDES_EN = [
  {
    title: "When is a statutory auditor mandatory in Morocco?",
    desc: "SAs, the revenue threshold for SARLs and partnerships, and court appointments.",
  },
  {
    title: "How an audit engagement runs",
    desc: "From engagement letter to opinion: planning, risk assessment, testing and completion.",
  },
  {
    title: "ISA and Moroccan auditing standards",
    desc: "What the International Standards on Auditing cover and how they fit with the Moroccan profession’s framework.",
  },
  {
    title: "Consolidated accounts: scope & methods",
    desc: "Full consolidation, proportionate consolidation and the equity method, and how control is measured.",
  },
  {
    title: "Building a risk map",
    desc: "Identifying, rating and ranking an organisation’s risks to steer the audit plan.",
  },
] as const;

export const FAQ_EN = [
  {
    q: "Does our Moroccan subsidiary need a statutory auditor?",
    a:
      "Every SA (joint-stock company) must appoint a statutory auditor (commissaire aux comptes). For SARLs, general partnerships and limited partnerships, it becomes mandatory once revenue exceeds the legal threshold of MAD 50 million excluding VAT. Shareholders holding part of the capital, or a court, can also request one.",
  },
  {
    q: "Can you act as component auditor for our UK or US group auditors?",
    a:
      "Yes. We audit the Moroccan subsidiary’s reporting package to the group’s instructions and timetable, answer the group auditor’s questions and report back in English, alongside the local statutory audit.",
  },
  {
    q: "What is the difference between a statutory and a contractual audit?",
    a:
      "A statutory audit is required by law: its term and scope are regulated and it ends with a public opinion on the accounts. A contractual audit is commissioned voluntarily for a specific need (an acquisition, a limited review, a particular issue) and its scope is set by the engagement letter.",
  },
  {
    q: "Which standards do you apply?",
    a:
      "Our engagements follow the International Standards on Auditing (ISA) and the framework of the Moroccan Order of Chartered Accountants, with a standard audit file, a risk assessment and an independent review of conclusions.",
  },
  {
    q: "What do the different audit opinions mean?",
    a:
      "An unmodified opinion confirms the accounts are fairly presented. A qualified opinion flags a specific disagreement or limitation. An adverse opinion means the accounts as a whole are not fairly presented. A disclaimer of opinion results from a limitation so wide that the auditor cannot conclude.",
  },
  {
    q: "Do you audit group consolidated accounts?",
    a:
      "Yes. We cover the consolidation scope and its justification, consolidation methods, harmonisation adjustments, intra-group eliminations, goodwill and deferred tax, working with the subsidiaries’ auditors.",
  },
] as const;
