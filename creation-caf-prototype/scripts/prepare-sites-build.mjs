#!/usr/bin/env node
import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const index = path.join(dist, "client", "index.html");
const worker = path.join(root, "worker", "index.js");
const hosting = path.join(root, ".openai", "hosting.json");

for (const file of [index, worker, hosting]) {
  if (!existsSync(file)) throw new Error("Missing Sites build input: " + file);
}

mkdirSync(path.join(dist, "server"), { recursive: true });
mkdirSync(path.join(dist, ".openai"), { recursive: true });
copyFileSync(worker, path.join(dist, "server", "index.js"));
copyFileSync(hosting, path.join(dist, ".openai", "hosting.json"));

const seoRoutes = [
  {
    path: "en",
    title: "Business Services in Morocco | CAF Management",
    description: "Build and operate your business in Morocco with one local team for company formation, accounting, tax, legal, payroll and market entry.",
  },
  {
    path: "en/company-formation-morocco",
    title: "Company Formation in Morocco | CAF Management",
    description: "Create your company in Morocco with local support for structure selection, registration, tax identification, compliance and ongoing management.",
  },
  {
    path: "en/accounting-tax-morocco",
    title: "Accounting and Tax Services in Morocco | CAF Management",
    description: "English-speaking accounting and tax support in Morocco for international founders, foreign-owned companies and growing businesses.",
  },
  {
    path: "en/tax-advisory-morocco",
    title: "Tax Advisory in Morocco | CAF Management",
    description: "Moroccan and cross-border tax advisory for international businesses, including compliance, structuring, risk reviews, VAT claims and disputes.",
  },
  {
    path: "en/audit-accounting-morocco",
    title: "Audit and Accounting in Morocco | CAF Management",
    description: "Audit, accounting, financial reporting and internal-control support for international and Moroccan companies.",
  },
  {
    path: "en/legal-payroll-morocco",
    title: "Legal, Payroll and HR in Morocco | CAF Management",
    description: "Coordinated legal, governance, payroll, social and HR support for businesses operating in Morocco.",
  },
  {
    path: "en/market-entry-morocco",
    title: "Morocco Market Entry Advisory | CAF Management",
    description: "Enter the Moroccan market with support for strategy, compliance, company setup, finance, due diligence and local operations.",
  },
  {
    path: "en/services",
    title: "Accounting, Tax, Audit and Advisory Services | CAF Management",
    description: "Explore CAF Management's complete services in Morocco: accounting, tax, audit, legal, payroll, company creation, restructuring, finance and investor support.",
  },
  {
    path: "en/invest-in-morocco-cfc",
    title: "Invest in Morocco and CFC Status | CAF Management",
    description: "Evaluate an investment in Morocco and understand Casablanca Finance City eligibility, incentives, establishment and ongoing compliance.",
  },
  {
    path: "en/about",
    title: "About CAF Management | Casablanca Advisory Firm",
    description: "Meet CAF Management, a Casablanca advisory, accounting and audit firm supporting businesses in Morocco since 1993.",
  },
  {
    path: "en/contact",
    title: "Contact CAF Management | Start a Project in Morocco",
    description: "Tell CAF Management about your business project in Morocco and arrange a first conversation with the Casablanca team.",
  },
];

const template = readFileSync(index, "utf8");
for (const route of seoRoutes) {
  const routeDir = path.join(dist, "client", ...route.path.split("/"));
  const canonical = `https://www.caf.ma/${route.path}${route.path === "en" ? "/" : ""}`;
  const html = template
    .replace('<html lang="fr">', '<html lang="en">')
    .replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`)
    .replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${route.description}" />`)
    .replace("</head>", `    <link rel="canonical" href="${canonical}" />\n    <meta property="og:title" content="${route.title}" />\n    <meta property="og:description" content="${route.description}" />\n    <meta property="og:type" content="website" />\n    <meta property="og:url" content="${canonical}" />\n  </head>`);
  mkdirSync(routeDir, { recursive: true });
  writeFileSync(path.join(routeDir, "index.html"), html);
}

console.log(`Prepared Sites build with ${seoRoutes.length} English SEO entries.`);
