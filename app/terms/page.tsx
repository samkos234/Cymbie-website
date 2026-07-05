import React from "react";
import { LegalPage } from "@/components/LegalPage";

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      subtitle="These Terms of Service govern your use of the Cymbie platform, including our mobile applications, website, and all related services. By creating an account, you agree to these terms in full."
      updated="May 1, 2026"
      sections={[
        { heading:"1. Acceptance of Terms", content:"By downloading, installing, or using Cymbie, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree with any part of these terms, you must not use our services. We reserve the right to update these terms at any time, with notice provided via the app or email." },
        { heading:"2. Eligibility", content:"You must be at least 18 years of age to use Cymbie. By creating an account, you confirm that you are 18 or older and have the legal capacity to enter into a binding agreement. Cymbie does not knowingly collect information from or market to persons under 18." },
        { heading:"3. Your Account", content:"You are responsible for maintaining the confidentiality of your account credentials. You agree to provide accurate, current, and complete information during registration and to update your information as necessary. You may not transfer your account to another person. You are solely responsible for all activity that occurs under your account." },
        { heading:"4. Acceptable Use", content:"You agree not to use Cymbie to: (a) harass, abuse, stalk, or harm any person; (b) impersonate any person or entity; (c) post false or misleading information; (d) solicit money, financial information, or gifts from other members; (e) promote or facilitate commercial sexual services; (f) distribute spam or unauthorised commercial communications; (g) violate any applicable law or regulation." },
        { heading:"5. Content You Post", content:"You retain ownership of content you post on Cymbie. By posting content, you grant Cymbie a worldwide, royalty-free, non-exclusive licence to use, reproduce, and display your content solely for the purpose of operating and improving the platform. We reserve the right to remove any content that violates our Community Guidelines without notice." },
        { heading:"6. Premium Subscriptions", content:"Cymbie offers optional paid subscription tiers (Warm and Ardent). Subscriptions are billed through your app store account and auto-renew unless cancelled at least 24 hours before the renewal date. Refunds are subject to the policies of Apple App Store or Google Play. Cymbie does not directly process refunds for in-app purchases." },
        { heading:"7. Intellectual Property", content:"The Cymbie name, logo, app design, compatibility algorithm, and all associated intellectual property are owned by Cymbie Inc. Nothing in these terms grants you any right to use our trademarks, trade names, or service marks without our prior written consent." },
        { heading:"8. Limitation of Liability", content:"To the maximum extent permitted by law, Cymbie shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the service. Our total liability for any claims arising under these terms shall not exceed the amount you paid to Cymbie in the 12 months preceding the claim." },
        { heading:"9. Termination", content:"We reserve the right to suspend or terminate your account at any time for violations of these terms or our Community Guidelines. Upon termination, your right to use the service immediately ceases. You may delete your account at any time from the app settings." },
        { heading:"10. Governing Law", content:"These Terms of Service are governed by the laws of the State of New York, United States, without regard to conflict of law principles. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the state and federal courts located in New York County, New York." },
        { heading:"11. Contact", content:"For questions about these terms, please contact us at legal@cymbie.co or write to Cymbie Inc., 123 W 18th Street, New York, NY 10011." },
      ]}
    />
  );
}


