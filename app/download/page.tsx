"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SharedLayout from "@/components/SharedLayout";
import { ArrowRight, Star, Shield, CheckCircle2, Heart, Zap, Users } from "lucide-react";

const G = { bg:"#0C0B09",surface:"#151310",surface2:"#1C1914",border:"#2A2520",gold:"#C8A96E",goldMuted:"rgba(200,169,110,0.10)",text:"#F2EDE4",muted:"#8A8070",dim:"#4A4540" };
const fadeUp = { initial:{opacity:0,y:32}, whileInView:{opacity:1,y:0}, viewport:{once:true}, transition:{duration:0.75,ease:"easeOut"} } as const;

const STORES = [
  {
    label:"App Store",
    sub:"iOS 16+ · iPhone & iPad",
    rating:"4.8",
    reviews:"28,000+",
    badge:"/apple-badge.svg",
    href:"https://apps.apple.com",
    icon:(
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
    ),
  },
  {
    label:"Google Play",
    sub:"Android 10+ · All devices",
    rating:"4.7",
    reviews:"19,000+",
    badge:"/google-badge.svg",
    href:"https://play.google.com",
    icon:(
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M3.18 23.76c.35.19.74.24 1.12.14l.1-.06 11.34-6.55-2.46-2.46-10.1 8.93zm-1.1-20.04C2.02 4.06 2 4.39 2 4.73v14.54c0 .34.02.67.08.97l10.51-10.51L2.08 3.72zM20.12 9.7l-2.56-1.48-2.77 2.77 2.77 2.77 2.58-1.49c.74-.43.74-1.14-.02-1.57zM4.3.14L4.18.07C3.8-.03 3.39.02 3.04.21l10.12 10.12L15.62 7.8 4.3.14z"/></svg>
    ),
  },
];

const FEATURES_HIGHLIGHT = [
  { icon:<Heart size={18}/>, label:"47,000+ relationships" },
  { icon:<Shield size={18}/>, label:"ID verified members" },
  { icon:<Star size={18}/>, label:"4.8/5 average rating" },
  { icon:<Users size={18}/>, label:"2.4M+ members" },
  { icon:<Zap size={18}/>, label:"60+ countries" },
];

export default function DownloadPage() {
  return (
    <SharedLayout>
      {/* HERO — split layout */}
      <section style={{background:G.bg,minHeight:"100dvh",display:"flex",alignItems:"center",overflow:"hidden",position:"relative",paddingTop:90}}>
        {/* Background glow */}
        <div style={{position:"absolute",top:"20%",right:"-10%",width:"60%",height:"60%",background:"radial-gradient(ellipse,rgba(200,169,110,0.06) 0%,transparent 70%)",pointerEvents:"none"}}/>

        <div className="cy-container" style={{padding:"clamp(2rem,4vw,4rem) 24px"}}>
          <div className="cy-grid-2" style={{gap:"clamp(2rem,5vw,5rem)",alignItems:"center"}}>

            {/* LEFT — Text + CTAs */}
            <div>
              <motion.div initial={{opacity:0,y:36}} animate={{opacity:1,y:0}} transition={{duration:0.8}}>
                <span className="cy-badge" style={{marginBottom:24,display:"inline-flex"}}>Download Cymbie</span>
                <h1 className="cy-h1" style={{color:G.text,marginBottom:20}}>
                  Find the one.<br/>
                  <span className="cy-gradient-text">Start for free.</span>
                </h1>
                <p className="cy-body-lg" style={{color:G.muted,maxWidth:460,marginBottom:36}}>
                  2.4 million intentional daters. A compatibility algorithm built on real relationship science. And a business model that only succeeds when you do.
                </p>

                {/* App store buttons */}
                <div style={{display:"flex",flexDirection:"column",gap:12,marginBottom:36,maxWidth:340}}>
                  {STORES.map((store,i)=>(
                    <motion.a key={i} href={store.href} target="_blank" rel="noopener noreferrer"
                      initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}} transition={{delay:0.3+i*0.1}}
                      style={{display:"flex",gap:16,alignItems:"center",padding:"16px 22px",borderRadius:16,background:G.surface,border:`1px solid ${G.border}`,textDecoration:"none",transition:"border-color 0.2s,transform 0.2s,box-shadow 0.2s"}}
                      onMouseEnter={e=>{const el=e.currentTarget as HTMLElement;el.style.borderColor="rgba(200,169,110,0.4)";el.style.transform="translateY(-2px)";el.style.boxShadow="0 12px 36px rgba(0,0,0,0.4)";}}
                      onMouseLeave={e=>{const el=e.currentTarget as HTMLElement;el.style.borderColor=G.border;el.style.transform="translateY(0)";el.style.boxShadow="none";}}
                    >
                      <div style={{color:G.text,flexShrink:0}}>{store.icon}</div>
                      <div style={{flex:1}}>
                        <div style={{fontWeight:700,color:G.text,fontSize:"0.95rem",marginBottom:2}}>{store.label}</div>
                        <div style={{color:G.dim,fontSize:"0.75rem"}}>{store.sub}</div>
                      </div>
                      <div style={{textAlign:"right",flexShrink:0}}>
                        <div style={{display:"flex",gap:2,justifyContent:"flex-end",marginBottom:2}}>
                          {[...Array(5)].map((_,j)=><span key={j} style={{color:G.gold,fontSize:"10px"}}>★</span>)}
                        </div>
                        <div style={{color:G.dim,fontSize:"0.72rem"}}>{store.rating} · {store.reviews} reviews</div>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Trust badges strip */}
                <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.6}}
                  style={{display:"flex",gap:16,flexWrap:"wrap"}}>
                  {FEATURES_HIGHLIGHT.map((f,i)=>(
                    <div key={i} style={{display:"flex",gap:6,alignItems:"center",color:G.muted,fontSize:"0.8rem"}}>
                      <span style={{color:G.gold}}>{f.icon}</span>{f.label}
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </div>

            {/* RIGHT — Phone mockup with real screenshots */}
            <div style={{position:"relative",display:"flex",justifyContent:"center",alignItems:"center"}}>
              <motion.div initial={{opacity:0,y:40,scale:0.95}} animate={{opacity:1,y:0,scale:1}} transition={{duration:0.9,delay:0.2,ease:"easeOut"}}>
                {/* Phone frame */}
                <div style={{position:"relative",width:"clamp(240px,35vw,320px)",height:"clamp(480px,60vw,600px)"}}>
                  {/* Glow behind phone */}
                  <div className="animate-pulse-gold" style={{position:"absolute",inset:-20,borderRadius:52,background:"radial-gradient(ellipse,rgba(200,169,110,0.12) 0%,transparent 70%)"}}/>
                  {/* Phone shell */}
                  <div style={{position:"absolute",inset:0,borderRadius:42,background:"linear-gradient(145deg,#252018,#1A1812)",border:"1px solid rgba(200,169,110,0.2)",overflow:"hidden",boxShadow:"0 40px 80px rgba(0,0,0,0.7),inset 0 1px 0 rgba(255,255,255,0.05)"}}>
                    {/* Status bar */}
                    <div style={{height:44,padding:"12px 20px 0",display:"flex",justifyContent:"space-between",alignItems:"center",position:"relative",zIndex:2,background:"rgba(12,11,9,0.5)"}}>
                      <span style={{color:G.text,fontSize:"0.7rem",fontWeight:600}}>9:41</span>
                      <div style={{width:80,height:20,borderRadius:10,background:"#0C0B09",display:"flex",alignItems:"center",justifyContent:"center"}}><div style={{width:8,height:8,borderRadius:"50%",background:"#252018"}}/></div>
                      <div style={{display:"flex",gap:4,alignItems:"center"}}><span style={{color:G.text,fontSize:"0.55rem"}}>●●●●</span></div>
                    </div>
                    {/* Screen content — photo of someone's profile */}
                    <Image src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&q=90&auto=format&fit=crop&crop=faces" alt="Cymbie app profile view" fill style={{objectFit:"cover",objectPosition:"center 15%"}} sizes="320px"/>
                    {/* Profile overlay */}
                    <div style={{position:"absolute",bottom:0,left:0,right:0,padding:"20px 16px",background:"linear-gradient(0deg,rgba(12,11,9,0.97) 0%,rgba(12,11,9,0.7) 60%,transparent 100%)"}}>
                      <div style={{marginBottom:10}}>
                        <div style={{fontFamily:"var(--font-playfair),Georgia,serif",fontWeight:700,color:G.text,fontSize:"1.2rem"}}>Amara, 27</div>
                        <div style={{color:G.muted,fontSize:"0.75rem"}}>Lagos · <span style={{color:G.gold}}>94% Compatible</span></div>
                      </div>
                      <div style={{background:"rgba(200,169,110,0.08)",borderRadius:10,padding:"10px 12px",marginBottom:12}}>
                        <p style={{color:G.muted,fontSize:"0.7rem",lineHeight:1.6,fontStyle:"italic"}}>"Looking for something that's actually going somewhere."</p>
                      </div>
                      {/* Action buttons */}
                      <div style={{display:"flex",gap:8,justifyContent:"center"}}>
                        {["✕","💛","⭐"].map((icon,j)=>(
                          <div key={j} style={{width:48,height:48,borderRadius:"50%",background:j===1?"linear-gradient(135deg,#A8854A,#C8A96E)":"rgba(255,255,255,0.08)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:j===1?"1.1rem":"0.9rem",border:`1px solid ${j===1?"transparent":"rgba(255,255,255,0.1)"}`}}>
                            {icon}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating match notification */}
                <div className="animate-float" style={{position:"absolute",top:"10%",right:"-20%",background:"rgba(21,19,16,0.95)",backdropFilter:"blur(16px)",border:"1px solid rgba(200,169,110,0.3)",borderRadius:14,padding:"12px 16px",boxShadow:"0 16px 40px rgba(0,0,0,0.5)",zIndex:10,whiteSpace:"nowrap"}}>
                  <div style={{display:"flex",gap:8,alignItems:"center"}}>
                    <span style={{fontSize:"1.2rem"}}>💛</span>
                    <div>
                      <div style={{fontWeight:700,color:G.text,fontSize:"0.82rem"}}>It's a match!</div>
                      <div style={{color:G.gold,fontSize:"0.72rem"}}>97% Compatibility</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* PHOTO STRIP */}
      <div className="cy-strip-wrapper" style={{background:G.surface,borderTop:`1px solid ${G.border}`,borderBottom:`1px solid ${G.border}`,padding:"28px 0"}}>
        <div className="cy-strip-track">
          {["photo-1522075469751-3a6694fb2f61","photo-1504703395950-b89145a5425b","photo-1529156069898-49953e39b3ac",
            "photo-1506794778202-cad84cf45f1d","photo-1518199266791-5375a83190b7","photo-1531123897727-8f129e1688ce",
            "photo-1522075469751-3a6694fb2f61","photo-1504703395950-b89145a5425b","photo-1529156069898-49953e39b3ac",
            "photo-1506794778202-cad84cf45f1d","photo-1518199266791-5375a83190b7","photo-1531123897727-8f129e1688ce",
          ].map((p,i)=>(
            <div key={i} style={{width:170,height:220,borderRadius:14,overflow:"hidden",position:"relative",flexShrink:0}} className="cy-img-zoom">
              <Image src={`https://images.unsplash.com/${p}?w=340&q=85&auto=format&fit=crop&crop=faces`} alt="Cymbie member" fill style={{objectFit:"cover"}} sizes="170px"/>
            </div>
          ))}
        </div>
      </div>

      {/* WHAT YOU GET */}
      <section className="cy-section" style={{background:G.bg}}>
        <div className="cy-container">
          <motion.div {...fadeUp} style={{textAlign:"center",marginBottom:56}}>
            <h2 className="cy-h2" style={{color:G.text,marginBottom:12}}>Everything in the free plan.</h2>
            <p className="cy-body" style={{color:G.muted,maxWidth:460,margin:"0 auto"}}>Most dating apps lock their best features behind a paywall. We don't. Here's what free actually means on Cymbie.</p>
          </motion.div>
          <div className="cy-grid-3" style={{gap:"1rem"}}>
            {[
              { icon:"🎯", title:"5 curated matches daily", desc:"Hand-picked by our algorithm — not random. Every match is based on real compatibility across 7 dimensions." },
              { icon:"💬", title:"Full messaging, unlimited", desc:"Once you match, talk as much as you want. No message limits, no paid unlocks, no timers." },
              { icon:"✅", title:"Photo verification badge", desc:"Every free member gets a photo verification badge — you're real, and so are your matches." },
              { icon:"💯", title:"Compatibility score & breakdown", desc:"See exactly why you were matched — what you share, where you complement each other, where you might differ." },
              { icon:"⭐", title:"1 Super Like per week", desc:"One weekly Super Like to let someone know they really caught your attention. Use it wisely." },
              { icon:"🔒", title:"Secure, private, verified", desc:"Your data is never sold. Every match is photo-verified. Your safety is not a premium feature." },
            ].map((f,i)=>(
              <motion.div key={i} {...fadeUp} transition={{delay:i*0.08}} className="cy-card" style={{padding:"clamp(18px,3vw,26px)"}}>
                <div style={{fontSize:"2rem",marginBottom:14}}>{f.icon}</div>
                <h3 style={{fontWeight:700,color:G.text,fontSize:"0.95rem",marginBottom:8}}>{f.title}</h3>
                <p style={{color:G.muted,fontSize:"0.83rem",lineHeight:1.75}}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TWO PHOTOS + UPGRADE NUDGE */}
      <section className="cy-section" style={{background:G.surface,borderTop:`1px solid ${G.border}`}}>
        <div className="cy-container">
          <div className="cy-grid-2" style={{gap:"clamp(2rem,5vw,5rem)",alignItems:"center"}}>
            {/* Photos */}
            <div style={{position:"relative",height:"clamp(300px,45vw,480px)"}}>
              <motion.div {...fadeUp} style={{position:"absolute",top:0,left:0,right:"20%",bottom:"25%",borderRadius:24,overflow:"hidden"}} className="cy-img-zoom">
                <Image src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=700&q=90&auto=format&fit=crop" alt="Restaurant date" fill style={{objectFit:"cover"}} sizes="35vw"/>
              </motion.div>
              <motion.div {...fadeUp} transition={{delay:0.1}} className="animate-float-delay" style={{position:"absolute",bottom:0,right:0,width:"50%",height:"42%",borderRadius:20,overflow:"hidden",border:"3px solid #151310"}}>
                <Image src="https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?w=400&q=90&auto=format&fit=crop" alt="Couple walking" fill style={{objectFit:"cover"}} sizes="25vw"/>
              </motion.div>
            </div>
            {/* Text */}
            <motion.div {...fadeUp} transition={{delay:0.1}}>
              <span className="cy-badge" style={{marginBottom:20,display:"inline-flex"}}>Premium Plans</span>
              <h2 className="cy-h2" style={{color:G.text,marginBottom:16}}>Ready to move faster?</h2>
              <p className="cy-body" style={{color:G.muted,marginBottom:20}}>
                Warm and Ardent unlock seeing who already liked you, advanced filters, global discovery, and Incognito Mode — for people who want more signal and less noise.
              </p>
              <div style={{display:"flex",flexDirection:"column",gap:8,marginBottom:28}}>
                {["See who liked you — skip the guesswork","Advanced compatibility filters","Unlimited Super Likes on Ardent","Global discovery across 60+ countries"].map((f,i)=>(
                  <div key={i} style={{display:"flex",gap:10,alignItems:"center"}}>
                    <CheckCircle2 size={14} style={{color:G.gold,flexShrink:0}}/>
                    <span style={{color:G.muted,fontSize:"0.875rem"}}>{f}</span>
                  </div>
                ))}
              </div>
              <Link href="/premium" className="cy-btn-outline" style={{display:"inline-flex"}}>
                View All Plans <ArrowRight size={14}/>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </SharedLayout>
  );
}


