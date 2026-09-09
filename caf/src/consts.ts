/**
 * Central configuration for this microsite.
 * Site: "Juridique & implantation au Maroc" — hub + 5 service pages.
 */

export const SITE = {
  name: 'CAF Management',
  /** TODO: replace with the real domain (also update astro.config.mjs + public/robots.txt). */
  url: 'https://implantation-maroc.ma',
  lang: 'fr',
  locale: 'fr_FR',
  tagline: 'Conseil juridique & implantation au Maroc',
  description:
    "Cabinet d'expertise comptable et de conseil juridique à Casablanca depuis 1995. Création de société, structuration de groupe, droit des sociétés, veille et conformité réglementaire, déploiement à l'étranger.",
  ogImage: '/og.png',
} as const;

export const ORG = {
  legalName: 'CAF Management',
  foundingYear: '1995',
  parentSite: 'https://caf.ma',
  email: 'info@caf.ma',
  phone: '+212522945383',
  phoneDisplay: '+212 522 94 53 83',
  street: '17 Rue Mhiwla, Hay El Hana',
  locality: 'Casablanca',
  region: 'Casablanca-Settat',
  postalCode: '20210',
  countryCode: 'MA',
  countryName: 'Maroc',
  geo: { lat: 33.5763341, lng: -7.6716305 },
  mapsUrl: 'https://maps.app.goo.gl/e7DaDAGARasYvGWLA',
  linkedin: 'https://ma.linkedin.com/company/caf-management',
  facebook: 'https://web.facebook.com/CAFManagementConsulting/',
  hours: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:30', closes: '19:00' },
    { days: ['Saturday'], opens: '09:00', closes: '12:00' },
  ],
  hoursDisplay: [
    ['Lundi – Vendredi', '8h30 – 19h00'],
    ['Samedi', '9h00 – 12h00'],
    ['Dimanche', 'Fermé'],
  ],
  departments: ['Comptabilité', 'Conseil', 'Audit', 'Social'],
} as const;

/** The five service pages of this site — drives the nav, the hub index and cross-linking. */
export const SERVICES = [
  {
    slug: '/creation-de-societe',
    nav: 'Créer une société',
    title: 'Création de société au Maroc',
    blurb:
      'Constitution, immatriculation et démarrage de votre entité — SARL, SA, succursale ou bureau de liaison.',
  },
  {
    slug: '/strategie-juridique',
    nav: 'Structuration',
    title: 'Stratégie juridique & structuration de groupe',
    blurb:
      "Choix de la forme, création de holding, pacte d'associés, restructuration et gouvernance.",
  },
  {
    slug: '/droit-des-societes',
    nav: 'Droit des sociétés',
    title: 'Droit des sociétés & secrétariat juridique',
    blurb:
      'Assemblées, procès-verbaux, mouvements de capital, cessions de parts, transformations, dissolutions.',
  },
  {
    slug: '/veille-conformite-juridique',
    nav: 'Conformité',
    title: 'Veille & conformité juridique',
    blurb:
      'Veille réglementaire continue, cartographie des obligations et mise en conformité.',
  },
  {
    slug: '/deploiement-a-letranger',
    nav: 'International',
    title: "Déploiement à l'étranger",
    blurb:
      'Accompagnement des entreprises marocaines qui ouvrent une filiale ou une succursale hors du Maroc.',
  },
] as const;

/** Header navigation. */
export const NAV = [
  { href: '/', label: 'Accueil' },
  ...SERVICES.map((s) => ({ href: s.slug, label: s.nav })),
] as const;

/** Every primary CTA points at the contact section present on each page. */
export const CTA_HREF = '#contact';

/**
 * Contact form endpoint.
 * TODO: create an endpoint (Formspree, Web3Forms, Vercel Forms…) and paste the URL here.
 * Until then the form falls back to a mailto: link.
 */
export const FORM_ENDPOINT = '';
