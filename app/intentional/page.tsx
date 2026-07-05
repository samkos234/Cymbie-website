"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import SharedLayout from "@/components/SharedLayout";
import { ArrowRight, ChevronRight } from "lucide-react";

const G = { bg:"#0C0B09",surface:"#151310",surface2:"#1C1914",border:"#2A2520",gold:"#C8A96E",goldMuted:"rgba(200,169,110,0.10)",text:"#F2EDE4",muted:"#8A8070",dim:"#4A4540" };
const fadeUp = { initial:{opacity:0,y:28}, whileInView:{opacity:1,y:0}, viewport:{once:true}, transition:{duration:0.7,ease:"easeOut"} } as const;

const QUIZ_QUESTIONS = [
  { q:"When you imagine your ideal Saturday, what does it look like?", options:["A long hike or outdoor adventure","Brunching with good people","Working on a creative project","A quiet morning in, coffee and a book"] },
  { q:"What does a meaningful relationship mean to you most?", options:["A best friend I also get to kiss","Growth — we push each other to be better","Stability and deep security","A shared life full of new experiences"] },
  { q:"How do you communicate when something bothers you?", options:["I address it directly, almost immediately","I need a little time, then I bring it up","I tend to internalize until it's bigger than it should be","I communicate best in writing"] },
  { q:"Which describes your ideal partner best?", options:["Deeply curious and intellectually alive","Warm, empathetic, and emotionally available","Driven, ambitious, with clear goals","Adventurous and spontaneous"] },
];

const PRINCIPLES = [
  { num:"01", title:"Clarity over chemistry", desc:"Chemistry fades. Clarity about what you want — and finding someone who wants the same thing — is the foundation of lasting connection. Cymbie encourages you to know yourself first." },
  { num:"02", title:"Presence over volume", desc:"Intentional dating isn't about seeing as many people as possible. It's about being fully present with the ones you do see. We limit your daily stack on purpose." },
  { num:"03", title:"Honesty, even when it's hard", desc:"Ghosting is the epidemic of modern dating. We build features that reward honesty — like a 'Not for me' button that sends a gentle, respectful decline instead of silence." },
  { num:"04", title:"The goal is offline", desc:"We track our success by the number of people who find their person. We measure our success by the quality of the relationships formed. That's how you know we're on your side." },
];

export default function IntentionalPage() {
  const [quizStep, setQuizStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [quizDone, setQuizDone] = useState(false);

  const handleAnswer = (ans: string) => {
    const newAnswers = [...answers, ans];
    setAnswers(newAnswers);
    if(quizStep < QUIZ_QUESTIONS.length - 1) {
      setQuizStep(quizStep + 1);
    } else {
      setQuizDone(true);
    }
  };

  const reset = () => { setQuizStep(0); setAnswers([]); setQuizDone(false); };

  return (
    <SharedLayout>
      {/* Hero */}
      <section style={{padding:"112px 24px 80px",background:G.bg,position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse 80% 60% at 50% -10%,rgba(200,169,110,0.10) 0%,transparent 60%)",pointerEvents:"none"}}/>
        <div style={{maxWidth:800,margin:"0 auto",textAlign:"center",position:"relative"}}>
          <motion.p {...fadeUp} style={{fontSize:12,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.1em",color:G.gold,marginBottom:20}}>A Different Approach</motion.p>
          <motion.h1 {...fadeUp} transition={{delay:0.1}} style={{fontFamily:"var(--font-playfair),Georgia,serif",fontWeight:700,fontSize:"clamp(2.8rem,6vw,5rem)",color:G.text,lineHeight:1.1,marginBottom:24}}>
            What is <em style={{fontStyle:"normal",background:"linear-gradient(135deg,#A8854A,#C8A96E,#E8C87E)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>intentional</em> dating?
          </motion.h1>
          <motion.p {...fadeUp} transition={{delay:0.2}} style={{color:G.muted,fontSize:"clamp(1rem,1.4vw,1.15rem)",lineHeight:1.85,maxWidth:600,margin:"0 auto 40px"}}>
            It's the decision to date with clarity, honesty, and purpose — to know what you want before you look for it, and to show up fully for the people you meet. Cymbie was built to make that possible.
          </motion.p>
        </div>
      </section>

      {/* What it means */}
      <section style={{padding:"0 24px 96px",background:G.bg}}>
        <div style={{maxWidth:1100,margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 1fr",gap:32,alignItems:"start"}}>
          <motion.div {...fadeUp} style={{padding:"36px 32px",borderRadius:24,background:G.surface,border:`1px solid ${G.border}`}}>
            <div style={{width:40,height:2,background:G.gold,marginBottom:24}}/>
            <h2 style={{fontFamily:"var(--font-playfair),Georgia,serif",fontWeight:700,fontSize:"1.6rem",color:G.text,marginBottom:20}}>Traditional swiping</h2>
            <div style={{display:"flex",flexDirection:"column",gap:12}}>
              {["Snap judgement from a single photo","Hundreds of matches, few conversations","Optimized for engagement, not connection","Success = time in app","Reward for volume over depth","Ghosting normalized as the default"].map(item=>(
                <div key={item} style={{display:"flex",alignItems:"center",gap:10,padding:"12px 14px",borderRadius:10,background:G.surface2}}>
                  <span style={{color:"#C4526A",fontWeight:700,fontSize:14}}>✗</span>
                  <span style={{color:G.muted,fontSize:13}}>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeUp} transition={{delay:0.1}} style={{padding:"36px 32px",borderRadius:24,background:"linear-gradient(160deg,#1C1810 0%,#151008 100%)",border:"1px solid rgba(200,169,110,0.25)",position:"relative",overflow:"hidden"}}>
            <div style={{position:"absolute",top:0,left:"20%",right:"20%",height:1,background:"linear-gradient(90deg,transparent,rgba(200,169,110,0.7),transparent)"}}/>
            <div style={{width:40,height:2,background:G.gold,marginBottom:24}}/>
            <h2 style={{fontFamily:"var(--font-playfair),Georgia,serif",fontWeight:700,fontSize:"1.6rem",color:G.gold,marginBottom:20}}>Intentional dating with Cymbie</h2>
            <div style={{display:"flex",flexDirection:"column",gap:12}}>
              {["Profile depth reveals personality, values, and goals","Curated daily selection — thoughtfully paced","Success measured by real relationships formed","Features designed to foster real-world connection","Rewards meaningful conversation over volume","Honest decline tools replace ghosting"].map(item=>(
                <div key={item} style={{display:"flex",alignItems:"center",gap:10,padding:"12px 14px",borderRadius:10,background:"rgba(200,169,110,0.06)"}}>
                  <span style={{color:G.gold,fontWeight:700,fontSize:14}}>✓</span>
                  <span style={{color:G.muted,fontSize:13}}>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4 Principles */}
      <section style={{padding:"0 24px 96px",background:G.bg}}>
        <div style={{maxWidth:1100,margin:"0 auto"}}>
          <motion.div {...fadeUp} style={{marginBottom:56}}>
            <p style={{fontSize:12,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.1em",color:G.gold,marginBottom:16}}>Our Principles</p>
            <h2 style={{fontFamily:"var(--font-playfair),Georgia,serif",fontWeight:700,fontSize:"clamp(2rem,3.5vw,3rem)",color:G.text,maxWidth:500,lineHeight:1.2}}>The four principles of intentional dating.</h2>
          </motion.div>
          <div style={{display:"flex",flexDirection:"column",gap:0}}>
            {PRINCIPLES.map((p,i)=>(
              <motion.div key={i} {...fadeUp} transition={{delay:i*0.1}}
                style={{display:"grid",gridTemplateColumns:"100px 1fr",gap:32,padding:"36px 0",borderBottom:i<PRINCIPLES.length-1?`1px solid ${G.border}`:"none"}}
              >
                <div style={{fontFamily:"var(--font-playfair),Georgia,serif",fontWeight:700,fontSize:"clamp(2rem,4vw,3rem)",color:G.border,lineHeight:1}}>{p.num}</div>
                <div>
                  <h3 style={{fontFamily:"var(--font-playfair),Georgia,serif",fontWeight:700,fontSize:"clamp(1.2rem,2vw,1.5rem)",color:G.text,marginBottom:12}}>{p.title}</h3>
                  <p style={{color:G.muted,lineHeight:1.85,maxWidth:640,fontSize:"0.95rem"}}>{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive mini quiz */}
      <section style={{padding:"80px 24px 96px",background:G.surface,borderTop:`1px solid ${G.border}`}}>
        <div style={{maxWidth:660,margin:"0 auto"}}>
          <motion.div {...fadeUp} style={{textAlign:"center",marginBottom:48}}>
            <p style={{fontSize:12,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.1em",color:G.gold,marginBottom:16}}>Interactive</p>
            <h2 style={{fontFamily:"var(--font-playfair),Georgia,serif",fontWeight:700,fontSize:"clamp(1.8rem,3vw,2.5rem)",color:G.text,marginBottom:16}}>Discover your dating style.</h2>
            <p style={{color:G.muted,lineHeight:1.8,fontSize:"0.9rem"}}>Answer 4 quick questions and we'll share what your answers reveal about how you connect.</p>
          </motion.div>

          <div style={{borderRadius:24,background:G.bg,border:`1px solid ${G.border}`,padding:"40px 36px",position:"relative",overflow:"hidden"}}>
            <div style={{position:"absolute",top:0,left:"30%",right:"30%",height:1,background:"linear-gradient(90deg,transparent,rgba(200,169,110,0.5),transparent)"}}/>

            {/* Progress */}
            {!quizDone&&(
              <div style={{marginBottom:28}}>
                <div style={{display:"flex",justifyContent:"space-between",marginBottom:8}}>
                  <span style={{fontSize:12,color:G.dim}}>Question {quizStep+1} of {QUIZ_QUESTIONS.length}</span>
                  <span style={{fontSize:12,color:G.gold}}>{Math.round(((quizStep)/QUIZ_QUESTIONS.length)*100)}% complete</span>
                </div>
                <div style={{height:3,background:G.border,borderRadius:100}}>
                  <div style={{height:"100%",background:`linear-gradient(90deg,#A8854A,#C8A96E)`,borderRadius:100,width:`${(quizStep/QUIZ_QUESTIONS.length)*100}%`,transition:"width 0.4s ease"}}/>
                </div>
              </div>
            )}

            <AnimatePresence mode="wait">
              {quizDone ? (
                <motion.div key="done" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} style={{textAlign:"center",padding:"20px 0"}}>
                  <div style={{width:64,height:64,borderRadius:"50%",background:G.goldMuted,border:"1px solid rgba(200,169,110,0.3)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 20px",fontSize:28}}>💛</div>
                  <h3 style={{fontFamily:"var(--font-playfair),Georgia,serif",fontWeight:700,fontSize:"1.5rem",color:G.text,marginBottom:12}}>You're a Depth-First Connector.</h3>
                  <p style={{color:G.muted,lineHeight:1.8,fontSize:"0.9rem",marginBottom:28}}>
                    You value authentic, meaningful interactions over volume. You'd rather have one incredible conversation than ten surface-level ones. Cymbie was built for people exactly like you.
                  </p>
                  <div style={{display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap"}}>
                    <Link href="/download" style={{display:"inline-flex",alignItems:"center",gap:6,padding:"12px 24px",borderRadius:100,background:"linear-gradient(135deg,#A8854A,#C8A96E)",color:"#0C0B09",fontWeight:700,fontSize:13,textDecoration:"none"}}>
                      Download Cymbie <ArrowRight size={13}/>
                    </Link>
                    <button onClick={reset} style={{padding:"12px 20px",borderRadius:100,background:"none",border:`1px solid ${G.border}`,color:G.muted,fontSize:13,cursor:"pointer",fontFamily:"inherit"}}>Retake quiz</button>
                  </div>
                </motion.div>
              ) : (
                <motion.div key={quizStep} initial={{opacity:0,x:20}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-20}} transition={{duration:0.35}}>
                  <h3 style={{fontFamily:"var(--font-playfair),Georgia,serif",fontWeight:700,fontSize:"clamp(1.1rem,2vw,1.4rem)",color:G.text,marginBottom:28,lineHeight:1.3}}>
                    {QUIZ_QUESTIONS[quizStep].q}
                  </h3>
                  <div style={{display:"flex",flexDirection:"column",gap:10}}>
                    {QUIZ_QUESTIONS[quizStep].options.map((opt,i)=>(
                      <button key={i} onClick={()=>handleAnswer(opt)}
                        style={{textAlign:"left",padding:"16px 18px",borderRadius:14,background:G.surface,border:`1px solid ${G.border}`,color:G.muted,fontSize:14,cursor:"pointer",fontFamily:"inherit",display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,transition:"all 0.15s"}}
                        onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.borderColor="rgba(200,169,110,0.4)";(e.currentTarget as HTMLElement).style.color=G.text;}}
                        onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.borderColor=G.border;(e.currentTarget as HTMLElement).style.color=G.muted;}}
                      >
                        {opt}
                        <ChevronRight size={14} style={{flexShrink:0}}/>
                      </button>
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


