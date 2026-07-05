"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import SharedLayout from "@/components/SharedLayout";
import { ArrowRight, Heart, Brain, Shield, MessageCircle, Star, CheckCircle2, ChevronDown } from "lucide-react";

const G = { bg:"#0C0B09",surface:"#151310",surface2:"#1C1914",border:"#2A2520",gold:"#C8A96E",goldMuted:"rgba(200,169,110,0.10)",text:"#F2EDE4",muted:"#8A8070",dim:"#4A4540" };
const fadeUp = { initial:{opacity:0,y:32}, whileInView:{opacity:1,y:0}, viewport:{once:true}, transition:{duration:0.75,ease:"easeOut"} } as const;

const STEPS = [
  {
    n:"01", label:"Download & create your profile",
    title:"Build a profile that shows who you actually are.",
    desc:"Cymbie profiles go beyond photos. Answer 6 curated prompts that reveal your values, personality, and what you're genuinely looking for. Add your best photos — the verification system ensures everyone else does too.",
    img:"photo-1508214751196-bcfd4ca60f91",
    bullets:["Photo-verified from day one","Thoughtful prompts, not generic bios","Values and life-stage preferences","Relationship intention clarity"],
  },
  {
    n:"02", label:"Get your daily curated selection",
    title:"5–7 compatible people, chosen for you every morning.",
    desc:"At 8am every day, Cymbie selects 5 to 7 people who align with your compatibility profile across all 7 signals. No infinite scroll. No algorithmic manipulation. Just a genuinely considered selection of real people.",
    img:"photo-1543269664-56d93c1b41a6",
    bullets:["Limited selection prevents overwhelm","Algorithm accounts for 7 compatibility signals","Life-stage and intention matching","Preference for mutual compatibility"],
  },
  {
    n:"03", label:"Connect with depth",
    title:"Like an answer. Start a real conversation.",
    desc:"On Cymbie, you like specific photos or prompt answers — not just the whole person. This forces you to actually read someone's profile and gives you a genuine reason to reach out. First messages reference something real.",
    img:"photo-1514190051997-0f6f39ca5cde",
    bullets:["Comment on specific prompts or photos","AI Conversation Starters (Ardent)","Read receipts on Warm & Ardent","No ghosting tools — gentle decline option"],
  },
  {
    n:"04", label:"Meet in person",
    title:"We actively push you to meet offline.",
    desc:"After 7 days of matching, Cymbie sends a gentle nudge to suggest meeting in person. We provide date idea prompts based on your shared interests, and our safe dating guide covers everything from the first date to the fifth.",
    img:"photo-1499996860823-5214fcc65f8f",
    bullets:["In-app date idea suggestions","7-day meeting nudge","Safe dating guide integration","Share location with a trusted contact"],
  },
];

const HOW_ALGO = [
  { pct:"22%", label:"Values alignment" },
  { pct:"18%", label:"Communication style" },
  { pct:"15%", label:"Life stage & goals" },
  { pct:"14%", label:"Emotional intelligence" },
  { pct:"12%", label:"Attachment style" },
  { pct:"10%", label:"Interests & lifestyle" },
  { pct:"9%", label:"Physical preferences" },
];

const FAQS = [
  { q:"How many matches will I get per day?", a:"Free members receive 5 curated matches daily. Warm members receive up to 7, and Ardent members receive up to 10 with global discovery enabled." },
  { q:"Is Cymbie available in my country?", a:"Cymbie is live in 60+ countries. Free and Warm tiers are available worldwide. Ardent's global discovery feature lets you find people across all supported regions." },
  { q:"How does the compatibility score work?", a:"Your compatibility score is calculated across 7 weighted signals. The score represents the probability of long-term relationship satisfaction based on our research with 2 million couples." },
  { q:"Can I use Cymbie for free?", a:"Yes. Cymbie's free tier includes everything you need to find a genuine connection — daily curated matches, full messaging, and photo verification. Premium plans unlock additional tools." },
];

export default function HowItWorksPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [openFaq, setOpenFaq] = useState<number|null>(null);

  return (
    <SharedLayout>
      {/* HERO */}
      <section style={{position:"relative",minHeight:"65vh",display:"flex",alignItems:"flex-end",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0}}>
          <Image src="https://images.unsplash.com/photo-1555421689-d68471e189f2?w=1920&q=95&auto=format&fit=crop&crop=center"
            alt="Couple dancing joyfully" fill priority sizes="100vw" style={{objectFit:"cover",objectPosition:"center 35%"}}/>
          <div style={{position:"absolute",inset:0,background:"linear-gradient(0deg,rgba(12,11,9,0.95) 0%,rgba(12,11,9,0.5) 55%,rgba(12,11,9,0.1) 100%)"}}/>
        </div>
        <div className="cy-container" style={{position:"relative",zIndex:2,padding:"0 24px 72px"}}>
          <motion.div initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} transition={{duration:0.8}}>
            <span className="cy-badge" style={{marginBottom:24,display:"inline-flex"}}>How Cymbie Works</span>
            <h1 className="cy-h1" style={{color:G.text,marginBottom:20,maxWidth:680}}>
              Four steps to a connection<br/><span className="cy-gradient-text">worth keeping.</span>
            </h1>
            <p className="cy-body-lg" style={{color:"rgba(242,237,228,0.75)",maxWidth:520}}>
              No gimmicks. No infinite browsing. Just a thoughtfully designed process that respects your time and prioritises your outcome.
            </p>
          </motion.div>
        </div>
      </section>

      {/* STEP NAVIGATOR */}
      <section className="cy-section" style={{background:G.bg}}>
        <div className="cy-container">
          {/* Step pills */}
          <div style={{display:"flex",gap:8,marginBottom:48,flexWrap:"wrap"}}>
            {STEPS.map((s,i)=>(
              <button key={i} onClick={()=>setActiveStep(i)}
                style={{padding:"10px 20px",borderRadius:100,border:`1px solid ${activeStep===i?"rgba(200,169,110,0.5)":G.border}`,background:activeStep===i?G.goldMuted:"transparent",color:activeStep===i?G.gold:G.muted,fontWeight:600,fontSize:"0.875rem",cursor:"pointer",fontFamily:"inherit",transition:"all 0.2s",minHeight:44}}
              >{s.n} {s.label}</button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div key={activeStep} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-20}} transition={{duration:0.4}}>
              <div className="cy-grid-2" style={{gap:"clamp(2rem,5vw,5rem)",alignItems:"center"}}>
                {/* Text */}
                <div>
                  <div style={{fontFamily:"var(--font-playfair),Georgia,serif",fontWeight:700,fontSize:"clamp(3rem,6vw,5rem)",color:G.border,lineHeight:1,marginBottom:16}}>{STEPS[activeStep].n}</div>
                  <h2 className="cy-h2" style={{color:G.text,marginBottom:20}}>{STEPS[activeStep].title}</h2>
                  <p className="cy-body" style={{color:G.muted,marginBottom:28}}>{STEPS[activeStep].desc}</p>
                  <div style={{display:"flex",flexDirection:"column",gap:10}}>
                    {STEPS[activeStep].bullets.map((b,i)=>(
                      <div key={i} style={{display:"flex",gap:12,alignItems:"center"}}>
                        <CheckCircle2 size={16} style={{color:G.gold,flexShrink:0}}/>
                        <span style={{color:G.muted,fontSize:"0.9rem"}}>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Image */}
                <div style={{position:"relative",height:"clamp(300px,45vw,520px)",borderRadius:24,overflow:"hidden"}} className="cy-img-zoom">
                  <Image
                    src={`https://images.unsplash.com/${STEPS[activeStep].img}?w=800&q=92&auto=format&fit=crop`}
                    alt={STEPS[activeStep].title} fill style={{objectFit:"cover"}} sizes="50vw"
                  />
                  <div style={{position:"absolute",inset:0,background:"linear-gradient(0deg,rgba(12,11,9,0.45) 0%,transparent 60%)"}}/>
                  {/* Step progress dots */}
                  <div style={{position:"absolute",bottom:20,left:"50%",transform:"translateX(-50%)",display:"flex",gap:6}}>
                    {STEPS.map((_,i)=>(
                      <button key={i} onClick={()=>setActiveStep(i)}
                        style={{width:i===activeStep?24:8,height:8,borderRadius:100,background:i===activeStep?"#C8A96E":"rgba(242,237,228,0.3)",border:"none",cursor:"pointer",transition:"all 0.3s",padding:0}}/>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* PHOTO STRIP */}
      <div className="cy-strip-wrapper" style={{background:G.surface,borderTop:`1px solid ${G.border}`,padding:"32px 0"}}>
        <div className="cy-strip-track">
          {["photo-1484399172022-72a90b12e3c1","photo-1507525428034-b723cf961d3e","photo-1488426862026-3ee34a7d66df",
            "photo-1521572163474-6864f9cf17ab","photo-1504703395950-b89145a5425b","photo-1506794778202-cad84cf45f1d",
            "photo-1484399172022-72a90b12e3c1","photo-1507525428034-b723cf961d3e","photo-1488426862026-3ee34a7d66df",
            "photo-1521572163474-6864f9cf17ab","photo-1504703395950-b89145a5425b","photo-1506794778202-cad84cf45f1d",
          ].map((p,i)=>(
            <div key={i} style={{width:190,height:250,borderRadius:16,overflow:"hidden",position:"relative",flexShrink:0}} className="cy-img-zoom">
              <Image src={`https://images.unsplash.com/${p}?w=380&q=85&auto=format&fit=crop`} alt="Cymbie member" fill style={{objectFit:"cover"}} sizes="190px"/>
            </div>
          ))}
        </div>
      </div>

      {/* THE ALGORITHM — visual bars */}
      <section className="cy-section" style={{background:G.bg}}>
        <div className="cy-container">
          <div className="cy-grid-2" style={{gap:"clamp(2rem,5vw,5rem)",alignItems:"center"}}>
            <motion.div {...fadeUp}>
              <span className="cy-badge" style={{marginBottom:20,display:"inline-flex"}}>Compatibility Science</span>
              <h2 className="cy-h2" style={{color:G.text,marginBottom:16}}>The 7 signals that predict lasting love.</h2>
              <p className="cy-body" style={{color:G.muted,marginBottom:36}}>
                Our matching engine was trained on data from 2 million real relationships and validated against peer-reviewed psychological research. Here's exactly how it weights each factor.
              </p>
              <Link href="/compatibility" className="cy-btn-outline" style={{display:"inline-flex"}}>
                Full Algorithm Breakdown <ArrowRight size={14}/>
              </Link>
            </motion.div>
            <div style={{display:"flex",flexDirection:"column",gap:12}}>
              {HOW_ALGO.map((s,i)=>(
                <motion.div key={i} initial={{opacity:0,x:30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:i*0.08,duration:0.5}}>
                  <div style={{display:"flex",justifyContent:"space-between",marginBottom:6}}>
                    <span style={{color:G.text,fontSize:"0.875rem",fontWeight:600}}>{s.label}</span>
                    <span style={{color:G.gold,fontSize:"0.875rem",fontWeight:700}}>{s.pct}</span>
                  </div>
                  <div style={{height:6,background:G.border,borderRadius:100,overflow:"hidden"}}>
                    <motion.div initial={{width:0}} whileInView={{width:s.pct}} viewport={{once:true}} transition={{duration:0.9,delay:i*0.08+0.2,ease:"easeOut"}}
                      style={{height:"100%",background:`linear-gradient(90deg,#A8854A,#C8A96E)`,borderRadius:100}}/>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* QUICK FAQS */}
      <section className="cy-section" style={{background:G.surface,borderTop:`1px solid ${G.border}`}}>
        <div className="cy-container">
          <motion.div {...fadeUp} style={{textAlign:"center",marginBottom:48}}>
            <h2 className="cy-h2" style={{color:G.text}}>Quick answers.</h2>
          </motion.div>
          <div style={{maxWidth:720,margin:"0 auto",display:"flex",flexDirection:"column",gap:8}}>
            {FAQS.map((f,i)=>(
              <motion.div key={i} {...fadeUp} transition={{delay:i*0.08}} style={{borderRadius:16,background:G.bg,border:`1px solid ${openFaq===i?"rgba(200,169,110,0.3)":G.border}`,overflow:"hidden",transition:"border-color 0.2s"}}>
                <button onClick={()=>setOpenFaq(openFaq===i?null:i)}
                  style={{width:"100%",padding:"20px 24px",display:"flex",justifyContent:"space-between",alignItems:"center",background:"none",border:"none",cursor:"pointer",fontFamily:"inherit",gap:16,minHeight:60}}>
                  <span style={{fontWeight:600,fontSize:"clamp(0.9rem,1.5vw,1rem)",color:G.text,textAlign:"left"}}>{f.q}</span>
                  <ChevronDown size={18} style={{color:G.dim,flexShrink:0,transform:openFaq===i?"rotate(180deg)":"rotate(0)",transition:"transform 0.25s"}}/>
                </button>
                <AnimatePresence>
                  {openFaq===i&&(
                    <motion.div initial={{height:0}} animate={{height:"auto"}} exit={{height:0}} style={{overflow:"hidden"}}>
                      <p style={{padding:"0 24px 20px",color:G.muted,fontSize:"0.9rem",lineHeight:1.8}}>{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
          <div style={{textAlign:"center",marginTop:32}}>
            <Link href="/faq" className="cy-btn-outline" style={{display:"inline-flex"}}>Full FAQ <ArrowRight size={14}/></Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{position:"relative",overflow:"hidden",minHeight:340,display:"flex",alignItems:"center"}}>
        <div style={{position:"absolute",inset:0}}>
          <Image src="https://images.unsplash.com/photo-1571624436279-b272aff752b5?w=1920&q=90&auto=format&fit=crop&crop=center" alt="Woman smiling" fill style={{objectFit:"cover",objectPosition:"center 30%"}} sizes="100vw"/>
          <div style={{position:"absolute",inset:0,background:"rgba(12,11,9,0.88)"}}/>
        </div>
        <div className="cy-container" style={{position:"relative",zIndex:2,padding:"clamp(3rem,6vw,5rem) 24px",textAlign:"center"}}>
          <motion.div {...fadeUp} style={{maxWidth:520,margin:"0 auto"}}>
            <h2 className="cy-h2" style={{color:G.text,marginBottom:20}}>Ready to try it for yourself?</h2>
            <p className="cy-body" style={{color:G.muted,marginBottom:32}}>Free to download. No credit card required.</p>
            <Link href="/download" className="cy-btn-primary" style={{display:"inline-flex",fontSize:"1.05rem",padding:"1rem 2rem"}}>
              Download Cymbie Free <ArrowRight size={16}/>
            </Link>
          </motion.div>
        </div>
      </section>
    </SharedLayout>
  );
}


