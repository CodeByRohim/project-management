# Design System Strategy: The Intelligent Stratum

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Cognitive Architectural Layer."** 

We are moving away from the "SaaS-in-a-box" aesthetic. Instead of rigid grids and heavy borders, we treat the UI as an ethereal, multi-layered environment where AI insights float above deep, professional foundations. This system prioritizes **intentional asymmetry** and **tonal depth** to guide the user’s eye. By overlapping elements and utilizing high-contrast typography scales, we create an editorial experience that feels curated rather than generated. We don't just manage tasks; we architect intelligence.

---

## 2. Colors & Surface Philosophy
The palette is rooted in the deep void of `#060e20`, providing a sophisticated canvas where AI-driven accents can truly "glow."

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to define sections or headers. Physical boundaries are primitive. Instead, define space through:
*   **Background Shifts:** Use `surface-container-low` sections against a `background` floor.
*   **Tonal Transitions:** Use soft gradients between `primary` and `primary-container` for interactive zones.

### Surface Hierarchy & Nesting
Think of the UI as stacked sheets of obsidian and frosted glass. 
*   **Base Layer:** `surface` (#060e20)
*   **Secondary Content:** `surface-container-low` (#091328)
*   **Active Workspaces:** `surface-container` (#0f1930)
*   **Elevated AI Insights:** `surface-container-highest` (#192540)

### The "Glass & Gradient" Rule
For AI-driven elements or floating overlays, use **Glassmorphism**. Combine `secondary-container` at 40% opacity with a `backdrop-filter: blur(12px)`. To add "soul," apply a subtle linear gradient to main CTAs (from `primary` to `tertiary_dim`) to signify the intersection of human logic and AI intuition.

---

## 3. Typography: The Editorial Voice
We utilize a dual-font strategy to balance authority with utility.

*   **Display & Headlines (Manrope):** High-end, geometric, and modern. Use `display-lg` (3.5rem) with generous letter-spacing for landing moments to create a "premium magazine" feel.
*   **Body & Labels (Inter):** The workhorse. Inter provides maximum legibility for complex project data. Use `body-md` (0.875rem) for standard density.

**Hierarchy as Identity:** Use extreme scale contrast. A `headline-lg` title should be paired with a `label-sm` in `on-surface-variant` to create a sophisticated, intentional hierarchy that feels designed, not just placed.

---

## 4. Elevation & Depth
We convey importance through **Tonal Layering**, not structural lines.

*   **The Layering Principle:** To lift a card, do not reach for a shadow first. Place a `surface-container-high` card inside a `surface-container-low` parent. The subtle shift in navy tones creates a natural, "soft lift."
*   **Ambient Shadows:** If an element must float (e.g., a modal or AI command bar), use an extra-diffused shadow: `box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4)`. The shadow should feel like a soft glow of darkness, never a harsh outline.
*   **The "Ghost Border" Fallback:** If accessibility requires a stroke, use `outline-variant` (#40485d) at **15% opacity**. It should be felt, not seen.
*   **AI Glow:** For AI-specific components, use a subtle outer glow using the `tertiary` (#c180ff) token at low opacity to indicate "living" data.

---

## 5. Components

### Buttons
*   **Primary:** High-vibrancy `primary` (#a3a6ff) with `on_primary` (#0f00a4) text. Use `md` (0.375rem) roundedness.
*   **AI-Action:** A glassmorphic button using `tertiary_container` with a subtle blur, signaling a non-traditional, intelligent action.

### Input Fields
*   **Static State:** No bottom line or full border. Use `surface_container_highest` with a `sm` (0.125rem) rounded bottom edge.
*   **Focus State:** Transition the background to `surface_bright` and add a subtle `primary` glow.

### Cards & Lists
*   **The Divider Ban:** Strictly forbid `1px` lines between list items. Use the **Spacing Scale** (e.g., `spacing-4` or `1.4rem`) to create "breathing room" separation.
*   **Multi-Tenant Indicators:** Use a vertical "accent sliver" on the far left of a card using `secondary_dim` to denote different workspace origins without cluttering the UI.

### AI Command Bar (Context Specific)
A floating, glassmorphic input centered at the bottom of the viewport. Uses `surface_container_highest` at 60% opacity with a `tertiary` soft-glow shadow. This is the "brain" of the system.

---

## 6. Do’s and Don’ts

### Do:
*   **Use Asymmetry:** Place high-level AI metrics in a larger, offset container to break the "boring grid" feel.
*   **Embrace Negative Space:** Use `spacing-12` (4rem) between major content blocks. Sophistication comes from what you *don't* show.
*   **Layer with Purpose:** Always check if a background color shift can replace a border.

### Don’t:
*   **Don't use Pure Black:** Always use `surface` (#060e20) or `surface_container_lowest` (#000000) to maintain the "deep navy" professional depth.
*   **Don't use High-Contrast Dividers:** They break the "Glass & Layer" immersion.
*   **Don't Over-round:** Keep roundedness to `md` (0.375rem) for professional components; reserve `full` only for pill-tags or avatars.

---

## 7. Spacing & Rhythm
Rhythm is maintained through a strict adherence to the spacing scale. 
*   **Container Padding:** Use `spacing-6` (2rem) for standard card internal padding.
*   **Section Gaps:** Use `spacing-10` (3.5rem) to separate distinct functional areas.
*   **Micro-adjustments:** Use `spacing-1` (0.35rem) for label-to-input relationships.