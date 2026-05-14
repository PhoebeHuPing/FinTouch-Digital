# ASB OmniChannel Communication Suite

A professional, high-fidelity demonstration of banking communication assets, designed to meet the rigorous standards of ASB Bank. This project showcases proficiency in HTML5, CSS3, jQuery, and cross-platform email development.

## 🚀 Project Overview

This suite includes:
1.  **Transaction Alert Email**: A robust, table-based HTML email template optimized for high compatibility (Outlook, Gmail, iOS Mail).
2.  **Account Tile Web Component**: A modern, interactive UI component for a banking dashboard, featuring a balance toggle and responsive design.
3.  **SMS Template Library**: A collection of compliant, high-conversion SMS templates optimized for character limits and security.

---

## 🎨 Design Philosophy: "The ASB Look"

The assets were developed using ASB's core visual identity:
*   **Color Palette**: Primary Yellow (`#FFD100`), Charcoal Dark (`#262626`), and Neutral Grays for hierarchy.
*   **Typography**: Clean sans-serif stacks (Arial/Helvetica for email, Segoe UI for web) to ensure readability and professional "Big Tech" aesthetic.
*   **User Trust**: High contrast and clear spacing to convey reliability and security—essential for financial services.

## ♿ Accessibility & Standards (WCAG 2.1)

"Accessibility is not a feature; it's a requirement." This project adheres to:
*   **Color Contrast**: All text-to-background ratios exceed 4.5:1.
*   **ARIA Roles**: Used `role="presentation"` for layout tables and `role="region"` for UI components.
*   **Interactive State**: Buttons include `aria-pressed` states to communicate status to screen readers.
*   **Semantic HTML**: Proper use of headings (`<h1>`) and semantic containers.

## 📧 Email Compatibility Strategy

Email development is notoriously difficult due to fragmented client support. My approach:
*   **Table-based Layout**: Used XHTML 1.0 Transitional for maximum stability.
*   **Inlined Styles**: Ensured critical styles are robust across clients like Outlook that strip `<style>` tags.
*   **Mobile-First Response**: Used fluid widths and media queries for seamless transition to mobile devices.

## 🛠️ Technical Implementation

*   **Frontend**: HTML5, CSS3 (CSS Variables for theme management).
*   **Interactivity**: jQuery for lightweight, fast DOM manipulation (Show/Hide Balance feature).
*   **Performance**: Optimized SVG icons and minimal external dependencies to ensure <2s load times.

---

## 🏗️ CMS & Marketing Automation Ready (AEM Focus)

To meet ASB's operational requirements, these assets are designed with **component-based authoring** in mind (e.g., Adobe Experience Manager / Adobe Campaign).

### Component-Based Architecture
Rather than static HTML, the code is structured as modular components. In a production AEM environment, the following fields are exposed via **Dialogs** for Marketing stakeholders:

| Component | Authorable Field | Type | Description |
| :--- | :--- | :--- | :--- |
| **Account Tile** | Account Name | String | e.g., "Streamline", "Savings Plus" |
| | Theme Color | Select | ASB Yellow, Charcoal, or Neutral |
| | Icon Selection | Image/SVG | Pick from ASB's centralized DAM library |
| | CTA Link | URL | Destination for the "View details" action |
| **Email Template** | Salutation | Dynamic | Personalized via `{{recipient.firstName}}` |
| | Hero Image | DAM Ref | Asset path from AEM Assets |
| | Urgent Banner | Boolean | Toggle a red "Urgent" top border for critical alerts |

### Data Mapping
Transaction details (Amount, Merchant, Date) are annotated for integration with **Adobe Campaign Standard (ACS)**, ensuring seamless mapping between bank data streams and customer-facing templates.

---

## 🗺️ Project Roadmap & Job Alignment

This project is actively developed to align with the **ASB Digital Channels Developer** role. For a detailed breakdown of completed tasks and upcoming features (including SMS and Risk Management protocols), please see:

👉 **[DEVELOPMENT_PLAN.md](./DEVELOPMENT_PLAN.md)**

---

## 📂 Project Structure

```text
OmniChannel/
├── email/
│   └── transaction-alert.html   # Email Template
├── sms/
│   └── sms-library.md           # SMS Template Library
├── web-component/
│   ├── account-tile.html        # Component Demo
│   └── style.css                # Component Styles
└── README.md                    # Professional Documentation
```

---

*This project was created as a demonstration of technical proficiency and design alignment for ASB Bank.*
