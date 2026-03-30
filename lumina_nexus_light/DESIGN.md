# Design System Specification: Cognitive Architecture

## 1. Overview & Creative North Star
**Creative North Star: The Digital Architect**
This design system rejects the "flat web" in favor of a **Cognitive Architectural Layer** approach. It treats the user interface not as a static page, but as a series of structured, suspended planes in a bright, airy environment. By utilizing high-contrast Indigo accents against a gallery-white foundation, we create a workspace that feels both authoritative and weightless. 

The system moves beyond generic enterprise layouts by employing **Intentional Asymmetry** and **Tonal Depth**. Instead of rigid boxes, we use whitespace as a structural element to guide the eye, ensuring that information density never compromises mental clarity.

---

## 2. Colors: Tonal Integrity
The palette is rooted in high-contrast clarity. We prioritize the "Indigo Core" for action while using a sophisticated spectrum of grays to define the environment.

### Color Tokens (Material Design Convention)
*   **Primary:** `#3525cd` (The Deep Core)
*   **Primary Container:** `#4f46e5` (The Action Indigo)
*   **Surface (Base):** `#f7f9fb` (The Canvas)
*   **Surface Container Lowest:** `#ffffff` (The Floating Layer)
*   **Surface Container Low:** `#f2f4f6` (The Sub-Level)
*   **Surface Container High:** `#e6e8ea` (The Structural Foundation)
*   **On-Surface:** `#191c1e` (The High-Contrast Type)
*   **Outline Variant:** `#c7c4d8` (The Soft Ghost)

### The "No-Line" Rule
**Strict Mandate:** Designers are prohibited from using 1px solid borders for sectioning or layout containment. 
Boundaries must be defined solely through background color shifts. For instance, a `surface-container-lowest` card sits atop a `surface-container-low` section. The change in hex value provides the edge; the eye perceives the structure without the visual "noise" of a line.

### The "Glass & Signature" Rule
To elevate the enterprise feel, use **Glassmorphism** for floating utility bars or navigation overlays. Use the `surface` color at 70% opacity with a `20px` backdrop blur. 
*   **Signature Texture:** Apply a subtle linear gradient to Hero CTAs: `linear-gradient(135deg, #3525cd 0%, #4f46e5 100%)`. This adds a "lithographic" depth that flat indigo lacks.

---

## 3. Typography: Manrope Editorial
We use **Manrope** for its geometric precision and modern legibility. The hierarchy is designed to feel like a high-end technical journal—bold, spaced, and decisive.

*   **Display (lg/md/sm):** Used for "Key Moments" or dashboard summaries. *Weight: 800 (Extra Bold).*
*   **Headline (lg/md/sm):** Structural anchors. *Weight: 700 (Bold).*
*   **Title (lg/md/sm):** Component headers. *Weight: 600 (Semi-Bold).*
*   **Body (lg/md):** The workhorse. *Weight: 400 (Regular).* Use `body-lg` (1rem) for high-readability documentation.
*   **Label (md/sm):** Metadata and micro-copy. *Weight: 500 (Medium), All-caps for Label-sm to emphasize architectural feel.*

---

## 4. Elevation & Depth: Tonal Layering
In this system, "Elevation" is a color property, not just a shadow property.

### The Layering Principle
Structure is achieved by "stacking" surface tiers.
1.  **Level 0 (Base):** `surface` (#f7f9fb)
2.  **Level 1 (Sectioning):** `surface-container-low` (#f2f4f6)
3.  **Level 2 (Interactive Cards):** `surface-container-lowest` (#ffffff)
4.  **Level 3 (Pop-overs):** `surface-container-lowest` with an **Ambient Shadow**.

### Ambient Shadows
Shadows must be invisible until noticed. Use a large blur radius (32px+) with extremely low opacity.
*   **Shadow Color:** Hex `#191c1e` at 4% to 6% opacity. 
*   **The Ghost Border Fallback:** If a container requires further definition (e.g., in high-density data views), use the `outline-variant` token at **15% opacity**. This creates a "breath" of a line rather than a hard boundary.

---

## 5. Components: Precision Primitives

### Buttons: The Kinetic Indigo
*   **Primary:** Solid `primary-container`. No border. Subtle `lg` (0.5rem) shadow only on hover.
*   **Secondary:** Ghost style. No background, `primary` text. On hover, a 5% `primary` background tint appears.
*   **Rounding:** Strictly `0.25rem` (Round 4) for a crisp, professional "engineered" look.

### Input Fields: The Subtle Inset
*   **State:** Default fields use `surface-container-high` as a background to appear "recessed" into the white page.
*   **Active:** Transitions to `surface-container-lowest` with a 2px `primary` bottom-track only. No full-box focus rings.

### Cards & Data Lists
*   **Rule:** Forbid the use of divider lines. 
*   **Execution:** Separate list items using `spacing-4` (1rem) of vertical whitespace. For complex data, use alternating tonal strips of `surface-container-lowest` and `surface-container-low`.

### The "Cognitive Header" (Custom Component)
A wide, asymmetric header where the `display-md` title sits on the left, and a `surface-container-high` utility bar floats offset to the right. This breaks the grid and signals a bespoke, premium experience.

---

## 6. Do’s and Don’ts

### Do
*   **Use Whitespace as Structure:** Allow `spacing-16` (4rem) between major sections to let the "architectural" layers breathe.
*   **Prioritize Type Scale:** Use `display-lg` for single-metric dashboards to create a "Gallery" feel.
*   **Nest Surfaces:** Place a white card on a soft gray background to create natural lift.

### Don’t
*   **Don't use 100% Black:** Never use `#000000`. Always use `on-surface` (#191c1e) for text to maintain the "slate" aesthetic.
*   **Don't use Hard Borders:** If you feel the urge to draw a line, try changing the background color of the adjacent container instead.
*   **Don't Over-round:** Stick to the `0.25rem` (DEFAULT) scale. Excessive rounding (pill shapes) destroys the professional enterprise "Architectural" intent.