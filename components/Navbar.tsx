"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const NAV = [
  {
    label: "Company",
    items: [
      { label: "Our Mission", href: "/mission", desc: "Why we built Cymbie" },
      { label: "About Us", href: "/about", desc: "Our story and history" },
      { label: "Cymbie Labs", href: "/labs", desc: "Research & data insights" },
      { label: "Newsroom", href: "/newsroom", desc: "Latest press & news" },
      { label: "Careers", href: "/careers", desc: "Join our team" },
      { label: "Press", href: "/press", desc: "Media resources" },
    ],
  },
  {
    label: "Product",
    items: [
      { label: "How It Works", href: "/how-it-works", desc: "The Cymbie experience" },
      { label: "Features", href: "/features", desc: "Everything we offer" },
      { label: "Premium", href: "/premium", desc: "Warm & Ardent plans" },
      { label: "Verification", href: "/verification", desc: "How we keep it real" },
      { label: "Compatibility Science", href: "/compatibility", desc: "The matching algorithm" },
      { label: "Download the App", href: "/download", desc: "iOS & Android" },
    ],
  },
  {
    label: "Community",
    items: [
      { label: "Success Stories", href: "/success-stories", desc: "Real Cymbie love" },
      { label: "The Blog", href: "/blog", desc: "Relationship advice & tips" },
      { label: "Intentional Dating", href: "/intentional", desc: "Our philosophy" },
      { label: "Community Guidelines", href: "/community-guidelines", desc: "Our standards" },
    ],
  },
  {
    label: "Safety",
    items: [
      { label: "Trust & Safety", href: "/trust-safety", desc: "How we protect you" },
      { label: "Safe Dating Guide", href: "/safe-dating", desc: "Tips for every step" },
      { label: "FAQ", href: "/faq", desc: "Common questions" },
      { label: "Contact Support", href: "/contact", desc: "Get in touch" },
    ],
  },
];

const G = {
  bg: "#0C0B09",
  surface: "#151310",
  border: "#2A2520",
  gold: "#C8A96E",
  goldMuted: "rgba(200,169,110,0.12)",
  text: "#F2EDE4",
  muted: "#8A8070",
  dim: "#4A4540",
};

export default function Navbar({ onWaitlist }: { onWaitlist?: () => void }) {
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const fn = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(null);
    };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);

  useEffect(() => { setOpen(null); setMobileOpen(false); }, [pathname]);

  return (
    <div ref={ref}>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled || mobileOpen ? "rgba(12,11,9,0.97)" : "rgba(12,11,9,0)",
        backdropFilter: scrolled || mobileOpen ? "blur(24px) saturate(180%)" : "none",
        borderBottom: scrolled || mobileOpen ? `1px solid ${G.border}` : "1px solid transparent",
        transition: "all 0.35s ease",
      }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", height: 72, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg,#A8854A,#C8A96E)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontFamily: "var(--font-playfair),Georgia,serif", fontWeight: 700, color: "#0C0B09", fontSize: 16, lineHeight: 1, paddingTop: 2 }}>C</span>
            </div>
            <span style={{ fontFamily: "var(--font-playfair),Georgia,serif", fontWeight: 700, fontSize: 20, color: G.text, letterSpacing: "0.02em" }}>Cymbie</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex" style={{ alignItems: "center", gap: 4 }}>
            {NAV.map(section => (
              <div key={section.label} style={{ position: "relative" }}>
                <button
                  onMouseEnter={() => setOpen(section.label)}
                  onClick={() => setOpen(open === section.label ? null : section.label)}
                  style={{
                    display: "flex", alignItems: "center", gap: 4, padding: "8px 14px",
                    background: "none", border: "none", cursor: "pointer",
                    color: open === section.label ? G.gold : G.muted,
                    fontSize: 14, fontWeight: 500, fontFamily: "inherit",
                    transition: "color 0.2s",
                  }}
                  onMouseLeave={() => {}}
                >
                  {section.label}
                  <ChevronDown size={13} style={{ transform: open === section.label ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }} />
                </button>

                <AnimatePresence>
                  {open === section.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.2 }}
                      onMouseEnter={() => setOpen(section.label)}
                      onMouseLeave={() => setOpen(null)}
                      style={{
                        position: "absolute", top: "calc(100% + 8px)", left: "50%", transform: "translateX(-50%)",
                        background: "#151310", border: `1px solid ${G.border}`, borderRadius: 16,
                        padding: 8, minWidth: 260,
                        boxShadow: "0 24px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(200,169,110,0.05) inset",
                        zIndex: 200,
                      }}
                    >
                      {section.items.map(item => (
                        <Link key={item.href} href={item.href}
                          style={{ display: "block", padding: "10px 14px", borderRadius: 10, textDecoration: "none", transition: "background 0.15s" }}
                          onMouseEnter={e => (e.currentTarget.style.background = G.goldMuted)}
                          onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                        >
                          <div style={{ fontSize: 14, fontWeight: 600, color: G.text, marginBottom: 2 }}>{item.label}</div>
                          <div style={{ fontSize: 12, color: G.dim }}>{item.desc}</div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex" style={{ alignItems: "center", gap: 10 }}>
            <Link href="/download" style={{ padding: "8px 18px", borderRadius: 100, fontSize: 14, fontWeight: 600, color: G.muted, textDecoration: "none", border: `1px solid ${G.border}`, transition: "color 0.2s, border-color 0.2s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = G.text; (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,169,110,0.3)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = G.muted; (e.currentTarget as HTMLElement).style.borderColor = G.border; }}
            >
              Download
            </Link>
            <button
              onClick={onWaitlist}
              style={{ padding: "9px 20px", borderRadius: 100, fontSize: 14, fontWeight: 700, background: "linear-gradient(135deg,#A8854A,#C8A96E)", color: "#0C0B09", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 6, boxShadow: "0 4px 16px rgba(200,169,110,0.25)", transition: "box-shadow 0.2s, transform 0.15s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(200,169,110,0.4)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 16px rgba(200,169,110,0.25)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
            >
              Request Access <ArrowRight size={13} />
            </button>
          </div>

          {/* Mobile hamburger */}
          <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", color: G.muted, padding: 8 }}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}
              style={{ overflow: "hidden", borderTop: `1px solid ${G.border}` }}
            >
              <div style={{ padding: "16px 24px 24px", maxHeight: "80vh", overflowY: "auto" }}>
                {NAV.map(section => (
                  <div key={section.label} style={{ marginBottom: 4 }}>
                    <button onClick={() => setMobileExpanded(mobileExpanded === section.label ? null : section.label)}
                      style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 0", background: "none", border: "none", cursor: "pointer", color: G.text, fontSize: 16, fontWeight: 600, fontFamily: "inherit", borderBottom: `1px solid ${G.border}` }}
                    >
                      {section.label}
                      <ChevronDown size={16} style={{ transform: mobileExpanded === section.label ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s", color: G.muted }} />
                    </button>
                    <AnimatePresence>
                      {mobileExpanded === section.label && (
                        <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} style={{ overflow: "hidden" }}>
                          <div style={{ paddingTop: 8, paddingBottom: 8 }}>
                            {section.items.map(item => (
                              <Link key={item.href} href={item.href}
                                style={{ display: "block", padding: "10px 16px", color: G.muted, textDecoration: "none", fontSize: 15 }}
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
                <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 10 }}>
                  <Link href="/download" style={{ textAlign: "center", padding: "14px", borderRadius: 12, border: `1px solid ${G.border}`, color: G.text, textDecoration: "none", fontWeight: 600 }}>
                    Download the App
                  </Link>
                  <button onClick={() => { setMobileOpen(false); onWaitlist?.(); }}
                    style={{ padding: 16, borderRadius: 12, background: "linear-gradient(135deg,#A8854A,#C8A96E)", color: "#0C0B09", fontWeight: 700, fontSize: 15, border: "none", cursor: "pointer" }}>
                    Request Early Access
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}
