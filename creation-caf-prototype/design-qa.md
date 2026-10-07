# Design QA — English investor and services architecture

## Evidence

- Source visual truth: `content/source/pdf-pages/invest-morocco/page-1.jpg`
- Browser-rendered implementation: `design-qa-implementation.png`
- Combined comparison input: `design-qa-comparison.png`
- Source pixels: 1867 × 1050.
- Implementation pixels and CSS viewport: 1265 × 710 at device scale factor 1.
- Comparison normalization: source was downsampled to 1265 × 710 and placed beside the implementation at the same rendered pixel size. The source is a presentation reference rather than a page mock, so the comparison evaluates visual language and hierarchy rather than identical component placement.
- State: desktop, top of `/en/invest-in-morocco-cfc`, no expanded navigation.
- Additional responsive evidence: live in-app browser at 390 × 844, top of the CFC page with the mobile navigation closed, open, and the Services submenu expanded.

## Full-view comparison evidence

The web page preserves the source deck's deep navy/cyan/white palette, institutional scale, disciplined alignment, geographic investment narrative and restrained image treatment. The page intentionally adapts the deck's dark presentation canvas into a lighter, conversion-oriented editorial web hero. The generated Casablanca image has the correct subject, is sharp, has no text or watermark artifacts, and uses the intended Atlantic blue/stone art direction.

The visual density is lower than the previous long page. The main navigation now exposes a compact Services disclosure plus a dedicated Invest & CFC route. Detailed content is distributed across focused pages rather than repeated in the homepage or services overview.

## Focused region comparison evidence

No additional crop was required because the source and implementation comparison at equal 1265 × 710 dimensions keeps the typography, logo, palette, hero crop and navigation readable. The CTA spacing issue was checked separately in the live browser at the bottom of `/en/services`: the dark section now has full vertical padding above the footer and the button no longer touches the lower boundary.

## Required fidelity surfaces

- Fonts and typography: hierarchy, weights, wrapping and line height are stable at desktop and mobile. The web treatment uses the existing CAF digital sans system rather than reproducing the deck's serif headline; this is an intentional digital adaptation, not a missing-font fallback.
- Spacing and layout rhythm: hero columns, page margins and negative space are consistent. Services content is presented as a six-card index. The corrected CTA has visible top and bottom breathing room.
- Colors and visual tokens: deep navy, restrained cyan, white and cool neutrals map to the CAF reference. Contrast remained strong in the inspected states.
- Image quality and asset fidelity: each new top-level expertise page uses a distinct optimized editorial image. Real CAF logo/team/office assets remain separate from generated atmospheric imagery.
- Copy and content: the CFC page makes eligibility conditions and the non-guaranteed nature of incentives explicit. Time-sensitive presentation claims that conflict with current official CFC information were not reproduced.
- Responsiveness and behavior: desktop navigation, mobile Menu, nested Services disclosure and seven English routes were exercised. No Vite error overlay appeared and the browser console contained no warnings or errors.

## Findings

No actionable P0, P1 or P2 fidelity issues remain for this scope.

- [P3] Serif-versus-sans character differs from the investment presentation.
  - Location: CFC hero display headline.
  - Evidence: the source presentation uses a high-contrast serif headline while the current web system uses a heavy geometric sans.
  - Impact: the web page feels more contemporary/corporate and slightly less like the source deck.
  - Follow-up: if CAF wants the presentation typography carried directly into the site, introduce one licensed editorial serif display face for hero and section headings only; do not change the body or navigation type.

## Comparison history

- Earlier P2: the services-page CTA button sat flush against the lower boundary in the user-provided screenshot.
- Fix: the CTA now uses the shared padded section pattern (`en-section en-home-cta`). The same correction was applied to the About CTA.
- Post-fix evidence: live desktop browser inspection at the bottom of `/en/services` showed a substantial navy field below the button before the white footer.
- Recheck: no overlap, clipping or collapsed padding at the mobile breakpoint.

## Primary interactions tested

- Loaded `/en/`, `/en/services`, `/en/tax-advisory-morocco`, `/en/audit-accounting-morocco`, `/en/legal-payroll-morocco`, `/en/market-entry-morocco`, and `/en/invest-in-morocco-cfc`.
- Confirmed the expected H1 on every route and zero Vite error overlays.
- Opened and closed the mobile navigation.
- Expanded the nested Services submenu at 390 px width.
- Checked browser console warnings/errors: none.

## Implementation checklist

- [x] Correct CTA bottom spacing.
- [x] Replace the stacked services document with a focused visual index.
- [x] Add dedicated specialist pages and navbar access.
- [x] Add dedicated Invest in Morocco and CFC content.
- [x] Add one subject-specific editorial image per top-level expertise page.
- [x] Verify desktop/mobile navigation and route rendering.
- [x] Build production output and pass Sites tests.

## Follow-up polish

- Optional P3: evaluate a licensed editorial serif after CAF approves a final web type system.

final result: passed
