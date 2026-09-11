/**
 * Site-wide constants for the CAF "corporate finance" site.
 * Same cabinet as cabinet-caf.ma, distinct sub-brand for M&A / valuation.
 * Edit domain, contact and address to match the real cabinet — these feed
 * the SEO tags and the JSON-LD structured data in Layout.astro.
 */
export const SITE = {
  url: "https://corporate.cabinet-caf.ma",
  name: "CAF",
  legalName: "CAF — Corporate Finance & Transmission",
  tagline: "Évaluation, due diligence & transmission d'entreprise au Maroc",
  description:
    "Pôle corporate finance du cabinet CAF au Maroc : évaluation d'entreprise (DCF, multiples, ANCC), audit d'acquisition (due diligence), inventaire et codification des actifs, financement et trésorerie.",
  ogImage: "/og.png",
  locale: "fr_MA",
  lang: "fr",
  email: "corporate@cabinet-caf.ma",
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
  { value: "+40", label: "évaluations & due diligences menées" },
  { value: "3", label: "méthodes croisées : DCF, multiples, ANCC" },
  { value: "100 %", label: "opérations pilotées via data room sécurisée" },
  { value: "4–8 sem.", label: "délai indicatif d'une due diligence" },
] as const;

/** Prestations principales — cartes "Services". */
export const SERVICES = [
  {
    id: 15,
    title: "Audit d'acquisition (due diligence) & évaluation",
    href: "/services/due-diligence-evaluation",
    desc:
      "Revue financière, fiscale et sociale de la cible, retraitements et normalisation de l'EBITDA, puis valorisation multi-méthodes (DCF, multiples de marché, ANCC).",
  },
  {
    id: 21,
    title: "Inventaire physique & codification des actifs",
    href: "/services/inventaire-codification-actifs",
    desc:
      "Comptage physique des immobilisations et des stocks, rapprochement avec le fichier comptable, étiquetage et codification pérenne, traitement des écarts.",
  },
] as const;

/** Guides pratiques — section "Ressources". */
export const GUIDES = [
  {
    title: "Méthodes de valorisation : DCF, multiples, ANCC",
    href: "/ressources/methodes-valorisation-dcf-multiples-ancc",
    desc: "Quand utiliser l'actualisation des flux, les comparables de marché ou l'actif net comptable corrigé — et comment les croiser.",
  },
  {
    title: "Checklist de due diligence",
    href: "/ressources/checklist-due-diligence",
    desc: "Les pièces à réunir en finance, fiscalité, social, juridique et opérations avant d'ouvrir la data room.",
  },
  {
    title: "Vendre son entreprise au Maroc : les étapes",
    href: "/ressources/vendre-entreprise-maroc-etapes",
    desc: "Du teaser et de la lettre d'intention au closing : calendrier type et points de vigilance.",
  },
  {
    title: "La data room",
    href: "/ressources/data-room",
    desc: "Arborescence, gestion des droits, journal des accès et Q&A : une data room qui rassure l'acquéreur.",
  },
  {
    title: "Garantie d'actif et de passif",
    href: "/ressources/garantie-actif-passif",
    desc: "Rôle de la GAP, plafonds et franchises, durée, séquestre et articulation avec la due diligence.",
  },
] as const;

/** Questions fréquentes — rendu à l'écran ET injecté en JSON-LD FAQPage. */
export const FAQ = [
  {
    q: "En quoi consiste un audit d'acquisition (due diligence) ?",
    a:
      "C'est l'examen approfondi d'une société cible avant son rachat : qualité des comptes, dettes et engagements hors bilan, risques fiscaux et sociaux, contrats clés et litiges. L'objectif est de confirmer la valeur, d'ajuster le prix et de préparer la garantie d'actif et de passif.",
  },
  {
    q: "Quelles méthodes utilisez-vous pour valoriser une entreprise ?",
    a:
      "Nous croisons systématiquement plusieurs approches : l'actualisation des flux de trésorerie futurs (DCF), les multiples observés sur des sociétés ou des transactions comparables, et l'actif net comptable corrigé (ANCC). La fourchette de valeur résulte de la convergence de ces méthodes.",
  },
  {
    q: "Qu'est-ce qu'une garantie d'actif et de passif (GAP) ?",
    a:
      "C'est l'engagement du vendeur d'indemniser l'acquéreur si un passif non révélé apparaît, ou si un actif se révèle surévalué, après la cession mais pour une cause antérieure. Elle est encadrée par un plafond, une franchise, une durée et, souvent, un séquestre d'une partie du prix.",
  },
  {
    q: "À quoi sert une data room ?",
    a:
      "C'est l'espace documentaire sécurisé où l'acquéreur et ses conseils consultent les pièces de la société pendant la due diligence. Une data room bien structurée, avec gestion des droits et suivi des accès, accélère l'opération et limite les allers-retours.",
  },
  {
    q: "Comment se déroule la cession d'une entreprise au Maroc ?",
    a:
      "Schématiquement : préparation et évaluation, rédaction du teaser et du mémorandum d'information, approche des acquéreurs, lettre d'intention, due diligence, négociation du protocole et de la GAP, levée des conditions suspensives, puis closing et transfert des titres.",
  },
  {
    q: "Leasing ou affacturage : quelle différence ?",
    a:
      "Le leasing (crédit-bail) finance l'acquisition d'un équipement ou d'un local en étalant le coût sur une location avec option d'achat. L'affacturage mobilise votre poste clients : le factor vous avance la trésorerie des factures en attendant leur règlement. Le premier finance l'investissement, le second le besoin en fonds de roulement.",
  },
] as const;
