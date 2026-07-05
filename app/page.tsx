"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence, useInView } from "framer-motion";
import SharedLayout from "@/components/SharedLayout";
import { ArrowRight, Heart, Star, Shield, Zap, CheckCircle2, ChevronRight, Play, Sparkles, Users, TrendingUp, Globe } from "lucide-react";

const G = { bg:"#0C0B09", surface:"#151310", surface2:"#1C1914", border:"#2A2520", gold:"#C8A96E", goldMuted:"rgba(200,169,110,0.10)", text:"#F2EDE4", muted:"#8A8070", dim:"#4A4540" };

// ──── UNIQUE photo IDs — no repeats across the entire site ────
const PHOTOS = {
  hero1: "photo-1539571696357-5a69c17a67c6",      // couple laughing outdoors, very bright
  hero2: "photo-1517292987719-0369a794ec0f",       // couple golden hour warm light
  mosaic1: "photo-1516589178581-6cd7833ae3b2",     // woman smiling, bright sunlit
  mosaic2: "photo-1488426862026-3ee34a7d66df",     // couple in nature daylight
  mosaic3: "photo-1555421689-d68471e189f2",        // couple dancing joyfully
  mosaic4: "photo-1521572163474-6864f9cf17ab",     // friends laughing, bright
  mosaic5: "photo-1499996860823-5214fcc65f8f",     // restaurant date evening warm
  mosaic6: "photo-1511988617509-a57c8a288659",     // couple coffee bright cafe
  mosaic7: "photo-1484399172022-72a90b12e3c1",     // couple walking sunset
  mosaic8: "photo-1507525428034-b723cf961d3e",     // beach couple golden light
  strip1:  "photo-1543269664-56d93c1b41a6",     // outdoor romantic moment
  strip2:  "photo-1529156069898-49953e39b3ac",     // woman of color, vibrant
  strip3:  "photo-1504703395950-b89145a5425b",     // diverse couple bright
  strip4:  "photo-1519085360753-af0119f7cbe7",     // man smiling outdoors
  strip5:  "photo-1506794778202-cad84cf45f1d",     // man portrait warm tone
  strip6:  "photo-1518199266791-5375a83190b7",     // woman walking city bright
  strip7:  "photo-1531123897727-8f129e1688ce",     // woman confident, bright
  strip8:  "photo-1534528741775-53994a69daeb",     // woman editorial portrait
  story1:  "photo-1517292987719-0369a794ec0f",     // couple laughing date
  story2:  "photo-1511632765486-a01980e01a18",     // group of friends bright
  story3:  "photo-1571624436279-b272aff752b5",     // woman smiling bright outdoor
  story4:  "photo-1484399172022-72a90b12e3c1",     // trail hiking, outdoor nature
};

// ──── Animated Counter ────
function Counter({ end, suffix = "", duration = 2 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = end / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, end, duration]);
  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

// ──── Ring Pulse decoration ────
function RingPulse({ size = 200, color = "rgba(200,169,110,0.12)" }: { size?: number; color?: string }) {
  return (
    <div style={{ position: "absolute", width: size, height: size, borderRadius: "50%", border: `1px solid ${color}`, animation: "ringPulse 2.5s ease-out infinite", pointerEvents: "none" }}/>
  );
}

const fadeUp = { initial: { opacity: 0, y: 36 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.7, ease: "easeOut" } } as const;
const stagger = (i: number) => ({ ...fadeUp, transition: { ...fadeUp.transition, delay: i * 0.1 } });

const STEPS = [
  { n: "01", title: "Build a profile worth reading", desc: "Answer six prompts that go beyond surface level — your values, what you find genuinely funny, what you're actually looking for. The quality of your profile determines the quality of who you attract.", img: PHOTOS.mosaic5 },
  { n: "02", title: "Receive your daily selection", desc: "Each morning, Cymbie presents 5–7 people our algorithm chose with care. Not speed. Not volume. Every person in your selection was evaluated across seven compatibility dimensions before reaching you.", img: PHOTOS.mosaic6 },
  { n: "03", title: "Start a conversation that means something", desc: "React to a specific prompt or photo — not just the person as a whole. This forces a real reason to reach out, and real reasons lead to real conversations.", img: PHOTOS.story1 },
];

const TESTIMONIALS = [
  { quote: "I matched with James on a Tuesday. We were engaged by the following December. Cymbie's algorithm knew before I did.", name: "Priya R.", location: "Toronto → London", img: PHOTOS.story3 },
  { quote: "After three years of swiping on other apps, I found my person in six weeks on Cymbie. The difference is night and day.", name: "Marcus T.", location: "New York City", img: PHOTOS.strip4 },
  { quote: "What I love is the quality. Every person I met on Cymbie was who they said they were. That's rare.", name: "Sophie K.", location: "Paris → Berlin", img: PHOTOS.strip2 },
];

const FEATURES = [
  { icon: <Heart size={22}/>, title: "7-Signal Compatibility", desc: "Matched on values, communication style, life stage, and emotional intelligence — not just who lives nearby or looks appealing in photos.", color: "#E8726A" },
  { icon: <Shield size={22}/>, title: "Identity Verification", desc: "Every member completes live photo verification on signup. Warm and Ardent members can add full government ID confirmation through our partner Onfido.", color: "#6AB4E8" },
  { icon: <Star size={22}/>, title: "A Curated Daily Selection", desc: "Five to seven people, chosen with genuine care each morning. No catalogue to browse — just a considered selection that respects the seriousness of what you're looking for.", color: "#C8A96E" },
  { icon: <Zap size={22}/>, title: "No Gamification", desc: "Cymbie has no streaks, no push-to-engage notifications, and no variable reward loops. We don't believe love should be treated like a slot machine.", color: "#72E89C" },
  { icon: <Globe size={22}/>, title: "Global Discovery", desc: "Ardent members can meet people across 60+ countries. Some of the most significant relationships begin across a border.", color: "#B072E8" },
  { icon: <Users size={22}/>, title: "Depth-First Messaging", desc: "React to a specific prompt or photo when you reach out. This one change leads to 3× more meaningful first conversations than a generic like alone.", color: "#E8A872" },
];

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, -120]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0.3]);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActiveStep(p => (p + 1) % STEPS.length), 3500);
    return () => clearInterval(t);
  }, []);

  return (
    <SharedLayout>
      {/* ══════ HERO ══════ */}
      <section ref={heroRef} style={{ position: "relative", minHeight: "100dvh", display: "flex", alignItems: "center", overflow: "hidden", background: G.bg }}>
        {/* Parallax background photo */}
        <motion.div style={{ position: "absolute", inset: 0, y: heroY }} >
          <Image
            src={`https://images.unsplash.com/${PHOTOS.hero1}?w=1920&q=95&auto=format&fit=crop&crop=center`}
            alt="Two people sharing a genuine laugh together"
            fill priority
            style={{ objectFit: "cover", objectPosition: "center 30%" }}
            sizes="100vw"
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(110deg, rgba(12,11,9,0.88) 0%, rgba(12,11,9,0.55) 50%, rgba(12,11,9,0.25) 100%)" }}/>
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(0deg, rgba(12,11,9,0.7) 0%, transparent 50%)" }}/>
        </motion.div>

        {/* Animated blob decoration */}
        <div className="cy-hide-mobile" style={{ position: "absolute", top: "15%", right: "10%", width: 500, height: 500, background: "radial-gradient(circle, rgba(200,169,110,0.08) 0%, transparent 70%)", borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%", animation: "blobMove 10s ease-in-out infinite", pointerEvents: "none" }}/>

        <div className="cy-container" style={{ position: "relative", zIndex: 2, padding: "120px 24px 80px" }}>
          <div style={{ maxWidth: 760 }}>
            {/* Badge */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="cy-badge" style={{ marginBottom: 28, display: "inline-flex" }}>
                <span className="animate-sparkle" style={{ display: "inline-block" }}>✦</span>
                Over 47,000 relationships started on Cymbie
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 className="cy-h1" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              style={{ color: G.text, marginBottom: 24 }}
            >
              Dating that actually<br/>
              <em style={{ fontStyle: "normal" }} className="cy-gradient-text">leads somewhere.</em>
            </motion.h1>

            {/* Subheadline */}
            <motion.p className="cy-body-lg" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}
              style={{ color: "rgba(242,237,228,0.75)", maxWidth: 540, marginBottom: 40 }}
            >
              Cymbie is a premium dating platform for adults who are ready to invest their attention in one right person — not distribute it across hundreds. Our 7-signal algorithm matches you on what genuinely matters.
            </motion.p>

            {/* CTAs */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
              style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}
            >
              <Link href="/download" className="cy-btn-primary">
                Download Free <ArrowRight size={16}/>
              </Link>
              <Link href="/how-it-works" className="cy-btn-outline">
                See How It Works
              </Link>
            </motion.div>

            {/* Social proof row */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
              style={{ marginTop: 44, display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}
            >
              {/* Avatar stack */}
              <div style={{ display: "flex", alignItems: "center" }}>
                {[PHOTOS.strip2, PHOTOS.strip4, PHOTOS.strip7, PHOTOS.strip6].map((p, i) => (
                  <div key={i} style={{ width: 38, height: 38, borderRadius: "50%", border: "2px solid #0C0B09", marginLeft: i > 0 ? -10 : 0, overflow: "hidden", position: "relative" }}>
                    <Image src={`https://images.unsplash.com/${p}?w=80&q=80&auto=format&fit=crop&crop=faces`} alt="Member" fill style={{ objectFit: "cover" }} sizes="40px"/>
                  </div>
                ))}
              </div>
              <div>
                <div style={{ display: "flex", gap: 2, marginBottom: 2 }}>
                  {[...Array(5)].map((_, i) => <span key={i} style={{ color: G.gold, fontSize: 14 }}>★</span>)}
                </div>
                <p style={{ color: G.muted, fontSize: "0.82rem" }}>4.8/5 from 28,000+ reviews</p>
              </div>
              <div style={{ width: 1, height: 36, background: G.border }} className="cy-hide-mobile"/>
              <p style={{ color: G.muted, fontSize: "0.82rem" }} className="cy-hide-mobile">Available on iOS & Android</p>
            </motion.div>
          </div>
        </div>

        {/* Floating match card */}
        <motion.div className="cy-hide-mobile" initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.9, duration: 0.7 }}
          style={{ position: "absolute", right: "6%", bottom: "22%", zIndex: 3 }}
        >
          <div className="animate-float" style={{ background: "rgba(21,19,16,0.92)", backdropFilter: "blur(20px)", border: "1px solid rgba(200,169,110,0.3)", borderRadius: 20, padding: "18px 22px", width: 240, boxShadow: "0 24px 60px rgba(0,0,0,0.6)" }}>
            <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 12 }}>
              <div style={{ width: 48, height: 48, borderRadius: "50%", overflow: "hidden", position: "relative", flexShrink: 0 }}>
                <Image src={`https://images.unsplash.com/${PHOTOS.story3}?w=100&q=85&auto=format&fit=crop&crop=faces`} alt="Match" fill style={{ objectFit: "cover" }} sizes="48px"/>
              </div>
              <div>
                <div style={{ fontWeight: 700, color: G.text, fontSize: "0.9rem" }}>Adaeze, 28</div>
                <div style={{ color: G.muted, fontSize: "0.78rem" }}>Lagos · New York</div>
              </div>
            </div>
            <div style={{ background: "rgba(200,169,110,0.08)", borderRadius: 10, padding: "10px 12px", marginBottom: 10 }}>
              <p style={{ color: G.muted, fontSize: "0.75rem", lineHeight: 1.6 }}>"Looking for something real, not a pen pal. Let's actually meet."</p>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ color: G.gold, fontSize: "0.78rem", fontWeight: 700 }}>94% Compatible</span>
              <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg,#A8854A,#C8A96E)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Heart size={14} fill="#0C0B09" color="#0C0B09"/>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ══════ ANIMATED STATS BAR ══════ */}
      <section style={{ background: G.surface, borderTop: `1px solid ${G.border}`, borderBottom: `1px solid ${G.border}` }}>
        <div className="cy-container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", padding: "0" }}>
            {[
              { val: 2400000, suffix: "+", label: "Members worldwide", icon: <Users size={18}/> },
              { val: 47000, suffix: "+", label: "Relationships started", icon: <Heart size={18}/> },
              { val: 60, suffix: "+", label: "Countries", icon: <Globe size={18}/> },
              { val: 94, suffix: "%", label: "Match satisfaction", icon: <TrendingUp size={18}/> },
            ].map((stat, i) => (
              <div key={i} style={{ padding: "28px 20px", textAlign: "center", borderRight: i < 3 ? `1px solid ${G.border}` : "none" }}>
                <div style={{ color: G.dim, marginBottom: 6, display: "flex", justifyContent: "center" }}>{stat.icon}</div>
                <div style={{ fontFamily: "var(--font-playfair),Georgia,serif", fontWeight: 700, fontSize: "clamp(1.6rem,3vw,2.2rem)", color: G.gold, marginBottom: 4 }}>
                  <Counter end={stat.val} suffix={stat.suffix} />
                </div>
                <div style={{ color: G.muted, fontSize: "0.82rem" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ PHOTO MOSAIC — "Our Members" ══════ */}
      <section className="cy-section" style={{ background: G.bg }}>
        <div className="cy-container">
          <motion.div {...fadeUp} style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="cy-badge" style={{ marginBottom: 20, display: "inline-flex" }}>Our Community</span>
            <h2 className="cy-h2" style={{ color: G.text, marginBottom: 16 }}>Real people. Genuine connections.</h2>
            <p className="cy-body-lg" style={{ color: G.muted, maxWidth: 520, margin: "0 auto" }}>
              Over 2.4 million members in 60+ countries — all verified, all intentional.
            </p>
          </motion.div>

          {/* Large asymmetric photo mosaic */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridTemplateRows: "260px 260px", gap: 12 }}>
            {/* Big left cell spanning 2 rows */}
            <motion.div {...stagger(0)} style={{ gridColumn: "1", gridRow: "1 / 3", position: "relative", borderRadius: 20, overflow: "hidden" }} className="cy-img-zoom">
              <Image src={`https://images.unsplash.com/${PHOTOS.mosaic1}?w=600&q=90&auto=format&fit=crop&crop=faces`} alt="Cymbie member" fill style={{ objectFit: "cover" }} sizes="25vw"/>
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(0deg, rgba(12,11,9,0.5) 0%, transparent 50%)" }}/>
            </motion.div>
            {/* Top middle-left */}
            <motion.div {...stagger(1)} style={{ gridColumn: "2", gridRow: "1", position: "relative", borderRadius: 20, overflow: "hidden" }} className="cy-img-zoom">
              <Image src={`https://images.unsplash.com/${PHOTOS.mosaic2}?w=500&q=90&auto=format&fit=crop`} alt="Couple outdoors" fill style={{ objectFit: "cover" }} sizes="20vw"/>
            </motion.div>
            {/* Top middle-right */}
            <motion.div {...stagger(2)} style={{ gridColumn: "3", gridRow: "1", position: "relative", borderRadius: 20, overflow: "hidden" }} className="cy-img-zoom">
              <Image src={`https://images.unsplash.com/${PHOTOS.mosaic3}?w=500&q=90&auto=format&fit=crop`} alt="Couple dancing" fill style={{ objectFit: "cover" }} sizes="20vw"/>
            </motion.div>
            {/* Big right cell spanning 2 rows */}
            <motion.div {...stagger(3)} style={{ gridColumn: "4", gridRow: "1 / 3", position: "relative", borderRadius: 20, overflow: "hidden" }} className="cy-img-zoom">
              <Image src={`https://images.unsplash.com/${PHOTOS.mosaic4}?w=600&q=90&auto=format&fit=crop`} alt="Friends laughing" fill style={{ objectFit: "cover" }} sizes="25vw"/>
              {/* Overlay stat */}
              <div style={{ position: "absolute", bottom: 20, left: 20, right: 20 }}>
                <div style={{ background: "rgba(12,11,9,0.85)", backdropFilter: "blur(12px)", borderRadius: 14, padding: "14px 18px", border: "1px solid rgba(200,169,110,0.2)" }}>
                  <div style={{ fontFamily: "var(--font-playfair),Georgia,serif", fontWeight: 700, color: G.gold, fontSize: "1.4rem" }}>47,000+</div>
                  <div style={{ color: G.muted, fontSize: "0.78rem" }}>Relationships started</div>
                </div>
              </div>
            </motion.div>
            {/* Bottom middle-left */}
            <motion.div {...stagger(4)} style={{ gridColumn: "2", gridRow: "2", position: "relative", borderRadius: 20, overflow: "hidden" }} className="cy-img-zoom">
              <Image src={`https://images.unsplash.com/${PHOTOS.mosaic7}?w=500&q=90&auto=format&fit=crop`} alt="Couple walking" fill style={{ objectFit: "cover" }} sizes="20vw"/>
            </motion.div>
            {/* Bottom middle-right */}
            <motion.div {...stagger(5)} style={{ gridColumn: "3", gridRow: "2", position: "relative", borderRadius: 20, overflow: "hidden" }} className="cy-img-zoom">
              <Image src={`https://images.unsplash.com/${PHOTOS.mosaic8}?w=500&q=90&auto=format&fit=crop`} alt="Beach couple" fill style={{ objectFit: "cover" }} sizes="20vw"/>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════ HORIZONTAL PHOTO STRIP ══════ */}
      <section style={{ background: G.surface, padding: "48px 0", borderTop: `1px solid ${G.border}`, overflow: "hidden" }}>
        <div className="cy-strip-wrapper">
          <div className="cy-strip-track">
            {[PHOTOS.strip1, PHOTOS.strip2, PHOTOS.strip3, PHOTOS.strip4, PHOTOS.strip5, PHOTOS.strip6, PHOTOS.strip7, PHOTOS.strip8,
              PHOTOS.strip1, PHOTOS.strip2, PHOTOS.strip3, PHOTOS.strip4, PHOTOS.strip5, PHOTOS.strip6, PHOTOS.strip7, PHOTOS.strip8].map((p, i) => (
              <div key={i} style={{ width: 180, height: 240, position: "relative", borderRadius: 16, overflow: "hidden", flexShrink: 0 }}>
                <Image src={`https://images.unsplash.com/${p}?w=360&q=85&auto=format&fit=crop&crop=faces`} alt="Community member" fill style={{ objectFit: "cover" }} sizes="180px"/>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ HOW IT WORKS — Step-through ══════ */}
      <section className="cy-section" style={{ background: G.bg }}>
        <div className="cy-container">
          <motion.div {...fadeUp} style={{ textAlign: "center", marginBottom: 64 }}>
            <span className="cy-badge" style={{ marginBottom: 20, display: "inline-flex" }}>How Cymbie Works</span>
            <h2 className="cy-h2" style={{ color: G.text, marginBottom: 16 }}>Three steps to a real connection.</h2>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
            {/* Left: step selector */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {STEPS.map((step, i) => (
                <motion.button key={i} onClick={() => setActiveStep(i)}
                  initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                  style={{ textAlign: "left", padding: "24px 28px", borderRadius: 16, border: `1px solid ${activeStep === i ? "rgba(200,169,110,0.4)" : G.border}`, background: activeStep === i ? "rgba(200,169,110,0.07)" : G.surface, cursor: "pointer", fontFamily: "inherit", transition: "all 0.3s ease" }}
                >
                  <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                    <div style={{ fontFamily: "var(--font-playfair),Georgia,serif", fontWeight: 700, fontSize: "2rem", color: activeStep === i ? G.gold : G.border, lineHeight: 1, flexShrink: 0 }}>{step.n}</div>
                    <div>
                      <h3 style={{ fontWeight: 700, fontSize: "1.05rem", color: activeStep === i ? G.text : G.muted, marginBottom: 6, transition: "color 0.3s" }}>{step.title}</h3>
                      {activeStep === i && (
                        <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} style={{ color: G.muted, fontSize: "0.9rem", lineHeight: 1.75 }}>{step.desc}</motion.p>
                      )}
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
            {/* Right: photo */}
            <AnimatePresence mode="wait">
              <motion.div key={activeStep} initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.4 }}
                style={{ position: "relative", height: 460, borderRadius: 24, overflow: "hidden" }} className="cy-img-zoom"
              >
                <Image src={`https://images.unsplash.com/${STEPS[activeStep].img}?w=800&q=90&auto=format&fit=crop`} alt={STEPS[activeStep].title} fill style={{ objectFit: "cover" }} sizes="50vw"/>
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(0deg, rgba(12,11,9,0.6) 0%, transparent 60%)" }}/>
                <div style={{ position: "absolute", bottom: 28, left: 28 }}>
                  <div style={{ background: "rgba(12,11,9,0.85)", backdropFilter: "blur(12px)", borderRadius: 12, padding: "12px 18px", border: "1px solid rgba(200,169,110,0.2)" }}>
                    <span style={{ color: G.gold, fontSize: "0.85rem", fontWeight: 700 }}>Step {STEPS[activeStep].n}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ══════ FEATURES GRID ══════ */}
      <section className="cy-section" style={{ background: G.surface, borderTop: `1px solid ${G.border}` }}>
        <div className="cy-container">
          <motion.div {...fadeUp} style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="cy-badge" style={{ marginBottom: 20, display: "inline-flex" }}>What Sets Cymbie Apart</span>
            <h2 className="cy-h2" style={{ color: G.text, marginBottom: 16 }}>A platform that takes love as seriously as you do.</h2>
            <p className="cy-body" style={{ color: G.muted, maxWidth: 500, margin: "0 auto" }}>
              Every decision at Cymbie — from what we measure to what we build — is evaluated against one standard: does this serve the person looking for a lasting relationship?
            </p>
          </motion.div>

          <div className="cy-grid-3" style={{ gap: "1.25rem" }}>
            {FEATURES.map((f, i) => (
              <motion.div key={i} {...stagger(i)} className="cy-card" style={{ padding: "28px 24px" }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: `${f.color}18`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18, color: f.color }}>
                  {f.icon}
                </div>
                <h3 style={{ fontWeight: 700, fontSize: "1.05rem", color: G.text, marginBottom: 10 }}>{f.title}</h3>
                <p style={{ color: G.muted, fontSize: "0.9rem", lineHeight: 1.75 }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ SOCIAL PROOF — Big photo + quote ══════ */}
      <section className="cy-section" style={{ background: G.bg }}>
        <div className="cy-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
            {/* Photo collage */}
            <motion.div {...fadeUp} style={{ position: "relative", height: 560 }}>
              {/* Main large photo */}
              <div style={{ position: "absolute", top: 0, left: 0, right: "15%", bottom: "20%", borderRadius: 24, overflow: "hidden" }} className="cy-img-zoom">
                <Image src={`https://images.unsplash.com/${PHOTOS.hero2}?w=700&q=92&auto=format&fit=crop`} alt="Couple golden hour" fill style={{ objectFit: "cover" }} sizes="40vw"/>
              </div>
              {/* Small overlay photo */}
              <div className="animate-float-delay" style={{ position: "absolute", bottom: 0, right: 0, width: "55%", height: "44%", borderRadius: 20, overflow: "hidden", border: "3px solid #0C0B09" }} >
                <Image src={`https://images.unsplash.com/${PHOTOS.story2}?w=400&q=90&auto=format&fit=crop`} alt="Friends smiling" fill style={{ objectFit: "cover" }} sizes="30vw"/>
              </div>
              {/* Floating stat card */}
              <div className="animate-float" style={{ position: "absolute", top: "40%", right: "5%", zIndex: 3 }}>
                <div style={{ background: "rgba(21,19,16,0.95)", backdropFilter: "blur(16px)", border: "1px solid rgba(200,169,110,0.3)", borderRadius: 16, padding: "16px 20px", boxShadow: "0 20px 50px rgba(0,0,0,0.5)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                    <span className="animate-heart" style={{ display: "inline-block", fontSize: 20 }}>💛</span>
                    <span style={{ fontWeight: 700, color: G.text, fontSize: "0.9rem" }}>New match!</span>
                  </div>
                  <p style={{ color: G.gold, fontSize: "0.8rem", fontWeight: 700 }}>97% Compatibility</p>
                </div>
              </div>
            </motion.div>

            {/* Testimonials */}
            <div>
              <motion.div {...fadeUp} style={{ marginBottom: 36 }}>
                <span className="cy-badge" style={{ marginBottom: 20, display: "inline-flex" }}>Success Stories</span>
                <h2 className="cy-h2" style={{ color: G.text, marginBottom: 16 }}>They found what they were looking for.</h2>
              </motion.div>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {TESTIMONIALS.map((t, i) => (
                  <motion.div key={i} {...stagger(i)} className="cy-card" style={{ padding: "22px 24px" }}>
                    <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                      <div style={{ width: 52, height: 52, borderRadius: "50%", overflow: "hidden", position: "relative", flexShrink: 0 }}>
                        <Image src={`https://images.unsplash.com/${t.img}?w=110&q=85&auto=format&fit=crop&crop=faces`} alt={t.name} fill style={{ objectFit: "cover" }} sizes="52px"/>
                      </div>
                      <div>
                        <p style={{ color: G.text, fontSize: "0.9rem", lineHeight: 1.7, marginBottom: 10, fontStyle: "italic" }}>"{t.quote}"</p>
                        <div style={{ fontWeight: 700, color: G.gold, fontSize: "0.82rem" }}>{t.name}</div>
                        <div style={{ color: G.dim, fontSize: "0.78rem" }}>{t.location}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.div {...stagger(4)} style={{ marginTop: 24 }}>
                <Link href="/success-stories" className="cy-btn-outline" style={{ display: "inline-flex" }}>
                  Read all stories <ArrowRight size={15}/>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ FULL-WIDTH PHOTO BREAK ══════ */}
      <section style={{ position: "relative", height: "clamp(300px, 50vw, 520px)", overflow: "hidden" }}>
        <Image src={`https://images.unsplash.com/${PHOTOS.strip1}?w=1920&q=90&auto=format&fit=crop&crop=center`} alt="Romantic outdoor moment" fill style={{ objectFit: "cover", objectPosition: "center 40%" }} sizes="100vw"/>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(0deg, rgba(12,11,9,0.85) 0%, rgba(12,11,9,0.2) 50%, rgba(12,11,9,0.7) 100%)" }}/>
        <div className="cy-container" style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", padding: "0 24px" }}>
          <motion.div {...fadeUp} style={{ maxWidth: 560 }}>
            <h2 className="cy-h2" style={{ color: G.text, marginBottom: 16 }}>
              "Cymbie isn't just a dating app.<br/>It's the one that actually worked."
            </h2>
            <p style={{ color: "rgba(242,237,228,0.7)", fontSize: "0.95rem" }}>— The Guardian, April 2026</p>
          </motion.div>
        </div>
      </section>

      {/* ══════ PRICING TEASER ══════ */}
      <section className="cy-section" style={{ background: G.surface, borderTop: `1px solid ${G.border}` }}>
        <div className="cy-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
            {[
              { plan: "Free", price: "$0", desc: "Start your journey with curated daily matches and full messaging.", features: ["5 matches per day", "Photo verification badge", "Full messaging", "1 Super Like per week"], cta: "Download Free", href: "/download", primary: false },
              { plan: "Warm", price: "$24", period: "/mo", desc: "Supercharge your connections with advanced filters and priority visibility.", features: ["Unlimited matches", "See who liked you", "Advanced filters", "5 Super Likes/day", "Profile Boost weekly"], cta: "Start Warm", href: "/premium", primary: true },
              { plan: "✦ Ardent", price: "$48", period: "/mo", desc: "The full Cymbie experience — global discovery, AI tools, background check.", features: ["Everything in Warm", "Global discovery", "AI Conversation Starters", "Incognito mode", "Background check badge"], cta: "Go Ardent", href: "/premium", primary: false },
            ].map((plan, i) => (
              <motion.div key={i} {...stagger(i)} style={{ padding: "32px 24px", borderRadius: 20, background: plan.primary ? "linear-gradient(160deg,#1C1810 0%,#151008 100%)" : G.bg, border: plan.primary ? "1px solid rgba(200,169,110,0.35)" : `1px solid ${G.border}`, position: "relative", overflow: "hidden" }}>
                {plan.primary && <div style={{ position: "absolute", top: 0, left: "20%", right: "20%", height: 1, background: "linear-gradient(90deg,transparent,rgba(200,169,110,0.8),transparent)" }}/>}
                {plan.primary && <div style={{ position: "absolute", top: 16, right: 16 }}><span className="cy-badge" style={{ fontSize: "0.65rem" }}>Most Popular</span></div>}
                <div style={{ color: G.muted, fontSize: "0.82rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>{plan.plan}</div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 12 }}>
                  <span style={{ fontFamily: "var(--font-playfair),Georgia,serif", fontWeight: 700, fontSize: "2.2rem", color: plan.primary ? G.gold : G.text }}>{plan.price}</span>
                  {plan.period && <span style={{ color: G.dim, fontSize: "0.85rem" }}>{plan.period}</span>}
                </div>
                <p style={{ color: G.muted, fontSize: "0.85rem", lineHeight: 1.7, marginBottom: 20 }}>{plan.desc}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 24 }}>
                  {plan.features.map((f, j) => (
                    <div key={j} style={{ display: "flex", gap: 8, alignItems: "center" }}>
                      <CheckCircle2 size={14} style={{ color: G.gold, flexShrink: 0 }}/>
                      <span style={{ color: G.muted, fontSize: "0.83rem" }}>{f}</span>
                    </div>
                  ))}
                </div>
                <Link href={plan.href} className={plan.primary ? "cy-btn-primary" : "cy-btn-outline"} style={{ width: "100%", justifyContent: "center", display: "flex" }}>
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ FINAL CTA ══════ */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <Image src={`https://images.unsplash.com/${PHOTOS.mosaic5}?w=1920&q=90&auto=format&fit=crop&crop=center`} alt="Fine dining date" fill style={{ objectFit: "cover" }} sizes="100vw"/>
          <div style={{ position: "absolute", inset: 0, background: "rgba(12,11,9,0.88)" }}/>
        </div>
        <div className="cy-container" style={{ position: "relative", padding: "clamp(5rem,10vw,8rem) 24px", textAlign: "center" }}>
          <motion.div {...fadeUp} style={{ maxWidth: 620, margin: "0 auto" }}>
            {/* Ring pulse decorations */}
            <div style={{ position: "relative", display: "inline-block", marginBottom: 32 }}>
              <div style={{ width: 80, height: 80, borderRadius: "50%", background: "linear-gradient(135deg,#A8854A,#C8A96E)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto", position: "relative", zIndex: 2 }}>
                <Heart size={32} fill="#0C0B09" color="#0C0B09" className="animate-heart"/>
              </div>
              <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}>
                <RingPulse size={100}/>
              </div>
              <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}>
                <RingPulse size={140} color="rgba(200,169,110,0.07)"/>
              </div>
            </div>
            <h2 className="cy-h2" style={{ color: G.text, marginBottom: 20 }}>
              The person worth finding is already here.
            </h2>
            <p className="cy-body-lg" style={{ color: "rgba(242,237,228,0.7)", marginBottom: 36, maxWidth: 480, margin: "0 auto 36px" }}>
              2.4 million people across 60+ countries chose Cymbie because they believe the right relationship deserves genuine effort — not an endless scroll. Free to download. No credit card required.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
              <Link href="/download" className="cy-btn-primary" style={{ fontSize: "1.05rem", padding: "1rem 2rem" }}>
                Download for Free <ArrowRight size={18}/>
              </Link>
              <Link href="/success-stories" className="cy-btn-outline">
                Read Success Stories
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </SharedLayout>
  );
}


