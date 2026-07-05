import React from "react";
import { LegalPage } from "@/components/LegalPage";

export default function ConsumerHealthPrivacyPage() {
  return (
    <LegalPage
      title="Consumer Health Data Privacy Policy"
      subtitle="This policy applies to residents of Washington State and other US states with Consumer Health Data privacy laws, and governs how Cymbie handles health-related personal information."
      updated="May 1, 2026"
      sections={[
        { heading:"What is consumer health data?", content:"Under applicable US state laws, 'consumer health data' includes personal information that is linked or reasonably linkable to you and that identifies your past, present, or future physical or mental health conditions. In the context of a dating platform, this may include information you choose to share about your health, disabilities, or wellness practices in your profile or conversations." },
        { heading:"Health data we may process", content:"Cymbie may process the following categories of consumer health data that you voluntarily provide: disabilities or accessibility needs (to deliver accessible features); mental health or neurodivergence disclosures you include in your profile; general wellness preferences (e.g. sobriety, dietary practices). We do not require you to share any health information. What you share in your profile is entirely your choice." },
        { heading:"How we use health data", content:"We use consumer health data only for: personalising your experience on Cymbie; improving compatibility matching where health-related lifestyle preferences are relevant; providing accessibility accommodations you request. We do not sell, lease, or rent consumer health data. We do not use health data for advertising. We do not share health data with employers, insurance companies, or government entities except as required by law." },
        { heading:"Your rights over health data", content:"Residents of applicable US states have the right to: access the consumer health data we hold about you; withdraw consent to our processing of your health data at any time; request deletion of your consumer health data; receive a copy of your health data in a portable format. To exercise these rights, contact privacy@cymbie.co. We will respond within 45 days." },
        { heading:"Data sharing for health data", content:"We share consumer health data only with: service providers who assist us in operating the platform, under binding data processing agreements that prohibit secondary use; law enforcement where required by a lawful court order. We do not share consumer health data with data brokers, advertising networks, or social media companies." },
        { heading:"Security of health data", content:"Consumer health data is subject to the same high-security standards as all personal data on Cymbie, including AES-256 encryption at rest, TLS 1.3 in transit, and strict access controls." },
        { heading:"Contact", content:"For questions about this Consumer Health Data Privacy Policy or to exercise your rights, contact our Data Protection Officer at privacy@cymbie.co or write to Cymbie Inc., 123 W 18th Street, New York, NY 10011." },
      ]}
    />
  );
}


