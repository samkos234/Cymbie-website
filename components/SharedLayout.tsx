"use client";
import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { X, Mail, CheckCircle2, ArrowRight } from "lucide-react";

function WaitlistModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    if (!isOpen) { setDone(false); setEmail(""); setLoading(false); }
  }, [isOpen]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setDone(true); }, 1400);
  };

  const G = { bg: "#0C0B09", gold: "#C8A96E", goldDim: "#A8854A", text: "#F2EDE4", muted: "#8A8070", dim: "#4A4540" };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
            style={{ position: "fixed", inset: 0, zIndex: 200, background: "rgba(6,5,4,0.88)", backdropFilter: "blur(20px)" }}
          />
          <div style={{ position: "fixed", inset: 0, zIndex: 201, display: "flex", alignItems: "center", justifyContent: "center", padding: 16, pointerEvents: "none" }}>
            <motion.div
              initial={{ opacity: 0, y: 32, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }} transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
              style={{ pointerEvents: "all", width: "100%", maxWidth: 440, borderRadius: 28, overflow: "hidden", position: "relative", background: "linear-gradient(160deg,#1C1914 0%,#151310 60%,#0C0B09 100%)", border: "1px solid rgba(200,169,110,0.2)", boxShadow: "0 40px 80px rgba(0,0,0,0.7)" }}
            >
              <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "60%", height: 1, background: "linear-gradient(90deg,transparent,rgba(200,169,110,0.7),transparent)" }} />
              <button onClick={onClose}
                style={{ position: "absolute", top: 18, right: 18, width: 32, height: 32, borderRadius: "50%", background: "rgba(255,255,255,0.06)", border: "none", cursor: "pointer", color: G.muted, display: "flex", alignItems: "center", justifyContent: "center" }}
                onMouseEnter={e => (e.currentTarget.style.color = G.text)}
                onMouseLeave={e => (e.currentTarget.style.color = G.muted)}
              >
                <X size={14} />
              </button>
              <div style={{ padding: 36 }}>
                {done ? (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ textAlign: "center", padding: "24px 0" }}>
                    <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(200,169,110,0.1)", border: "1px solid rgba(200,169,110,0.3)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                      <CheckCircle2 size={28} style={{ color: G.gold }} />
                    </div>
                    <h3 style={{ fontFamily: "var(--font-playfair),Georgia,serif", fontSize: "1.6rem", fontWeight: 700, color: G.text, marginBottom: 10 }}>You're on the list.</h3>
                    <p style={{ color: G.muted, lineHeight: 1.75, fontSize: "0.9rem", marginBottom: 28 }}>
                      We'll reach out personally the moment Cymbie opens its doors to new members. Thank you for believing in intentional dating.
                    </p>
                    <button onClick={onClose} style={{ width: "100%", padding: "13px", borderRadius: 14, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", color: G.text, fontWeight: 600, cursor: "pointer", fontSize: 14 }}>
                      Close
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <div style={{ width: 44, height: 44, borderRadius: "50%", background: "linear-gradient(135deg,#A8854A,#C8A96E)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                      <Mail size={18} style={{ color: "#0C0B09" }} />
                    </div>
                    <h3 style={{ fontFamily: "var(--font-playfair),Georgia,serif", fontSize: "1.8rem", fontWeight: 700, color: G.text, lineHeight: 1.15, marginBottom: 8 }}>
                      Request Early Access
                    </h3>
                    <p style={{ color: G.muted, fontSize: "0.875rem", lineHeight: 1.75, marginBottom: 28 }}>
                      Cymbie is currently invite-only. Join the waitlist to secure your place in the next wave of exclusive members.
                    </p>
                    <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                      <input type="email" required placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)}
                        style={{ width: "100%", padding: "14px 16px", borderRadius: 14, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: G.text, fontSize: 14, outline: "none", fontFamily: "inherit" }}
                        onFocus={e => (e.target.style.borderColor = "rgba(200,169,110,0.45)")}
                        onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
                      />
                      <button type="submit" disabled={loading}
                        style={{ padding: "15px", borderRadius: 14, background: "linear-gradient(135deg,#A8854A,#C8A96E)", color: "#0C0B09", fontWeight: 700, fontSize: 15, border: "none", cursor: "pointer", opacity: loading ? 0.75 : 1 }}>
                        {loading ? "Securing your spot..." : "Join the Waitlist"}
                      </button>
                    </form>
                    <p style={{ textAlign: "center", color: G.dim, fontSize: "0.72rem", marginTop: 16 }}>
                      By joining, you agree to our{" "}
                      <Link href="/terms" onClick={onClose} style={{ color: G.muted, textDecoration: "underline" }}>Terms</Link> &amp;{" "}
                      <Link href="/privacy" onClick={onClose} style={{ color: G.muted, textDecoration: "underline" }}>Privacy Policy</Link>. Unsubscribe any time.
                    </p>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

export default function SharedLayout({ children }: { children: React.ReactNode }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <WaitlistModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <Navbar onWaitlist={() => setModalOpen(true)} />
      <main style={{ minHeight: "100vh", paddingTop: 72 }}>
        {children}
      </main>
      <Footer />
    </>
  );
}
