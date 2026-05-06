# ASB OmniChannel Communication Suite

A professional, high-fidelity demonstration of banking communication assets, designed to meet the rigorous standards of ASB Bank. This project showcases proficiency in HTML5, CSS3, jQuery, and cross-platform email development.

## 🚀 Project Overview

This suite includes:
1.  **Transaction Alert Email**: A robust, table-based HTML email template optimized for high compatibility (Outlook, Gmail, iOS Mail).
2.  **Account Tile Web Component**: A modern, interactive UI component for a banking dashboard, featuring a balance toggle and responsive design.

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

## 📂 Project Structure

```text
OmniChannel/
├── email/
│   └── transaction-alert.html   # Email Template
├── web-component/
│   ├── account-tile.html        # Component Demo
│   └── style.css                # Component Styles
└── README.md                    # Professional Documentation
```

---

*This project was created as a demonstration of technical proficiency and design alignment for ASB Bank.*
