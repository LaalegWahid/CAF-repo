/**
 * English content for the /en/ pages, aimed at UK and US buyers, investors and
 * funds looking at Moroccan companies. Contact details come from SITE in consts.ts.
 *
 * The service and guide pages do not exist yet (in either language), so the
 * English cards point to sections of the home page instead of dead links.
 */
export const SITE_EN = {
  legalName: "CAF — Corporate Finance & M&A",
  tagline: "Valuation, due diligence & M&A support in Morocco",
  description:
    "Corporate finance team in Casablanca for UK and US investors: business valuation (DCF, multiples, adjusted net assets), buy-side and sell-side due diligence, asset verification and financing, reported in English.",
} as const;

/** Indicative figures: to be confirmed by the firm before going live. */
export const STATS_EN = [
  { value: "40+", label: "valuations & due diligence engagements" },
  { value: "3", label: "cross-checked methods: DCF, multiples, adjusted net assets" },
  { value: "100%", label: "of deals run through a secure data room" },
  { value: "4–8 wks", label: "typical due diligence timeline" },
] as const;

export const SERVICES_EN = [
  {
    id: 15,
    title: "Acquisition due diligence & valuation",
    desc:
      "Financial, tax and employment review of a Moroccan target, quality of earnings and EBITDA normalisation, then a multi-method valuation (DCF, market multiples, adjusted net assets). Reports in English, with Moroccan GAAP items explained.",
  },
  {
    id: 21,
    title: "Physical asset count & tagging",
    desc:
      "Physical count of fixed assets and inventory, reconciliation with the accounting records, tagging and coding, and treatment of differences. Often required before a closing or a carve-out.",
  },
] as const;

export const GUIDES_EN = [
  {
    title: "Valuation methods: DCF, multiples, adjusted net assets",
    desc: "When to use discounted cash flow, market comparables or adjusted net asset value, and how to reconcile them.",
  },
  {
    title: "Due diligence checklist",
    desc: "The finance, tax, employment, legal and operational documents to gather before opening the data room.",
  },
  {
    title: "Selling a business in Morocco: the steps",
    desc: "From teaser and letter of intent to closing: a typical timetable and what to watch for.",
  },
  {
    title: "The data room",
    desc: "Folder structure, access rights, access logs and Q&A: a data room that reassures buyers.",
  },
  {
    title: "Warranties & indemnities in Moroccan deals",
    desc: "The role of the seller’s warranty (garantie d’actif et de passif), caps and de minimis, duration, escrow and how it ties to due diligence.",
  },
] as const;

export const FAQ_EN = [
  {
    q: "What does acquisition due diligence cover?",
    a:
      "An in-depth review of a target before you buy it: quality of the accounts, debt and off-balance-sheet commitments, tax and employment risks, key contracts and litigation. The aim is to confirm value, adjust the price and prepare the seller’s warranties.",
  },
  {
    q: "Do you report in English and against IFRS or US GAAP?",
    a:
      "Our reports are written in English. Moroccan companies keep their books under the Moroccan accounting code (CGNC), so we flag the main differences with IFRS or US GAAP that matter for your valuation and your group reporting.",
  },
  {
    q: "Which methods do you use to value a business?",
    a:
      "We always cross-check several approaches: discounted cash flow (DCF), multiples from comparable companies or transactions, and adjusted net asset value. The value range comes from where those methods converge.",
  },
  {
    q: "What is a garantie d’actif et de passif?",
    a:
      "It is the Moroccan (and French) form of seller warranty and indemnity: the seller compensates the buyer if an undisclosed liability appears, or an asset turns out to be overstated, after the sale but for a cause that predates it. It comes with a cap, a de minimis threshold, a duration and often an escrow of part of the price.",
  },
  {
    q: "Can a foreign buyer repatriate dividends and sale proceeds?",
    a:
      "Yes. Foreign investment made in foreign currency and properly declared benefits from a transfer guarantee under Moroccan foreign exchange rules, covering dividends and sale proceeds. We check the investment is documented so the guarantee applies.",
  },
  {
    q: "How does selling a company in Morocco work?",
    a:
      "In outline: preparation and valuation, teaser and information memorandum, buyer outreach, letter of intent, due diligence, negotiation of the share purchase agreement and warranties, satisfaction of conditions precedent, then closing and transfer of shares.",
  },
] as const;
