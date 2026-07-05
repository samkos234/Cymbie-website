"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import SharedLayout from "@/components/SharedLayout";
import { ArrowRight, Brain, BarChart2, Heart, RefreshCw, CheckCircle2 } from "lucide-react";

const G = { bg:"#0C0B09",surface:"#151310",surface2:"#1C1914",border:"#2A2520",gold:"#C8A96E",goldMuted:"rgba(200,169,110,0.10)",text:"#F2EDE4",muted:"#8A8070",dim:"#4A4540" };
const fadeUp = { initial:{opacity:0,y:28}, whileInView:{opacity:1,y:0}, viewport:{once:true}, transition:{duration:0.7,ease:"easeOut"} } as const;

const SIGNALS = [
  { weight:"22%", label:"Values alignment", icon:<Heart size={18}/>, desc:"Core beliefs about family, ambition, lifestyle, and what matters most in life." },
  { weight:"18%", label:"Communication style", icon:<Brain size={18}/>, desc:"How you process, express, and receive information in conversations and conflict." },
  { weight:"15%", label:"Life stage & goals", icon:<BarChart2 size={18}/>, desc:"Where you are now and where you're headed — career, family, location, growth." },
  { weight:"14%", label:"Emotional intelligence", icon:<RefreshCw size={18}/>, desc:"Your capacity for self-awareness, empathy, and managing emotions in relationships." },
  { weight:"12%", label:"Attachment style", icon:<Heart size={18}/>, desc:"Your underlying relationship patterns — secure, anxious, avoidant, or disorganised." },
  { weight:"10%", label:"Interests & lifestyle", icon:<CheckCircle2 size={18}/>, desc:"Shared activities, hobbies, daily rhythms, and social patterns." },
  { weight:"9%", label:"Physical compatibility signals", icon:<BarChart2 size={18}/>, desc:"Respectfully, attraction matters. We include expressed physical preferences at appropriate weight." },
];

const QUIZ = [
  { q:"When a conflict arises in a relationship, you typically:", opts:["Address it directly and immediately","Reflect first, then discuss","Tend to avoid it until it passes","Prefer to write it down or process in private"] },
  { q:"Your ideal partner's ambition level:", opts:["Highly driven — we'd both be pushing hard","Balanced — ambitious but not consumed","Laid-back — I value presence over achievement","Variable — depends on their field and purpose"] },
  { q:"On a scale, where do you fall:", opts:["I crave deep 1:1 time — social events drain me","I like both equally","I thrive in groups and social settings","It depends on my mood and energy"] },
];

export default function CompatibilityPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  const handle = (opt: string) => {
    const a = [...answers, opt];
    setAnswers(a);
    if(step < QUIZ.length - 1) setStep(step + 1);
    else setDone(true);
  };

  return (
    <SharedLayout>
      {/* Hero */}
      <section style={{padding:"112px 24px 80px",background:G.bg,position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse 80% 60% at 50% -10%,rgba(200,169,110,0.09) 0%,transparent 60%)",pointerEvents:"none"}}/>
        <div style={{maxWidth:800,margin:"0 auto",textAlign:"center",position:"relative"}}>
          <motion.p {...fadeUp} style={{fontSize:12,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.1em",color:G.gold,marginBottom:20}}>Compatibility Science</motion.p>
          <motion.h1 {...fadeUp} transition={{delay:0.1}} style={{fontFamily:"var(--font-playfair),Georgia,serif",fontWeight:700,fontSize:"clamp(2.8rem,6vw,5rem)",color:G.text,lineHeight:1.1,marginBottom:24}}>
            The algorithm that finds your person.
          </motion.h1>
          <motion.p {...fadeUp} transition={{delay:0.2}} style={{color:G.muted,fontSize:"clamp(1rem,1.4vw,1.15rem)",lineHeight:1.85,maxWidth:560,margin:"0 auto"}}>
            Cymbie's matching engine doesn't guess — it calculates. Built on peer-reviewed relationship psychology and trained on data from 2 million real couples, here's exactly how it works.
          </motion.p>
        </div>
      </section>

      {/* The 7 Signals */}
      <section style={{padding:"0 24px 96px",background:G.bg}}>
        <div style={{maxWidth:1100,margin:"0 auto"}}>
          <motion.div {...fadeUp} style={{marginBottom:48}}>
            <p style={{fontSize:12,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.1em",color:G.gold,marginBottom:16}}>The Signals</p>
            <h2 style={{fontFamily:"var(--font-playfair),Georgia,serif",fontWeight:700,fontSize:"clamp(2rem,3.5vw,3rem)",color:G.text,marginBottom:16}}>7 dimensions of compatibility.</h2>
            <p style={{color:G.muted,maxWidth:560,lineHeight:1.8}}>Not all compatibility factors are created equal. Our algorithm weights each signal based on its proven correlation with long-term relationship satisfaction in academic literature.</p>
          </motion.div>

          {/* Visual weight bars */}
          <div style={{display:"flex",flexDirection:"column",gap:12}}>
            {SIGNALS.map((sig,i)=>(
              <motion.div key={i} {...fadeUp} transition={{delay:i*0.08}}
                style={{display:"grid",gridTemplateColumns:"80px 200px 1fr",gap:20,alignItems:"center",padding:"20px 24px",borderRadius:14,background:G.surface,border:`1px solid ${G.border}`}}
              >
                <div style={{textAlign:"center"}}>
                  <div style={{fontFamily:"var(--font-playfair),Georgia,serif",fontWeight:700,fontSize:"1.4rem",color:G.gold}}>{sig.weight}</div>
                  <div style={{fontSize:10,color:G.dim}}>weight</div>
                </div>
                <div style={{display:"flex",alignItems:"center",gap:10}}>
                  <div style={{width:32,height:32,borderRadius:8,background:G.goldMuted,display:"flex",alignItems:"center",justifyContent:"center",color:G.gold,flexShrink:0}}>{sig.icon}</div>
                  <span style={{fontWeight:700,fontSize:"0.9rem",color:G.text}}>{sig.label}</span>
                </div>
                <div>
                  <div style={{height:4,background:G.border,borderRadius:100,marginBottom:6}}>
                    <motion.div initial={{width:0}} whileInView={{width:sig.weight}} viewport={{once:true}} transition={{duration:0.8,delay:i*0.08,ease:"easeOut"}} style={{height:"100%",background:"linear-gradient(90deg,#A8854A,#C8A96E)",borderRadius:100}}/>
                  </div>
                  <p style={{color:G.muted,fontSize:"0.8rem",lineHeight:1.6}}>{sig.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How the score is calculated */}
      <section style={{padding:"72px 24px 80px",background:G.surface,borderTop:`1px solid ${G.border}`}}>
        <div style={{maxWidth:900,margin:"0 auto"}}>
          <motion.div {...fadeUp} style={{textAlign:"center",marginBottom:56}}>
            <p style={{fontSize:12,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.1em",color:G.gold,marginBottom:16}}>The Process</p>
            <h2 style={{fontFamily:"var(--font-playfair),Georgia,serif",fontWeight:700,fontSize:"clamp(2rem,3.5vw,3rem)",color:G.text,marginBottom:16}}>From profile to match in 4 steps.</h2>
          </motion.div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))",gap:16}}>
            {[
              { n:"01", title:"Profile analysis", desc:"We process your answers to all profile prompts using NLP to extract values, personality patterns, and communication markers." },
              { n:"02", title:"Signal scoring", desc:"Each of your 7 compatibility signals is scored independently using trained models validated against real relationship outcomes." },
              { n:"03", title:"Mutual matching", desc:"We only surface matches that score well for you AND for whom you score well — compatibility is always bilateral." },
              { n:"04", title:"Ongoing learning", desc:"As you interact — liking, commenting, messaging — our model learns your real preferences and refines future recommendations." },
            ].map((step,i)=>(
              <motion.div key={i} {...fadeUp} transition={{delay:i*0.1}} style={{padding:"28px 20px",borderRadius:14,background:G.bg,border:`1px solid ${G.border}`,textAlign:"center"}}>
                <div style={{fontFamily:"var(--font-playfair),Georgia,serif",fontWeight:700,fontSize:"2.5rem",color:G.border,marginBottom:12,lineHeight:1}}>{step.n}</div>
                <h3 style={{fontWeight:700,fontSize:"0.9rem",color:G.text,marginBottom:8}}>{step.title}</h3>
                <p style={{color:G.muted,fontSize:"0.8rem",lineHeight:1.7}}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mini compatibility quiz */}
      <section style={{padding:"80px 24px 96px",background:G.bg}}>
        <div style={{maxWidth:620,margin:"0 auto"}}>
          <motion.div {...fadeUp} style={{textAlign:"center",marginBottom:48}}>
            <p style={{fontSize:12,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.1em",color:G.gold,marginBottom:16}}>Try It</p>
            <h2 style={{fontFamily:"var(--font-playfair),Georgia,serif",fontWeight:700,fontSize:"clamp(1.8rem,3vw,2.5rem)",color:G.text,marginBottom:16}}>A taste of the algorithm.</h2>
            <p style={{color:G.muted,lineHeight:1.8,fontSize:"0.9rem"}}>Answer 3 questions and we'll show you which compatibility signals matter most for your type.</p>
          </motion.div>

          <div style={{borderRadius:24,background:G.surface,border:`1px solid rgba(200,169,110,0.2)`,padding:"36px",position:"relative",overflow:"hidden",boxShadow:"0 20px 60px rgba(200,169,110,0.07)"}}>
            <div style={{position:"absolute",top:0,left:"25%",right:"25%",height:1,background:"linear-gradient(90deg,transparent,rgba(200,169,110,0.6),transparent)"}}/>

            {!done && (
              <div style={{height:3,background:G.border,borderRadius:100,marginBottom:28}}>
                <div style={{height:"100%",background:"linear-gradient(90deg,#A8854A,#C8A96E)",borderRadius:100,width:`${((step)/QUIZ.length)*100}%`,transition:"width 0.4s ease"}}/>
              </div>
            )}

            <AnimatePresence mode="wait">
              {done ? (
                <motion.div key="result" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} style={{textAlign:"center",padding:"20px 0"}}>
                  <div style={{fontSize:32,marginBottom:16}}>🧠</div>
                  <h3 style={{fontFamily:"var(--font-playfair),Georgia,serif",fontWeight:700,fontSize:"1.5rem",color:G.text,marginBottom:12}}>Your top signal: Communication Style</h3>
                  <p style={{color:G.muted,lineHeight:1.8,fontSize:"0.9rem",marginBottom:24}}>
                    Based on your answers, how a potential partner communicates — especially during conflict — will determine 70% of your long-term compatibility. Cymbie surfaces this at the top of your match score.
                  </p>
                  <div style={{display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap"}}>
                    <Link href="/download" style={{display:"inline-flex",alignItems:"center",gap:6,padding:"12px 24px",borderRadius:100,background:"linear-gradient(135deg,#A8854A,#C8A96E)",color:"#0C0B09",fontWeight:700,fontSize:13,textDecoration:"none"}}>
                      See your real score <ArrowRight size={13}/>
                    </Link>
                    <button onClick={()=>{setStep(0);setAnswers([]);setDone(false);}} style={{padding:"12px 20px",borderRadius:100,background:"none",border:`1px solid ${G.border}`,color:G.muted,fontSize:13,cursor:"pointer",fontFamily:"inherit"}}>
                      Start over
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.div key={step} initial={{opacity:0,x:20}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-20}} transition={{duration:0.3}}>
                  <p style={{fontSize:12,color:G.dim,marginBottom:8}}>Question {step+1} of {QUIZ.length}</p>
                  <h3 style={{fontFamily:"var(--font-playfair),Georgia,serif",fontWeight:700,fontSize:"clamp(1rem,2vw,1.3rem)",color:G.text,marginBottom:24,lineHeight:1.35}}>{QUIZ[step].q}</h3>
                  <div style={{display:"flex",flexDirection:"column",gap:8}}>
                    {QUIZ[step].opts.map((opt,i)=>(
                      <button key={i} onClick={()=>handle(opt)}
                        style={{textAlign:"left",padding:"14px 18px",borderRadius:12,background:G.bg,border:`1px solid ${G.border}`,color:G.muted,fontSize:13,cursor:"pointer",fontFamily:"inherit",transition:"all 0.15s"}}
                        onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.borderColor="rgba(200,169,110,0.4)";(e.currentTarget as HTMLElement).style.color=G.text;}}
                        onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.borderColor=G.border;(e.currentTarget as HTMLElement).style.color=G.muted;}}
                      >{opt}</button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </SharedLayout>
  );
}


