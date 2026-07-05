"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SharedLayout from "@/components/SharedLayout";
import { ArrowRight, Shield, Eye, AlertTriangle, UserCheck, Lock, Zap } from "lucide-react";

const G = { bg:"#0C0B09",surface:"#151310",surface2:"#1C1914",border:"#2A2520",gold:"#C8A96E",goldMuted:"rgba(200,169,110,0.10)",text:"#F2EDE4",muted:"#8A8070",dim:"#4A4540" };
const fadeUp = { initial:{opacity:0,y:32}, whileInView:{opacity:1,y:0}, viewport:{once:true}, transition:{duration:0.75,ease:"easeOut"} } as const;

const PILLARS = [
  { icon:<UserCheck size={22}/>, color:"#72B4E8", title:"Identity Verification", desc:"All members complete live photo verification on signup. Warm & Ardent members can submit a government ID through our partner Onfido. Verified badges are displayed prominently on every profile." },
  { icon:<Eye size={22}/>, color:"#72E89C", title:"24/7 Human Moderation", desc:"Our trust & safety team reviews reports within 2 hours, around the clock. We combine AI-powered detection with human reviewers to catch policy violations before they affect your experience." },
  { icon:<AlertTriangle size={22}/>, color:"#E87272", title:"Zero-Tolerance Policy", desc:"Harassment, fake profiles, scams, and predatory behaviour result in immediate permanent bans. We share data with law enforcement when required by law and in cases of credible threats." },
  { icon:<Lock size={22}/>, color:"#C8A96E", title:"End-to-End Encryption", desc:"All messages are encrypted in transit and at rest. Your conversations are private — not readable by Cymbie staff, not used for advertising, and never sold to third parties." },
  { icon:<Shield size={22}/>, color:"#B072E8", title:"Proactive Scam Detection", desc:"Our AI detects romance scam patterns, fake photo uploads, and off-platform solicitation attempts before they reach you. Our documented scam rate is under 0.04%." },
  { icon:<Zap size={22}/>, color:"#E8A872", title:"Rapid Response Commitment", desc:"Every report acknowledged within 30 minutes. Action taken within 2 hours on high-priority reports. We publish a quarterly transparency report showing our response times and outcomes." },
];

const STATS = [
  { val:"<0.1%", label:"Fake profile rate", sub:"Industry avg: 4–12%" },
  { val:"<2hrs", label:"Report response time", sub:"24/7, 365 days a year" },
  { val:"99.97%", label:"Scam-free matches", sub:"Proactive AI detection" },
  { val:"100%", label:"Reports reviewed by humans", sub:"No automated-only decisions" },
];

export default function TrustSafetyPage() {
  return (
    <SharedLayout>
      {/* HERO */}
      <section style={{position:"relative",minHeight:"65vh",display:"flex",alignItems:"flex-end",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0}}>
          <Image src="https://images.unsplash.com/photo-1543269664-56d93c1b41a6?w=1920&q=95&auto=format&fit=crop&crop=center"
            alt="Couple outdoors — safe, authentic connection" fill priority sizes="100vw" style={{objectFit:"cover",objectPosition:"center 35%"}}/>
          <div style={{position:"absolute",inset:0,background:"linear-gradient(0deg,rgba(12,11,9,0.96) 0%,rgba(12,11,9,0.45) 55%,rgba(12,11,9,0.1) 100%)"}}/>
        </div>
        <div className="cy-container" style={{position:"relative",zIndex:2,padding:"0 24px 72px"}}>
          <motion.div initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} transition={{duration:0.8}}>
            <span className="cy-badge" style={{marginBottom:24,display:"inline-flex"}}>
              <Shield size={12}/> Trust & Safety
            </span>
            <h1 className="cy-h1" style={{color:G.text,marginBottom:20,maxWidth:680}}>
              Safety is not a feature.<br/><span className="cy-gradient-text">It's the foundation.</span>
            </h1>
            <p className="cy-body-lg" style={{color:"rgba(242,237,228,0.75)",maxWidth:540}}>
              Every design decision, policy, and feature on Cymbie was built with one question: does this keep our members safer? Here's exactly what that looks like in practice.
            </p>
          </motion.div>
        </div>
      </section>

      {/* STATS BAR */}
      <section style={{background:G.surface,borderTop:`1px solid ${G.border}`,borderBottom:`1px solid ${G.border}`}}>
        <div className="cy-container">
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))"}}>
            {STATS.map((s,i)=>(
              <motion.div key={i} {...fadeUp} transition={{delay:i*0.08}} style={{padding:"clamp(20px,3vw,32px) 20px",textAlign:"center",borderRight:i<3?`1px solid ${G.border}`:"none"}}>
                <div style={{fontFamily:"var(--font-playfair),Georgia,serif",fontWeight:700,fontSize:"clamp(1.6rem,3vw,2.2rem)",color:G.gold,marginBottom:4}}>{s.val}</div>
                <div style={{fontWeight:700,color:G.text,fontSize:"0.875rem",marginBottom:4}}>{s.label}</div>
                <div style={{color:G.dim,fontSize:"0.75rem"}}>{s.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="cy-section" style={{background:G.bg}}>
        <div className="cy-container">
          <motion.div {...fadeUp} style={{textAlign:"center",marginBottom:56}}>
            <span className="cy-badge" style={{marginBottom:20,display:"inline-flex"}}>How We Keep You Safe</span>
            <h2 className="cy-h2" style={{color:G.text,marginBottom:16}}>Six layers of protection.</h2>
            <p className="cy-body" style={{color:G.muted,maxWidth:480,margin:"0 auto"}}>Most platforms have one or two safety mechanisms. Cymbie has six, and they work together.</p>
          </motion.div>
          <div className="cy-grid-3" style={{gap:"1.25rem"}}>
            {PILLARS.map((p,i)=>(
              <motion.div key={i} {...fadeUp} transition={{delay:i*0.08}} className="cy-card" style={{padding:"clamp(20px,3vw,28px)"}}>
                <div style={{width:52,height:52,borderRadius:14,background:`${p.color}1A`,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:18,color:p.color}}>{p.icon}</div>
                <h3 style={{fontWeight:700,color:G.text,fontSize:"clamp(0.95rem,1.5vw,1.05rem)",marginBottom:10}}>{p.title}</h3>
                <p style={{color:G.muted,fontSize:"0.875rem",lineHeight:1.8}}>{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO BREAK + QUOTE */}
      <section style={{position:"relative",height:"clamp(260px,40vw,400px)",overflow:"hidden"}}>
        <Image src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=90&auto=format&fit=crop&crop=center" alt="Beach safety confidence" fill style={{objectFit:"cover",objectPosition:"center 45%"}} sizes="100vw"/>
        <div style={{position:"absolute",inset:0,background:"rgba(12,11,9,0.75)"}}/>
        <div className="cy-container" style={{position:"absolute",inset:0,display:"flex",alignItems:"center",padding:"0 24px"}}>
          <motion.div {...fadeUp} style={{maxWidth:620}}>
            <h2 className="cy-h2" style={{color:G.text,marginBottom:12}}>"Cymbie is the safest dating platform I've ever used. The verification system is real, not performative."</h2>
            <p style={{color:"rgba(242,237,228,0.6)",fontSize:"0.9rem"}}>— Trust & Safety Review, TechCrunch 2026</p>
          </motion.div>
        </div>
      </section>

      {/* VERIFICATION SECTION with photo */}
      <section className="cy-section" style={{background:G.surface,borderTop:`1px solid ${G.border}`}}>
        <div className="cy-container">
          <div className="cy-grid-2" style={{gap:"clamp(2rem,5vw,5rem)",alignItems:"center"}}>
            <motion.div {...fadeUp}>
              <span className="cy-badge" style={{marginBottom:20,display:"inline-flex"}}>Verification System</span>
              <h2 className="cy-h2" style={{color:G.text,marginBottom:20}}>Three tiers of identity confidence.</h2>
              <div style={{display:"flex",flexDirection:"column",gap:16}}>
                {[
                  { tier:"Tier 1 — All members", badge:"📸 Photo Verified", desc:"Live selfie matched against profile photos on signup. AI-powered facial consistency check. Renewed every 6 months.", color:"#8A8070" },
                  { tier:"Tier 2 — Warm & Ardent", badge:"🪪 ID Verified", desc:"Government ID submitted through Onfido (encrypted, never stored by Cymbie). Displays a verified ID badge on your profile.", color:"#C8A96E" },
                  { tier:"Tier 3 — Ardent Only", badge:"✅ Background Checked", desc:"Optional criminal background check via Checkr. Completely voluntary. Results show only as pass/fail — details never shown.", color:"#72E89C" },
                ].map((t,i)=>(
                  <motion.div key={i} {...fadeUp} transition={{delay:i*0.1}} style={{padding:"20px 22px",borderRadius:16,background:G.bg,border:`1px solid ${G.border}`}}>
                    <div style={{fontSize:"0.7rem",fontWeight:700,color:G.dim,textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:8}}>{t.tier}</div>
                    <div style={{display:"flex",gap:10,alignItems:"center",marginBottom:8}}>
                      <span style={{padding:"4px 12px",borderRadius:100,background:`${t.color}15`,border:`1px solid ${t.color}44`,color:t.color,fontSize:"0.78rem",fontWeight:700}}>{t.badge}</span>
                    </div>
                    <p style={{color:G.muted,fontSize:"0.83rem",lineHeight:1.75}}>{t.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div {...fadeUp} transition={{delay:0.15}} style={{position:"relative",height:"clamp(340px,50vw,540px)"}}>
              <div style={{borderRadius:24,overflow:"hidden",height:"70%"}} className="cy-img-zoom">
                <Image src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=700&q=90&auto=format&fit=crop" alt="Verified couple" fill style={{objectFit:"cover"}} sizes="45vw"/>
              </div>
              <div className="animate-float" style={{position:"absolute",bottom:20,right:-10,background:"rgba(21,19,16,0.96)",backdropFilter:"blur(16px)",border:"1px solid rgba(114,232,156,0.3)",borderRadius:16,padding:"16px 20px",boxShadow:"0 20px 50px rgba(0,0,0,0.5)"}}>
                <div style={{display:"flex",gap:10,alignItems:"center"}}>
                  <div style={{width:40,height:40,borderRadius:"50%",background:"rgba(114,232,156,0.15)",display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <UserCheck size={18} style={{color:"#72E89C"}}/>
                  </div>
                  <div>
                    <div style={{fontWeight:700,color:G.text,fontSize:"0.875rem"}}>ID Verified</div>
                    <div style={{color:"#72E89C",fontSize:"0.75rem"}}>+ Background Checked</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* REPORT & RESOURCES */}
      <section className="cy-section" style={{background:G.bg}}>
        <div className="cy-container">
          <div className="cy-grid-2" style={{gap:"1.5rem",alignItems:"start"}}>
            <motion.div {...fadeUp} style={{borderRadius:20,background:G.surface,border:"1px solid rgba(232,114,114,0.3)",padding:"clamp(20px,3vw,32px)"}}>
              <AlertTriangle size={28} style={{color:"#E87272",marginBottom:16}}/>
              <h3 style={{fontFamily:"var(--font-playfair),Georgia,serif",fontWeight:700,color:G.text,fontSize:"1.2rem",marginBottom:12}}>Report a safety concern</h3>
              <p style={{color:G.muted,fontSize:"0.875rem",lineHeight:1.8,marginBottom:20}}>All reports are reviewed within 2 hours by our human safety team. You can report anonymously and continue using the app while we investigate.</p>
              <Link href="/contact?subject=report-user" className="cy-btn-primary" style={{display:"inline-flex",fontSize:"0.875rem"}}>
                File a Report <ArrowRight size={14}/>
              </Link>
            </motion.div>
            <motion.div {...fadeUp} transition={{delay:0.1}} style={{borderRadius:20,background:G.surface,border:`1px solid ${G.border}`,padding:"clamp(20px,3vw,32px)"}}>
              <Shield size={28} style={{color:G.gold,marginBottom:16}}/>
              <h3 style={{fontFamily:"var(--font-playfair),Georgia,serif",fontWeight:700,color:G.text,fontSize:"1.2rem",marginBottom:12}}>Safe dating resources</h3>
              <p style={{color:G.muted,fontSize:"0.875rem",lineHeight:1.8,marginBottom:20}}>Our complete guide covers everything from a first message to a first date — with practical, specific advice for every step.</p>
              <Link href="/safe-dating" className="cy-btn-outline" style={{display:"inline-flex",fontSize:"0.875rem"}}>
                Safe Dating Guide <ArrowRight size={14}/>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </SharedLayout>
  );
}


