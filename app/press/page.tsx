"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import SharedLayout from "@/components/SharedLayout";
import { ArrowRight, Download, Mail, ExternalLink } from "lucide-react";

const G = { bg:"#0C0B09",surface:"#151310",border:"#2A2520",gold:"#C8A96E",goldMuted:"rgba(200,169,110,0.10)",text:"#F2EDE4",muted:"#8A8070",dim:"#4A4540" };
const fadeUp = { initial:{opacity:0,y:28}, whileInView:{opacity:1,y:0}, viewport:{once:true}, transition:{duration:0.7,ease:"easeOut"} } as const;

const BOILERPLATE = `Cymbie is the premium intentional dating app redefining how modern adults find meaningful connection. Founded in 2024 and headquartered in New York with offices in London, Cymbie uses a proprietary compatibility algorithm and rigorous ID verification to surface high-quality matches for its 2.4 million members across 60 countries. Cymbie's mission is to foster deep, lasting relationships built on mutual alignment.`;

const FACTS = [
  ["Founded","2024"],["HQ","New York, NY"],["Team size","60+"],["Members","2.4 million"],
  ["Countries","60+"],["Couples matched","47,000+"],["App Store rating","4.8★"],["Latest funding","$42M Series B"],
];

const CONTACTS = [
  { role:"Press & Media", email:"press@cymbie.co", name:"Communications Team" },
  { role:"Partnerships", email:"partners@cymbie.co", name:"Business Development" },
  { role:"Executive interviews", email:"comms@cymbie.co", name:"Comms Lead" },
];

export default function PressPage() {
  return (
    <SharedLayout>
      <section style={{padding:"112px 24px 80px",background:G.bg}}>
        <motion.div {...fadeUp} style={{maxWidth:760}}>
          <p style={{fontSize:12,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.1em",color:G.gold,marginBottom:20}}>Press Room</p>
          <h1 style={{fontFamily:"var(--font-playfair),Georgia,serif",fontWeight:700,fontSize:"clamp(2.8rem,6vw,5rem)",color:G.text,lineHeight:1.1,marginBottom:20}}>
            Media resources.
          </h1>
          <p style={{color:G.muted,fontSize:"clamp(1rem,1.4vw,1.15rem)",lineHeight:1.85,maxWidth:520,marginBottom:28}}>
            Assets, facts, and contacts for journalists, podcasters, and content creators covering Cymbie, intentional dating, and the future of relationships.
          </p>
        </motion.div>
      </section>

      <section style={{padding:"0 24px 80px",background:G.bg}}>
        <div style={{maxWidth:1100,margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 1fr",gap:48}}>
          {/* Press kit & assets */}
          <motion.div {...fadeUp}>
            <h2 style={{fontFamily:"var(--font-playfair),Georgia,serif",fontWeight:700,fontSize:"1.6rem",color:G.text,marginBottom:24}}>Brand Assets</h2>
            <div style={{display:"flex",flexDirection:"column",gap:10}}>
              {[
                { label:"Cymbie Logo Pack (SVG + PNG)", desc:"Light, dark, and horizontal variants" },
                { label:"Brand Guidelines PDF", desc:"Colors, typography, tone of voice" },
                { label:"Press Photos (High-res)", desc:"Team photos and brand imagery" },
                { label:"App Screenshots", desc:"iOS and Android, all key screens" },
                { label:"Company Fact Sheet", desc:"Updated May 2026" },
              ].map((asset,i)=>(
                <div key={i} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"14px 18px",borderRadius:12,background:G.surface,border:`1px solid ${G.border}`}}>
                  <div>
                    <div style={{fontWeight:600,fontSize:"0.875rem",color:G.text}}>{asset.label}</div>
                    <div style={{fontSize:11,color:G.dim}}>{asset.desc}</div>
                  </div>
                  <div style={{display:"flex",alignItems:"center",gap:6,padding:"6px 14px",borderRadius:100,border:"1px solid rgba(200,169,110,0.3)",color:G.gold,fontSize:12,fontWeight:600,cursor:"pointer"}}>
                    <Download size={12}/> Download
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Company facts */}
          <motion.div {...fadeUp} transition={{delay:0.1}}>
            <h2 style={{fontFamily:"var(--font-playfair),Georgia,serif",fontWeight:700,fontSize:"1.6rem",color:G.text,marginBottom:24}}>Company Facts</h2>
            <div style={{borderRadius:16,background:G.surface,border:`1px solid ${G.border}`,overflow:"hidden",marginBottom:24}}>
              {FACTS.map(([key,val],i)=>(
                <div key={i} style={{display:"flex",justifyContent:"space-between",padding:"12px 20px",borderBottom:i<FACTS.length-1?`1px solid ${G.border}`:"none"}}>
                  <span style={{color:G.muted,fontSize:13}}>{key}</span>
                  <span style={{color:G.text,fontSize:13,fontWeight:600}}>{val}</span>
                </div>
              ))}
            </div>
            <div style={{padding:"20px",borderRadius:14,background:G.surface,border:`1px solid ${G.border}`}}>
              <p style={{color:G.dim,fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:8}}>Company boilerplate</p>
              <p style={{color:G.muted,fontSize:"0.8rem",lineHeight:1.7}}>{BOILERPLATE}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Press contacts */}
      <section style={{padding:"0 24px 96px",background:G.surface,borderTop:`1px solid ${G.border}`,paddingTop:"72px"}}>
        <div style={{maxWidth:800,margin:"0 auto"}}>
          <motion.div {...fadeUp} style={{marginBottom:36}}>
            <h2 style={{fontFamily:"var(--font-playfair),Georgia,serif",fontWeight:700,fontSize:"clamp(1.8rem,3vw,2.5rem)",color:G.text}}>Press contacts.</h2>
          </motion.div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:16}}>
            {CONTACTS.map((c,i)=>(
              <motion.div key={i} {...fadeUp} transition={{delay:i*0.1}} style={{padding:"24px",borderRadius:14,background:G.bg,border:`1px solid ${G.border}`}}>
                <p style={{fontSize:11,fontWeight:700,textTransform:"uppercase",color:G.dim,letterSpacing:"0.05em",marginBottom:8}}>{c.role}</p>
                <p style={{fontWeight:600,color:G.text,marginBottom:6}}>{c.name}</p>
                <a href={`mailto:${c.email}`} style={{display:"flex",alignItems:"center",gap:6,color:G.gold,fontSize:13,textDecoration:"none"}}>
                  <Mail size={12}/> {c.email}
                </a>
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeUp} style={{marginTop:32,padding:"20px 24px",borderRadius:14,background:G.bg,border:`1px solid ${G.border}`,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:12}}>
            <p style={{color:G.muted,fontSize:13}}>For breaking news coverage, our comms team aims to respond within 2 hours.</p>
            <Link href="/newsroom" style={{display:"inline-flex",alignItems:"center",gap:6,color:G.gold,textDecoration:"none",fontWeight:600,fontSize:13}}>
              Visit Newsroom <ExternalLink size={12}/>
            </Link>
          </motion.div>
        </div>
      </section>
    </SharedLayout>
  );
}


