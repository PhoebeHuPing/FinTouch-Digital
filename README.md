# ASB OmniChannel Communication Suite

**Status: High-Fidelity Prototype / QA In Progress**

A comprehensive, high-fidelity demonstration of banking communication assets, custom-engineered to align with the rigorous technical and brand standards of ASB Bank. This project showcases a full-funnel digital experience—from customer reach (Email/SMS) to engagement (NBE Pop-ups) and conversion (Lead Capture).

## 🚀 The Multi-Channel Suite

1.  **Transaction Alert Email**: A robust, table-based HTML email optimized for 100% compatibility across legacy and modern clients (Outlook, Gmail, iOS Mail).
2.  **Account Tile (AEM Component)**: A modern, interactive UI component featuring Adobe HTL syntax, a balance toggle, and responsive design.
3.  **SMS Template Library**: A collection of compliant, high-conversion SMS templates optimized for GSM-7 character limits and banking security.
4.  **NBE Marketing Pop-up**: A jQuery-powered, responsive "Next Best Experience" modal with session-based persistence logic.
5.  **Lead Capture Component**: A high-fidelity, accessible inquiry form with real-time validation and asynchronous submission states.

---

## 🎨 Design & Interaction Philosophy: "The ASB Standard"

### Visual Identity
*   **Brand Consistency**: Strict adherence to ASB's palette (Primary Yellow `#FFD100`, Charcoal `#262626`) and typography (Segoe UI/Arial).
*   **Micro-interactions (Phase 4)**: Every component features professional hover states, active scaling, and smooth transitions to provide a "Big Tech" feel.

### ♿ Accessibility & Risk Management (WCAG 2.1)
"Accessibility is a requirement, not a feature."
*   **Color Contrast**: All text-to-background ratios exceed 4.5:1.
*   **ARIA Roles**: Comprehensive use of `role="dialog"`, `aria-live` for form errors, and `aria-pressed` for interactive toggles.
*   **Risk Gates**: Every asset is documented in a risk-management framework (see `TESTING.md`) covering compliance, legal, and functional integrity.

---

## 🏗️ CMS & Adobe Ecosystem Ready

This project is designed for **component-based authoring** within Adobe Experience Manager (AEM) and data-driven personalization via Adobe Campaign Standard (ACS).

### AEM Component Mapping
| Component | Authorable Field | Integration Logic |
| :--- | :--- | :--- |
| **Account Tile** | Account Name/Num | HTL `${properties.accountName}` |
| **NBE Pop-up** | Analytics ID | `data-nbe-id` for Adobe Analytics |
| **Lead Capture** | Success Message | Authorable via AEM Dialog |
| **Email** | Hero Asset | Injected via AEM DAM Path |

### Data-Driven Personalization
Templates are annotated with ACS-ready data tags (e.g., `{{recipient.firstName}}`, `{{transaction.amount}}`), ensuring seamless mapping between ASB’s secure data streams and customer-facing communications.

---

## 📂 Project Structure

```text
OmniChannel/
├── email/
│   └── transaction-alert.html   # Email Template (XHTML 1.0)
├── lead-capture/
│   ├── index.html               # Form Demo
│   ├── style.css                # Form Styles
│   └── form-logic.js            # Validation Logic
├── nbe-popup/
│   ├── index.html               # Demo Page
│   ├── style.css                # Pop-up Styles
│   ├── popup.js                 # jQuery Logic
│   └── README.md                # Tech & Persistence Specs
├── sms/
│   ├── sms-library.md           # Template Directory
│   └── README.md                # Compliance & GSM-7 Docs
├── web-component/
│   ├── account-tile.html        # AEM/HTL Component Demo
│   └── style.css                # Component Styles
├── DEVELOPMENT_PLAN.md          # Full Roadmap Status
├── TESTING.md                   # QA & Risk Logs
└── README.md                    # Project Documentation
```

---

*This project bridges the gap between creative marketing vision and rigorous banking engineering.*
