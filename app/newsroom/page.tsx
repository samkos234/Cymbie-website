"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SharedLayout from "@/components/SharedLayout";
import { ArrowRight, ExternalLink } from "lucide-react";

const G = { bg:"#0C0B09",surface:"#151310",border:"#2A2520",gold:"#C8A96E",goldMuted:"rgba(200,169,110,0.10)",text:"#F2EDE4",muted:"#8A8070",dim:"#4A4540" };
const fadeUp = { initial:{opacity:0,y:28}, whileInView:{opacity:1,y:0}, viewport:{once:true}, transition:{duration:0.7,ease:"easeOut"} } as const;

const PRESS_RELEASES = [
  { date:"May 15, 2026", title:"Cymbie raises $42M Series B to expand intentional dating globally", excerpt:"The funding round, led by Benchmark Capital, will accelerate international expansion into 20 new markets and deepen investment in Cymbie's proprietary compatibility technology.", tag:"Funding" },
  { date:"Apr 2, 2026", title:"Cymbie Labs publishes landmark study on dating app psychology", excerpt:"The study, conducted with Oxford University's Department of Experimental Psychology, reveals why curated match systems produce 3× better relationship outcomes than infinite scroll.", tag:"Research" },
  { date:"Mar 10, 2026", title:"Cymbie launches Ardent Premium tier with AI-powered conversation tools", excerpt:"Ardent introduces AI Conversation Starters, Incognito Mode, and global discovery across 60 countries — all designed with intentional connection as the core design principle.", tag:"Product" },
  { date:"Jan 22, 2026", title:"Cymbie reaches 2 million members across 45 countries", excerpt:"Just 18 months after launch, Cymbie has grown to serve 2 million members, with a documented 94% match satisfaction rate — the highest in the industry.", tag:"Milestone" },
];

const COVERAGE = [
  { outlet:"TechCrunch", headline:"Cymbie is the premium dating platform redefining intentional connection", date:"May 2026", img:"photo-1522202176988-66273c2fd55f" },
  { outlet:"The Guardian", headline:"Inside the app trying to fix modern dating from the inside out", date:"Apr 2026", img:"photo-1529156069898-49953e39b3ac" },
  { outlet:"Forbes", headline:"How Cymbie built a $200M dating company by rejecting engagement metrics", date:"Mar 2026", img:"photo-1516589178581-6cd7833ae3b2" },
  { outlet:"Wired", headline:"The algorithm that wants you to fall in love — then leave", date:"Feb 2026", img:"photo-1543269664-56d93c1b41a6" },
];

export default function NewsroomPage() {
  return (
    <SharedLayout>
      <section style={{padding:"112px 24px 80px",background:G.bg}}>
        <motion.div {...fadeUp} style={{maxWidth:760}}>
          <p style={{fontSize:12,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.1em",color:G.gold,marginBottom:20}}>Newsroom</p>
          <h1 style={{fontFamily:"var(--font-playfair),Georgia,serif",fontWeight:700,fontSize:"clamp(2.8rem,6vw,5rem)",color:G.text,lineHeight:1.1,marginBottom:20}}>
            News & announcements.
          </h1>
          <p style={{color:G.muted,fontSize:"clamp(1rem,1.4vw,1.15rem)",lineHeight:1.85,maxWidth:520,marginBottom:28}}>
            The latest from Cymbie — product launches, company milestones, research publications, and press coverage.
          </p>
          <Link href="/contact?subject=press-inquiry" style={{display:"inline-flex",alignItems:"center",gap:6,padding:"11px 22px",borderRadius:100,border:"1px solid rgba(200,169,110,0.4)",color:G.gold,textDecoration:"none",fontWeight:600,fontSize:13}}>
            Press Inquiries <ArrowRight size={13}/>
          </Link>
        </motion.div>
      </section>

      {/* Press Releases */}
      <section style={{padding:"0 24px 72px",background:G.bg}}>
        <div style={{maxWidth:1280,margin:"0 auto"}}>
          <motion.div {...fadeUp} style={{marginBottom:36}}>
            <h2 style={{fontFamily:"var(--font-playfair),Georgia,serif",fontWeight:700,fontSize:"1.8rem",color:G.text}}>Press Releases</h2>
          </motion.div>
          <div style={{display:"flex",flexDirection:"column",gap:0}}>
            {PRESS_RELEASES.map((pr,i)=>(
              <motion.div key={i} {...fadeUp} transition={{delay:i*0.08}} style={{display:"grid",gridTemplateColumns:"120px 1fr auto",gap:24,alignItems:"center",padding:"24px 0",borderBottom:`1px solid ${G.border}`}}>
                <div>
                  <div style={{fontSize:12,color:G.dim}}>{pr.date}</div>
                  <span style={{display:"inline-block",marginTop:4,padding:"3px 10px",borderRadius:100,background:G.goldMuted,fontSize:10,fontWeight:700,color:G.gold}}>{pr.tag}</span>
                </div>
                <div>
                  <h3 style={{fontWeight:700,fontSize:"0.95rem",color:G.text,marginBottom:6,lineHeight:1.4}}>{pr.title}</h3>
                  <p style={{color:G.muted,fontSize:"0.82rem",lineHeight:1.65}}>{pr.excerpt}</p>
                </div>
                <ExternalLink size={16} style={{color:G.dim,flexShrink:0}}/>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Coverage */}
      <section style={{padding:"72px 24px 96px",background:G.surface,borderTop:`1px solid ${G.border}`}}>
        <div style={{maxWidth:1280,margin:"0 auto"}}>
          <motion.div {...fadeUp} style={{marginBottom:40}}>
            <p style={{fontSize:12,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.1em",color:G.gold,marginBottom:16}}>In the Press</p>
            <h2 style={{fontFamily:"var(--font-playfair),Georgia,serif",fontWeight:700,fontSize:"clamp(1.8rem,3vw,2.5rem)",color:G.text}}>What the world is saying.</h2>
          </motion.div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:16}}>
            {COVERAGE.map((c,i)=>(
              <motion.div key={i} {...fadeUp} transition={{delay:i*0.1}} style={{borderRadius:16,background:G.bg,border:`1px solid ${G.border}`,overflow:"hidden"}}>
                <div style={{position:"relative",height:160}}>
                  <Image src={`https://images.unsplash.com/${c.img}?w=480&q=80&auto=format&fit=crop`} alt={c.outlet} fill style={{objectFit:"cover"}} sizes="320px"/>
                  <div style={{position:"absolute",inset:0,background:"rgba(12,11,9,0.5)"}}/>
                  <div style={{position:"absolute",top:16,left:16,padding:"4px 12px",borderRadius:100,background:"rgba(12,11,9,0.7)",backdropFilter:"blur(8px)",border:`1px solid ${G.border}`}}>
                    <span style={{color:G.text,fontSize:12,fontWeight:700}}>{c.outlet}</span>
                  </div>
                </div>
                <div style={{padding:"18px 20px 22px"}}>
                  <p style={{fontFamily:"var(--font-playfair),Georgia,serif",fontWeight:600,fontSize:"0.95rem",color:G.text,lineHeight:1.4,marginBottom:10}}>"{c.headline}"</p>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <span style={{color:G.dim,fontSize:11}}>{c.date}</span>
                    <ExternalLink size={13} style={{color:G.dim}}/>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </SharedLayout>
  );
}


