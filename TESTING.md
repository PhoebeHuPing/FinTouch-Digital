# QA & Risk Management Protocol: ASB Digital Channels

This document outlines the mandatory testing procedures and risk management protocols for all digital content assets (Email, Web Components, SMS, etc.) within the OmniChannel project. Adhering to these standards ensures brand consistency, regulatory compliance, and customer trust.

---

## 🛡️ The "Risk Gate" Philosophy
As a Digital Channels Developer, every deployment is subject to a "Risk Gate" review. We prioritize:
1.  **Compliance**: Meeting all legal and banking regulations.
2.  **Accessibility**: Ensuring no customer is left behind (WCAG 2.1).
3.  **Consistency**: Pixel-perfect alignment with ASB Brand Guidelines.

---

## 📧 Email Compatibility Matrix

Email templates must be tested across the following environments to ensure 100% functional and visual integrity.

| Client | Platform | Test Method | Status |
| :--- | :--- | :--- | :--- |
| Outlook 2016/19 | Windows (Desktop) | Litmus / Physical Device | [ ] Pending |
| Outlook (Office 365) | Web Browser | Manual Check | [ ] Pending |
| Gmail | Android / iOS / Web | Manual Check | [ ] Pending |
| Apple Mail | macOS / iOS | Physical Device | [ ] Pending |
| Samsung Mail | Android | Physical Device | [ ] Pending |

**Critical Checks:**
- [ ] Image blocking: Do ALT tags provide sufficient context when images are off?
- [ ] Dark Mode: Does the design remain legible and professional in dark mode?
- [ ] DPI Scaling: Does the layout hold up on high-resolution Windows displays?

---

## ♿ Accessibility Audit (WCAG 2.1 Level AA)

"Accessibility is a requirement, not a feature."

| Criteria | Requirement | Tools Used |
| :--- | :--- | :--- |
| **Color Contrast** | Minimum 4.5:1 for normal text. | WAVE / Lighthouse |
| **Screen Readers** | Logical heading structure and descriptive ARIA labels. | VoiceOver (iOS) / NVDA |
| **Keyboard Nav** | All interactive elements (CTAs) must be focusable. | Tab-key testing |
| **Alt Text** | Descriptive text for functional images; null alt for decorative. | Manual Audit |

---

## ⚖️ Compliance & Legal Checklist

Before any asset is marked "Ready for Production," it must pass the following:

- [ ] **Unsubscribe Logic**: (Email) Presence of a clear, functional unsubscribe link.
- [ ] **Physical Address**: (Email) Inclusion of ASB's registered physical address in the footer.
- [ ] **Privacy Link**: Inclusion of the standard ASB Privacy Policy link.
- [ ] **Tracking Tags**: Correct implementation of Adobe Analytics / Adobe Campaign tracking parameters.
- [ ] **Character Limits**: (SMS) Templates do not exceed 160 characters per segment unless approved.

---

## 🚨 Risk Escalation & Remediation

In the event of a critical error post-deployment (e.g., broken link, incorrect interest rate):

1.  **Identify**: Log the issue in the incident management system.
2.  **Contain**: Work with Digital Production Lead to pull/stop the campaign if necessary.
3.  **Remediate**: Develop and test the fix in a sandbox environment.
4.  **Validate**: Peer review by a second Developer or Digital Channels Solutions Manager.
5.  **Deploy**: Re-release the corrected asset following the standard "Risk Gate" process.

---

## 📝 Test Log (Example Entry)

| Date | Asset | Version | Tester | Result | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 2026-05-14 | `transaction-alert.html` | v1.0.1 | Gemini CLI | PASS | Added ARIA roles to layout tables. |

---
*Last Updated: May 14, 2026*
