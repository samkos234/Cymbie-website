import React from "react";
import { LegalPage } from "@/components/LegalPage";

export default function SecurityPage() {
  return (
    <LegalPage
      title="Security"
      subtitle="We take the security of your data seriously. This page describes the technical and organisational measures Cymbie uses to protect your information."
      updated="May 1, 2026"
      sections={[
        { heading:"Encryption", content:"All data transmitted between your device and Cymbie's servers is encrypted using TLS 1.3. Data stored in our databases is encrypted at rest using AES-256 encryption. This includes all personal information, messages, and match data." },
        { heading:"Authentication", content:"Cymbie uses industry-standard secure authentication. Passwords are hashed using bcrypt with a per-user salt. We support two-factor authentication (2FA) via authenticator apps. Session tokens expire after inactivity and are invalidated on logout." },
        { heading:"Infrastructure security", content:"Our infrastructure runs on AWS with VPC isolation. We enforce strict network segmentation, regular automated vulnerability scanning, and intrusion detection monitoring. Production systems are accessible only via private networks with MFA-protected access." },
        { heading:"Access controls", content:"Internal access to user data follows the principle of least privilege. Only engineers with a specific operational need can access production data, and all such access is logged and audited. Customer support agents can access limited account data necessary to resolve support requests." },
        { heading:"Security testing", content:"We conduct annual penetration tests with an independent security firm and continuous automated vulnerability scanning. We operate a responsible disclosure programme — if you discover a security vulnerability, please report it to security@cymbie.co." },
        { heading:"Incident response", content:"We maintain a documented incident response plan. In the event of a data breach that affects your rights, we will notify affected users and the relevant supervisory authorities within 72 hours of becoming aware, as required by GDPR and applicable regulations." },
        { heading:"Responsible disclosure", content:"We welcome reports from security researchers. If you discover a potential vulnerability in Cymbie's systems, please email security@cymbie.co with details. We do not pursue legal action against researchers who act in good faith and disclose responsibly. We aim to acknowledge reports within 24 hours." },
        { heading:"Contact", content:"For security-related questions or to report a vulnerability, contact security@cymbie.co." },
      ]}
    />
  );
}


