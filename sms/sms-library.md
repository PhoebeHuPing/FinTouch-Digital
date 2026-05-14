# ASB SMS Template Library

This library contains standardized, compliant, and high-conversion SMS templates designed for integration with Adobe Campaign Standard (ACS). Each template is optimized for the **160-character GSM-7 limit** to ensure cost-efficiency and reliable delivery.

---

## 🛡️ Security & Compliance Standards

- **Identity Verification**: Every SMS starts with "ASB:" to establish trust.
- **Phishing Prevention**: We NEVER include clickable links to login pages.
- **Urgency vs. Calm**: Use urgent language only for security alerts (Fraud, OTP).
- **Opt-out**: Marketing SMS must include "Reply STOP to opt out."

---

## 📋 Template Directory

### 1. One-Time Password (OTP)
**Purpose**: Secure authentication for logins or high-value transactions.

> **Content**:
> ASB: Your security code is {{otpCode}}. This code expires in 10 minutes. ASB will never ask for this code over the phone or via a link.

- **Character Count**: ~130 (depending on code length)
- **Risk Level**: High
- **AEM/ACS Mapping**: `security.otp_code`

---

### 2. Transaction Alert (High Value)
**Purpose**: Notify customers of large or unusual spending to prevent fraud.

> **Content**:
> ASB Alert: A payment of {{amount}} was made on your card ending in {{lastFour}}. If this wasn't you, call us immediately on 0800 272 272.

- **Character Count**: ~140
- **Risk Level**: Medium
- **AEM/ACS Mapping**: `transaction.amount`, `account.last_four`

---

### 3. Potential Fraud Warning
**Purpose**: Immediate action required for suspicious activity.

> **Content**:
> ASB URGENT: We've detected suspicious activity on your account. Please call 0800 272 272 or use the ASB app to verify your recent transactions.

- **Character Count**: 154
- **Risk Level**: Critical
- **AEM/ACS Mapping**: None (Static emergency template)

---

### 4. Low Balance Notification
**Purpose**: Helpful service alert to prevent overdrawn fees.

> **Content**:
> ASB: Your {{accountName}} balance is below {{threshold}}. Log in to the ASB app to transfer funds and avoid potential fees.

- **Character Count**: ~135
- **Risk Level**: Low (Service)
- **AEM/ACS Mapping**: `account.name`, `account.threshold_amount`

---

### 5. Marketing: Credit Card Offer
**Purpose**: Targeted promotion based on customer eligibility.

> **Content**:
> ASB: Hi {{firstName}}, you're eligible for a low-interest rate on our Visa Light card. View details in the ASB app. Reply STOP to opt out.

- **Character Count**: ~145
- **Risk Level**: Low (Promotional)
- **AEM/ACS Mapping**: `recipient.firstName`

---

## 🛠️ CMS Authoring & Data Mapping (AEM/ACS)

To ensure consistency, these templates are managed as "Content Fragments" in AEM. The following fields are exposed to the Marketing team:

| Template | Authorable Field | ACS Data Tag | Validation Rule |
| :--- | :--- | :--- | :--- |
| **OTP** | Expiry Time | `{{expiry}}` | Numeric (Minutes) |
| **Transaction** | Alert Phone Number | `{{supportPhone}}` | International Format |
| **Marketing** | Product Name | `{{productName}}` | Max 20 Characters |
| **All** | Brand Prefix | `ASB:` | Immutable Header |

---

## 🧪 Testing & Validation

1.  **Character Count**: Must be verified with a GSM-7 validator.
2.  **Personalization**: Test with long names (e.g., "Christopher") to ensure no segment overflow.
3.  **Compliance**: Reviewed by Legal/Privacy annually.
