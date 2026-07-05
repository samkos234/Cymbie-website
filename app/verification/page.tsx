"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import SharedLayout from "@/components/SharedLayout";
import { ArrowRight, Fingerprint, CheckCircle2, Lock, ShieldCheck } from "lucide-react";

const G = { bg:"#0C0B09",surface:"#151310",border:"#2A2520",gold:"#C8A96E",goldMuted:"rgba(200,169,110,0.10)",text:"#F2EDE4",muted:"#8A8070",dim:"#4A4540" };
const fadeUp = { initial:{opacity:0,y:28}, whileInView:{opacity:1,y:0}, viewport:{once:true}, transition:{duration:0.7,ease:"easeOut"} } as const;

const STEPS = [
  { n:"01", title:"Photo check (all members)", desc:"Every new Cymbie member takes a live selfie that our AI matches against their profile photos. This confirms the person behind the profile is real and present. Takes 30 seconds.", badge:"Free · Required" },
  { n:"02", title:"Government ID check (Warm & Ardent)", desc:"Members on paid plans can submit a government-issued ID through our secure partner Onfido. The ID is verified in real time. Cymbie never stores your ID — only the verified status.", badge:"Paid tiers · Optional" },
  { n:"03", title:"Background check (Ardent)", desc:"Ardent members can opt in to a voluntary background check through our integrated partner. A clean background check earns a prominent trust badge visible on your profile.", badge:"Ardent · Optional" },
  { n:"04", title:"Ongoing monitoring", desc:"Verified status doesn't mean permanent clearance. Our AI continuously monitors for behavioural red flags that could indicate account takeovers or misrepresentation.", badge:"Ongoing · All tiers" },
];

export default function VerificationPage() {
  return (
    <SharedLayout>
      <section style={{padding:"112px 24px 80px",background:G.bg,position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse 80% 60% at 50% -10%,rgba(200,169,110,0.08) 0%,transparent 60%)",pointerEvents:"none"}}/>
        <div style={{maxWidth:800,margin:"0 auto",textAlign:"center",position:"relative"}}>
          <motion.div {...fadeUp} style={{width:72,height:72,borderRadius:"50%",background:G.goldMuted,border:"1px solid rgba(200,169,110,0.3)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 24px",color:G.gold}}>
            <Fingerprint size={32}/>
          </motion.div>
          <motion.p {...fadeUp} transition={{delay:0.1}} style={{fontSize:12,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.1em",color:G.gold,marginBottom:20}}>Verification</motion.p>
          <motion.h1 {...fadeUp} transition={{delay:0.2}} style={{fontFamily:"var(--font-playfair),Georgia,serif",fontWeight:700,fontSize:"clamp(2.5rem,5vw,4.5rem)",color:G.text,lineHeight:1.1,marginBottom:20}}>
            Real people only.
          </motion.h1>
          <motion.p {...fadeUp} transition={{delay:0.3}} style={{color:G.muted,fontSize:"clamp(1rem,1.4vw,1.15rem)",lineHeight:1.85,maxWidth:520,margin:"0 auto"}}>
            Cymbie has a zero-tolerance policy for fake profiles, bots, and catfishing. Our three-tier verification system is the most comprehensive in the dating industry.
          </motion.p>
        </div>
      </section>

      {/* Why it matters */}
      <section style={{padding:"0 24px 72px",background:G.bg}}>
        <div style={{maxWidth:900,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:16}}>
          {[
            { stat:"99.7%", label:"Profiles verified at signup", desc:"Every member completes at least photo verification before their profile goes live." },
            { stat:"<0.1%", label:"Fake profile rate", desc:"Our AI detects and removes fake accounts within minutes of creation — before they ever reach you." },
            { stat:"68%", label:"Of members complete ID verification", desc:"The majority of Cymbie members voluntarily go beyond photo check for added trust." },
          ].map((item,i)=>(
            <motion.div key={i} {...fadeUp} transition={{delay:i*0.1}} style={{padding:"32px 24px",borderRadius:16,background:G.surface,border:`1px solid ${G.border}`,textAlign:"center"}}>
              <div style={{fontFamily:"var(--font-playfair),Georgia,serif",fontWeight:700,fontSize:"clamp(2rem,4vw,3rem)",color:G.gold,marginBottom:8}}>{item.stat}</div>
              <div style={{fontWeight:700,fontSize:"0.85rem",color:G.text,marginBottom:8}}>{item.label}</div>
              <div style={{color:G.muted,fontSize:"0.8rem",lineHeight:1.65}}>{item.desc}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Verification steps */}
      <section style={{padding:"0 24px 96px",background:G.bg}}>
        <div style={{maxWidth:900,margin:"0 auto"}}>
          <motion.div {...fadeUp} style={{marginBottom:48}}>
            <p style={{fontSize:12,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.1em",color:G.gold,marginBottom:16}}>How It Works</p>
            <h2 style={{fontFamily:"var(--font-playfair),Georgia,serif",fontWeight:700,fontSize:"clamp(2rem,3.5vw,3rem)",color:G.text}}>Three tiers of trust.</h2>
          </motion.div>
          <div style={{display:"flex",flexDirection:"column",gap:16}}>
            {STEPS.map((step,i)=>(
              <motion.div key={i} {...fadeUp} transition={{delay:i*0.1}} style={{display:"grid",gridTemplateColumns:"60px 1fr auto",gap:24,padding:"28px 24px",borderRadius:16,background:G.surface,border:`1px solid ${G.border}`,alignItems:"start"}}>
                <div style={{fontFamily:"var(--font-playfair),Georgia,serif",fontWeight:700,fontSize:"2rem",color:G.border,lineHeight:1}}>{step.n}</div>
                <div>
                  <h3 style={{fontWeight:700,fontSize:"0.95rem",color:G.text,marginBottom:8}}>{step.title}</h3>
                  <p style={{color:G.muted,fontSize:"0.875rem",lineHeight:1.75}}>{step.desc}</p>
                </div>
                <span style={{padding:"4px 12px",borderRadius:100,background:G.goldMuted,border:"1px solid rgba(200,169,110,0.2)",fontSize:10,fontWeight:700,color:G.gold,whiteSpace:"nowrap"}}>{step.badge}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy note */}
      <section style={{padding:"56px 24px 80px",background:G.surface,borderTop:`1px solid ${G.border}`}}>
        <div style={{maxWidth:720,margin:"0 auto"}}>
          <motion.div {...fadeUp} style={{display:"flex",gap:16,alignItems:"flex-start",padding:"24px 28px",borderRadius:16,background:G.bg,border:`1px solid ${G.border}`}}>
            <Lock size={20} style={{color:G.gold,flexShrink:0,marginTop:2}}/>
            <div>
              <h3 style={{fontWeight:700,color:G.text,marginBottom:8,fontSize:"0.95rem"}}>Your data stays private.</h3>
              <p style={{color:G.muted,fontSize:"0.875rem",lineHeight:1.75,marginBottom:16}}>
                Cymbie never stores your government ID. Verification is handled entirely by our partner Onfido, who returns only a pass/fail signal. Your biometric data is processed and immediately deleted. We comply fully with GDPR, CCPA, and all applicable biometric data regulations.
              </p>
              <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
                <Link href="/privacy" style={{color:G.gold,fontSize:13,textDecoration:"none",fontWeight:600}}>Privacy Policy →</Link>
                <Link href="/security" style={{color:G.gold,fontSize:13,textDecoration:"none",fontWeight:600}}>Security Practices →</Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </SharedLayout>
  );
}


