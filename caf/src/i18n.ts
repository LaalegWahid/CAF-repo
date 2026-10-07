/**
 * Language handling for the French site (/) and its English version (/en/).
 * The English pages target UK and US companies setting up or operating in Morocco.
 *
 * Components call `langFromUrl(Astro.url)` and read their copy from `ui(lang)`,
 * so a page only has to live under /en/ to render the English chrome.
 */
import { SERVICES, NAV, SITE } from './consts';

export type Lang = 'fr' | 'en';

export function langFromUrl(url: URL): Lang {
  return url.pathname === '/en' || url.pathname.startsWith('/en/') ? 'en' : 'fr';
}

/** English service pages: same shape as SERVICES in consts.ts. */
export const SERVICES_EN = [
  {
    slug: '/en/company-formation-morocco',
    nav: 'Company formation',
    title: 'Company formation in Morocco',
    blurb:
      'Incorporation, registration and launch of your Moroccan entity: SARL (LLC), SA, branch or liaison office.',
  },
  {
    slug: '/en/corporate-structuring',
    nav: 'Structuring',
    title: 'Legal strategy & group structuring',
    blurb:
      'Choice of entity, holding companies, shareholders’ agreements, restructuring and governance.',
  },
  {
    slug: '/en/corporate-secretarial',
    nav: 'Corporate law',
    title: 'Corporate law & company secretarial',
    blurb:
      'Annual meetings, minutes, capital changes, share transfers, conversions and dissolutions.',
  },
  {
    slug: '/en/regulatory-compliance',
    nav: 'Compliance',
    title: 'Regulatory monitoring & compliance',
    blurb:
      'Ongoing regulatory watch, a map of your obligations and hands-on compliance work.',
  },
  {
    slug: '/en/africa-expansion',
    nav: 'Africa expansion',
    title: 'Expanding into Africa from Morocco',
    blurb:
      'Use your Moroccan entity as a regional hub to open subsidiaries in West and Central Africa.',
  },
] as const;

export const NAV_EN = [
  { href: '/en/', label: 'Home' },
  ...SERVICES_EN.map((s) => ({ href: s.slug, label: s.nav })),
] as const;

/**
 * French ↔ English page pairs, used for hreflang tags and the language switcher.
 * The Africa page is not a translation of /deploiement-a-letranger (different
 * audience), so neither is paired; the switcher falls back to the home page.
 */
const PAIRS: [string, string][] = [
  ['/', '/en/'],
  ['/creation-de-societe', '/en/company-formation-morocco'],
  ['/strategie-juridique', '/en/corporate-structuring'],
  ['/droit-des-societes', '/en/corporate-secretarial'],
  ['/veille-conformite-juridique', '/en/regulatory-compliance'],
];

const norm = (p: string) => (p === '/' || p === '/en/' ? p : p.replace(/\/+$/, '')) || '/';

/** Returns { fr, en } paths for a page, or only its own language when it has no translation. */
export function alternatesFor(path: string): Partial<Record<Lang, string>> {
  const p = path === '/en' ? '/en/' : norm(path);
  const pair = PAIRS.find(([fr, en]) => fr === p || en === p);
  if (pair) return { fr: pair[0], en: pair[1] };
  return p.startsWith('/en/') ? { en: p } : { fr: p };
}

export function servicesFor(lang: Lang) {
  return lang === 'en' ? SERVICES_EN : SERVICES;
}

export function navFor(lang: Lang) {
  return lang === 'en' ? NAV_EN : NAV;
}

const UI = {
  fr: {
    htmlLang: 'fr',
    ogLocale: SITE.locale,
    schemaLang: 'fr-FR',
    home: '/',
    tagline: SITE.tagline,
    description: SITE.description,
    skip: 'Aller au contenu',
    homeLabel: 'accueil',
    mainNav: 'Navigation principale',
    openMenu: 'Ouvrir le menu',
    cta: 'Prendre rendez-vous',
    switchLabel: 'English',
    switchAria: 'Read this site in English',
    crumbHome: 'Accueil',
    areaServed: ['Maroc', 'France'],
    serviceArea: 'Maroc',
    country: 'Maroc',
    audience: 'Entreprises et groupes opérant au Maroc',
    faqEyebrow: 'Questions fréquentes',
    faqTitle: 'Ce que les dirigeants nous demandent',
    relatedEyebrow: 'Autres expertises',
    relatedTitle: 'Le reste de l’accompagnement juridique',
    footer: {
      about: (year: string) =>
        `Cabinet d’expertise comptable et de conseil juridique à Casablanca depuis ${year}. Nous accompagnons les entreprises qui créent, structurent et développent leur activité au Maroc.`,
      onSite: 'Sur ce site',
      expertise: 'Expertises juridiques',
      firm: 'Le cabinet',
      mainSite: 'Site principal — caf.ma',
      services: 'Nos services',
      about2: 'Qui sommes-nous',
      blog: 'Blog',
      contact: 'Contact',
      rights: (name: string) => `Tous droits réservés. Ce site est édité par ${name}.`,
      terms: 'Conditions générales',
      privacy: 'Politique de confidentialité',
    },
    contact: {
      title: 'Parlons de votre projet d’implantation',
      lede: 'Un entretien de cadrage de 30 minutes, sans engagement, pour évaluer la forme juridique adaptée, le calendrier réaliste et le budget à prévoir.',
      phone: 'Téléphone',
      email: 'E-mail',
      office: 'Bureaux',
      hours: 'Horaires',
      formNote:
        'Formulaire en mode e-mail. Pour un envoi fluide, renseignez FORM_ENDPOINT dans src/consts.ts (Formspree, Web3Forms, Vercel Forms…).',
      name: 'Nom et prénom',
      workEmail: 'E-mail professionnel',
      company: 'Société',
      project: 'Votre projet',
      placeholder: 'Activité, calendrier souhaité, effectif envisagé au Maroc…',
      consent:
        'J’accepte que ces informations soient utilisées pour être recontacté(e) au sujet de ma demande.',
      submit: 'Demander un rendez-vous',
    },
    legalForms: {
      eyebrow: 'Formes juridiques',
      title: 'Quelle structure pour votre activité au Maroc ?',
      intro:
        'La SARL couvre la majorité des projets de filiale. La succursale et le bureau de liaison conviennent aux phases de test. Nous tranchons ensemble lors du cadrage.',
      aria: 'Comparatif des formes juridiques',
      cols: ['Forme', 'Capital social', 'Associés', 'Responsabilité', 'Idéale pour'],
      disclaimer:
        'Comparatif simplifié à jour à la date de rédaction. Les seuils, obligations de commissariat aux comptes et régimes sectoriels évoluent — la structure retenue est validée par écrit avant toute formalité.',
    },
  },
  en: {
    htmlLang: 'en',
    ogLocale: 'en_GB',
    schemaLang: 'en',
    home: '/en/',
    tagline: 'Company formation & legal advisory in Morocco',
    description:
      'Accounting and legal advisory firm in Casablanca since 1995. We help UK and US companies set up, structure and run their business in Morocco: company formation, group structuring, corporate law, compliance and expansion into Africa.',
    skip: 'Skip to content',
    homeLabel: 'home',
    mainNav: 'Main navigation',
    openMenu: 'Open menu',
    cta: 'Book a call',
    switchLabel: 'Français',
    switchAria: 'Lire ce site en français',
    crumbHome: 'Home',
    areaServed: ['Morocco', 'United Kingdom', 'United States'],
    serviceArea: 'Morocco',
    country: 'Morocco',
    audience: 'UK and US companies doing business in Morocco',
    faqEyebrow: 'FAQ',
    faqTitle: 'What business leaders ask us',
    relatedEyebrow: 'More services',
    relatedTitle: 'The rest of our legal support',
    footer: {
      about: (year: string) =>
        `Accounting and legal advisory firm in Casablanca since ${year}. We help international companies set up, structure and grow their business in Morocco.`,
      onSite: 'On this site',
      expertise: 'Services',
      firm: 'The firm',
      mainSite: 'Main website — caf.ma (French)',
      services: 'All services',
      about2: 'About us',
      blog: 'Blog',
      contact: 'Contact',
      rights: (name: string) => `All rights reserved. This site is published by ${name}.`,
      terms: 'Terms & conditions',
      privacy: 'Privacy policy',
    },
    contact: {
      title: 'Let’s talk about your Morocco project',
      lede: 'A free 30-minute scoping call, by video at a time that suits UK or US hours, to settle the right entity type, a realistic timeline and the budget to plan for.',
      phone: 'Phone',
      email: 'Email',
      office: 'Office',
      hours: 'Office hours (Morocco time)',
      formNote:
        'This form currently opens your email client. Set FORM_ENDPOINT in src/consts.ts (Formspree, Web3Forms, Vercel Forms…) for direct submission.',
      name: 'Full name',
      workEmail: 'Work email',
      company: 'Company',
      project: 'Your project',
      placeholder: 'Business activity, target timeline, planned headcount in Morocco…',
      consent: 'I agree that this information may be used to contact me about my request.',
      submit: 'Request a call',
    },
    legalForms: {
      eyebrow: 'Entity types',
      title: 'Which structure for your business in Morocco?',
      intro:
        'Most foreign subsidiaries are set up as an SARL, the Moroccan equivalent of an LLC or a private limited company. A branch or liaison office suits a test phase. We decide together during the scoping call.',
      aria: 'Comparison of Moroccan entity types',
      cols: ['Entity', 'Share capital', 'Shareholders', 'Liability', 'Best for'],
      disclaimer:
        'Simplified comparison, accurate at the time of writing. Thresholds, statutory audit requirements and sector rules change: the structure we recommend is confirmed in writing before any filing.',
    },
  },
} as const;

export function ui(lang: Lang) {
  return UI[lang];
}

/** Opening hours shown in the contact block. */
export const HOURS_EN: [string, string][] = [
  ['Monday – Friday', '8:30 am – 7:00 pm'],
  ['Saturday', '9:00 am – 12:00 pm'],
  ['Sunday', 'Closed'],
];
