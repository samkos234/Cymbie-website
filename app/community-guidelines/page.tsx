"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import SharedLayout from "@/components/SharedLayout";
import { ArrowRight, Users, Flag, Scale, RotateCcw } from "lucide-react";

const G = { bg:"#0C0B09",surface:"#151310",border:"#2A2520",gold:"#C8A96E",goldMuted:"rgba(200,169,110,0.10)",text:"#F2EDE4",muted:"#8A8070",dim:"#4A4540",rose:"#C4526A" };
const fadeUp = { initial:{opacity:0,y:28}, whileInView:{opacity:1,y:0}, viewport:{once:true}, transition:{duration:0.7,ease:"easeOut"} } as const;

const SECTIONS = [
  {
    title:"Be authentic",
    icon:<Users size={22}/>,
    rules:[
      { rule:"Use your real name and photos", detail:"Your profile must represent you accurately. No filters that fundamentally alter your appearance, no photos that are more than 3 years old." },
      { rule:"Be honest about who you are", detail:"Age, location, and relationship intentions must be accurately represented. Misrepresentation of any kind violates our guidelines." },
      { rule:"One account per person", detail:"Creating multiple accounts, including to evade bans, is not permitted and may result in permanent removal and reporting to authorities." },
    ],
  },
  {
    title:"Be respectful",
    icon:<Scale size={22}/>,
    rules:[
      { rule:"Treat everyone with basic dignity", detail:"Every member deserves respect regardless of whether you're attracted to them or interested in matching. Rudeness, insults, and dismissive behaviour are not welcome." },
      { rule:"No hate speech or discrimination", detail:"Language or behaviour that demeans people based on race, ethnicity, religion, gender, sexual orientation, disability, body size, or any other characteristic is strictly prohibited." },
      { rule:"Consent is required — always", detail:"Sending unsolicited explicit messages or images will result in immediate removal. All sexual communication requires clear, mutual consent." },
    ],
  },
  {
    title:"Keep it safe",
    icon:<Flag size={22}/>,
    rules:[
      { rule:"No scamming or financial manipulation", detail:"Romance scams are a serious crime. Asking members for money, gifts, or financial information at any point is a permanent ban violation, and we report to law enforcement." },
      { rule:"No escort services or commercial sex", detail:"Cymbie prohibits the use of the platform to advertise, arrange, or solicit commercial sexual activity of any kind." },
      { rule:"Protect minors at all cost", detail:"Any content involving minors in a sexual context, or any attempt to contact or meet minors, is reported immediately to the relevant authorities. No exceptions." },
    ],
  },
  {
    title:"Enforcement",
    icon:<RotateCcw size={22}/>,
    rules:[
      { rule:"Warnings for minor violations", detail:"First-time, minor policy violations may result in a warning and temporary feature restrictions while we investigate." },
      { rule:"Immediate removal for serious violations", detail:"Harassment, explicit content without consent, hate speech, and scamming result in immediate, permanent removal without warning." },
      { rule:"Appeals process", detail:"If you believe your account was removed in error, you may submit an appeal via our contact page. Appeals are reviewed by a senior safety team member within 5 business days." },
    ],
  },
];

export default function CommunityGuidelinesPage() {
  return (
    <SharedLayout>
      <section style={{padding:"112px 24px 80px",background:G.bg,position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse 80% 60% at 50% -10%,rgba(200,169,110,0.08) 0%,transparent 60%)",pointerEvents:"none"}}/>
        <div style={{maxWidth:760,margin:"0 auto",position:"relative"}}>
          <motion.p {...fadeUp} style={{fontSize:12,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.1em",color:G.gold,marginBottom:20}}>Community Guidelines</motion.p>
          <motion.h1 {...fadeUp} transition={{delay:0.1}} style={{fontFamily:"var(--font-playfair),Georgia,serif",fontWeight:700,fontSize:"clamp(2.5rem,5vw,4rem)",color:G.text,lineHeight:1.1,marginBottom:20}}>
            The rules that protect everyone.
          </motion.h1>
          <motion.p {...fadeUp} transition={{delay:0.2}} style={{color:G.muted,fontSize:"clamp(1rem,1.4vw,1.1rem)",lineHeight:1.85,maxWidth:520,marginBottom:28}}>
            Cymbie is a premium community built on mutual respect. These guidelines apply to all members equally and are enforced without exception.
          </motion.p>
          <motion.p {...fadeUp} transition={{delay:0.3}} style={{color:G.dim,fontSize:13}}>
            Last updated: May 2026 · Effective immediately upon account creation
          </motion.p>
        </div>
      </section>

      {/* Guidelines */}
      <section style={{padding:"0 24px 96px",background:G.bg}}>
        <div style={{maxWidth:1000,margin:"0 auto",display:"flex",flexDirection:"column",gap:32}}>
          {SECTIONS.map((section,si)=>(
            <motion.div key={si} {...fadeUp} transition={{delay:si*0.1}} style={{borderRadius:20,background:G.surface,border:`1px solid ${G.border}`,overflow:"hidden"}}>
              <div style={{padding:"28px 32px 20px",borderBottom:`1px solid ${G.border}`,display:"flex",alignItems:"center",gap:14}}>
                <div style={{width:44,height:44,borderRadius:12,background:G.goldMuted,display:"flex",alignItems:"center",justifyContent:"center",color:G.gold,flexShrink:0}}>{section.icon}</div>
                <h2 style={{fontFamily:"var(--font-playfair),Georgia,serif",fontWeight:700,fontSize:"1.3rem",color:G.text}}>{section.title}</h2>
              </div>
              <div style={{padding:"20px 32px 28px",display:"flex",flexDirection:"column",gap:16}}>
                {section.rules.map((rule,ri)=>(
                  <div key={ri} style={{padding:"16px 20px",borderRadius:12,background:G.bg,border:`1px solid ${G.border}`}}>
                    <h3 style={{fontWeight:700,fontSize:"0.9rem",color:G.text,marginBottom:6}}>{rule.rule}</h3>
                    <p style={{color:G.muted,fontSize:"0.85rem",lineHeight:1.75}}>{rule.detail}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Report CTA */}
      <section style={{padding:"64px 24px 96px",background:G.surface,borderTop:`1px solid ${G.border}`,textAlign:"center"}}>
        <motion.div {...fadeUp} style={{maxWidth:520,margin:"0 auto"}}>
          <h2 style={{fontFamily:"var(--font-playfair),Georgia,serif",fontWeight:700,fontSize:"clamp(1.8rem,3vw,2.5rem)",color:G.text,marginBottom:16}}>
            See something? Say something.
          </h2>
          <p style={{color:G.muted,lineHeight:1.8,marginBottom:28}}>
            Every member is responsible for the community. Reporting violations keeps Cymbie safe for everyone, and we take every report seriously.
          </p>
          <div style={{display:"flex",justifyContent:"center",gap:12,flexWrap:"wrap"}}>
            <Link href="/contact?subject=report-violation" style={{display:"inline-flex",alignItems:"center",gap:6,padding:"13px 24px",borderRadius:100,background:"linear-gradient(135deg,#A8854A,#C8A96E)",color:"#0C0B09",fontWeight:700,fontSize:14,textDecoration:"none"}}>
              Report a Violation <ArrowRight size={14}/>
            </Link>
            <Link href="/trust-safety" style={{display:"inline-flex",alignItems:"center",gap:6,padding:"13px 20px",borderRadius:100,border:`1px solid ${G.border}`,color:G.muted,textDecoration:"none",fontSize:14}}>
              Trust & Safety Policy
            </Link>
          </div>
        </motion.div>
      </section>
    </SharedLayout>
  );
}


