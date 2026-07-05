import React from "react";
import { LegalPage } from "@/components/LegalPage";

export default function CookiesPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      subtitle="This policy explains how Cymbie uses cookies and similar tracking technologies on our website and apps, and how you can control them."
      updated="May 1, 2026"
      sections={[
        { heading:"What are cookies?", content:"Cookies are small text files stored on your device when you visit a website or use an app. They allow services to remember your preferences, keep you logged in, and understand how you use the platform." },
        { heading:"Types of cookies we use", content:"Essential cookies: Required for the platform to function. These cannot be disabled. They include authentication tokens, session management, and security cookies. Functional cookies: Remember your preferences such as language, notification settings, and display choices. Analytics cookies: Help us understand how members use Cymbie, which features are popular, and where users experience friction. This data is aggregated and anonymised. Marketing cookies: Used only on our public website (not in the app) to measure the performance of our advertising campaigns." },
        { heading:"Third-party cookies", content:"Some features of our website use third-party services that may place their own cookies, including: Mixpanel (analytics), Google Analytics (website traffic), Stripe (payment processing), Onfido (verification). Each of these services has its own cookie and privacy policy." },
        { heading:"Cookie duration", content:"Session cookies: Deleted when you close your browser. Persistent cookies: Remain on your device for a set period (typically 90 days to 2 years) or until you delete them." },
        { heading:"Managing your cookies", content:"You can control cookies through: Your browser settings (see your browser's help documentation); Our in-app privacy settings; Our cookie consent banner on the Cymbie website. Note: Disabling essential cookies will affect the functionality of the platform." },
        { heading:"Do Not Track", content:"Some browsers include a 'Do Not Track' feature. Our website currently responds to Do Not Track signals by disabling non-essential analytics and marketing cookies for users who have this setting enabled." },
        { heading:"Changes to this policy", content:"We may update this Cookie Policy from time to time. We will notify you of significant changes via the app or by email. Continued use of Cymbie after changes constitute acceptance of the updated policy." },
        { heading:"Contact", content:"For questions about our use of cookies, contact privacy@cymbie.co." },
      ]}
    />
  );
}


