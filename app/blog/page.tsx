"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SharedLayout from "@/components/SharedLayout";
import { ArrowRight } from "lucide-react";

const G = { bg:"#0C0B09",surface:"#151310",border:"#2A2520",gold:"#C8A96E",goldMuted:"rgba(200,169,110,0.10)",text:"#F2EDE4",muted:"#8A8070",dim:"#4A4540" };
const fadeUp = { initial:{opacity:0,y:28}, whileInView:{opacity:1,y:0}, viewport:{once:true}, transition:{duration:0.7,ease:"easeOut"} } as const;

const ARTICLES = [
  { cat:"Relationships", title:"The 5 conversations every couple should have in the first 3 months", excerpt:"Not about commitment timelines or red flags — these are the deeper conversations that reveal whether two people are actually compatible for the long run.", date:"May 20, 2026", readTime:"7 min", img:"photo-1516589178581-6cd7833ae3b2", featured:true },
  { cat:"Dating Tips", title:"Why your opening message isn't working — and what to say instead", excerpt:"Data from 500,000 Cymbie conversations reveals the messages that get responses and those that don't. The difference is simpler than you think.", date:"May 14, 2026", readTime:"5 min", img:"photo-1529156069898-49953e39b3ac", featured:false },
  { cat:"Self-Development", title:"How to know when you're ready to date again after a breakup", excerpt:"There's no universal timeline. But there are clear psychological signals that tell you when you've genuinely processed the past and are open to the future.", date:"May 9, 2026", readTime:"9 min", img:"photo-1543269664-56d93c1b41a6", featured:false },
  { cat:"Intentional Dating", title:"Attachment styles explained: how yours affects every relationship", excerpt:"Whether you're anxious, avoidant, or secure, understanding your attachment style is the single most important thing you can do before dating someone new.", date:"May 3, 2026", readTime:"11 min", img:"photo-1474552226712-ac0f0961a954", featured:false },
  { cat:"Safety", title:"Red flags that are easy to miss on a first date — and what to do", excerpt:"Some warning signs are subtle. A relationship counsellor and our Head of Safety break down the behaviours worth paying close attention to.", date:"Apr 28, 2026", readTime:"8 min", img:"photo-1531746020798-e6953c6e8e04", featured:false },
  { cat:"Success Stories", title:"'We matched at 97%': how Cymbie's algorithm found my person", excerpt:"Priya and James share exactly what their compatibility breakdown looked like, and why every factor the algorithm flagged turned out to be true.", date:"Apr 21, 2026", readTime:"6 min", img:"photo-1438761681033-6461ffad8d80", featured:false },
];

const CATS = ["All","Relationships","Dating Tips","Self-Development","Intentional Dating","Safety","Success Stories"];

export default function BlogPage() {
  return (
    <SharedLayout>
      <section style={{padding:"112px 24px 80px",background:G.bg}}>
        <motion.div {...fadeUp} style={{maxWidth:760}}>
          <p style={{fontSize:12,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.1em",color:G.gold,marginBottom:20}}>The Blog</p>
          <h1 style={{fontFamily:"var(--font-playfair),Georgia,serif",fontWeight:700,fontSize:"clamp(2.8rem,6vw,5rem)",color:G.text,lineHeight:1.1,marginBottom:20}}>
            Advice for the intentional dater.
          </h1>
          <p style={{color:G.muted,fontSize:"clamp(1rem,1.4vw,1.15rem)",lineHeight:1.85,maxWidth:520}}>
            Relationship insights, dating psychology, success stories, and practical tips — written by experts who actually care about your love life.
          </p>
        </motion.div>
      </section>

      {/* Category pills */}
      <section style={{padding:"0 24px 48px",background:G.bg}}>
        <div style={{maxWidth:1280,margin:"0 auto",display:"flex",flexWrap:"wrap",gap:8}}>
          {CATS.map((cat,i)=>(
            <button key={cat} style={{padding:"8px 18px",borderRadius:100,border:`1px solid ${i===0?"rgba(200,169,110,0.4)":G.border}`,background:i===0?G.goldMuted:"transparent",color:i===0?G.gold:G.muted,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit",transition:"all 0.2s"}}
              onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.borderColor="rgba(200,169,110,0.4)";(e.currentTarget as HTMLElement).style.color=G.gold;}}
              onMouseLeave={e=>{if(cat!=="All"){(e.currentTarget as HTMLElement).style.borderColor=G.border;(e.currentTarget as HTMLElement).style.color=G.muted;}}}
            >{cat}</button>
          ))}
        </div>
      </section>

      {/* Featured article */}
      <section style={{padding:"0 24px 48px",background:G.bg}}>
        <div style={{maxWidth:1280,margin:"0 auto"}}>
          <motion.div {...fadeUp} style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:0,borderRadius:24,overflow:"hidden",border:`1px solid ${G.border}`,background:G.surface,marginBottom:24}}>
            <div style={{position:"relative",minHeight:400}}>
              <Image src={`https://images.unsplash.com/${ARTICLES[0].img}?w=800&q=90&auto=format&fit=crop&crop=center`} alt={ARTICLES[0].title} fill style={{objectFit:"cover"}} sizes="50vw"/>
              <div style={{position:"absolute",top:20,left:20,padding:"4px 12px",borderRadius:100,background:G.goldMuted,border:"1px solid rgba(200,169,110,0.3)",fontSize:11,fontWeight:700,color:G.gold}}>
                ✦ Featured
              </div>
            </div>
            <div style={{padding:"48px 44px",display:"flex",flexDirection:"column",justifyContent:"center"}}>
              <span style={{display:"inline-block",padding:"4px 12px",borderRadius:100,background:G.goldMuted,fontSize:11,fontWeight:700,color:G.gold,marginBottom:16}}>{ARTICLES[0].cat}</span>
              <h2 style={{fontFamily:"var(--font-playfair),Georgia,serif",fontWeight:700,fontSize:"clamp(1.4rem,2.5vw,2rem)",color:G.text,lineHeight:1.2,marginBottom:16}}>{ARTICLES[0].title}</h2>
              <p style={{color:G.muted,fontSize:"0.9rem",lineHeight:1.75,marginBottom:24}}>{ARTICLES[0].excerpt}</p>
              <div style={{display:"flex",alignItems:"center",gap:16,marginBottom:24}}>
                <span style={{color:G.dim,fontSize:12}}>{ARTICLES[0].date}</span>
                <span style={{color:G.dim,fontSize:12}}>·</span>
                <span style={{color:G.dim,fontSize:12}}>{ARTICLES[0].readTime} read</span>
              </div>
              <Link href="#" style={{display:"inline-flex",alignItems:"center",gap:6,color:G.gold,textDecoration:"none",fontWeight:600,fontSize:14}}>
                Read article <ArrowRight size={14}/>
              </Link>
            </div>
          </motion.div>

          {/* Article grid */}
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:16}}>
            {ARTICLES.slice(1).map((article,i)=>(
              <motion.div key={i} {...fadeUp} transition={{delay:i*0.08}} style={{borderRadius:16,background:G.surface,border:`1px solid ${G.border}`,overflow:"hidden",cursor:"pointer",transition:"border-color 0.2s"}}
                onMouseEnter={e=>(e.currentTarget as HTMLElement).style.borderColor="rgba(200,169,110,0.3)"}
                onMouseLeave={e=>(e.currentTarget as HTMLElement).style.borderColor=G.border}
              >
                <div style={{position:"relative",height:180}}>
                  <Image src={`https://images.unsplash.com/${article.img}?w=480&q=80&auto=format&fit=crop&crop=center`} alt={article.title} fill style={{objectFit:"cover"}} sizes="320px"/>
                  <div style={{position:"absolute",top:12,left:12,padding:"3px 10px",borderRadius:100,background:"rgba(12,11,9,0.8)",border:`1px solid ${G.border}`,fontSize:10,fontWeight:700,color:G.gold}}>
                    {article.cat}
                  </div>
                </div>
                <div style={{padding:"18px 20px 22px"}}>
                  <h3 style={{fontFamily:"var(--font-playfair),Georgia,serif",fontWeight:700,fontSize:"1rem",color:G.text,lineHeight:1.35,marginBottom:10}}>{article.title}</h3>
                  <p style={{color:G.muted,fontSize:"0.82rem",lineHeight:1.65,marginBottom:14,display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden"}}>{article.excerpt}</p>
                  <div style={{display:"flex",justifyContent:"space-between",fontSize:11,color:G.dim}}>
                    <span>{article.date}</span><span>{article.readTime} read</span>
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


