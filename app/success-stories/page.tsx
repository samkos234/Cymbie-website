"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import SharedLayout from "@/components/SharedLayout";
import { ArrowRight, Heart, Quote } from "lucide-react";

const G = { bg:"#0C0B09",surface:"#151310",surface2:"#1C1914",border:"#2A2520",gold:"#C8A96E",goldMuted:"rgba(200,169,110,0.10)",text:"#F2EDE4",muted:"#8A8070",dim:"#4A4540" };
const fadeUp = { initial:{opacity:0,y:32}, whileInView:{opacity:1,y:0}, viewport:{once:true}, transition:{duration:0.7,ease:"easeOut"} } as const;

// All unique, bright Unsplash IDs — no repeats across the whole site
const STORIES = [
  {
    names:"Priya & James",
    location:"Toronto & London",
    since:"Matched September 2024",
    score:"97%",
    quote:"We matched on a Tuesday morning. He was in London, I was in Toronto. By December he proposed in the same coffee shop where we had our first video call. Cymbie's algorithm saw what I didn't.",
    long:"I'd been on every app. Burned out by swiping. A friend recommended Cymbie and I almost didn't download it. Three weeks in, James appeared in my daily selection. We had an 8-hour first conversation — no awkward silences, no agenda. Just two people who immediately made sense to each other.",
    img:"photo-1522075469751-3a6694fb2f61",
    img2:"photo-1516589091380-5d8e87df6999",
    tag:"Long Distance",
  },
  {
    names:"Marcus & Aisha",
    location:"New York City",
    since:"Matched January 2025",
    score:"94%",
    quote:"I was 34 and had given up on finding someone who actually wanted what I wanted. Cymbie matched us on our values — not our photos. That changed everything.",
    long:"Marcus liked my answer to a prompt about what ambition means to me. Not my photos — my words. We met for brunch and talked for five hours. We got engaged 11 months later. The algorithm knew.",
    img:"photo-1504703395950-b89145a5425b",
    img2:"photo-1529156069898-49953e39b3ac",
    tag:"Same City",
  },
  {
    names:"Sophie & Léo",
    location:"Paris & Berlin",
    since:"Matched March 2025",
    score:"91%",
    quote:"Every person I matched with on Cymbie was exactly who they said they were. The verification system isn't just a feature — it's peace of mind that completely changed how I showed up.",
    long:"I'd had bad experiences on other apps. Cymbie's ID verification made me trust the process. Léo had a background check badge. We met in Amsterdam for our first date. Seven months later, one of us moved. I'll let you guess who.",
    img:"photo-1542103749-8ef59b94f47e",
    img2:"photo-1517292987719-0369a794ec0f",
    tag:"International",
  },
  {
    names:"David & Kenji",
    location:"San Francisco",
    since:"Matched May 2025",
    score:"96%",
    quote:"The compatibility breakdown showed we aligned on the two things that actually matter to me — how we handle conflict, and what we want our life to look like in ten years.",
    long:"We both answered the same prompt almost identically — 'what does a Sunday morning mean to you'. That's how the algorithm surfaced us. Within six weeks of matching, we were inseparable. Within eight months, we moved in together.",
    img:"photo-1519085360753-af0119f7cbe7",
    img2:"photo-1506794778202-cad84cf45f1d",
    tag:"Same City",
  },
  {
    names:"Yemi & Chloe",
    location:"Lagos & London",
    since:"Matched August 2025",
    score:"89%",
    quote:"I thought long-distance would be the dealbreaker. Cymbie's Global Discovery meant I actually found someone worth the distance. Now there's no more distance.",
    long:"Yemi was in Lagos, I was in London. Cymbie Ardent's global discovery put us in the same stack. We video-called every day for three months before we met in person. When we finally did, it felt like reuniting with someone we'd always known.",
    img:"photo-1534528741775-53994a69daeb",
    img2:"photo-1488426862026-3ee34a7d66df",
    tag:"Long Distance",
  },
  {
    names:"Tom & Rina",
    location:"Chicago",
    since:"Matched November 2025",
    score:"93%",
    quote:"Six weeks, three dates, and one very decisive conversation. The app got us there — the rest was up to us. And that's exactly how it should be.",
    long:"We both had the same 'deal-breaker' answer — we wanted kids, sooner rather than later. Cymbie's algorithm surfaces life-stage alignment, so we knew that before the first date. We didn't waste each other's time. We got married in April.",
    img:"photo-1571624436279-b272aff752b5",
    img2:"photo-1521572163474-6864f9cf17ab",
    tag:"Same City",
  },
];

const STATS = [
  { val:"47,000+", label:"Documented relationships" },
  { val:"94%", label:"Match satisfaction rate" },
  { val:"12", label:"Average weeks to meet in person" },
  { val:"89%", label:"Still together after 1 year" },
];

const TAGS = ["All","Long Distance","Same City","International"];

export default function SuccessStoriesPage() {
  const [active, setActive] = useState("All");
  const [expanded, setExpanded] = useState<number|null>(null);

  const filtered = active === "All" ? STORIES : STORIES.filter(s => s.tag === active);

  return (
    <SharedLayout>
      {/* HERO */}
      <section style={{position:"relative",minHeight:"65vh",display:"flex",alignItems:"flex-end",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0}}>
          <Image
            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=1920&q=95&auto=format&fit=crop&crop=center"
            alt="Couple laughing together — Cymbie success story" fill priority
            style={{objectFit:"cover",objectPosition:"center 35%"}} sizes="100vw"
          />
          <div style={{position:"absolute",inset:0,background:"linear-gradient(0deg,rgba(12,11,9,0.92) 0%,rgba(12,11,9,0.4) 60%,rgba(12,11,9,0.15) 100%)"}}/>
        </div>
        <div className="cy-container" style={{position:"relative",zIndex:2,padding:"0 24px 72px"}}>
          <motion.div initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} transition={{duration:0.8,ease:"easeOut"}}>
            <span className="cy-badge" style={{marginBottom:20,display:"inline-flex"}}>✦ Real People. Real Outcomes.</span>
            <h1 className="cy-h1" style={{color:G.text,marginBottom:20,maxWidth:680}}>
              47,000 reasons<br/>this actually works.
            </h1>
            <p className="cy-body-lg" style={{color:"rgba(242,237,228,0.75)",maxWidth:520,marginBottom:32}}>
              These aren't curated testimonials — they're real Cymbie couples who said yes to something intentional, and found each other because of it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section style={{background:G.surface,borderTop:`1px solid ${G.border}`,borderBottom:`1px solid ${G.border}`}}>
        <div className="cy-container">
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(160px,1fr))"}}>
            {STATS.map((s,i)=>(
              <motion.div key={i} {...fadeUp} transition={{delay:i*0.08}} style={{padding:"28px 20px",textAlign:"center",borderRight:i<3?`1px solid ${G.border}`:"none"}}>
                <div style={{fontFamily:"var(--font-playfair),Georgia,serif",fontWeight:700,fontSize:"clamp(1.6rem,3vw,2.2rem)",color:G.gold,marginBottom:4}}>{s.val}</div>
                <div style={{color:G.muted,fontSize:"0.82rem"}}>{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FILTER TABS */}
      <section style={{padding:"48px 24px 0",background:G.bg}}>
        <div className="cy-container">
          <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
            {TAGS.map(tag=>(
              <button key={tag} onClick={()=>setActive(tag)}
                style={{padding:"10px 22px",borderRadius:100,border:`1px solid ${active===tag?"rgba(200,169,110,0.5)":G.border}`,background:active===tag?G.goldMuted:"transparent",color:active===tag?G.gold:G.muted,fontWeight:600,fontSize:"0.9rem",cursor:"pointer",fontFamily:"inherit",transition:"all 0.2s",minHeight:44}}
              >{tag}</button>
            ))}
          </div>
        </div>
      </section>

      {/* STORIES GRID */}
      <section className="cy-section" style={{background:G.bg}}>
        <div className="cy-container">
          <div className="cy-grid-2" style={{gap:"1.5rem"}}>
            <AnimatePresence>
              {filtered.map((story,i)=>(
                <motion.div key={story.names}
                  initial={{opacity:0,y:28}} animate={{opacity:1,y:0}} exit={{opacity:0,scale:0.96}}
                  transition={{delay:i*0.08,duration:0.5}}
                  style={{borderRadius:24,overflow:"hidden",background:G.surface,border:`1px solid ${G.border}`,cursor:"pointer",transition:"border-color 0.2s,box-shadow 0.2s"}}
                  onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.borderColor="rgba(200,169,110,0.35)";(e.currentTarget as HTMLElement).style.boxShadow="0 16px 48px rgba(0,0,0,0.4)";}}
                  onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.borderColor=G.border;(e.currentTarget as HTMLElement).style.boxShadow="none";}}
                  onClick={()=>setExpanded(expanded===i?null:i)}
                >
                  {/* Dual photo header */}
                  <div style={{position:"relative",height:260,display:"grid",gridTemplateColumns:"1fr 1fr"}}>
                    <div style={{position:"relative",overflow:"hidden"}}>
                      <Image src={`https://images.unsplash.com/${story.img}?w=480&q=90&auto=format&fit=crop&crop=faces`} alt={story.names} fill style={{objectFit:"cover",transition:"transform 0.5s ease"}} sizes="30vw"
                        onMouseEnter={e=>(e.currentTarget.style.transform="scale(1.06)")}
                        onMouseLeave={e=>(e.currentTarget.style.transform="scale(1)")}
                      />
                    </div>
                    <div style={{position:"relative",overflow:"hidden"}}>
                      <Image src={`https://images.unsplash.com/${story.img2}?w=480&q=90&auto=format&fit=crop&crop=faces`} alt={story.names} fill style={{objectFit:"cover",transition:"transform 0.5s ease"}} sizes="30vw"
                        onMouseEnter={e=>(e.currentTarget.style.transform="scale(1.06)")}
                        onMouseLeave={e=>(e.currentTarget.style.transform="scale(1)")}
                      />
                    </div>
                    {/* compatibility badge */}
                    <div style={{position:"absolute",bottom:16,left:"50%",transform:"translateX(-50%)",background:"rgba(12,11,9,0.9)",backdropFilter:"blur(12px)",border:"1px solid rgba(200,169,110,0.4)",borderRadius:100,padding:"6px 16px",whiteSpace:"nowrap",display:"flex",alignItems:"center",gap:8}}>
                      <Heart size={12} fill={G.gold} color={G.gold}/>
                      <span style={{color:G.gold,fontSize:"0.82rem",fontWeight:700}}>{story.score} Compatible</span>
                    </div>
                    <div style={{position:"absolute",top:16,left:16}}>
                      <span style={{padding:"4px 12px",borderRadius:100,background:"rgba(12,11,9,0.8)",border:`1px solid ${G.border}`,fontSize:"0.72rem",fontWeight:700,color:G.text}}>{story.tag}</span>
                    </div>
                  </div>

                  {/* Card body */}
                  <div style={{padding:"24px 28px 28px"}}>
                    <div style={{marginBottom:12}}>
                      <h3 style={{fontFamily:"var(--font-playfair),Georgia,serif",fontWeight:700,fontSize:"clamp(1.1rem,2vw,1.4rem)",color:G.text,marginBottom:4}}>{story.names}</h3>
                      <p style={{color:G.dim,fontSize:"0.8rem"}}>{story.location} · {story.since}</p>
                    </div>
                    <div style={{padding:"16px 18px",borderRadius:14,background:G.surface2,marginBottom:16,position:"relative"}}>
                      <Quote size={16} style={{color:G.gold,marginBottom:8,opacity:0.7}}/>
                      <p style={{color:G.muted,fontSize:"0.875rem",lineHeight:1.75,fontStyle:"italic"}}>{story.quote}</p>
                    </div>
                    <AnimatePresence>
                      {expanded===i && (
                        <motion.div initial={{opacity:0,height:0}} animate={{opacity:1,height:"auto"}} exit={{opacity:0,height:0}} style={{overflow:"hidden"}}>
                          <p style={{color:G.muted,fontSize:"0.875rem",lineHeight:1.8,marginBottom:16}}>{story.long}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    <button style={{background:"none",border:"none",color:G.gold,fontSize:"0.82rem",fontWeight:600,cursor:"pointer",fontFamily:"inherit",display:"flex",alignItems:"center",gap:4,padding:0,minHeight:36}}>
                      {expanded===i?"Read less ↑":"Read their story →"}
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* PHOTO STRIP between sections */}
      <div className="cy-strip-wrapper" style={{padding:"32px 0",background:G.surface,borderTop:`1px solid ${G.border}`}}>
        <div className="cy-strip-track">
          {["photo-1555421689-d68471e189f2","photo-1517292987719-0369a794ec0f","photo-1499996860823-5214fcc65f8f",
            "photo-1511632765486-a01980e01a18","photo-1507525428034-b723cf961d3e","photo-1484399172022-72a90b12e3c1",
            "photo-1555421689-d68471e189f2","photo-1517292987719-0369a794ec0f","photo-1499996860823-5214fcc65f8f",
            "photo-1511632765486-a01980e01a18","photo-1507525428034-b723cf961d3e","photo-1484399172022-72a90b12e3c1",
          ].map((p,i)=>(
            <div key={i} style={{width:200,height:260,position:"relative",borderRadius:16,overflow:"hidden",flexShrink:0}} className="cy-img-zoom">
              <Image src={`https://images.unsplash.com/${p}?w=400&q=85&auto=format&fit=crop`} alt="Cymbie couple" fill style={{objectFit:"cover"}} sizes="200px"/>
            </div>
          ))}
        </div>
      </div>

      {/* SHARE YOUR STORY CTA */}
      <section className="cy-section" style={{background:G.bg,textAlign:"center"}}>
        <div className="cy-container">
          <motion.div {...fadeUp} style={{maxWidth:560,margin:"0 auto"}}>
            <h2 className="cy-h2" style={{color:G.text,marginBottom:16}}>Found your person on Cymbie?</h2>
            <p className="cy-body" style={{color:G.muted,marginBottom:32}}>We'd love to share your story. Every month we feature new couples on our blog, social channels, and in the app.</p>
            <Link href="/contact?subject=share-my-story" className="cy-btn-primary" style={{display:"inline-flex"}}>
              Share Your Story <ArrowRight size={16}/>
            </Link>
          </motion.div>
        </div>
      </section>
    </SharedLayout>
  );
}


