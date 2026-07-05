"use client";
// Reusable helper for legal page layouts
import React from "react";
import SharedLayout from "@/components/SharedLayout";
import Link from "next/link";

const G = { bg:"#0C0B09",surface:"#151310",border:"#2A2520",gold:"#C8A96E",text:"#F2EDE4",muted:"#8A8070",dim:"#4A4540" };

export interface Section { heading: string; content: string | React.ReactNode; }

export function LegalPage({ title, subtitle, updated, sections }: { title: string; subtitle: string; updated: string; sections: Section[] }) {
  return (
    <SharedLayout>
      <div style={{ background: G.bg, minHeight: "100vh" }}>
        {/* Header */}
        <div style={{ maxWidth: 860, margin: "0 auto", padding: "96px 24px 48px" }}>
          <p style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: G.gold, marginBottom: 16 }}>Legal</p>
          <h1 style={{ fontFamily: "var(--font-playfair),Georgia,serif", fontWeight: 700, fontSize: "clamp(2rem,4vw,3.5rem)", color: G.text, lineHeight: 1.15, marginBottom: 16 }}>{title}</h1>
          <p style={{ color: G.muted, fontSize: "1rem", lineHeight: 1.8, marginBottom: 12 }}>{subtitle}</p>
          <p style={{ color: G.dim, fontSize: 12 }}>Last updated: {updated}</p>
        </div>
        {/* Divider */}
        <div style={{ height: 1, background: `linear-gradient(90deg,transparent,${G.border},transparent)`, maxWidth: 860, margin: "0 auto" }} />
        {/* Content */}
        <div style={{ maxWidth: 860, margin: "0 auto", padding: "48px 24px 96px", display: "flex", flexDirection: "column", gap: 40 }}>
          {sections.map((s, i) => (
            <div key={i}>
              <h2 style={{ fontFamily: "var(--font-playfair),Georgia,serif", fontWeight: 700, fontSize: "1.25rem", color: G.text, marginBottom: 16, paddingBottom: 12, borderBottom: `1px solid ${G.border}` }}>{s.heading}</h2>
              <div style={{ color: G.muted, lineHeight: 1.9, fontSize: "0.9rem" }}>{s.content}</div>
            </div>
          ))}
        </div>
        {/* Footer nav */}
        <div style={{ borderTop: `1px solid ${G.border}`, padding: "32px 24px", textAlign: "center" }}>
          <div style={{ display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap" }}>
            {[["Terms", "/terms"], ["Privacy", "/privacy"], ["Cookies", "/cookies"], ["Security", "/security"], ["Consumer Health Data", "/consumer-health-privacy"], ["Privacy Choices", "/privacy-choices"]].map(([label, href]) => (
              <Link key={href} href={href} style={{ color: G.dim, fontSize: 12, textDecoration: "none" }}
                onMouseEnter={e => (e.currentTarget.style.color = G.muted)}
                onMouseLeave={e => (e.currentTarget.style.color = G.dim)}
              >{label}</Link>
            ))}
          </div>
        </div>
      </div>
    </SharedLayout>
  );
}
