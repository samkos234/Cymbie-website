"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SharedLayout from "@/components/SharedLayout";
import { ArrowRight, CheckCircle2, X, Star } from "lucide-react";

const G = { bg:"#0C0B09",surface:"#151310",surface2:"#1C1914",border:"#2A2520",gold:"#C8A96E",goldMuted:"rgba(200,169,110,0.10)",text:"#F2EDE4",muted:"#8A8070",dim:"#4A4540" };
const fadeUp = { initial:{opacity:0,y:32}, whileInView:{opacity:1,y:0}, viewport:{once:true}, transition:{duration:0.75,ease:"easeOut"} } as const;

const PLANS = [
  {
    id:"free", name:"Free", mo:0, yr:0, color:"#8A8070", accent:false,
    tagline:"Start your journey",
    desc:"Everything you need to discover if Cymbie is right for you. No credit card required.",
    features:[
      "5 curated matches daily","Photo verification badge","Full messaging (unlimited)","Compatibility score","1 Super Like per week","Community access",
    ],
    locked:["See who liked you","Advanced filters","Multiple photos per answer","Read receipts","Global discovery","Incognito Mode","AI Conversation Starters","Background check badge"],
  },
  {
    id:"warm", name:"Warm", mo:24, yr:192, color:"#C8A96E", accent:true,
    tagline:"The full experience",
    desc:"For serious daters ready to find someone genuinely compatible, faster.",
    features:[
      "7 curated matches daily","See who liked you — instantly","Advanced compatibility filters","5 Super Likes per day","Weekly Profile Boost","Read receipts","Government ID verification badge","Multiple photos per answer",
    ],
    locked:["Global discovery (60+ countries)","Incognito Mode","AI Conversation Starters","Daily Profile Boost","Advanced profile analytics","Background check badge","Priority support"],
  },
  {
    id:"ardent", name:"✦ Ardent", mo:48, yr:384, color:"#E8C87E", accent:false,
    tagline:"No compromises",
    desc:"The complete Cymbie experience — designed for people who take this seriously.",
    features:[
      "10 curated matches daily","Global discovery — 60+ countries","Incognito Mode","AI Conversation Starters","Daily Profile Boost","Advanced profile analytics","Optional background check badge","Priority 24/7 support","Everything in Warm",
    ],
    locked:[],
  },
];

const COMPARE = [
  { feat:"Daily curated matches", free:"5/day", warm:"7/day", ardent:"10/day" },
  { feat:"See who liked you", free:false, warm:true, ardent:true },
  { feat:"Advanced filters", free:false, warm:true, ardent:true },
  { feat:"Super Likes per day", free:"1", warm:"5", ardent:"Unlimited" },
  { feat:"Profile Boost", free:false, warm:"Weekly", ardent:"Daily" },
  { feat:"Read receipts", free:false, warm:true, ardent:true },
  { feat:"Multiple photos per answer", free:false, warm:true, ardent:true },
  { feat:"Global discovery (60+ countries)", free:false, warm:false, ardent:true },
  { feat:"Incognito Mode", free:false, warm:false, ardent:true },
  { feat:"AI Conversation Starters", free:false, warm:false, ardent:true },
  { feat:"Advanced profile analytics", free:false, warm:false, ardent:true },
  { feat:"Background check badge (optional)", free:false, warm:false, ardent:true },
  { feat:"Government ID verification badge", free:false, warm:true, ardent:true },
  { feat:"Priority customer support", free:false, warm:false, ardent:true },
  { feat:"Photo verification badge", free:true, warm:true, ardent:true },
  { feat:"Full messaging", free:true, warm:true, ardent:true },
  { feat:"Compatibility score", free:true, warm:true, ardent:true },
];

function Cell({ val }: { val: boolean | string }) {
  if (val === true) return <CheckCircle2 size={18} style={{color:"#72E89C",margin:"0 auto"}} />;
  if (val === false) return <X size={16} style={{color:"#3A3530",margin:"0 auto"}} />;
  return <span style={{color:G.gold,fontWeight:700,fontSize:"0.82rem"}}>{val}</span>;
}

const REVIEWS = [
  { body:"Worth every penny. Found my partner in 6 weeks. The algorithm is scarily accurate.", name:"Priya R.", plan:"Ardent", img:"photo-1522075469751-3a6694fb2f61", stars:5 },
  { body:"Warm is the sweet spot. Seeing who liked me changed everything — no more second-guessing.", name:"Marcus T.", plan:"Warm", img:"photo-1519085360753-af0119f7cbe7", stars:5 },
  { body:"I travel constantly for work. Global discovery on Ardent means I'm never 'between cities' anymore.", name:"Sophie K.", plan:"Ardent", img:"photo-1542103749-8ef59b94f47e", stars:5 },
];

export default function PremiumPage() {
  const [annual, setAnnual] = useState(true);

  return (
    <SharedLayout>
      {/* HERO */}
      <section style={{position:"relative",overflow:"hidden",background:G.bg,paddingTop:100}}>
        <div style={{position:"absolute",inset:0}}>
          <Image src="https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=1920&q=90&auto=format&fit=crop&crop=center"
            alt="Couple golden hour" fill sizes="100vw" style={{objectFit:"cover",objectPosition:"center 35%",opacity:0.25}}/>
          <div style={{position:"absolute",inset:0,background:"linear-gradient(0deg,rgba(12,11,9,1) 0%,rgba(12,11,9,0.6) 100%)"}}/>
        </div>
        <div className="cy-container" style={{position:"relative",zIndex:2,padding:"clamp(3rem,6vw,5rem) 24px clamp(2rem,4vw,3rem)",textAlign:"center"}}>
          <motion.div initial={{opacity:0,y:32}} animate={{opacity:1,y:0}} transition={{duration:0.8}}>
            <span className="cy-badge" style={{marginBottom:24,display:"inline-flex"}}>Cymbie Premium</span>
            <h1 className="cy-h1" style={{color:G.text,marginBottom:16}}>
              Upgrade your<br/><span className="cy-gradient-text">love life.</span>
            </h1>
            <p className="cy-body-lg" style={{color:G.muted,maxWidth:480,margin:"0 auto 36px"}}>
              Cymbie Free is powerful. Premium unlocks the tools that get you to your first date — and your last.
            </p>

            {/* Billing toggle */}
            <div style={{display:"inline-flex",alignItems:"center",gap:12,background:G.surface,border:`1px solid ${G.border}`,borderRadius:100,padding:"6px 8px"}}>
              <button onClick={()=>setAnnual(false)} style={{padding:"8px 20px",borderRadius:100,background:!annual?G.goldMuted:"transparent",border:`1px solid ${!annual?"rgba(200,169,110,0.4)":"transparent"}`,color:!annual?G.gold:G.muted,fontWeight:600,fontSize:"0.875rem",cursor:"pointer",fontFamily:"inherit",transition:"all 0.2s",whiteSpace:"nowrap"}}>
                Monthly
              </button>
              <button onClick={()=>setAnnual(true)} style={{padding:"8px 20px",borderRadius:100,background:annual?G.goldMuted:"transparent",border:`1px solid ${annual?"rgba(200,169,110,0.4)":"transparent"}`,color:annual?G.gold:G.muted,fontWeight:600,fontSize:"0.875rem",cursor:"pointer",fontFamily:"inherit",transition:"all 0.2s",display:"flex",alignItems:"center",gap:8,whiteSpace:"nowrap"}}>
                Annual
                <span style={{fontSize:"0.7rem",fontWeight:700,background:"#72E89C22",color:"#72E89C",padding:"2px 8px",borderRadius:100,border:"1px solid #72E89C44"}}>−33%</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PLAN CARDS */}
      <section style={{background:G.bg,paddingBottom:"clamp(3rem,5vw,5rem)"}}>
        <div className="cy-container" style={{padding:"0 24px"}}>
          <div className="cy-grid-3" style={{gap:"1rem"}}>
            {PLANS.map((plan,i)=>(
              <motion.div key={plan.id} {...fadeUp} transition={{delay:i*0.1}}
                style={{borderRadius:24,border:`1px solid ${plan.accent?"rgba(200,169,110,0.45)":G.border}`,background:plan.accent?"linear-gradient(160deg,#1A1710 0%,#121008 100%)":G.surface,padding:"clamp(20px,3vw,32px)",position:"relative",overflow:"hidden",display:"flex",flexDirection:"column"}}
              >
                {plan.accent&&<div style={{position:"absolute",top:0,left:"15%",right:"15%",height:1,background:"linear-gradient(90deg,transparent,rgba(200,169,110,0.7),transparent)"}}/>}
                {plan.accent&&(
                  <div style={{position:"absolute",top:18,right:18}}>
                    <span className="cy-badge" style={{fontSize:"0.65rem"}}>Most Popular</span>
                  </div>
                )}

                <div style={{marginBottom:20}}>
                  <div style={{fontSize:"0.75rem",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em",color:G.muted,marginBottom:8}}>{plan.name}</div>
                  <div style={{display:"flex",alignItems:"baseline",gap:6,marginBottom:6}}>
                    <span style={{fontFamily:"var(--font-playfair),Georgia,serif",fontWeight:700,fontSize:"clamp(2rem,4vw,2.8rem)",color:plan.accent?G.gold:G.text}}>
                      {plan.mo===0?"Free":`$${annual?Math.round(plan.yr/12):plan.mo}`}
                    </span>
                    {plan.mo>0&&<span style={{color:G.dim,fontSize:"0.85rem"}}>/mo</span>}
                  </div>
                  {annual&&plan.mo>0&&(
                    <div style={{fontSize:"0.78rem",color:"#72E89C",marginBottom:6}}>Billed ${plan.yr}/year · Save ${plan.mo*12-plan.yr}/yr</div>
                  )}
                  <div style={{fontSize:"0.78rem",color:G.muted,fontWeight:600,marginBottom:8}}>{plan.tagline}</div>
                  <p style={{fontSize:"0.82rem",color:G.dim,lineHeight:1.7}}>{plan.desc}</p>
                </div>

                <Link href={plan.mo===0?"/download":"/download"} className={plan.accent?"cy-btn-primary":"cy-btn-outline"}
                  style={{display:"flex",justifyContent:"center",marginBottom:24,fontSize:"0.875rem"}}>
                  {plan.mo===0?"Download Free":"Get "+plan.name.replace("✦ ","")} <ArrowRight size={14}/>
                </Link>

                <div style={{flex:1,display:"flex",flexDirection:"column",gap:8}}>
                  {plan.features.map((f,j)=>(
                    <div key={j} style={{display:"flex",gap:10,alignItems:"flex-start"}}>
                      <CheckCircle2 size={14} style={{color:"#72E89C",flexShrink:0,marginTop:3}}/>
                      <span style={{color:G.muted,fontSize:"0.82rem",lineHeight:1.6}}>{f}</span>
                    </div>
                  ))}
                  {plan.locked.slice(0,3).map((f,j)=>(
                    <div key={j} style={{display:"flex",gap:10,alignItems:"flex-start",opacity:0.35}}>
                      <X size={14} style={{color:G.dim,flexShrink:0,marginTop:3}}/>
                      <span style={{color:G.dim,fontSize:"0.82rem",lineHeight:1.6}}>{f}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FULL COMPARISON TABLE */}
      <section className="cy-section" style={{background:G.surface,borderTop:`1px solid ${G.border}`}}>
        <div className="cy-container">
          <motion.div {...fadeUp} style={{textAlign:"center",marginBottom:48}}>
            <h2 className="cy-h2" style={{color:G.text,marginBottom:12}}>Full feature comparison.</h2>
            <p className="cy-body" style={{color:G.muted}}>See exactly what you get at every tier.</p>
          </motion.div>

          <div style={{overflowX:"auto",borderRadius:20,border:`1px solid ${G.border}`}}>
            <table style={{width:"100%",borderCollapse:"collapse",minWidth:480}}>
              <thead>
                <tr style={{borderBottom:`1px solid ${G.border}`}}>
                  <th style={{padding:"16px 20px",textAlign:"left",color:G.dim,fontSize:"0.78rem",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em",width:"40%"}}>Feature</th>
                  {PLANS.map(p=>(
                    <th key={p.id} style={{padding:"16px 12px",textAlign:"center",color:p.accent?G.gold:G.muted,fontSize:"0.82rem",fontWeight:700,width:"20%"}}>{p.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARE.map((row,i)=>(
                  <tr key={i} style={{borderBottom:`1px solid ${G.border}`,background:i%2===0?"transparent":G.surface2}}>
                    <td style={{padding:"14px 20px",color:G.muted,fontSize:"0.875rem"}}>{row.feat}</td>
                    {([row.free,row.warm,row.ardent] as (boolean|string)[]).map((val,j)=>(
                      <td key={j} style={{padding:"14px 12px",textAlign:"center"}}><Cell val={val}/></td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* PREMIUM REVIEWS with photos */}
      <section className="cy-section" style={{background:G.bg}}>
        <div className="cy-container">
          <motion.div {...fadeUp} style={{textAlign:"center",marginBottom:48}}>
            <h2 className="cy-h2" style={{color:G.text}}>What premium members say.</h2>
          </motion.div>
          <div className="cy-grid-3" style={{gap:"1.25rem"}}>
            {REVIEWS.map((r,i)=>(
              <motion.div key={i} {...fadeUp} transition={{delay:i*0.1}} className="cy-card" style={{padding:"clamp(18px,3vw,28px)"}}>
                <div style={{display:"flex",gap:2,marginBottom:12}}>
                  {[...Array(r.stars)].map((_,j)=><Star key={j} size={14} fill={G.gold} color={G.gold}/>)}
                </div>
                <p style={{color:G.text,fontSize:"0.9rem",lineHeight:1.8,marginBottom:20,fontStyle:"italic"}}>"{r.body}"</p>
                <div style={{display:"flex",gap:12,alignItems:"center"}}>
                  <div style={{width:44,height:44,borderRadius:"50%",overflow:"hidden",position:"relative",flexShrink:0}}>
                    <Image src={`https://images.unsplash.com/${r.img}?w=90&q=85&auto=format&fit=crop&crop=faces`} alt={r.name} fill style={{objectFit:"cover"}} sizes="44px"/>
                  </div>
                  <div>
                    <div style={{fontWeight:700,color:G.text,fontSize:"0.875rem"}}>{r.name}</div>
                    <div style={{color:G.gold,fontSize:"0.75rem",fontWeight:600}}>{r.plan} member</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO + FINAL CTA */}
      <section style={{position:"relative",overflow:"hidden",minHeight:320,display:"flex",alignItems:"center"}}>
        <div style={{position:"absolute",inset:0}}>
          <Image src="https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=1920&q=90&auto=format&fit=crop&crop=center"
            alt="Couple on a date laughing" fill style={{objectFit:"cover",objectPosition:"center 40%"}} sizes="100vw"/>
          <div style={{position:"absolute",inset:0,background:"rgba(12,11,9,0.87)"}}/>
        </div>
        <div className="cy-container" style={{position:"relative",zIndex:2,padding:"clamp(3rem,6vw,5rem) 24px",textAlign:"center"}}>
          <motion.div {...fadeUp} style={{maxWidth:520,margin:"0 auto"}}>
            <h2 className="cy-h2" style={{color:G.text,marginBottom:16}}>Start for free. Upgrade when you're ready.</h2>
            <p className="cy-body" style={{color:G.muted,marginBottom:32}}>No pressure. Cymbie Free is genuinely powerful — upgrade to Warm or Ardent only when you want more.</p>
            <div style={{display:"flex",justifyContent:"center",gap:12,flexWrap:"wrap"}}>
              <Link href="/download" className="cy-btn-primary" style={{fontSize:"1rem",padding:"0.95rem 2rem"}}>
                Download Free <ArrowRight size={16}/>
              </Link>
              <Link href="/how-it-works" className="cy-btn-outline">How It Works</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </SharedLayout>
  );
}


