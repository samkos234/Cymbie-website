import React from "react";
import Link from "next/link";

const G = {
  bg: "#0C0B09",
  border: "#1C1914",
  gold: "#C8A96E",
  text: "#F2EDE4",
  muted: "#8A8070",
  dim: "#4A4540",
};

const FOOTER_LINKS = [
  {
    heading: "Product",
    links: [
      { label: "How It Works", href: "/how-it-works" },
      { label: "Features", href: "/features" },
      { label: "Premium Plans", href: "/premium" },
      { label: "Verification", href: "/verification" },
      { label: "Compatibility Science", href: "/compatibility" },
      { label: "Download the App", href: "/download" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Our Mission", href: "/mission" },
      { label: "About Us", href: "/about" },
      { label: "Cymbie Labs", href: "/labs" },
      { label: "Newsroom", href: "/newsroom" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
    ],
  },
  {
    heading: "Community",
    links: [
      { label: "Success Stories", href: "/success-stories" },
      { label: "The Blog", href: "/blog" },
      { label: "Intentional Dating", href: "/intentional" },
      { label: "Community Guidelines", href: "/community-guidelines" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Trust & Safety", href: "/trust-safety" },
      { label: "Safe Dating Guide", href: "/safe-dating" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact & Support", href: "/contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Terms of Service", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "Security", href: "/security" },
      { label: "Consumer Health Data", href: "/consumer-health-privacy" },
      { label: "Your Privacy Choices", href: "/privacy-choices" },
    ],
  },
];

const SOCIAL = [
  {
    label: "Twitter / X",
    href: "https://twitter.com/CymbieApp",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com/CymbieApp",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@CymbieApp",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.27 8.27 0 004.84 1.56V6.79a4.85 4.85 0 01-1.07-.1z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer style={{ background: G.bg, borderTop: `1px solid ${G.border}` }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "64px 24px 32px" }}>

        {/* Top row: Brand + Newsletter */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 48, justifyContent: "space-between", marginBottom: 64 }}>
          {/* Brand */}
          <div style={{ flex: "1 1 280px", maxWidth: 340 }}>
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", marginBottom: 16 }}>
              <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg,#A8854A,#C8A96E)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontFamily: "var(--font-playfair),Georgia,serif", fontWeight: 700, color: "#0C0B09", fontSize: 16 }}>C</span>
              </div>
              <span style={{ fontFamily: "var(--font-playfair),Georgia,serif", fontWeight: 700, fontSize: 20, color: G.text }}>Cymbie</span>
            </Link>
            <p style={{ color: G.muted, fontSize: 14, lineHeight: 1.8, marginBottom: 20 }}>
              Dating, redefined. Cymbie is built for people who want something real — meaningful matches, genuine conversations, and connections worth keeping.
            </p>
            {/* Social */}
            <div style={{ display: "flex", gap: 10 }}>
              {SOCIAL.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={`Cymbie on ${s.label}`}
                  style={{ width: 38, height: 38, borderRadius: "50%", border: `1px solid #2A2520`, display: "flex", alignItems: "center", justifyContent: "center", color: G.dim, textDecoration: "none", transition: "border-color 0.2s, color 0.2s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = G.gold; (e.currentTarget as HTMLElement).style.color = G.gold; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#2A2520"; (e.currentTarget as HTMLElement).style.color = G.dim; }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div style={{ flex: "1 1 300px", maxWidth: 380 }}>
            <h4 style={{ color: G.text, fontWeight: 700, marginBottom: 8, fontSize: 15 }}>Stay in the loop</h4>
            <p style={{ color: G.muted, fontSize: 13, marginBottom: 16, lineHeight: 1.7 }}>
              Dating advice, app updates, and success stories — straight to your inbox. No spam, ever.
            </p>
            <form onSubmit={e => e.preventDefault()} style={{ display: "flex", gap: 8 }}>
              <input
                type="email" placeholder="your@email.com" required
                style={{ flex: 1, padding: "10px 14px", borderRadius: 10, background: "#151310", border: "1px solid #2A2520", color: G.text, fontSize: 13, outline: "none", fontFamily: "inherit" }}
                onFocus={e => (e.target.style.borderColor = "rgba(200,169,110,0.5)")}
                onBlur={e => (e.target.style.borderColor = "#2A2520")}
              />
              <button type="submit"
                style={{ padding: "10px 18px", borderRadius: 10, background: "linear-gradient(135deg,#A8854A,#C8A96E)", color: "#0C0B09", fontWeight: 700, fontSize: 13, border: "none", cursor: "pointer", whiteSpace: "nowrap" }}>
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Links grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 32, marginBottom: 48 }}>
          {FOOTER_LINKS.map(section => (
            <div key={section.heading}>
              <h4 style={{ color: G.text, fontWeight: 700, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 16 }}>
                {section.heading}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {section.links.map(link => (
                  <li key={link.href}>
                    <Link href={link.href}
                      style={{ color: G.dim, fontSize: 13, textDecoration: "none", transition: "color 0.15s" }}
                      onMouseEnter={e => (e.currentTarget.style.color = G.muted)}
                      onMouseLeave={e => (e.currentTarget.style.color = G.dim)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "linear-gradient(90deg,transparent,#2A2520,transparent)", marginBottom: 24 }} />

        {/* Bottom */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ color: G.dim, fontSize: 12 }}>
            © {new Date().getFullYear()} Cymbie Inc. All rights reserved. · cymbie.co
          </p>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            {[["Terms", "/terms"], ["Privacy", "/privacy"], ["Cookies", "/cookies"], ["Your Privacy Choices", "/privacy-choices"]].map(([label, href]) => (
              <Link key={href} href={href}
                style={{ color: G.dim, fontSize: 12, textDecoration: "none" }}
                onMouseEnter={e => (e.currentTarget.style.color = G.muted)}
                onMouseLeave={e => (e.currentTarget.style.color = G.dim)}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
