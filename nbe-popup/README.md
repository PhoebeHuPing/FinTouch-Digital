# NBE Marketing Pop-up Component

This directory contains a jQuery-powered **Next Best Experience (NBE)** pop-up component, designed to deliver targeted marketing offers to customers within the ASB authenticated dashboard.

## 🛠️ Technical Logic

### 1. Timed Trigger
The pop-up is programmed to appear after a **2000ms (2s) delay**. In a production environment, this delay prevents the UI from feeling intrusive by allowing the main dashboard content to load first.

### 2. Customer Experience (UX) Persistence
To prevent "pop-up fatigue," the component uses **`localStorage`** to track user interactions:
- When a user clicks the "Close" (&times;) or "Not now" button, a key (`nbe_dismissed_{id}`) is stored in the browser.
- Subsequent visits will check for this key and suppress the pop-up if it exists.
- This demonstrates a customer-centric approach to marketing.

### 3. Analytics & Tracking
The component is built for **Adobe Analytics** integration:
- Every instance includes a `data-nbe-id` attribute.
- jQuery hooks capture "Impression," "Dismissal," and "CTA Click" events, which can be pushed to the `adobeDataLayer`.

## 🎨 Design Standards
- **ASB Branding**: Strict adherence to the ASB color palette and typography.
- **Responsive**: Fluid layout that stacks buttons vertically on mobile devices for better tap targets.
- **Accessibility**:
    - `role="dialog"` for screen readers.
    - High-contrast buttons.
    - Keyboard-trappable focus (conceptual for demo).

## 🏗️ AEM Integration (Component Mapping)
For AEM Authors, this component exposes the following:
- **Hero Image**: Selected from AEM Assets (DAM).
- **Offer Title/Body**: Rich text fields.
- **Analytics ID**: Unique string for campaign reporting.
- **CTA URL**: Destination for the primary button.
