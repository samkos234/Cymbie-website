"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import SharedLayout from "@/components/SharedLayout";
import { ArrowRight, Heart, Star, Zap, Eye, Shield, MessageCircle, Globe, BarChart2, Fingerprint, Lock, Bell } from "lucide-react";

const G = { bg:"#0C0B09",surface:"#151310",surface2:"#1C1914",border:"#2A2520",gold:"#C8A96E",goldMuted:"rgba(200,169,110,0.10)",text:"#F2EDE4",muted:"#8A8070",dim:"#4A4540" };
const fadeUp = { initial:{opacity:0,y:28}, whileInView:{opacity:1,y:0}, viewport:{once:true}, transition:{duration:0.7,ease:"easeOut"} } as const;

const CATEGORIES = [
  {
    label:"Matching",
    features:[
      { icon:<Heart size={20}/>, name:"Intentional Matching Algorithm", free:true, warm:true, ardent:true, desc:"Our 7-signal compatibility engine. Daily curated selection of genuinely compatible people. No infinite scroll." },
      { icon:<Star size={20}/>, name:"Super Likes", free:"1/week", warm:"5/day", ardent:"Unlimited", desc:"Signal strong interest to someone before the match is even made. Super Liked profiles see you first." },
      { icon:<Eye size={20}/>, name:"See Who Liked You", free:false, warm:true, ardent:true, desc:"Know who's already interested. Reach out first with full confidence." },
      { icon:<Globe size={20}/>, name:"Global Discovery", free:"Local only", warm:"Regional", ardent:"60+ countries", desc:"Find people beyond your city. Search globally or set specific country preferences." },
      { icon:<BarChart2 size={20}/>, name:"Advanced Compatibility Filters", free:false, warm:true, ardent:true, desc:"Filter by values, relationship intentions, lifestyle, attachment style and more — not just age and distance." },
    ],
  },
  {
    label:"Visibility",
    features:[
      { icon:<Zap size={20}/>, name:"Profile Boost", free:false, warm:"1/week", ardent:"Daily", desc:"Be shown to 3× more compatible people during your peak hours. You control when you're boosted." },
      { icon:<Lock size={20}/>, name:"Incognito Mode", free:false, warm:false, ardent:true, desc:"Browse fully invisibly. You only appear to people whose profiles you have already liked." },
      { icon:<BarChart2 size={20}/>, name:"Profile Analytics", free:false, warm:true, ardent:"Advanced", desc:"See who viewed your profile, which photos perform best, and when you receive the most engagement." },
    ],
  },
  {
    label:"Connection",
    features:[
      { icon:<MessageCircle size={20}/>, name:"In-App Messaging", free:true, warm:true, ardent:true, desc:"Message any of your matches freely, with read receipts and typing indicators." },
      { icon:<MessageCircle size={20}/>, name:"AI Conversation Starters", free:false, warm:false, ardent:true, desc:"Our AI reads their full profile and crafts a personal, contextually relevant opening message that gets replies." },
      { icon:<Bell size={20}/>, name:"Read Receipts", free:false, warm:true, ardent:true, desc:"Know when your messages have been read, so you can follow up with confidence." },
    ],
  },
  {
    label:"Trust & Safety",
    features:[
      { icon:<Shield size={20}/>, name:"Photo Verification Badge", free:true, warm:true, ardent:true, desc:"All members complete photo verification. Verified profiles display a visible trust badge." },
      { icon:<Fingerprint size={20}/>, name:"Government ID Verification", free:false, warm:true, ardent:true, desc:"Full ID verification for the highest level of trust. Your ID is never stored by Cymbie." },
      { icon:<Shield size={20}/>, name:"Background Check Badge", free:false, warm:false, ardent:"Optional", desc:"Opt into a voluntary background check through our partner. Cleared members earn a premium trust badge." },
    ],
  },
];

export default function FeaturesPage() {
  const [activeCategory, setActiveCategory] = useState("Matching");
  const [hoveredFeature, setHoveredFeature] = useState<number|null>(null);

  const current = CATEGORIES.find(c => c.label === activeCategory)!;

  const formatVal = (val: boolean | string) => {
    if(val === true) return { text:"✓ Included", color:"#4ade80" };
    if(val === false) return { text:"✗ Not included", color:"#4A4540" };
    return { text:val as string, color:"#C8A96E" };
  };

  return (
    <SharedLayout>
      {/* Hero */}
      <section style={{padding:"96px 24px 72px",background:G.bg,textAlign:"center",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse 80% 60% at 50% -10%,rgba(200,169,110,0.09) 0%,transparent 60%)",pointerEvents:"none"}}/>
        <motion.div {...fadeUp} style={{maxWidth:640,margin:"0 auto",position:"relative"}}>
          <p style={{fontSize:12,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.1em",color:G.gold,marginBottom:20}}>All Features</p>
          <h1 style={{fontFamily:"var(--font-playfair),Georgia,serif",fontWeight:700,fontSize:"clamp(2.5rem,5vw,4.5rem)",color:G.text,lineHeight:1.1,marginBottom:20}}>
            Every feature, explained.
          </h1>
          <p style={{color:G.muted,fontSize:"clamp(1rem,1.4vw,1.1rem)",lineHeight:1.85,marginBottom:36}}>
            Built for depth, not endless engagement. Here is every tool Cymbie gives you — and exactly which plan it's on.
          </p>
          <Link href="/premium" style={{display:"inline-flex",alignItems:"center",gap:8,padding:"14px 28px",borderRadius:100,background:"linear-gradient(135deg,#A8854A,#C8A96E)",color:"#0C0B09",fontWeight:700,fontSize:14,textDecoration:"none"}}>
            Compare Plans <ArrowRight size={14}/>
          </Link>
        </motion.div>
      </section>

      {/* Category tabs */}
      <section style={{padding:"0 24px 80px",background:G.bg}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <div style={{display:"flex",gap:8,marginBottom:40,flexWrap:"wrap",justifyContent:"center"}}>
            {CATEGORIES.map(cat=>(
              <button key={cat.label} onClick={()=>setActiveCategory(cat.label)}
                style={{padding:"10px 22px",borderRadius:100,border:`1px solid ${activeCategory===cat.label?"rgba(200,169,110,0.5)":G.border}`,background:activeCategory===cat.label?G.goldMuted:"transparent",color:activeCategory===cat.label?G.gold:G.muted,fontWeight:600,fontSize:14,cursor:"pointer",fontFamily:"inherit",transition:"all 0.2s"}}
              >{cat.label}</button>
            ))}
          </div>

          {/* Feature comparison table */}
          <div style={{borderRadius:20,overflow:"hidden",border:`1px solid ${G.border}`}}>
            {/* Table header */}
            <div style={{display:"grid",gridTemplateColumns:"2fr 1fr 1fr 1fr",background:G.surface,padding:"16px 24px",borderBottom:`1px solid ${G.border}`}}>
              {[{l:"Feature",a:"left"},{l:"Free",a:"center"},{l:"Warm",a:"center"},{l:"✦ Ardent",a:"center"}].map(({l,a},i)=>(
                <div key={l} style={{fontSize:13,fontWeight:700,color:i===3?G.gold:i===0?G.muted:G.text,textAlign:a as any}}>{l}</div>
              ))}
            </div>
            {/* Feature rows */}
            {current.features.map((f,i)=>(
              <motion.div key={i} initial={{opacity:0}} animate={{opacity:1}} transition={{delay:i*0.06}}
                onMouseEnter={()=>setHoveredFeature(i)} onMouseLeave={()=>setHoveredFeature(null)}
                style={{display:"grid",gridTemplateColumns:"2fr 1fr 1fr 1fr",padding:"0",borderBottom:i<current.features.length-1?`1px solid ${G.border}`:"none",background:hoveredFeature===i?G.surface2:i%2===0?G.bg:G.surface,transition:"background 0.15s"}}
              >
                {/* Feature info */}
                <div style={{display:"flex",alignItems:"flex-start",gap:14,padding:"20px 24px"}}>
                  <div style={{width:36,height:36,borderRadius:10,background:G.goldMuted,display:"flex",alignItems:"center",justifyContent:"center",color:G.gold,flexShrink:0}}>{f.icon}</div>
                  <div>
                    <div style={{fontWeight:700,fontSize:"0.875rem",color:G.text,marginBottom:4}}>{f.name}</div>
                    <div style={{fontSize:"0.78rem",color:G.dim,lineHeight:1.6}}>{f.desc}</div>
                  </div>
                </div>
                {/* Plan availability */}
                {[f.free,f.warm,f.ardent].map((val,j)=>{
                  const {text,color} = formatVal(val);
                  return (
                    <div key={j} style={{display:"flex",alignItems:"center",justifyContent:"center",padding:"20px 8px"}}>
                      <span style={{fontSize:12,fontWeight:600,color,textAlign:"center"}}>{text}</span>
                    </div>
                  );
                })}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{padding:"72px 24px 96px",background:G.surface,borderTop:`1px solid ${G.border}`,textAlign:"center"}}>
        <motion.div {...fadeUp} style={{maxWidth:520,margin:"0 auto"}}>
          <h2 style={{fontFamily:"var(--font-playfair),Georgia,serif",fontWeight:700,fontSize:"clamp(1.8rem,3vw,2.5rem)",color:G.text,marginBottom:16}}>
            Start free. Upgrade when ready.
          </h2>
          <p style={{color:G.muted,lineHeight:1.8,marginBottom:28}}>
            Every feature you need to find a meaningful connection is available on the free plan. Premium unlocks the experience when you want more.
          </p>
          <div style={{display:"flex",justifyContent:"center",gap:12,flexWrap:"wrap"}}>
            <Link href="/download" style={{display:"inline-flex",alignItems:"center",gap:6,padding:"13px 24px",borderRadius:100,background:"linear-gradient(135deg,#A8854A,#C8A96E)",color:"#0C0B09",fontWeight:700,fontSize:14,textDecoration:"none"}}>
              Download Free <ArrowRight size={14}/>
            </Link>
            <Link href="/premium" style={{display:"inline-flex",alignItems:"center",gap:6,padding:"13px 22px",borderRadius:100,border:`1px solid ${G.border}`,color:G.muted,textDecoration:"none",fontSize:14}}>
              View Premium Plans
            </Link>
          </div>
        </motion.div>
      </section>
    </SharedLayout>
  );
}


