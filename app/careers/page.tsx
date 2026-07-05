"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import SharedLayout from "@/components/SharedLayout";
import { ArrowRight, ChevronDown, MapPin, Briefcase, Clock, Globe } from "lucide-react";

const G = { bg:"#0C0B09",surface:"#151310",surface2:"#1C1914",border:"#2A2520",gold:"#C8A96E",goldMuted:"rgba(200,169,110,0.10)",text:"#F2EDE4",muted:"#8A8070",dim:"#4A4540" };
const fadeUp = { initial:{opacity:0,y:32}, whileInView:{opacity:1,y:0}, viewport:{once:true}, transition:{duration:0.75,ease:"easeOut"} } as const;

const PERKS = [
  { icon:"🌍", title:"Fully remote-first", desc:"Work from anywhere. We have teammates in 15 countries and meet in person twice a year." },
  { icon:"📈", title:"Meaningful equity", desc:"Every employee at every level gets meaningful stock. When Cymbie wins, you win." },
  { icon:"🩺", title:"World-class healthcare", desc:"Comprehensive health, dental, and vision for you and your dependents — 100% employer-paid." },
  { icon:"🧠", title:"Learning & development", desc:"$3,000 annual budget for courses, books, conferences, and professional development." },
  { icon:"🏖️", title:"Unlimited PTO", desc:"We mean it. Minimum 20 days strongly encouraged. Results matter, not hours." },
  { icon:"💻", title:"Home office stipend", desc:"$2,000 to set up your home office. Your best work starts with the right setup." },
  { icon:"🥗", title:"Team retreats", desc:"Twice-yearly offsites in incredible locations. Work hard, explore together." },
  { icon:"❤️", title:"Relationship sabbatical", desc:"If you find your partner on Cymbie, take 1 week of paid 'relationship sabbatical'. We're serious." },
];

const JOBS = [
  { title:"Senior iOS Engineer", dept:"Engineering", location:"Remote (Americas / Europe)", type:"Full-time", desc:"Help build the primary surface of Cymbie's matching and messaging experience. Experience with Swift, SwiftUI, and performance-critical mobile architecture required." },
  { title:"Staff Machine Learning Engineer", dept:"Engineering", location:"Remote (Global)", type:"Full-time", desc:"Drive the next generation of Cymbie's compatibility algorithm. You'll own modelling, evaluation infrastructure, and algorithm improvements across all 7 compatibility signals." },
  { title:"Senior Product Designer", dept:"Design", location:"Remote (Global)", type:"Full-time", desc:"Own design for core matching and profile flows. We're looking for someone who cares as much about ethical design patterns as they do about beautiful interfaces." },
  { title:"Head of Partnerships", dept:"Business", location:"New York or London", type:"Full-time", desc:"Build and lead Cymbie's brand partnership programme — relationship coaches, therapists, date experience platforms, and media brands aligned with intentional connection." },
  { title:"Senior Content Strategist", dept:"Marketing", location:"Remote (Global)", type:"Full-time", desc:"Own Cymbie's editorial voice across the blog, social, email, and in-app content. You'll commission research, write long-form pieces, and build a content programme that changes how people think about dating." },
  { title:"Trust & Safety Specialist", dept:"Operations", location:"Remote (Global)", type:"Full-time", desc:"Be on the front line of keeping Cymbie the safest premium dating platform in the world. Review reports, enforce policies, and help shape our safety systems." },
];

const DEPT_COLORS: Record<string, string> = {
  Engineering:"#72B4E8", Design:"#E872B4", Business:"#C8A96E", Marketing:"#72E8B4", Operations:"#E8A872",
};

export default function CareersPage() {
  const [open, setOpen] = useState<number|null>(null);
  const [filter, setFilter] = useState("All");
  const depts = ["All", ...Array.from(new Set(JOBS.map(j=>j.dept)))];
  const filtered = filter==="All" ? JOBS : JOBS.filter(j=>j.dept===filter);

  return (
    <SharedLayout>
      {/* HERO */}
      <section style={{position:"relative",minHeight:"70vh",display:"flex",alignItems:"flex-end",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0}}>
          <Image src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1920&q=95&auto=format&fit=crop&crop=center"
            alt="Team celebrating together" fill priority sizes="100vw" style={{objectFit:"cover",objectPosition:"center 30%"}}/>
          <div style={{position:"absolute",inset:0,background:"linear-gradient(0deg,rgba(12,11,9,0.94) 0%,rgba(12,11,9,0.45) 55%,rgba(12,11,9,0.1) 100%)"}}/>
        </div>
        <div className="cy-container" style={{position:"relative",zIndex:2,padding:"0 24px 72px"}}>
          <motion.div initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} transition={{duration:0.8}}>
            <span className="cy-badge" style={{marginBottom:24,display:"inline-flex"}}>We're Hiring</span>
            <h1 className="cy-h1" style={{color:G.text,marginBottom:20,maxWidth:700}}>
              Help us fix dating.<br/><span className="cy-gradient-text">For everyone.</span>
            </h1>
            <p className="cy-body-lg" style={{color:"rgba(242,237,228,0.75)",maxWidth:520,marginBottom:32}}>
              We're a 60-person team across 15 countries, united by the belief that technology should serve love — not exploit loneliness. Come build something that actually matters.
            </p>
            <div style={{display:"flex",gap:16,flexWrap:"wrap"}}>
              {[["60+","Team members"],["15","Countries"],["6","Open roles today"]].map(([v,l],i)=>(
                <div key={i} style={{padding:"12px 20px",borderRadius:12,background:"rgba(21,19,16,0.85)",backdropFilter:"blur(12px)",border:`1px solid ${G.border}`}}>
                  <div style={{fontFamily:"var(--font-playfair),Georgia,serif",fontWeight:700,color:G.gold,fontSize:"1.4rem",lineHeight:1}}>{v}</div>
                  <div style={{color:G.dim,fontSize:"0.78rem",marginTop:3}}>{l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* TEAM CULTURE PHOTOS */}
      <section className="cy-section" style={{background:G.bg}}>
        <div className="cy-container">
          <motion.div {...fadeUp} style={{textAlign:"center",marginBottom:48}}>
            <span className="cy-badge" style={{marginBottom:20,display:"inline-flex"}}>Life at Cymbie</span>
            <h2 className="cy-h2" style={{color:G.text,marginBottom:16}}>Work that feels meaningful.</h2>
            <p className="cy-body" style={{color:G.muted,maxWidth:520,margin:"0 auto"}}>We're a remote-first, async-friendly company that takes deep work seriously and celebrates life outside of it.</p>
          </motion.div>

          {/* 5-photo culture mosaic */}
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gridTemplateRows:"220px 220px",gap:12}}>
            <motion.div {...fadeUp} transition={{delay:0}} style={{gridColumn:"1",gridRow:"1/3",borderRadius:20,overflow:"hidden",position:"relative"}} className="cy-img-zoom">
              <Image src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&q=90&auto=format&fit=crop&crop=faces" alt="Team member" fill style={{objectFit:"cover"}} sizes="33vw"/>
            </motion.div>
            <motion.div {...fadeUp} transition={{delay:0.1}} style={{borderRadius:20,overflow:"hidden",position:"relative"}} className="cy-img-zoom">
              <Image src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&q=90&auto=format&fit=crop&crop=faces" alt="Team member" fill style={{objectFit:"cover"}} sizes="22vw"/>
            </motion.div>
            <motion.div {...fadeUp} transition={{delay:0.15}} style={{borderRadius:20,overflow:"hidden",position:"relative"}} className="cy-img-zoom">
              <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=90&auto=format&fit=crop&crop=faces" alt="Team member" fill style={{objectFit:"cover"}} sizes="22vw"/>
            </motion.div>
            <motion.div {...fadeUp} transition={{delay:0.2}} style={{borderRadius:20,overflow:"hidden",position:"relative"}} className="cy-img-zoom">
              <Image src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=500&q=90&auto=format&fit=crop&crop=faces" alt="Team member" fill style={{objectFit:"cover"}} sizes="22vw"/>
            </motion.div>
            <motion.div {...fadeUp} transition={{delay:0.25}} style={{borderRadius:20,overflow:"hidden",position:"relative"}} className="cy-img-zoom">
              <Image src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&q=90&auto=format&fit=crop&crop=faces" alt="Team member" fill style={{objectFit:"cover"}} sizes="22vw"/>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PERKS */}
      <section className="cy-section" style={{background:G.surface,borderTop:`1px solid ${G.border}`}}>
        <div className="cy-container">
          <motion.div {...fadeUp} style={{textAlign:"center",marginBottom:52}}>
            <span className="cy-badge" style={{marginBottom:20,display:"inline-flex"}}>Benefits & Perks</span>
            <h2 className="cy-h2" style={{color:G.text}}>We invest in the people building the mission.</h2>
          </motion.div>
          <div className="cy-grid-4" style={{gap:"1rem"}}>
            {PERKS.map((p,i)=>(
              <motion.div key={i} {...fadeUp} transition={{delay:i*0.07}} className="cy-card" style={{padding:"24px 20px"}}>
                <div style={{fontSize:"2rem",marginBottom:14}}>{p.icon}</div>
                <h3 style={{fontWeight:700,fontSize:"0.95rem",color:G.text,marginBottom:8}}>{p.title}</h3>
                <p style={{color:G.muted,fontSize:"0.83rem",lineHeight:1.7}}>{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OPEN ROLES */}
      <section className="cy-section" style={{background:G.bg}}>
        <div className="cy-container">
          <motion.div {...fadeUp} style={{marginBottom:40}}>
            <span className="cy-badge" style={{marginBottom:20,display:"inline-flex"}}>Open Roles</span>
            <h2 className="cy-h2" style={{color:G.text,marginBottom:24}}>Join the team.</h2>
            {/* Dept filter */}
            <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
              {depts.map(d=>(
                <button key={d} onClick={()=>setFilter(d)}
                  style={{padding:"8px 18px",borderRadius:100,border:`1px solid ${filter===d?"rgba(200,169,110,0.5)":G.border}`,background:filter===d?G.goldMuted:"transparent",color:filter===d?G.gold:G.muted,fontWeight:600,fontSize:"0.85rem",cursor:"pointer",fontFamily:"inherit",transition:"all 0.2s",minHeight:40}}
                >{d}</button>
              ))}
            </div>
          </motion.div>

          <div style={{display:"flex",flexDirection:"column",gap:8}}>
            <AnimatePresence>
              {filtered.map((job,i)=>(
                <motion.div key={job.title} initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} exit={{opacity:0}} transition={{delay:i*0.06}}
                  style={{borderRadius:16,background:G.surface,border:`1px solid ${open===i?"rgba(200,169,110,0.35)":G.border}`,overflow:"hidden",transition:"border-color 0.2s"}}
                >
                  <button onClick={()=>setOpen(open===i?null:i)}
                    style={{width:"100%",padding:"clamp(16px,2.5vw,24px) clamp(16px,3vw,28px)",display:"grid",gridTemplateColumns:"1fr auto",gap:16,alignItems:"center",background:"none",border:"none",cursor:"pointer",fontFamily:"inherit",textAlign:"left",minHeight:72}}
                  >
                    <div style={{display:"flex",gap:16,alignItems:"center",flexWrap:"wrap"}}>
                      <div>
                        <h3 style={{fontWeight:700,fontSize:"clamp(0.9rem,1.5vw,1.05rem)",color:G.text,marginBottom:4}}>{job.title}</h3>
                        <div style={{display:"flex",gap:12,flexWrap:"wrap"}}>
                          <span style={{display:"flex",alignItems:"center",gap:4,color:G.dim,fontSize:"0.78rem"}}><Briefcase size={11}/> {job.dept}</span>
                          <span style={{display:"flex",alignItems:"center",gap:4,color:G.dim,fontSize:"0.78rem"}}><MapPin size={11}/> {job.location}</span>
                          <span style={{display:"flex",alignItems:"center",gap:4,color:G.dim,fontSize:"0.78rem"}}><Clock size={11}/> {job.type}</span>
                        </div>
                      </div>
                    </div>
                    <div style={{display:"flex",alignItems:"center",gap:12}}>
                      <span style={{padding:"4px 12px",borderRadius:100,background:`${DEPT_COLORS[job.dept]}1A`,color:DEPT_COLORS[job.dept],fontSize:"0.72rem",fontWeight:700,whiteSpace:"nowrap"}}>{job.dept}</span>
                      <ChevronDown size={16} style={{color:G.dim,transform:open===i?"rotate(180deg)":"rotate(0)",transition:"transform 0.25s",flexShrink:0}}/>
                    </div>
                  </button>
                  <AnimatePresence>
                    {open===i&&(
                      <motion.div initial={{height:0}} animate={{height:"auto"}} exit={{height:0}} style={{overflow:"hidden"}}>
                        <div style={{padding:"0 clamp(16px,3vw,28px) 24px",borderTop:`1px solid ${G.border}`}}>
                          <p style={{color:G.muted,fontSize:"0.9rem",lineHeight:1.8,marginTop:16,marginBottom:20}}>{job.desc}</p>
                          <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
                            <Link href={`/contact?subject=apply-${job.title.toLowerCase().replace(/ /g,"-")}`} className="cy-btn-primary" style={{fontSize:"0.875rem",padding:"10px 22px"}}>
                              Apply Now <ArrowRight size={14}/>
                            </Link>
                            <Link href="/contact" className="cy-btn-outline" style={{fontSize:"0.875rem",padding:"10px 18px"}}>Ask a question</Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* No role match */}
          <motion.div {...fadeUp} style={{marginTop:40,padding:"28px 32px",borderRadius:16,background:G.surface,border:`1px solid ${G.border}`,display:"flex",gap:20,alignItems:"center",flexWrap:"wrap"}}>
            <div style={{flex:1,minWidth:240}}>
              <h3 style={{fontWeight:700,color:G.text,marginBottom:6,fontSize:"1rem"}}>Don't see the right role?</h3>
              <p style={{color:G.muted,fontSize:"0.875rem",lineHeight:1.7}}>We hire exceptional people before the role exists. Send us your background and what you'd love to build.</p>
            </div>
            <Link href="/contact?subject=open-application" className="cy-btn-outline" style={{fontSize:"0.875rem",whiteSpace:"nowrap"}}>
              Open Application <ArrowRight size={14}/>
            </Link>
          </motion.div>
        </div>
      </section>
    </SharedLayout>
  );
}


