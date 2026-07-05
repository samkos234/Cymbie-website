"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import SharedLayout from "@/components/SharedLayout";
import { Search, ChevronDown, ArrowRight } from "lucide-react";

const G = { bg:"#0C0B09",surface:"#151310",surface2:"#1C1914",border:"#2A2520",gold:"#C8A96E",goldMuted:"rgba(200,169,110,0.10)",text:"#F2EDE4",muted:"#8A8070",dim:"#4A4540" };
const fadeUp = { initial:{opacity:0,y:32}, whileInView:{opacity:1,y:0}, viewport:{once:true}, transition:{duration:0.75,ease:"easeOut"} } as const;

const FAQS = [
  { cat:"Getting Started", q:"How do I create a Cymbie account?", a:"Download Cymbie from the App Store or Google Play. You'll be guided through creating your profile — photos, profile prompts, verification, and preferences. The whole setup takes about 10 minutes and every step matters for your match quality." },
  { cat:"Getting Started", q:"Is Cymbie available in my country?", a:"Cymbie is live in 60+ countries. The free tier and Warm subscription are available globally. Ardent's global discovery feature unlocks matches across all 60+ supported regions." },
  { cat:"Getting Started", q:"What makes Cymbie different from other apps?", a:"Three things: curated daily matches (not infinite scroll), deep compatibility matching across 7 signals (not just distance and photos), and a business model designed to help you find a relationship — not keep you on the app forever." },
  { cat:"Matching", q:"How many matches will I get each day?", a:"Free members receive 5 curated matches daily. Warm members receive up to 7. Ardent members receive up to 10, with global discovery enabled. We deliberately cap this — quality over quantity is the entire point." },
  { cat:"Matching", q:"How does the compatibility algorithm work?", a:"Our algorithm scores compatibility across 7 weighted dimensions: values alignment (22%), communication style (18%), life stage and goals (15%), emotional intelligence (14%), attachment style (12%), interests and lifestyle (10%), and physical preferences (9%). Scores are mutual — you both have to match well for either of you to see each other." },
  { cat:"Matching", q:"Can I see who liked me without a premium plan?", a:"Free members cannot see who liked them — you'll only find out when you like someone back and it's a match. Warm and Ardent members can see the full list of people who have already liked them, letting you reach out first with full confidence." },
  { cat:"Premium", q:"What's included in the Warm plan?", a:"Warm ($24/month) includes unlimited matches, the ability to see who liked you, advanced compatibility filters (values, life stage, intentions), 5 Super Likes per day, weekly Profile Boost, read receipts, and government ID verification badge." },
  { cat:"Premium", q:"What does Ardent include that Warm doesn't?", a:"Ardent ($48/month) adds global discovery across 60+ countries, AI Conversation Starters, Incognito Mode, daily Profile Boost, advanced profile analytics, optional background check badge, and priority customer support." },
  { cat:"Premium", q:"Can I cancel my subscription anytime?", a:"Yes. Cancel anytime in your App Store or Google Play account settings. You'll retain access to your plan's features until the end of the billing period. Cymbie does not directly issue refunds for in-app purchases — refund requests go through your app store." },
  { cat:"Safety", q:"How does Cymbie verify members?", a:"All new members complete a live photo selfie matched against their profile photos — this confirms you're real and present. Warm and Ardent members can submit a government ID through our partner Onfido for full ID verification. Ardent members can also opt into a voluntary background check. Your ID is never stored by Cymbie." },
  { cat:"Safety", q:"How do I report someone?", a:"Tap the three-dot menu on any profile or conversation and select 'Report'. Our 24/7 safety team reviews all reports within 2 hours. You can report someone even after you've unmatched them by going to your conversation history." },
  { cat:"Safety", q:"What is Cymbie's policy on fake profiles?", a:"Zero tolerance. Our AI monitors new accounts continuously and removes fake profiles within minutes of creation. Our documented fake profile rate is under 0.1% — the lowest of any major dating platform. Verified members see a clear badge on their profile." },
  { cat:"Privacy", q:"Who can see my profile?", a:"Your profile is shown only to people you've been matched with by the algorithm — it's not a searchable directory. On Ardent, you can enable Incognito Mode to become invisible until you actively like someone." },
  { cat:"Privacy", q:"Can I delete my account and all my data?", a:"Yes. Go to Settings → Account → Delete Account. Deletion is permanent and immediate. Some data may be retained for up to 3 years in anonymised form for legal compliance and fraud prevention. For full immediate erasure, email privacy@cymbie.co." },
  { cat:"Privacy", q:"Does Cymbie sell my personal data?", a:"No. Cymbie does not sell, rent, or lease personal data to any third party. We use data only to operate and improve the platform. See our Privacy Policy for full details." },
];

const CATS = ["All", ...Array.from(new Set(FAQS.map(f=>f.cat)))];

export default function FAQPage() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("All");
  const [open, setOpen] = useState<number|null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = FAQS.filter(f=>{
    const matchCat = cat==="All" || f.cat===cat;
    const matchQ = !query || f.q.toLowerCase().includes(query.toLowerCase()) || f.a.toLowerCase().includes(query.toLowerCase());
    return matchCat && matchQ;
  });

  return (
    <SharedLayout>
      {/* HERO */}
      <section style={{position:"relative",overflow:"hidden",background:G.bg,paddingTop:100}}>
        <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse 80% 60% at 50% -10%,rgba(200,169,110,0.10) 0%,transparent 70%)",pointerEvents:"none"}}/>
        <div className="cy-container" style={{position:"relative",zIndex:2,padding:"clamp(3rem,6vw,5rem) 24px clamp(2rem,4vw,3rem)",textAlign:"center"}}>
          <motion.div initial={{opacity:0,y:32}} animate={{opacity:1,y:0}} transition={{duration:0.75}}>
            <span className="cy-badge" style={{marginBottom:24,display:"inline-flex"}}>Help Centre</span>
            <h1 className="cy-h1" style={{color:G.text,marginBottom:20}}>Frequently asked questions.</h1>
            <p className="cy-body-lg" style={{color:G.muted,maxWidth:480,margin:"0 auto 36px"}}>Can't find what you need? Our support team is available 7 days a week.</p>

            {/* Search */}
            <div style={{maxWidth:560,margin:"0 auto",position:"relative"}}>
              <Search size={18} style={{position:"absolute",left:18,top:"50%",transform:"translateY(-50%)",color:G.dim,pointerEvents:"none"}}/>
              <input ref={inputRef} value={query} onChange={e=>setQuery(e.target.value)}
                placeholder="Search questions..." type="search"
                style={{width:"100%",padding:"16px 18px 16px 52px",borderRadius:16,background:G.surface,border:`1px solid ${query?G.gold:G.border}`,color:G.text,fontSize:"clamp(0.9rem,1.5vw,1rem)",outline:"none",fontFamily:"inherit",transition:"border-color 0.2s"}}
                onFocus={e=>e.target.style.borderColor="rgba(200,169,110,0.5)"}
                onBlur={e=>e.target.style.borderColor=query?G.gold:G.border}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CATEGORY CHIPS */}
      <section style={{padding:"0 24px 32px",background:G.bg}}>
        <div className="cy-container" style={{display:"flex",gap:8,flexWrap:"wrap",justifyContent:"center"}}>
          {CATS.map(c=>(
            <button key={c} onClick={()=>setCat(c)}
              style={{padding:"9px 20px",borderRadius:100,border:`1px solid ${cat===c?"rgba(200,169,110,0.5)":G.border}`,background:cat===c?G.goldMuted:"transparent",color:cat===c?G.gold:G.muted,fontWeight:600,fontSize:"0.875rem",cursor:"pointer",fontFamily:"inherit",transition:"all 0.2s",minHeight:42}}
            >{c}</button>
          ))}
        </div>
      </section>

      {/* TWO-COLUMN LAYOUT — FAQ list + sidebar photo */}
      <section className="cy-section" style={{background:G.bg,paddingTop:0}}>
        <div className="cy-container">
          <div className="cy-grid-2" style={{gap:"clamp(2rem,4vw,4rem)",alignItems:"start"}}>
            {/* FAQ list */}
            <div>
              <div style={{marginBottom:16,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <span style={{color:G.dim,fontSize:"0.82rem"}}>{filtered.length} question{filtered.length!==1?"s":""}{query?` for "${query}"`:""}</span>
              </div>

              <AnimatePresence>
                {filtered.length===0 ? (
                  <motion.div initial={{opacity:0}} animate={{opacity:1}} style={{textAlign:"center",padding:"48px 24px"}}>
                    <div style={{fontSize:"2.5rem",marginBottom:12}}>🔍</div>
                    <p style={{color:G.muted}}>No results for "{query}". Try different keywords or <button onClick={()=>{setQuery("");setCat("All");}} style={{background:"none",border:"none",color:G.gold,cursor:"pointer",fontFamily:"inherit",fontSize:"inherit"}}>clear filters</button>.</p>
                  </motion.div>
                ):(
                  <div style={{display:"flex",flexDirection:"column",gap:8}}>
                    {filtered.map((f,i)=>(
                      <motion.div key={`${f.q}`} initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{delay:i*0.04}}
                        style={{borderRadius:16,background:G.surface,border:`1px solid ${open===i?"rgba(200,169,110,0.3)":G.border}`,overflow:"hidden",transition:"border-color 0.2s"}}
                      >
                        <button onClick={()=>setOpen(open===i?null:i)}
                          style={{width:"100%",padding:"clamp(14px,2vw,20px) clamp(16px,2.5vw,24px)",display:"flex",justifyContent:"space-between",alignItems:"flex-start",background:"none",border:"none",cursor:"pointer",fontFamily:"inherit",gap:12,minHeight:56,textAlign:"left"}}
                        >
                          <div>
                            <span style={{display:"block",fontSize:"0.7rem",fontWeight:700,color:G.gold,textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:4}}>{f.cat}</span>
                            <span style={{fontWeight:600,color:G.text,fontSize:"clamp(0.875rem,1.4vw,0.95rem)",lineHeight:1.4}}>{f.q}</span>
                          </div>
                          <ChevronDown size={16} style={{color:G.dim,flexShrink:0,transform:open===i?"rotate(180deg)":"none",transition:"transform 0.25s",marginTop:4}}/>
                        </button>
                        <AnimatePresence>
                          {open===i&&(
                            <motion.div initial={{height:0}} animate={{height:"auto"}} exit={{height:0}} style={{overflow:"hidden"}}>
                              <p style={{padding:`0 clamp(16px,2.5vw,24px) 18px`,color:G.muted,fontSize:"0.875rem",lineHeight:1.85}}>{f.a}</p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))}
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* Sticky sidebar */}
            <div style={{position:"sticky",top:100,display:"flex",flexDirection:"column",gap:16}}>
              {/* Photo */}
              <motion.div {...fadeUp} style={{borderRadius:24,overflow:"hidden",height:280}} className="cy-img-zoom">
                <Image src="https://images.unsplash.com/photo-1542103749-8ef59b94f47e?w=600&q=90&auto=format&fit=crop&crop=center" alt="Person smiling outdoors" fill style={{objectFit:"cover"}} sizes="30vw"/>
              </motion.div>
              {/* Contact card */}
              <motion.div {...fadeUp} transition={{delay:0.1}} style={{borderRadius:20,background:G.surface,border:`1px solid ${G.border}`,padding:"24px"}}>
                <h3 style={{fontWeight:700,color:G.text,fontSize:"1rem",marginBottom:8}}>Still have a question?</h3>
                <p style={{color:G.muted,fontSize:"0.875rem",lineHeight:1.7,marginBottom:16}}>Our support team responds within 12 hours, 7 days a week.</p>
                <Link href="/contact" className="cy-btn-primary" style={{width:"100%",justifyContent:"center",display:"flex",fontSize:"0.875rem",padding:"11px 18px"}}>
                  Contact Support <ArrowRight size={14}/>
                </Link>
              </motion.div>
              {/* Second photo */}
              <motion.div {...fadeUp} transition={{delay:0.2}} style={{borderRadius:20,overflow:"hidden",height:180}} className="cy-img-zoom">
                <Image src="https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?w=600&q=88&auto=format&fit=crop" alt="Outdoor trail" fill style={{objectFit:"cover"}} sizes="30vw"/>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </SharedLayout>
  );
}


