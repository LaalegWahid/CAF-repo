/**
 * Site-wide constants for the CAF "audit" site.
 * Same cabinet as cabinet-caf.ma, distinct sub-brand for statutory audit.
 * Edit domain, contact and address to match the real cabinet — these feed
 * the SEO tags and the JSON-LD structured data in Layout.astro.
 */
export const SITE = {
  url: "https://audit.cabinet-caf.ma",
  name: "CAF",
  legalName: "CAF — Audit & Commissariat aux comptes",
  tagline: "Audit légal, audit interne, consolidation & performance au Maroc",
  description:
    "Pôle audit du cabinet CAF au Maroc : commissariat aux comptes et audit financier légal, audit interne, audit de consolidation et audit de performance, selon les normes ISA et marocaines.",
  ogImage: "/og.png",
  locale: "fr_MA",
  lang: "fr",
  email: "audit@cabinet-caf.ma",
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

/**
 * Le pôle en chiffres — bandeau de preuve sous le hero.
 * Chiffres indicatifs : à confirmer par le cabinet avant mise en ligne.
 */
export const STATS = [
  { value: "ISA", label: "normes internationales & marocaines appliquées" },
  { value: "+60", label: "mandats de commissariat aux comptes" },
  { value: "4", label: "types d'audit sous un même toit" },
  { value: "100 %", label: "missions documentées selon un dossier normé" },
] as const;

/** Prestations principales — cartes "Services". */
export const SERVICES = [
  {
    id: 18,
    title: "Audit financier légal / commissariat aux comptes",
    href: "/services/audit-financier-legal-cac",
    desc:
      "Certification des comptes annuels et consolidés, rapport général et rapports spéciaux, vérifications spécifiques prévues par la loi et communication au gouvernement d'entreprise.",
  },
  {
    id: 14,
    title: "Audit interne",
    href: "/services/audit-interne",
    desc:
      "Évaluation du contrôle interne, des processus et de la maîtrise des risques, recommandations priorisées et suivi de leur mise en œuvre.",
  },
  {
    id: 16,
    title: "Audit de consolidation",
    href: "/services/audit-consolidation",
    desc:
      "Revue du périmètre, des méthodes et des retraitements de consolidation, des écritures d'élimination intra-groupe et des impôts différés pour des comptes de groupe fiables.",
  },
  {
    id: 17,
    title: "Audit de performance",
    href: "/services/audit-performance",
    desc:
      "Analyse de l'économie, de l'efficience et de l'efficacité d'une organisation, d'un projet ou d'une subvention, avec indicateurs et plan d'amélioration.",
  },
] as const;

/** Guides pratiques — section "Ressources". */
export const GUIDES = [
  {
    title: "Quand le commissaire aux comptes est-il obligatoire au Maroc ?",
    href: "/ressources/cac-obligatoire-maroc",
    desc: "Sociétés anonymes, seuil de chiffre d'affaires pour les SARL et SNC, et cas de désignation judiciaire.",
  },
  {
    title: "Le déroulé d'une mission d'audit",
    href: "/ressources/deroule-mission-audit",
    desc: "De la lettre de mission à l'opinion : planification, appréciation des risques, contrôles et synthèse.",
  },
  {
    title: "Normes ISA et normes marocaines",
    href: "/ressources/normes-isa-marocaines",
    desc: "Ce que recouvrent les normes internationales d'audit et leur articulation avec le référentiel de l'Ordre au Maroc.",
  },
  {
    title: "Comptes consolidés : périmètre & méthodes",
    href: "/ressources/comptes-consolides-perimetre-methodes",
    desc: "Intégration globale, intégration proportionnelle et mise en équivalence, et détermination du pourcentage de contrôle.",
  },
  {
    title: "La cartographie des risques",
    href: "/ressources/cartographie-des-risques",
    desc: "Identifier, coter et hiérarchiser les risques d'une organisation pour orienter le plan d'audit.",
  },
] as const;

/** Questions fréquentes — rendu à l'écran ET injecté en JSON-LD FAQPage. */
export const FAQ = [
  {
    q: "Quand une société doit-elle nommer un commissaire aux comptes au Maroc ?",
    a:
      "La désignation d'un commissaire aux comptes est obligatoire pour toutes les sociétés anonymes. Pour les SARL, SNC et sociétés en commandite, elle l'est dès que le chiffre d'affaires dépasse le seuil légal de 50 millions de dirhams hors taxes. Des associés représentant une fraction du capital, ou le juge, peuvent également en demander la désignation.",
  },
  {
    q: "Quelle est la différence entre audit légal et audit contractuel ?",
    a:
      "L'audit légal (commissariat aux comptes) est imposé par la loi : sa durée et son contenu sont encadrés et il aboutit à une opinion publique sur les comptes. L'audit contractuel est demandé librement par une entreprise pour un besoin précis — acquisition, revue limitée, sujet particulier — et son périmètre est fixé par la lettre de mission.",
  },
  {
    q: "Que signifient les différentes opinions d'audit ?",
    a:
      "Une opinion sans réserve atteste que les comptes sont réguliers et sincères et donnent une image fidèle. La réserve signale un désaccord ou une limitation circonscrits. L'opinion défavorable indique que les comptes, dans leur ensemble, ne donnent pas une image fidèle. L'impossibilité d'exprimer une opinion résulte d'une limitation si étendue que l'auditeur ne peut pas se prononcer.",
  },
  {
    q: "Quelles normes appliquez-vous ?",
    a:
      "Nos missions sont conduites selon les normes internationales d'audit (ISA) et le référentiel de l'Ordre des experts-comptables au Maroc, avec un dossier de travail normalisé, une appréciation des risques et une revue indépendante des conclusions.",
  },
  {
    q: "Comment se déroule une mission de commissariat aux comptes ?",
    a:
      "Elle s'étale sur l'exercice : prise de connaissance et lettre de mission, planification et appréciation des risques, phase intérimaire (tests des contrôles et des opérations courantes), phase finale (contrôle des comptes après clôture), puis synthèse, communication au gouvernement d'entreprise et émission des rapports.",
  },
  {
    q: "Auditez-vous les comptes consolidés d'un groupe ?",
    a:
      "Oui. Nous intervenons sur le périmètre et sa justification, les méthodes de consolidation, les retraitements d'homogénéité, les écritures d'élimination intra-groupe, les écarts d'acquisition et les impôts différés, en lien avec les auditeurs des filiales.",
  },
] as const;
