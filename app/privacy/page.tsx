import React from "react";
import { LegalPage } from "@/components/LegalPage";

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      subtitle="Your privacy is fundamental to everything we build. This policy explains what data we collect, how we use it, and the rights you have over your personal information."
      updated="May 1, 2026"
      sections={[
        { heading:"1. Data We Collect", content:"We collect: (a) Information you provide — name, email, date of birth, photos, profile answers, and preferences; (b) Usage data — how you interact with the app, matches you engage with, messages sent; (c) Device data — device type, OS, IP address, and general location (city-level); (d) Verification data — photo verification status and, where applicable, ID verification status (the ID itself is never stored by Cymbie)." },
        { heading:"2. How We Use Your Data", content:"We use your data to: match you with compatible members; improve our compatibility algorithm; provide customer support; send product updates and match notifications (which you can opt out of); detect and prevent fraud and policy violations; comply with legal obligations. We do not use your data to sell advertisements." },
        { heading:"3. Data Sharing", content:"We do not sell your personal data. We share data only with: trusted service providers who help us operate the platform (e.g. cloud hosting, ID verification, customer support tools) under strict data processing agreements; law enforcement or regulatory bodies when required by law; business successors in the event of a merger or acquisition, with advance notice to you." },
        { heading:"4. Data Retention", content:"We retain your data for as long as your account is active, plus a maximum of 3 years after account deletion (to comply with legal obligations). You can request immediate deletion of your data at any time by emailing privacy@cymbie.co. Some data may be retained in anonymised, aggregate form for research and product improvement." },
        { heading:"5. Your Rights", content:"Depending on your jurisdiction, you may have the right to: access a copy of your personal data; correct inaccurate data; delete your data ('right to be forgotten'); object to or restrict certain processing; data portability; withdraw consent at any time. To exercise these rights, contact privacy@cymbie.co. We respond within 30 days." },
        { heading:"6. International Data Transfers", content:"Cymbie operates globally. Your data may be processed in countries outside your own, including the United States and European Economic Area. We use Standard Contractual Clauses and other approved transfer mechanisms to ensure your data is protected to the standard required by applicable law." },
        { heading:"7. Security", content:"We use industry-standard encryption in transit and at rest, strict access controls, regular security audits, and a dedicated security team. We promptly notify affected users of any data breaches that may affect their rights, as required by applicable law." },
        { heading:"8. Children's Privacy", content:"Cymbie is not intended for persons under 18. We do not knowingly collect personal data from minors. If we become aware that a minor has provided us with personal data, we will delete it immediately and terminate their account." },
        { heading:"9. Cookies", content:"We use essential, functional, and analytics cookies. You can manage your cookie preferences at any time. See our Cookie Policy for full details." },
        { heading:"10. Contact", content:"For any privacy questions or requests, contact our Data Protection Officer at privacy@cymbie.co or write to Cymbie Inc., 123 W 18th Street, New York, NY 10011. For EU/UK matters: Cymbie EU Ltd, 45 Old Street, London EC1V 9HW." },
      ]}
    />
  );
}


