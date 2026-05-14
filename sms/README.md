# SMS Channel Assets

This directory manages the SMS (Short Message Service) templates and compliance documentation for ASB's multi-channel communication strategy.

## 🛡️ Banking Compliance & Risk
SMS is a high-risk channel due to phishing. Our templates follow strict ASB protocols:
1.  **No Clickable Links**: We avoid URLs to sensitive pages (login/settings) to protect customers from smishing.
2.  **Explicit Branding**: Every message starts with "ASB:" to verify identity.
3.  **Opt-out Management**: Marketing messages include mandatory "Reply STOP" logic.

## 📏 Technical Constraints (GSM-7)
All templates are optimized for the **160-character limit** to ensure they are delivered as a single message segment, reducing costs and ensuring delivery reliability across all mobile carriers.

## 📂 Content Fragments
In the ASB ecosystem, these templates are managed as **AEM Content Fragments**, allowing Marketing teams to update text without developer intervention while maintaining technical constraints.

---
*For the full list of templates, see [sms-library.md](./sms-library.md).*
