# CAF Management — Site 1 : Juridique & implantation au Maroc

Premier site du réseau de contenu SEO de CAF Management. Cible : **dirigeants et groupes
qui créent, structurent et développent leur société au Maroc** (audience France → Maroc, langue FR).
Chaque site du réseau est autonome et ne renvoie vers [caf.ma](https://caf.ma) que par des liens
naturels dans le pied de page.

## Pages (6)

| Route | Rôle |
|---|---|
| `/` | Hub — présente les 5 expertises, pourquoi le Maroc, la méthode |
| `/creation-de-societe` | Création de société (SARL, SA, succursale, bureau de liaison) |
| `/strategie-juridique` | Structuration de groupe, holding, pacte d'associés, restructuration |
| `/droit-des-societes` | Secrétariat juridique, assemblées, capital, cessions, transformations |
| `/veille-conformite-juridique` | Veille réglementaire, cartographie des obligations, mise en conformité |
| `/deploiement-a-letranger` | Filiales à l'étranger : change, constitution locale, consolidation, prix de transfert |

## Stack

| | |
|---|---|
| Framework | [Astro](https://astro.build) — sortie 100 % statique, **0 KB de JS** (hors ~6 lignes pour l'état du header) |
| Palette | Reprise du **logo CAF** : bleu `#2D9CDB`, gris `#BDBDBD`, bleu profond `#0E3A5B`. Tokens dans `src/styles/global.css` |
| Logo | Le vrai `public/logo.svg` de caf.ma (marque « particules ») |
| Polices | Auto-hébergées (`@fontsource` — Work Sans + Poppins), aucun appel Google Fonts |
| SEO | `<title>` / meta / canonical uniques par page, Open Graph + Twitter, hreflang, `sitemap-index.xml`, `robots.txt` |
| Données structurées | JSON-LD `@graph` par page : `ProfessionalService`/`LegalService` + `WebSite` + `WebPage` + `BreadcrumbList` + `Service` (pages service) + `FAQPage`. Voir `src/components/Schema.astro` |
| Hébergement | Vercel (auto-détection Astro) — en-têtes de sécurité + cache dans `vercel.json` |

## Démarrer

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # -> dist/  (régénère aussi public/og.png)
npm run check     # astro check (types + a11y)
npm run preview
```

## Architecture

- `src/consts.ts` — config du site, coordonnées du cabinet, `SERVICES` (source de la nav, du hub et du maillage interne)
- `src/components/` — composants génériques réutilisés par toutes les pages :
  `PageHero`, `Section`, `DefList`, `NumberedList`, `Steps`, `Faq`, `RelatedServices`, `Contact`, `LegalForms`, `Header`, `Footer`, `Schema`
- `src/data/sections.ts` + `src/data/faq.ts` — contenus partagés de la page « Création de société »
- Les autres pages portent leur contenu dans leur propre frontmatter `.astro`
- Les FAQ alimentent **à la fois** l'accordéon visible et le JSON-LD `FAQPage` (texte identique exigé par Google)

## À personnaliser avant mise en ligne

1. **Domaine** — `SITE_URL` dans `astro.config.mjs`, `SITE.url` dans `src/consts.ts`, l'URL du sitemap dans `public/robots.txt`.
2. **Formulaire** — `FORM_ENDPOINT` dans `src/consts.ts` (Formspree / Web3Forms / Vercel Forms). Sans ça, bascule en `mailto:`.
3. **Avis Google** — ajouter `aggregateRating` dans `src/components/Schema.astro` avec la note **et** le nombre d'avis réels (Google Business Profile). Laissé vide volontairement.
4. **Relecture juridique** — faire valider par le département Conseil les chiffres et affirmations (capital SARL/SA, délais, régime des changes, CFC, loi 09-08) ; ils sont indicatifs et datés.

## Réutiliser pour un autre site du réseau

Copier le dossier, garder `src/components/` et `src/styles/`, puis remplacer `src/consts.ts`,
les données, les pages et `public/og.svg`. Le design system reste identique → cohérence de marque,
contenu distinct.
