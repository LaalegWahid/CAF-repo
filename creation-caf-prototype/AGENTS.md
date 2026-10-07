# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

## CAF prototype design decisions

- The two supplied CAF Management PDF presentations are the visual source of truth.
- Preserve the institutional palette: deep navy, cyan blue, white, and cool light gray.
- Match the decks' editorial character: uppercase condensed headings, square cards, thin dividers, strong numeric labels, and minimal rounding.
- Use real CAF assets extracted from the PDFs, including the logo, Casablanca photography, office imagery, and team portraits.
- The first project targets French residents and Moroccan diaspora prospects who want to create or operate a business in Morocco.
- The first prototype is the shared UI master for the future accounting-focused project.
- Express luxury through restraint: editorial composition, authentic materials, generous negative space, precise typography, and cinematic photography rather than gold decoration, gradients, or generic stock imagery.
- Keep documentary evidence and campaign imagery separate. The real CAF logo, team, office, certifications, and client proof come from the PDFs; AI-generated images may establish atmosphere but must never impersonate CAF staff, offices, or client evidence.
- The image language is contemporary Casablanca: Atlantic light, deep navy glass, pale stone, subtle geometric craft, charcoal tailoring, and measured cyan accents.
- October 2026 direction change: the user finds the current all-caps sans-serif, cyan CTA rectangles, numbered card grids, borders, icons, and decorative motion too generic and not luxurious enough. Do not add more of those patterns.
- The page must state its exact role immediately. The current working role is a France-to-Morocco company-creation acquisition microsite, not CAF's main corporate website, but this scope requires explicit user confirmation before the next redesign.
- The next direction should feel like discreet private advisory: editorial typography with real contrast, warm ivory and near-black navy, cyan used sparingly, fewer modules, more negative space, stronger documentary proof, and no stock-agency visual language.
- The English experience is a complete corporate and lead-generation reference for international prospects, not a light campaign page. It should expose CAF's full company story, leadership team, service scope, additional services, client proof, values, international reach, and contact paths.
- Show the real CAF group photo and named leadership portraits from the source decks. Use the latest English titles in the second company presentation when the two decks differ.
- Do not reduce the source presentations to generic agency copy. Keep every material operational capability discoverable in the English site, with a dedicated services directory for the detailed tax, accounting, audit, legal, payroll, HR, restructuring, finance, market-entry, investor-support and additional-service content.
- October 2026 information architecture: do not stack the complete company presentation on the homepage or one long services page. Keep the homepage selective, use the Services page as a visual index, and distribute detailed content across Company Formation, Tax Advisory, Audit & Accounting, Legal/Payroll/HR, Market Entry, Invest in Morocco & CFC, About, and Contact pages in the navbar.
- Give every top-level expertise page a distinct, cinematic editorial image consistent with the Casablanca art direction; imagery should clarify the subject instead of acting as a generic icon or decoration.
- For CFC status, verify eligibility, incentives and service timelines against current official Casablanca Finance City sources before publishing. Do not reuse time-sensitive numbers from a presentation when current official information differs. Retain CAF's established 300+ active-client proof until the firm confirms a replacement figure.
- Full-width dark CTA sections must use normal section padding so the action never sits flush against the lower boundary.
