"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SharedLayout from "@/components/SharedLayout";
import { ArrowRight, Mail, MessageCircle, Phone, CheckCircle2, Send } from "lucide-react";

const G = { bg:"#0C0B09",surface:"#151310",surface2:"#1C1914",border:"#2A2520",gold:"#C8A96E",goldMuted:"rgba(200,169,110,0.10)",text:"#F2EDE4",muted:"#8A8070",dim:"#4A4540" };
const fadeUp = { initial:{opacity:0,y:32}, whileInView:{opacity:1,y:0}, viewport:{once:true}, transition:{duration:0.75,ease:"easeOut"} } as const;

const CHANNELS = [
  { icon:<MessageCircle size={24}/>, title:"Live Chat", sub:"Avg. 3-min response", hours:"Daily 8am–10pm ET", action:"Start Chat", color:"#72B4E8", href:"#chat" },
  { icon:<Mail size={24}/>, title:"Email Support", sub:"Detailed issue help", hours:"Response within 12 hrs", action:"Send Email", color:"#C8A96E", href:"mailto:hello@cymbie.co" },
  { icon:<Phone size={24}/>, title:"Phone", sub:"Ardent members only", hours:"Mon–Fri 9am–6pm ET", action:"Request Call", color:"#72E89C", href:"#call" },
];

const SUBJECTS = [
  "General enquiry","Account & billing","Matching & compatibility","Safety & reports","Technical issue","Press & media","Partnership","Share my success story","Open application","Other",
];

type FormData = { name:string; email:string; subject:string; message:string };

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({ name:"", email:"", subject:"General enquiry", message:"" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r=>setTimeout(r,1200));
    setLoading(false);
    setSent(true);
  };

  return (
    <SharedLayout>
      {/* HERO */}
      <section style={{position:"relative",overflow:"hidden",background:G.bg,paddingTop:90}}>
        <div style={{position:"absolute",inset:0}}>
          <Image src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1920&q=90&auto=format&fit=crop&crop=center" alt="People connecting" fill sizes="100vw" style={{objectFit:"cover",objectPosition:"center 30%",opacity:0.18}}/>
          <div style={{position:"absolute",inset:0,background:"linear-gradient(0deg,rgba(12,11,9,1) 20%,rgba(12,11,9,0.6) 100%)"}}/>
        </div>
        <div className="cy-container" style={{position:"relative",zIndex:2,padding:"clamp(3rem,6vw,5rem) 24px clamp(2rem,4vw,3rem)",textAlign:"center"}}>
          <motion.div initial={{opacity:0,y:32}} animate={{opacity:1,y:0}} transition={{duration:0.8}}>
            <span className="cy-badge" style={{marginBottom:24,display:"inline-flex"}}>Get In Touch</span>
            <h1 className="cy-h1" style={{color:G.text,marginBottom:16}}>We're here to help.</h1>
            <p className="cy-body-lg" style={{color:G.muted,maxWidth:440,margin:"0 auto"}}>
              Real support from real people. Choose the channel that works for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SUPPORT CHANNELS */}
      <section style={{background:G.surface,borderTop:`1px solid ${G.border}`,borderBottom:`1px solid ${G.border}`}}>
        <div className="cy-container">
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))"}}>
            {CHANNELS.map((c,i)=>(
              <motion.a key={i} href={c.href} {...fadeUp} transition={{delay:i*0.1}}
                style={{padding:"clamp(20px,3vw,32px) 20px",borderRight:i<2?`1px solid ${G.border}`:"none",textDecoration:"none",display:"flex",gap:16,alignItems:"flex-start",transition:"background 0.15s"}}
                onMouseEnter={e=>(e.currentTarget.style.background=G.surface2)}
                onMouseLeave={e=>(e.currentTarget.style.background="transparent")}
              >
                <div style={{width:48,height:48,borderRadius:14,background:`${c.color}1A`,display:"flex",alignItems:"center",justifyContent:"center",color:c.color,flexShrink:0}}>{c.icon}</div>
                <div>
                  <div style={{fontWeight:700,color:G.text,fontSize:"1rem",marginBottom:4}}>{c.title}</div>
                  <div style={{color:G.muted,fontSize:"0.8rem",marginBottom:2}}>{c.sub}</div>
                  <div style={{color:G.dim,fontSize:"0.75rem",marginBottom:10}}>{c.hours}</div>
                  <span style={{color:c.color,fontSize:"0.82rem",fontWeight:700,display:"flex",alignItems:"center",gap:4}}>
                    {c.action} <ArrowRight size={12}/>
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM + sidebar */}
      <section className="cy-section" style={{background:G.bg}}>
        <div className="cy-container">
          <div className="cy-grid-2" style={{gap:"clamp(2rem,5vw,5rem)",alignItems:"start"}}>

            {/* FORM */}
            <motion.div {...fadeUp}>
              <h2 className="cy-h2" style={{color:G.text,marginBottom:8}}>Send us a message.</h2>
              <p className="cy-body" style={{color:G.muted,marginBottom:32}}>We read every message and respond within 12 hours.</p>

              {sent ? (
                <motion.div initial={{opacity:0,scale:0.95}} animate={{opacity:1,scale:1}}
                  style={{padding:"clamp(28px,4vw,48px)",borderRadius:20,background:G.surface,border:"1px solid rgba(114,232,156,0.3)",textAlign:"center"}}
                >
                  <CheckCircle2 size={48} style={{color:"#72E89C",margin:"0 auto 16px"}}/>
                  <h3 style={{fontFamily:"var(--font-playfair),Georgia,serif",fontWeight:700,color:G.text,fontSize:"1.4rem",marginBottom:8}}>Message received!</h3>
                  <p style={{color:G.muted,fontSize:"0.9rem",lineHeight:1.75,marginBottom:24}}>
                    Thanks {form.name.split(" ")[0]}. We'll reply to {form.email} within 12 hours. If it's urgent, use our live chat.
                  </p>
                  <button onClick={()=>{setSent(false);setForm({name:"",email:"",subject:"General enquiry",message:""}); }} className="cy-btn-outline" style={{display:"inline-flex"}}>Send another message</button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column",gap:16}}>
                  <div className="cy-grid-2" style={{gap:"1rem"}}>
                    <div>
                      <label style={{display:"block",color:G.muted,fontSize:"0.8rem",fontWeight:600,marginBottom:6,textTransform:"uppercase",letterSpacing:"0.06em"}}>Full Name *</label>
                      <input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required placeholder="Your name"
                        style={{width:"100%",padding:"14px 16px",borderRadius:12,background:G.surface,border:`1px solid ${G.border}`,color:G.text,fontSize:"0.9rem",outline:"none",fontFamily:"inherit",transition:"border-color 0.2s"}}
                        onFocus={e=>e.target.style.borderColor="rgba(200,169,110,0.5)"} onBlur={e=>e.target.style.borderColor=G.border}/>
                    </div>
                    <div>
                      <label style={{display:"block",color:G.muted,fontSize:"0.8rem",fontWeight:600,marginBottom:6,textTransform:"uppercase",letterSpacing:"0.06em"}}>Email Address *</label>
                      <input value={form.email} onChange={e=>setForm({...form,email:e.target.value})} required type="email" placeholder="you@email.com"
                        style={{width:"100%",padding:"14px 16px",borderRadius:12,background:G.surface,border:`1px solid ${G.border}`,color:G.text,fontSize:"0.9rem",outline:"none",fontFamily:"inherit",transition:"border-color 0.2s"}}
                        onFocus={e=>e.target.style.borderColor="rgba(200,169,110,0.5)"} onBlur={e=>e.target.style.borderColor=G.border}/>
                    </div>
                  </div>
                  <div>
                    <label style={{display:"block",color:G.muted,fontSize:"0.8rem",fontWeight:600,marginBottom:6,textTransform:"uppercase",letterSpacing:"0.06em"}}>Subject</label>
                    <select value={form.subject} onChange={e=>setForm({...form,subject:e.target.value})}
                      style={{width:"100%",padding:"14px 16px",borderRadius:12,background:G.surface,border:`1px solid ${G.border}`,color:G.text,fontSize:"0.9rem",outline:"none",fontFamily:"inherit",cursor:"pointer",transition:"border-color 0.2s"}}
                      onFocus={e=>e.target.style.borderColor="rgba(200,169,110,0.5)"} onBlur={e=>e.target.style.borderColor=G.border}
                    >
                      {SUBJECTS.map(s=><option key={s} value={s} style={{background:"#151310"}}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={{display:"block",color:G.muted,fontSize:"0.8rem",fontWeight:600,marginBottom:6,textTransform:"uppercase",letterSpacing:"0.06em"}}>Message *</label>
                    <textarea value={form.message} onChange={e=>setForm({...form,message:e.target.value})} required placeholder="How can we help?" rows={6}
                      style={{width:"100%",padding:"14px 16px",borderRadius:12,background:G.surface,border:`1px solid ${G.border}`,color:G.text,fontSize:"0.9rem",outline:"none",fontFamily:"inherit",resize:"vertical",lineHeight:1.75,transition:"border-color 0.2s"}}
                      onFocus={e=>e.target.style.borderColor="rgba(200,169,110,0.5)"} onBlur={e=>e.target.style.borderColor=G.border}/>
                  </div>
                  <button type="submit" disabled={loading} className="cy-btn-primary" style={{display:"flex",gap:8,alignItems:"center",justifyContent:"center",opacity:loading?0.7:1,transition:"opacity 0.2s",fontSize:"1rem",padding:"1rem 2rem"}}>
                    {loading ? "Sending…" : <><Send size={16}/> Send Message</>}
                  </button>
                </form>
              )}
            </motion.div>

            {/* SIDEBAR */}
            <div style={{display:"flex",flexDirection:"column",gap:16}}>
              {/* Photo */}
              <motion.div {...fadeUp} transition={{delay:0.1}} style={{borderRadius:24,overflow:"hidden",height:"clamp(220px,30vw,300px)"}} className="cy-img-zoom">
                <Image src="https://images.unsplash.com/photo-1571624436279-b272aff752b5?w=600&q=90&auto=format&fit=crop&crop=faces" alt="Woman smiling" fill style={{objectFit:"cover"}} sizes="35vw"/>
              </motion.div>
              {/* Info cards */}
              {[
                { title:"Safety reports", body:"All safety concerns are reviewed within 2 hours by our 24/7 trust & safety team.", link:"/trust-safety", label:"Trust & Safety" },
                { title:"Press & media", body:"For press enquiries, editorial access, or brand partnerships, we respond within 24 hours.", link:"/press", label:"Visit Press Room" },
              ].map((card,i)=>(
                <motion.div key={i} {...fadeUp} transition={{delay:0.15+i*0.1}} style={{borderRadius:18,background:G.surface,border:`1px solid ${G.border}`,padding:"20px 22px"}}>
                  <h3 style={{fontWeight:700,color:G.text,fontSize:"0.95rem",marginBottom:6}}>{card.title}</h3>
                  <p style={{color:G.muted,fontSize:"0.83rem",lineHeight:1.7,marginBottom:12}}>{card.body}</p>
                  <Link href={card.link} style={{color:G.gold,fontSize:"0.82rem",fontWeight:700,textDecoration:"none",display:"flex",alignItems:"center",gap:4}}>
                    {card.label} <ArrowRight size={12}/>
                  </Link>
                </motion.div>
              ))}
              {/* Second photo */}
              <motion.div {...fadeUp} transition={{delay:0.3}} style={{borderRadius:18,overflow:"hidden",height:"clamp(160px,20vw,220px)"}} className="cy-img-zoom">
                <Image src="https://images.unsplash.com/photo-1516589091380-5d8e87df6999?w=600&q=88&auto=format&fit=crop" alt="Couple at cafe" fill style={{objectFit:"cover"}} sizes="35vw"/>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </SharedLayout>
  );
}


