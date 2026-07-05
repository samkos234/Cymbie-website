import React from "react";
import { LegalPage } from "@/components/LegalPage";

export default function PrivacyChoicesPage() {
  return (
    <LegalPage
      title="Your Privacy Choices"
      subtitle="Cymbie respects your right to control how your personal data is used. This page explains your choices and how to exercise them."
      updated="May 1, 2026"
      sections={[
        { heading:"Data access and portability", content:'You have the right to request a copy of all personal data Cymbie holds about you. We will provide this in a structured, machine-readable format (JSON) within 30 days. To request your data, go to Settings → Privacy → Download My Data in the app, or email privacy@cymbie.co with subject line "Data Access Request".' },
        { heading:"Correcting your data", content:"If any of your personal information is inaccurate, you can update most of it directly in your profile settings. For data you cannot update yourself — such as verification status or account metadata — email privacy@cymbie.co and we will correct it within 14 days." },
        { heading:"Deleting your data", content:'You can delete your Cymbie account and associated personal data at any time by going to Settings → Account → Delete Account. Account deletion is permanent and cannot be reversed. Some data may be retained for up to 3 years in anonymised form for legal compliance and fraud prevention. To request immediate, full erasure, email privacy@cymbie.co with subject line "Erasure Request".' },
        { heading:"Opting out of marketing communications", content:"You can unsubscribe from marketing emails at any time by clicking the unsubscribe link in any email we send, or by going to Settings → Notifications → Email in the app. Note: Transactional emails (account confirmation, security alerts, subscription receipts) cannot be disabled as they are required for service delivery." },
        { heading:"Controlling push notifications", content:"You can manage all push notifications from Cymbie in your device settings (iOS: Settings → Notifications → Cymbie; Android: Settings → Apps → Cymbie → Notifications). You can also control notification types granularly within the Cymbie app under Settings → Notifications." },
        { heading:"Opting out of analytics", content:'Cymbie uses anonymised analytics to improve the product. You can opt out of non-essential analytics by going to Settings → Privacy → Analytics in the app, or emailing privacy@cymbie.co with subject line "Analytics Opt-Out". This will not affect your ability to use Cymbie.' },
        { heading:"Do Not Sell or Share My Personal Information", content:'Under the California Consumer Privacy Act (CCPA) and other applicable US state privacy laws, you have the right to opt out of the "sale" or "sharing" of your personal information. Cymbie does not sell your personal data to third parties. We do not share your personal data with advertising networks or data brokers. If you have concerns, contact privacy@cymbie.co.' },
        { heading:"Sensitive personal information", content:"If you have provided sensitive personal information (such as health conditions, sexual orientation, or religious beliefs) in your profile, you may request that we limit the use of this data to only what is necessary to provide the service you requested. Contact privacy@cymbie.co to make this request." },
        { heading:"Withdrawing consent", content:"Where Cymbie processes your data based on your consent, you have the right to withdraw that consent at any time. Withdrawal of consent will not affect the lawfulness of processing based on consent before its withdrawal. To withdraw consent, contact privacy@cymbie.co." },
        { heading:"Lodging a complaint", content:"If you believe your privacy rights have been violated, you have the right to lodge a complaint with your local data protection authority. In the EU/UK, this is your national supervisory authority. In the US, you may contact the FTC or your state attorney general. We also encourage you to contact us directly first at privacy@cymbie.co — we take all complaints seriously." },
        { heading:"How to reach us", content:"For all privacy choices and requests: privacy@cymbie.co. We respond within 30 days (45 days for complex requests). Our Data Protection Officer is available at dpo@cymbie.co." },
      ]}
    />
  );
}


