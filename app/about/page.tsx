"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SharedLayout from "@/components/SharedLayout";
import { ArrowRight } from "lucide-react";

const G = { bg:"#0C0B09",surface:"#151310",surface2:"#1C1914",border:"#2A2520",gold:"#C8A96E",goldMuted:"rgba(200,169,110,0.10)",text:"#F2EDE4",muted:"#8A8070",dim:"#4A4540" };
const fadeUp = { initial:{opacity:0,y:32}, whileInView:{opacity:1,y:0}, viewport:{once:true}, transition:{duration:0.75,ease:"easeOut"} } as const;
const slideRight = { initial:{opacity:0,x:40}, whileInView:{opacity:1,x:0}, viewport:{once:true}, transition:{duration:0.75,ease:"easeOut"} } as const;
const slideLeft = { initial:{opacity:0,x:-40}, whileInView:{opacity:1,x:0}, viewport:{once:true}, transition:{duration:0.75,ease:"easeOut"} } as const;

const TIMELINE = [
  { year:"2021", title:"The idea", desc:"Co-founders Victor Matt and James, both exhausted by mainstream dating apps, meet at a product conference in London and spend six hours asking: why does no-one design for relationships?", img:"photo-1517292987719-0369a794ec0f" },
  { year:"2022", title:"Building the algorithm", desc:"James leaves Google. The first version of the 7-signal compatibility engine is built in a Shoreditch flat with a team of three — two engineers and a relationship psychologist.", img:"photo-1516589091380-5d8e87df6999" },
  { year:"2023", title:"Private beta", desc:"Cymbie launches to 5,000 invite-only users in London and New York. 1,200 matches. 73 documented relationships in the first six months. The team knows it's working.", img:"photo-1499996860823-5214fcc65f8f" },
  { year:"2024", title:"Global launch", desc:"Cymbie opens to 60+ countries. Warm and Ardent plans launch. 500,000 members join in the first six months. The first Cymbie wedding takes place in Toronto in October.", img:"photo-1555421689-d68471e189f2" },
  { year:"2025", title:"2 million & growing", desc:"Cymbie reaches 2 million members across 60+ countries. Labs publishes its first annual relationship research report. The team grows to 60 people across 15 countries.", img:"photo-1511632765486-a01980e01a18" },
  { year:"2026", title:"Today", desc:"47,000+ documented relationships. 94% match satisfaction. A new compatibility model launching in Q3. And a team that still asks the same question every morning: does this help people find love?", img:"photo-1521572163474-6864f9cf17ab" },
];

const INVESTORS = ["First Round Capital","Index Ventures","Andreessen Horowitz","Founders Fund","Y Combinator"];

export default function AboutPage() {
  return (
    <SharedLayout>
      {/* HERO */}
      <section style={{position:"relative",minHeight:"70vh",display:"flex",alignItems:"flex-end",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0}}>
          <Image src="https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=1920&q=95&auto=format&fit=crop&crop=center"
            alt="Couple golden hour — Cymbie story" fill priority sizes="100vw" style={{objectFit:"cover",objectPosition:"center 40%"}}/>
          <div style={{position:"absolute",inset:0,background:"linear-gradient(0deg,rgba(12,11,9,0.95) 0%,rgba(12,11,9,0.4) 55%,rgba(12,11,9,0.1) 100%)"}}/>
        </div>
        <div className="cy-container" style={{position:"relative",zIndex:2,padding:"0 24px 72px"}}>
          <motion.div initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} transition={{duration:0.8}}>
            <span className="cy-badge" style={{marginBottom:24,display:"inline-flex"}}>Our Story</span>
            <h1 className="cy-h1" style={{color:G.text,marginBottom:20,maxWidth:680}}>
              Built by people who<br/><span className="cy-gradient-text">got tired of the status quo.</span>
            </h1>
            <p className="cy-body-lg" style={{color:"rgba(242,237,228,0.75)",maxWidth:540}}>
              Cymbie started as a conversation between two burned-out tech professionals who kept asking the same question: why is dating app design so opposed to actual dating?
            </p>
          </motion.div>
        </div>
      </section>

      {/* ORIGIN STORY — split */}
      <section className="cy-section" style={{background:G.surface,borderTop:`1px solid ${G.border}`}}>
        <div className="cy-container">
          <div className="cy-grid-2" style={{gap:"clamp(2rem,5vw,5rem)",alignItems:"center"}}>
            <motion.div {...slideLeft}>
              <span className="cy-label" style={{color:G.gold,display:"block",marginBottom:16}}>Why We Exist</span>
              <h2 className="cy-h2" style={{color:G.text,marginBottom:24}}>The industry is optimised for endless engagement. We optimised for connection.</h2>
              <p className="cy-body" style={{color:G.muted,marginBottom:20}}>
                When Victor Matt left Spotify after six years of building products that maximised engagement, he had a difficult realisation: he'd spent his career maximizing screen time. Dating apps had done the same thing — deliberately.
              </p>
              <p className="cy-body" style={{color:G.muted,marginBottom:20}}>
                When he met James Whitfield at a conference in London in 2021, they had the same frustration from different angles — James from building Google's recommendation systems, Victor from product design. Six hours of conversation later, Cymbie was born.
              </p>
              <p className="cy-body" style={{color:G.muted}}>
                The core thesis: build a dating app that treats relationship formation as the success metric — not session length, not swipe volume, not subscription renewals. A platform that wins when you find what you're looking for.
              </p>
            </motion.div>
            <motion.div {...slideRight} style={{position:"relative",height:"clamp(320px,45vw,500px)"}}>
              <div style={{position:"absolute",top:0,left:0,right:"15%",bottom:"20%",borderRadius:24,overflow:"hidden"}} className="cy-img-zoom">
                <Image src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=700&q=90&auto=format&fit=crop&crop=faces" alt="Co-founder Victor Matt" fill style={{objectFit:"cover"}} sizes="40vw"/>
              </div>
              <div className="animate-float-delay" style={{position:"absolute",bottom:0,right:0,width:"48%",height:"40%",borderRadius:20,overflow:"hidden",border:"3px solid #151310"}}>
                <Image src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=90&auto=format&fit=crop&crop=faces" alt="Co-founder James" fill style={{objectFit:"cover"}} sizes="25vw"/>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="cy-section" style={{background:G.bg}}>
        <div className="cy-container">
          <motion.div {...fadeUp} style={{textAlign:"center",marginBottom:64}}>
            <span className="cy-badge" style={{marginBottom:20,display:"inline-flex"}}>Timeline</span>
            <h2 className="cy-h2" style={{color:G.text}}>Five years. One mission.</h2>
          </motion.div>

          <div style={{display:"flex",flexDirection:"column",gap:0}}>
            {TIMELINE.map((item,i)=>(
              <motion.div key={i} initial={{opacity:0,x:i%2===0?-32:32}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.7,delay:0.1}}>
                <div className="cy-grid-2" style={{gap:"clamp(1.5rem,4vw,4rem)",alignItems:"center",paddingBottom:"clamp(2rem,4vw,4rem)"}}>
                  {/* Text — alternating sides */}
                  <div style={{order:i%2===0?1:2}}>
                    <div style={{fontFamily:"var(--font-playfair),Georgia,serif",fontWeight:700,fontSize:"clamp(2rem,4vw,3rem)",color:G.border,lineHeight:1,marginBottom:12}}>{item.year}</div>
                    <h3 style={{fontFamily:"var(--font-playfair),Georgia,serif",fontWeight:700,fontSize:"clamp(1.2rem,2vw,1.6rem)",color:G.text,marginBottom:12}}>{item.title}</h3>
                    <p style={{color:G.muted,fontSize:"0.9rem",lineHeight:1.85}}>{item.desc}</p>
                  </div>
                  {/* Image */}
                  <div style={{order:i%2===0?2:1,position:"relative",height:"clamp(200px,28vw,320px)",borderRadius:20,overflow:"hidden"}} className="cy-img-zoom">
                    <Image src={`https://images.unsplash.com/${item.img}?w=600&q=88&auto=format&fit=crop`} alt={item.title} fill style={{objectFit:"cover"}} sizes="45vw"/>
                    <div style={{position:"absolute",inset:0,background:"linear-gradient(0deg,rgba(12,11,9,0.3) 0%,transparent 60%)"}}/>
                  </div>
                </div>
                {i < TIMELINE.length-1 && <div className="cy-divider" style={{marginBottom:"clamp(2rem,4vw,4rem)"}}/>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INVESTORS */}
      <section style={{background:G.surface,borderTop:`1px solid ${G.border}`,borderBottom:`1px solid ${G.border}`,padding:"clamp(2rem,4vw,3.5rem) 24px"}}>
        <div className="cy-container" style={{textAlign:"center"}}>
          <motion.div {...fadeUp}>
            <p style={{color:G.dim,fontSize:"0.78rem",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:24}}>Backed by</p>
            <div style={{display:"flex",gap:"clamp(1.5rem,4vw,3.5rem)",flexWrap:"wrap",justifyContent:"center",alignItems:"center"}}>
              {INVESTORS.map((inv,i)=>(
                <span key={i} style={{fontFamily:"var(--font-playfair),Georgia,serif",fontWeight:700,color:G.dim,fontSize:"clamp(0.9rem,1.5vw,1.1rem)",transition:"color 0.2s",cursor:"default"}}
                  onMouseEnter={e=>(e.currentTarget.style.color=G.muted)}
                  onMouseLeave={e=>(e.currentTarget.style.color=G.dim)}
                >{inv}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="cy-section" style={{background:G.bg,textAlign:"center"}}>
        <div className="cy-container">
          <motion.div {...fadeUp} style={{maxWidth:520,margin:"0 auto"}}>
            <h2 className="cy-h2" style={{color:G.text,marginBottom:16}}>Be part of the story.</h2>
            <p className="cy-body" style={{color:G.muted,marginBottom:32}}>Whether you're looking for love or looking to build something that matters — there's a place for you at Cymbie.</p>
            <div style={{display:"flex",justifyContent:"center",gap:12,flexWrap:"wrap"}}>
              <Link href="/download" className="cy-btn-primary">Download Cymbie <ArrowRight size={16}/></Link>
              <Link href="/careers" className="cy-btn-outline">Work With Us</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </SharedLayout>
  );
}


