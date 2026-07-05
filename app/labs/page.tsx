"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SharedLayout from "@/components/SharedLayout";
import { ArrowRight, TrendingUp, BookOpen, Lightbulb } from "lucide-react";

const G = { bg:"#0C0B09",surface:"#151310",border:"#2A2520",gold:"#C8A96E",goldMuted:"rgba(200,169,110,0.10)",text:"#F2EDE4",muted:"#8A8070",dim:"#4A4540" };
const fadeUp = { initial:{opacity:0,y:28}, whileInView:{opacity:1,y:0}, viewport:{once:true}, transition:{duration:0.7,ease:"easeOut"} } as const;

const RESEARCH = [
  { category:"Matching Science", title:"The 7 factors that predict long-term relationship success", excerpt:"Our analysis of 2 million match interactions reveals that emotional intelligence alignment, not shared interests, is the strongest predictor of lasting connection.", date:"May 2026", readTime:"12 min read", img:"photo-1522202176988-66273c2fd55f" },
  { category:"Dating Behaviour", title:"Why people ghost — and how we designed to stop it", excerpt:"Ghosting costs an average dater 14 hours of emotional processing per incident. We studied the psychology of avoidance and built features to change the behaviour.", date:"Apr 2026", readTime:"8 min read", img:"photo-1529156069898-49953e39b3ac" },
  { category:"User Research", title:"The profile prompt that gets 3× more conversation starts", excerpt:"Data from 500,000 first messages shows that specific 'Saturday morning' prompts dramatically outperform generic bios in generating genuine responses.", date:"Mar 2026", readTime:"6 min read", img:"photo-1516589178581-6cd7833ae3b2" },
  { category:"Industry Data", title:"Dating app fatigue: a new epidemic, and what Cymbie is doing about it", excerpt:"74% of people aged 25–35 report feeling exhausted by modern dating apps. We commissioned a global study to understand why — and what the alternative looks like.", date:"Feb 2026", readTime:"15 min read", img:"photo-1543269664-56d93c1b41a6" },
  { category:"Algorithm", title:"Introducing Compatibility Score v2: what changed and why", excerpt:"Our updated compatibility scoring now incorporates 40+ weighted signals including communication style, attachment patterns, and life stage — not just interests.", date:"Jan 2026", readTime:"10 min read", img:"photo-1472099645785-5658abf4ff4e" },
  { category:"Safety Research", title:"Reducing harassment on dating platforms: a technical and policy study", excerpt:"How Cymbie reduced in-app harassment reports by 68% in 12 months using a combination of AI moderation, friction design, and community enforcement.", date:"Dec 2025", readTime:"14 min read", img:"photo-1438761681033-6461ffad8d80" },
];

export default function LabsPage() {
  return (
    <SharedLayout>
      <section style={{padding:"112px 24px 80px",background:G.bg,position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse 80% 60% at 50% -10%,rgba(200,169,110,0.08) 0%,transparent 60%)",pointerEvents:"none"}}/>
        <motion.div {...fadeUp} style={{maxWidth:760,position:"relative"}}>
          <p style={{fontSize:12,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.1em",color:G.gold,marginBottom:20}}>Cymbie Labs</p>
          <h1 style={{fontFamily:"var(--font-playfair),Georgia,serif",fontWeight:700,fontSize:"clamp(2.8rem,6vw,5rem)",color:G.text,lineHeight:1.1,marginBottom:20}}>
            The data behind better dating.
          </h1>
          <p style={{color:G.muted,fontSize:"clamp(1rem,1.4vw,1.15rem)",lineHeight:1.85,maxWidth:560}}>
            Cymbie Labs publishes original research on human connection, relationship science, and the technology of intentional dating. We believe transparency builds trust.
          </p>
        </motion.div>
      </section>

      {/* Key figures */}
      <section style={{background:G.surface,borderTop:`1px solid ${G.border}`,borderBottom:`1px solid ${G.border}`}}>
        <div style={{maxWidth:1280,margin:"0 auto",padding:"0 24px",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(160px,1fr))"}}>
          {[["47K+","Couples studied"],["2.4M","Data points analysed"],["18","Published studies"],["3","Academic partnerships"]].map(([val,label],i)=>(
            <motion.div key={i} {...fadeUp} transition={{delay:i*0.1}} style={{padding:"28px 16px",textAlign:"center",borderRight:i<3?`1px solid ${G.border}`:"none"}}>
              <div style={{fontFamily:"var(--font-playfair),Georgia,serif",fontSize:"1.8rem",fontWeight:700,color:G.gold,marginBottom:4}}>{val}</div>
              <div style={{fontSize:12,color:G.muted}}>{label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Research Articles */}
      <section style={{padding:"80px 24px 96px",background:G.bg}}>
        <div style={{maxWidth:1280,margin:"0 auto"}}>
          <motion.div {...fadeUp} style={{marginBottom:56}}>
            <p style={{fontSize:12,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.1em",color:G.gold,marginBottom:16}}>Research & Insights</p>
            <h2 style={{fontFamily:"var(--font-playfair),Georgia,serif",fontWeight:700,fontSize:"clamp(2rem,3.5vw,3rem)",color:G.text}}>Latest from the lab.</h2>
          </motion.div>

          {/* Featured article */}
          <motion.div {...fadeUp} style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:0,borderRadius:24,overflow:"hidden",border:`1px solid ${G.border}`,marginBottom:24,background:G.surface}}>
            <div style={{position:"relative",minHeight:360}}>
              <Image src={`https://images.unsplash.com/${RESEARCH[0].img}?w=800&q=90&auto=format&fit=crop`} alt={RESEARCH[0].title} fill style={{objectFit:"cover"}} sizes="50vw"/>
              <div style={{position:"absolute",inset:0,background:"linear-gradient(0deg,rgba(21,19,16,0.4) 0%,transparent 60%)"}}/>
            </div>
            <div style={{padding:"48px 40px",display:"flex",flexDirection:"column",justifyContent:"center"}}>
              <span style={{display:"inline-block",padding:"4px 12px",borderRadius:100,background:G.goldMuted,border:"1px solid rgba(200,169,110,0.25)",fontSize:11,fontWeight:700,color:G.gold,marginBottom:20}}>{RESEARCH[0].category}</span>
              <h2 style={{fontFamily:"var(--font-playfair),Georgia,serif",fontWeight:700,fontSize:"clamp(1.3rem,2vw,1.8rem)",color:G.text,lineHeight:1.2,marginBottom:16}}>{RESEARCH[0].title}</h2>
              <p style={{color:G.muted,fontSize:"0.9rem",lineHeight:1.75,marginBottom:24}}>{RESEARCH[0].excerpt}</p>
              <div style={{display:"flex",alignItems:"center",gap:16}}>
                <span style={{color:G.dim,fontSize:12}}>{RESEARCH[0].date}</span>
                <span style={{color:G.dim,fontSize:12}}>·</span>
                <span style={{color:G.dim,fontSize:12}}>{RESEARCH[0].readTime}</span>
              </div>
            </div>
          </motion.div>

          {/* Grid of articles */}
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:16}}>
            {RESEARCH.slice(1).map((article,i)=>(
              <motion.div key={i} {...fadeUp} transition={{delay:i*0.08}} style={{borderRadius:16,background:G.surface,border:`1px solid ${G.border}`,overflow:"hidden",cursor:"pointer",transition:"border-color 0.2s"}}
                onMouseEnter={e=>(e.currentTarget as HTMLElement).style.borderColor="rgba(200,169,110,0.3)"}
                onMouseLeave={e=>(e.currentTarget as HTMLElement).style.borderColor=G.border}
              >
                <div style={{position:"relative",height:180}}>
                  <Image src={`https://images.unsplash.com/${article.img}?w=480&q=80&auto=format&fit=crop`} alt={article.title} fill style={{objectFit:"cover"}} sizes="320px"/>
                </div>
                <div style={{padding:"20px 20px 24px"}}>
                  <span style={{display:"inline-block",padding:"3px 10px",borderRadius:100,background:G.goldMuted,fontSize:10,fontWeight:700,color:G.gold,marginBottom:12}}>{article.category}</span>
                  <h3 style={{fontWeight:700,fontSize:"0.95rem",color:G.text,lineHeight:1.4,marginBottom:10}}>{article.title}</h3>
                  <p style={{color:G.muted,fontSize:"0.82rem",lineHeight:1.6,marginBottom:14,display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden"}}>{article.excerpt}</p>
                  <div style={{display:"flex",justifyContent:"space-between",fontSize:11,color:G.dim}}>
                    <span>{article.date}</span><span>{article.readTime}</span>
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


