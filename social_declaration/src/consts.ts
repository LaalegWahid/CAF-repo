/**
 * Site-wide constants. Edit these values to match the real cabinet
 * (domain, contact, address) — they feed the SEO tags and the
 * structured data (JSON-LD) in Layout.astro.
 */
export const SITE = {
  url: "https://www.cabinet-caf.ma",
  name: "CAF",
  legalName: "CAF — Expertise sociale & Audit",
  tagline: "Paie, déclarations sociales & audit légal au Maroc",
  description:
    "Cabinet au Maroc spécialisé en gestion de la paie (CNSS, AMO, IR), administration du personnel, contrats de travail, audit social et commissariat aux comptes.",
  ogImage: "/og.svg",
  locale: "fr_MA",
  lang: "fr",
  email: "contact@cabinet-caf.ma",
  phoneDisplay: "+212 5 22 00 00 00",
  phoneE164: "+212522000000",
  address: {
    street: "123 Boulevard Zerktouni",
    locality: "Casablanca",
    region: "Casablanca-Settat",
    postalCode: "20000",
    country: "MA",
    countryName: "Maroc",
  },
} as const;

/** Prestations principales — cartes "Services". */
export const SERVICES = [
  {
    id: 22,
    title: "Gestion de la paie & déclarations sociales",
    href: "/services/gestion-paie-declarations-sociales",
    desc:
      "Bulletins de paie, télédéclarations Damancom, CNSS, AMO, IR sur salaire et déclarations mensuelles et annuelles, en conformité totale.",
  },
  {
    id: 23,
    title: "Gestion RH / administration du personnel",
    href: "/services/gestion-rh-administration-personnel",
    desc:
      "Dossiers du personnel, congés et absences, registres obligatoires, suivi des entrées et sorties et tableaux de bord RH.",
  },
  {
    id: 24,
    title: "Contrats & conventions",
    href: "/services/contrats-conventions",
    desc:
      "Rédaction et sécurisation des CDI, CDD, avenants, clauses spécifiques et conventions collectives applicables à votre secteur.",
  },
  {
    id: 20,
    title: "Audit social",
    href: "/services/audit-social",
    desc:
      "Diagnostic de conformité au Code du travail et à la réglementation CNSS, cartographie des risques et plan de mise en conformité.",
  },
] as const;

/** Guides pratiques — section "Ressources". */
export const GUIDES = [
  {
    title: "Calcul de la paie : CNSS, AMO, IR",
    href: "/ressources/calcul-paie-cnss-amo-ir",
    desc: "Méthode de calcul des cotisations sociales et de l'impôt sur le revenu salarial.",
  },
  {
    title: "SMIG & barèmes en vigueur",
    href: "/ressources/smig-baremes",
    desc: "Salaire minimum, barème de l'IR et plafonds de cotisations à jour.",
  },
  {
    title: "Rédiger un CDI ou un CDD",
    href: "/ressources/rediger-cdi-cdd",
    desc: "Mentions obligatoires, durées, période d'essai et pièges à éviter.",
  },
  {
    title: "Le règlement intérieur obligatoire",
    href: "/ressources/reglement-interieur-obligatoire",
    desc: "Seuil d'effectif, contenu exigé et procédure de dépôt auprès de l'inspection du travail.",
  },
  {
    title: "Préparer un contrôle CNSS",
    href: "/ressources/preparer-controle-cnss",
    desc: "Documents à réunir, points de vigilance et bonnes pratiques avant le passage du contrôleur.",
  },
  {
    title: "Le solde de tout compte",
    href: "/ressources/solde-de-tout-compte",
    desc: "Éléments à intégrer, reçu pour solde de tout compte et délais de remise.",
  },
] as const;

/** Questions fréquentes — rendu à l'écran ET injecté en JSON-LD FAQPage. */
export const FAQ = [
  {
    q: "Comment est calculée la paie au Maroc (CNSS, AMO, IR) ?",
    a:
      "Le salaire brut sert d'assiette aux cotisations CNSS (prestations sociales, dans la limite du plafond) et à l'AMO. L'impôt sur le revenu est ensuite calculé sur le net imposable selon le barème progressif. S'y ajoutent la part patronale, la taxe de formation professionnelle et, le cas échéant, la retraite complémentaire.",
  },
  {
    q: "Quel est le montant du SMIG au Maroc ?",
    a:
      "Le salaire minimum (SMIG pour l'industrie, le commerce et les services, SMAG pour l'agriculture) est fixé par décret et revalorisé périodiquement. Nous appliquons systématiquement le barème en vigueur à la date de la paie.",
  },
  {
    q: "Quand un commissaire aux comptes est-il obligatoire ?",
    a:
      "La désignation d'un commissaire aux comptes est obligatoire pour toutes les sociétés anonymes, ainsi que pour les SARL, SNC et sociétés en commandite dont le chiffre d'affaires dépasse le seuil légal de 50 millions de dirhams hors taxes. Elle peut aussi être demandée par des associés ou ordonnée par le juge.",
  },
  {
    q: "Le règlement intérieur est-il obligatoire pour mon entreprise ?",
    a:
      "Oui. Toute entreprise employant habituellement au moins 10 salariés doit établir un règlement intérieur, le soumettre à l'avis des délégués des salariés et le faire viser par l'inspection du travail dans les deux ans suivant l'ouverture de l'entreprise.",
  },
  {
    q: "Comment préparer un contrôle CNSS ?",
    a:
      "Réunissez les bulletins de paie, les bordereaux de déclaration, le livre de paie, les contrats de travail et les justificatifs des éléments variables. Un audit social préalable permet d'identifier et de corriger les écarts d'assiette avant le passage du contrôleur.",
  },
  {
    q: "Que contient un solde de tout compte ?",
    a:
      "Il regroupe le salaire du mois, l'indemnité compensatrice de congés payés non pris, les indemnités de préavis et de licenciement éventuelles, les primes dues au prorata, ainsi que la remise des documents de fin de contrat : certificat de travail, attestation et reçu pour solde de tout compte.",
  },
] as const;
