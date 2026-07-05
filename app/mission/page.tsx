"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SharedLayout from "@/components/SharedLayout";
import { ArrowRight, Heart, Layers, Compass, Clock } from "lucide-react";

const G = { bg:"#0C0B09",surface:"#151310",surface2:"#1C1914",border:"#2A2520",gold:"#C8A96E",goldMuted:"rgba(200,169,110,0.10)",text:"#F2EDE4",muted:"#8A8070",dim:"#4A4540" };
const fadeUp = { initial:{opacity:0,y:32}, whileInView:{opacity:1,y:0}, viewport:{once:true}, transition:{duration:0.75,ease:"easeOut"} } as const;
const slideLeft = { initial:{opacity:0,x:40}, whileInView:{opacity:1,x:0}, viewport:{once:true}, transition:{duration:0.75,ease:"easeOut"} } as const;
const slideRight = { initial:{opacity:0,x:-40}, whileInView:{opacity:1,x:0}, viewport:{once:true}, transition:{duration:0.75,ease:"easeOut"} } as const;

const VALUES = [
  { icon:<Layers size={22}/>, color:"#E87272", title:"Depth before volume", desc:"Cymbie surfaces fewer people because we believe your attention is finite and valuable. Five genuinely aligned people will always outperform five hundred who aren't." },
  { icon:<Compass size={22}/>, color:"#C8A96E", title:"Compatibility as a discipline", desc:"We don't rely on gut feeling as a matching strategy. Real long-term compatibility is measurable — and we measure it rigorously across seven proven dimensions." },
  { icon:<Clock size={22}/>, color:"#72B4E8", title:"Respect for what's at stake", desc:"Finding the right person is one of the most consequential decisions of your life. Our platform reflects that gravity — every detail, every interaction, is built accordingly." },
  { icon:<Heart size={22}/>, color:"#72E89C", title:"Honesty as infrastructure", desc:"Cymbie publishes its matching methodology, its safety data, and its research. We believe you deserve to know exactly how we work — and exactly who you're talking to." },
];

const TEAM = [
  { name:"Victor Matt", role:"Co-Founder & CEO", bio:"Former product lead at Spotify. Built Cymbie after spending six years making experiences more engaging and one year asking whether engaging was the same as meaningful." },
  { name:"James Whitfield", role:"Co-Founder & CTO", bio:"Previously built recommendation systems at Google. Left to apply that expertise to a problem that actually kept him up at night — how to match two people who will genuinely flourish together." },
  { name:"Tomoko Hayashi", role:"Head of Safety", bio:"A decade in trust and safety at Meta. Joined Cymbie because she believes safety should be structural — woven into how a platform works, not bolted on as an afterthought." },
  { name:"Marco De Luca", role:"Head of Design", bio:"Former lead designer at Airbnb. Believes the most sophisticated design is the kind that serves people without ever needing to announce itself." },
];

export default function MissionPage() {
  return (
    <SharedLayout>
      {/* HERO */}
      <section style={{position:"relative",minHeight:"75vh",display:"flex",alignItems:"flex-end",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0}}>
          <Image src="https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=1920&q=95&auto=format&fit=crop&crop=center"
            alt="Two people sharing a genuine moment together" fill priority sizes="100vw"
            style={{objectFit:"cover",objectPosition:"center 40%"}}/>
          <div style={{position:"absolute",inset:0,background:"linear-gradient(0deg,rgba(12,11,9,0.95) 0%,rgba(12,11,9,0.45) 55%,rgba(12,11,9,0.1) 100%)"}}/>
        </div>
        <div className="cy-container" style={{position:"relative",zIndex:2,padding:"0 24px 80px"}}>
          <motion.div initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} transition={{duration:0.8,ease:"easeOut"}} style={{maxWidth:720}}>
            <span className="cy-badge" style={{marginBottom:24,display:"inline-flex"}}>Why Cymbie Exists</span>
            <h1 className="cy-h1" style={{color:G.text,marginBottom:24}}>
              The person worth finding<br/>
              <span className="cy-gradient-text">deserves your full attention.</span>
            </h1>
            <p className="cy-body-lg" style={{color:"rgba(242,237,228,0.78)",maxWidth:540}}>
              Cymbie is a premium platform for adults who take love seriously. We built it because we believe that the most important relationship of your life shouldn't begin with a half-second glance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* WHAT'S BROKEN — two-column with image */}
      <section className="cy-section" style={{background:G.surface,borderTop:`1px solid ${G.border}`}}>
        <div className="cy-container">
          <div className="cy-grid-2" style={{gap:"clamp(2rem,5vw,5rem)",alignItems:"center"}}>
            <motion.div {...slideRight}>
              <span className="cy-label" style={{color:G.gold,marginBottom:16,display:"block"}}>The Problem with Modern Dating</span>
              <h2 className="cy-h2" style={{color:G.text,marginBottom:24}}>When love becomes a browsing habit, everyone loses.</h2>
              <p className="cy-body" style={{color:G.muted,marginBottom:20}}>
                The dominant model in online dating borrows its logic from e-commerce — an endless catalogue of people to scroll through, filter, and discard. It is fast, frictionless, and fundamentally at odds with how meaningful relationships actually form.
              </p>
              <p className="cy-body" style={{color:G.muted,marginBottom:20}}>
                Depth requires time. Real connection requires attention. And attention, by definition, cannot be given to five hundred people at once. The platforms that ask you to try anyway are not serving you — they're serving their retention metrics.
              </p>
              <p className="cy-body" style={{color:G.muted}}>
                Cymbie was built from the opposite premise entirely.
              </p>
            </motion.div>
            <motion.div {...slideLeft} style={{position:"relative"}}>
              <div style={{borderRadius:24,overflow:"hidden",position:"relative",height:"clamp(320px,45vw,500px)"}} className="cy-img-zoom">
                <Image src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&q=92&auto=format&fit=crop&crop=faces"
                  alt="Woman in a moment of quiet reflection" fill style={{objectFit:"cover"}} sizes="50vw"/>
                <div style={{position:"absolute",inset:0,background:"linear-gradient(0deg,rgba(12,11,9,0.35) 0%,transparent 60%)"}}/>
              </div>
              <div className="animate-float" style={{position:"absolute",bottom:-20,right:-16,background:"rgba(21,19,16,0.96)",backdropFilter:"blur(16px)",border:"1px solid rgba(200,169,110,0.3)",borderRadius:16,padding:"18px 22px",boxShadow:"0 20px 50px rgba(0,0,0,0.5)"}}>
                <div style={{fontFamily:"var(--font-playfair),Georgia,serif",fontWeight:700,fontSize:"1.8rem",color:G.gold,lineHeight:1}}>74%</div>
                <div style={{color:G.muted,fontSize:"0.78rem",marginTop:4}}>of regular app users report<br/>emotional exhaustion from swiping</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CYMBIE'S ANSWER */}
      <section className="cy-section" style={{background:G.bg}}>
        <div className="cy-container">
          <div className="cy-grid-2" style={{gap:"clamp(2rem,5vw,5rem)",alignItems:"center"}}>
            <motion.div {...slideRight} style={{position:"relative",order:2}} >
              <div style={{position:"relative",height:"clamp(360px,50vw,540px)"}}>
                <div style={{position:"absolute",top:0,left:0,right:"18%",bottom:"22%",borderRadius:24,overflow:"hidden"}} className="cy-img-zoom">
                  <Image src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=700&q=90&auto=format&fit=crop"
                    alt="Couple walking together in nature" fill style={{objectFit:"cover"}} sizes="35vw"/>
                </div>
                <div className="animate-float-delay" style={{position:"absolute",bottom:0,right:0,width:"55%",height:"42%",borderRadius:20,overflow:"hidden",border:"3px solid #0C0B09"}}>
                  <Image src="https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=500&q=90&auto=format&fit=crop"
                    alt="Couple sharing coffee" fill style={{objectFit:"cover"}} sizes="25vw"/>
                </div>
              </div>
            </motion.div>
            <motion.div {...slideLeft} style={{order:1}}>
              <span className="cy-label" style={{color:G.gold,marginBottom:16,display:"block"}}>The Cymbie Approach</span>
              <h2 className="cy-h2" style={{color:G.text,marginBottom:24}}>Fewer people. More thought. Better outcomes.</h2>
              <p className="cy-body" style={{color:G.muted,marginBottom:20}}>
                Cymbie presents you with a curated selection of five to seven people each day — each one chosen by our compatibility algorithm based on values alignment, life goals, emotional style, and seven other factors that actually predict long-term satisfaction.
              </p>
              <p className="cy-body" style={{color:G.muted,marginBottom:20}}>
                There is no infinite scroll. No gamified streak. No push notification designed to pull you back for one more tap. What there is: a thoughtful daily selection, a platform that respects your time, and a community of people who are here for the same reason you are.
              </p>
              <p className="cy-body" style={{color:G.muted,marginBottom:28}}>
                We measure Cymbie's success in documented relationships formed — not in monthly active users or session length. That difference in measurement changes every decision we make.
              </p>
              <div style={{display:"flex",gap:12,flexWrap:"wrap"}}>
                <Link href="/how-it-works" className="cy-btn-primary">See How It Works <ArrowRight size={16}/></Link>
                <Link href="/compatibility" className="cy-btn-outline">Our Algorithm</Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="cy-section" style={{background:G.surface,borderTop:`1px solid ${G.border}`}}>
        <div className="cy-container">
          <motion.div {...fadeUp} style={{textAlign:"center",marginBottom:56}}>
            <span className="cy-badge" style={{marginBottom:20,display:"inline-flex"}}>What Guides Every Decision</span>
            <h2 className="cy-h2" style={{color:G.text,marginBottom:16}}>Four principles we hold without exception.</h2>
            <p className="cy-body" style={{color:G.muted,maxWidth:480,margin:"0 auto"}}>These aren't marketing commitments. They're the actual criteria against which every product decision at Cymbie is evaluated.</p>
          </motion.div>
          <div className="cy-grid-4" style={{gap:"1rem"}}>
            {VALUES.map((v,i)=>(
              <motion.div key={i} {...fadeUp} transition={{delay:i*0.1}} className="cy-card" style={{padding:"28px 24px"}}>
                <div style={{width:52,height:52,borderRadius:14,background:`${v.color}1A`,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:18,color:v.color}}>{v.icon}</div>
                <h3 style={{fontWeight:700,fontSize:"clamp(0.95rem,1.5vw,1.05rem)",color:G.text,marginBottom:10}}>{v.title}</h3>
                <p style={{color:G.muted,fontSize:"0.875rem",lineHeight:1.8}}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRESS QUOTE BREAK */}
      <section style={{position:"relative",height:"clamp(260px,40vw,420px)",overflow:"hidden"}}>
        <Image src="https://images.unsplash.com/photo-1555421689-d68471e189f2?w=1920&q=90&auto=format&fit=crop&crop=center"
          alt="Couple in a joyful moment" fill style={{objectFit:"cover",objectPosition:"center 40%"}} sizes="100vw"/>
        <div style={{position:"absolute",inset:0,background:"rgba(12,11,9,0.7)"}}/>
        <div className="cy-container" style={{position:"absolute",inset:0,display:"flex",alignItems:"center",padding:"0 24px"}}>
          <motion.div {...fadeUp} style={{maxWidth:640}}>
            <h2 className="cy-h2" style={{color:G.text,marginBottom:16,fontStyle:"italic"}}>
              "A platform that treats its users as intelligent adults making one of the most significant choices of their lives."
            </h2>
            <p style={{color:"rgba(242,237,228,0.6)",fontSize:"0.9rem"}}>— The Times, March 2026</p>
          </motion.div>
        </div>
      </section>

      {/* TEAM */}
      <section className="cy-section" style={{background:G.bg}}>
        <div className="cy-container">
          <motion.div {...fadeUp} style={{marginBottom:56}}>
            <span className="cy-badge" style={{marginBottom:20,display:"inline-flex"}}>The People Behind It</span>
            <h2 className="cy-h2" style={{color:G.text,maxWidth:500}}>A team with a shared conviction.</h2>
          </motion.div>
          <div className="cy-grid-4" style={{gap:"1.25rem"}}>
            {TEAM.map((m,i)=>(
              <motion.div key={i} {...fadeUp} transition={{delay:i*0.1}} className="cy-card" style={{padding:"28px 24px",background:G.surface2,display:"flex",flexDirection:"column",justifyContent:"center"}}>
                <h3 style={{fontWeight:700,color:G.text,fontSize:"1.1rem",marginBottom:4}}>{m.name}</h3>
                <p style={{color:G.gold,fontSize:"0.8rem",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:14}}>{m.role}</p>
                <p style={{color:G.muted,fontSize:"0.875rem",lineHeight:1.75}}>{m.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cy-section" style={{background:G.surface,borderTop:`1px solid ${G.border}`,textAlign:"center"}}>
        <div className="cy-container">
          <motion.div {...fadeUp} style={{maxWidth:520,margin:"0 auto"}}>
            <h2 className="cy-h2" style={{color:G.text,marginBottom:20}}>Ready to date with intention?</h2>
            <p className="cy-body" style={{color:G.muted,marginBottom:32}}>
              Cymbie is free to join. No credit card, no tricks. Just a thoughtful platform built for people who know what they want.
            </p>
            <div style={{display:"flex",justifyContent:"center",gap:12,flexWrap:"wrap"}}>
              <Link href="/download" className="cy-btn-primary">Download Cymbie <ArrowRight size={16}/></Link>
              <Link href="/careers" className="cy-btn-outline">Work With Us</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </SharedLayout>
  );
}


