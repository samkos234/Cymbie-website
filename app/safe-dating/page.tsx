"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import SharedLayout from "@/components/SharedLayout";
import { ArrowRight, ChevronDown, Shield, Eye, MapPin, Phone, AlertTriangle } from "lucide-react";

const G = { bg:"#0C0B09",surface:"#151310",surface2:"#1C1914",border:"#2A2520",gold:"#C8A96E",goldMuted:"rgba(200,169,110,0.10)",text:"#F2EDE4",muted:"#8A8070",dim:"#4A4540" };
const fadeUp = { initial:{opacity:0,y:32}, whileInView:{opacity:1,y:0}, viewport:{once:true}, transition:{duration:0.75,ease:"easeOut"} } as const;

const CATEGORIES = [
  {
    icon:<Shield size={22}/>, label:"Before You Meet", color:"#72B4E8",
    img:"photo-1484399172022-72a90b12e3c1",
    tips:[
      { title:"Verify they are who they say they are", body:"Check their Cymbie verification badge. Warm and Ardent members can have full government ID verification. Always confirm photos look consistent across their profile and real-time video." },
      { title:"Keep conversations on Cymbie until you feel safe", body:"Cymbie's messaging system gives you a layer of protection. Avoid sharing personal contact information early. If someone pressures you to move off-platform immediately, treat it as a red flag." },
      { title:"Research them", body:"A first name and their city is enough to do a basic Google search. This is normal, expected, and smart. Many members on Ardent also have voluntary background check badges." },
      { title:"Tell someone where you're going", body:"Before any first meeting, tell a friend or family member who you're meeting, where, and when you expect to be back. Share the plan in writing — even a text message counts." },
    ],
  },
  {
    icon:<MapPin size={22}/>, label:"First Meeting", color:"#72E89C",
    img:"photo-1527015175922-36a306cf0e20",
    tips:[
      { title:"Always meet in a public place", body:"Coffee shops, restaurants, parks, and galleries are ideal. Avoid private homes, isolated locations, or any place where you feel difficult to leave. For a first meeting, public is non-negotiable." },
      { title:"Arrange your own transport", body:"Drive yourself, take public transport, or book a rideshare. Do not accept a lift from someone you've just met — this gives you full control over when you leave." },
      { title:"Keep your first meeting short", body:"A 1-hour coffee is a perfect first date. It's lower pressure, gives you a natural exit point, and leaves room for anticipation. You can always extend it if things are going well." },
      { title:"Trust your instincts absolutely", body:"If something feels off, it probably is. You don't owe anyone a second hour. It is always acceptable to say 'I need to go' and leave — no explanation required. Your comfort comes first." },
    ],
  },
  {
    icon:<Eye size={22}/>, label:"Red Flags", color:"#E87272",
    img:"photo-1511988617509-a57c8a288659",
    tips:[
      { title:"Inconsistent stories or profile information", body:"If the details they share don't match across different conversations, or differ from their profile — location, job, relationship history — pay close attention. Inconsistency is often intentional." },
      { title:"Pressure to move platforms immediately", body:"Scammers often pressure people to move to WhatsApp or other platforms where they can't be reported within Cymbie. Genuine people are happy to continue talking on-app." },
      { title:"Any request for money", body:"No legitimate romantic interest will ask you for money, gift cards, cryptocurrency, or financial assistance of any kind. If this happens, block and report immediately — this is a romance scam." },
      { title:"Love-bombing and extreme intensity", body:"Declarations of love, extreme flattery, and intense emotional pressure within the first few conversations are manipulation tactics. Healthy connections develop at a natural pace." },
    ],
  },
  {
    icon:<Phone size={22}/>, label:"Get Help", color:"#C8A96E",
    img:"photo-1484399172022-72a90b12e3c1",
    tips:[
      { title:"Report within the Cymbie app", body:"Every profile has a 'Report' option accessible from the three-dot menu. All reports go to our 24/7 safety team and are reviewed within 2 hours. You can report even after unmatching." },
      { title:"Block without guilt", body:"Blocking someone on Cymbie is always the right call if you feel unsafe or uncomfortable. They are not notified, and you can do it at any time — during or after a conversation." },
      { title:"Emergency: call local emergency services", body:"If you are in immediate danger, call your local emergency services (999 in the UK, 911 in the US, 112 in the EU). Get to a safe, public location and stay there until help arrives." },
      { title:"Non-emergency support resources", body:"For ongoing support after a difficult experience, see our curated list of organisations including the National Domestic Violence Hotline (US: 1-800-799-7233) and Refuge (UK: 0808 2000 247)." },
    ],
  },
];

export default function SafeDatingPage() {
  const [openTip, setOpenTip] = useState<string|null>(null);

  return (
    <SharedLayout>
      {/* HERO */}
      <section style={{position:"relative",minHeight:"65vh",display:"flex",alignItems:"flex-end",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0}}>
          <Image src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=95&auto=format&fit=crop&crop=center"
            alt="Two people walking on beach" fill priority sizes="100vw" style={{objectFit:"cover",objectPosition:"center 40%"}}/>
          <div style={{position:"absolute",inset:0,background:"linear-gradient(0deg,rgba(12,11,9,0.95) 0%,rgba(12,11,9,0.45) 55%,rgba(12,11,9,0.1) 100%)"}}/>
        </div>
        <div className="cy-container" style={{position:"relative",zIndex:2,padding:"0 24px 72px"}}>
          <motion.div initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} transition={{duration:0.8}}>
            <span className="cy-badge" style={{marginBottom:24,display:"inline-flex"}}>Safe Dating Guide</span>
            <h1 className="cy-h1" style={{color:G.text,marginBottom:20,maxWidth:680}}>
              Your safety is<br/><span className="cy-gradient-text">never negotiable.</span>
            </h1>
            <p className="cy-body-lg" style={{color:"rgba(242,237,228,0.75)",maxWidth:520}}>
              The most important guide we can offer. Read it before your first Cymbie date — and share it with someone you care about.
            </p>
          </motion.div>
        </div>
      </section>

      {/* QUICK ACTIONS */}
      <section style={{background:G.surface,borderTop:`1px solid ${G.border}`,borderBottom:`1px solid ${G.border}`}}>
        <div className="cy-container">
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))"}}>
            {[
              { icon:<AlertTriangle size={18}/>, label:"Report a user", sub:"24/7 safety team", href:"/contact?subject=report-user", color:"#E87272" },
              { icon:<Shield size={18}/>, label:"Trust & Safety", sub:"Our full policy", href:"/trust-safety", color:"#72B4E8" },
              { icon:<Phone size={18}/>, label:"Emergency Contacts", sub:"Resources worldwide", href:"#get-help", color:"#72E89C" },
              { icon:<Eye size={18}/>, label:"Verification", sub:"Who we verify and how", href:"/verification", color:"#C8A96E" },
            ].map((a,i)=>(
              <Link key={i} href={a.href} style={{padding:"24px 20px",textDecoration:"none",borderRight:i<3?`1px solid ${G.border}`:"none",display:"flex",gap:14,alignItems:"center",transition:"background 0.15s"}}
                onMouseEnter={e=>(e.currentTarget.style.background=G.surface2)}
                onMouseLeave={e=>(e.currentTarget.style.background="transparent")}
              >
                <div style={{width:40,height:40,borderRadius:10,background:`${a.color}1A`,display:"flex",alignItems:"center",justifyContent:"center",color:a.color,flexShrink:0}}>{a.icon}</div>
                <div>
                  <div style={{fontWeight:700,color:G.text,fontSize:"0.9rem"}}>{a.label}</div>
                  <div style={{color:G.dim,fontSize:"0.78rem"}}>{a.sub}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TIP CATEGORIES */}
      {CATEGORIES.map((cat,ci)=>(
        <section key={ci} id={cat.label.toLowerCase().replace(/ /g,"-")} className="cy-section" style={{background:ci%2===0?G.bg:G.surface,borderTop:ci>0?`1px solid ${G.border}`:"none"}}>
          <div className="cy-container">
            <div className="cy-grid-2" style={{gap:"clamp(2rem,5vw,5rem)",alignItems:"start"}}>
              {/* Image — alternates sides */}
              <motion.div {...fadeUp} style={{order:ci%2===0?1:2,position:"relative",height:"clamp(280px,40vw,460px)",borderRadius:24,overflow:"hidden"}} className="cy-img-zoom">
                <Image src={`https://images.unsplash.com/${cat.img}?w=700&q=90&auto=format&fit=crop`} alt={cat.label} fill style={{objectFit:"cover"}} sizes="50vw"/>
                <div style={{position:"absolute",inset:0,background:"linear-gradient(0deg,rgba(12,11,9,0.4) 0%,transparent 60%)"}}/>
                <div style={{position:"absolute",bottom:20,left:20}}>
                  <div style={{display:"flex",gap:10,alignItems:"center",background:"rgba(12,11,9,0.85)",backdropFilter:"blur(12px)",border:`1px solid ${cat.color}44`,borderRadius:12,padding:"10px 16px"}}>
                    <div style={{color:cat.color}}>{cat.icon}</div>
                    <span style={{color:G.text,fontWeight:700,fontSize:"0.9rem"}}>{cat.label}</span>
                  </div>
                </div>
              </motion.div>

              {/* Tips accordion */}
              <motion.div {...fadeUp} transition={{delay:0.1}} style={{order:ci%2===0?2:1}}>
                <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:28}}>
                  <div style={{width:44,height:44,borderRadius:12,background:`${cat.color}1A`,display:"flex",alignItems:"center",justifyContent:"center",color:cat.color}}>{cat.icon}</div>
                  <h2 style={{fontFamily:"var(--font-playfair),Georgia,serif",fontWeight:700,fontSize:"clamp(1.4rem,2.5vw,2rem)",color:G.text}}>{cat.label}</h2>
                </div>
                <div style={{display:"flex",flexDirection:"column",gap:8}}>
                  {cat.tips.map((tip,ti)=>{
                    const key=`${ci}-${ti}`;
                    return (
                      <div key={ti} style={{borderRadius:14,background:ci%2===0?G.surface:G.bg,border:`1px solid ${openTip===key?"rgba(200,169,110,0.3)":G.border}`,overflow:"hidden",transition:"border-color 0.2s"}}>
                        <button onClick={()=>setOpenTip(openTip===key?null:key)}
                          style={{width:"100%",padding:"18px 20px",display:"flex",justifyContent:"space-between",alignItems:"center",background:"none",border:"none",cursor:"pointer",fontFamily:"inherit",gap:12,minHeight:56}}>
                          <span style={{fontWeight:600,color:G.text,textAlign:"left",fontSize:"clamp(0.875rem,1.4vw,0.95rem)"}}>{tip.title}</span>
                          <ChevronDown size={16} style={{color:G.dim,flexShrink:0,transform:openTip===key?"rotate(180deg)":"none",transition:"transform 0.25s"}}/>
                        </button>
                        <AnimatePresence>
                          {openTip===key&&(
                            <motion.div initial={{height:0}} animate={{height:"auto"}} exit={{height:0}} style={{overflow:"hidden"}}>
                              <p style={{padding:"0 20px 18px",color:G.muted,fontSize:"0.875rem",lineHeight:1.8}}>{tip.body}</p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="cy-section" style={{background:G.surface,borderTop:`1px solid ${G.border}`,textAlign:"center"}}>
        <div className="cy-container">
          <motion.div {...fadeUp} style={{maxWidth:520,margin:"0 auto"}}>
            <Shield size={40} style={{color:G.gold,margin:"0 auto 20px"}}/>
            <h2 className="cy-h2" style={{color:G.text,marginBottom:16}}>Safety is built into every feature.</h2>
            <p className="cy-body" style={{color:G.muted,marginBottom:28}}>Cymbie's verification system, human moderation team, and in-app tools are designed to keep you safe at every step.</p>
            <div style={{display:"flex",justifyContent:"center",gap:12,flexWrap:"wrap"}}>
              <Link href="/trust-safety" className="cy-btn-primary">Trust & Safety Policy <ArrowRight size={14}/></Link>
              <Link href="/verification" className="cy-btn-outline">How Verification Works</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </SharedLayout>
  );
}


