"use client";
import { useEffect, useRef } from "react";
export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    setTimeout(() => {
      el.style.transition = "opacity 0.9s ease, transform 0.9s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 100);
  }, []);
  return (
    <section style={{position:"relative",height:"100vh",minHeight:"600px",display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden",background:"var(--black)"}}>
      <div style={{position:"absolute",inset:0,backgroundImage:"linear-gradient(rgba(201,255,0,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(201,255,0,0.04) 1px,transparent 1px)",backgroundSize:"60px 60px",zIndex:0}}/>
      <div style={{position:"absolute",width:"700px",height:"700px",borderRadius:"50%",background:"radial-gradient(circle,rgba(201,255,0,0.07) 0%,transparent 70%)",top:"50%",left:"50%",transform:"translate(-50%,-50%)",zIndex:0}}/>
      <div style={{position:"absolute",width:"400px",height:"400px",borderRadius:"50%",background:"radial-gradient(circle,rgba(255,77,0,0.08) 0%,transparent 70%)",bottom:"-100px",right:"-100px",zIndex:0}}/>
      <div ref={ref} style={{position:"relative",zIndex:1,textAlign:"center",padding:"0 1.5rem",maxWidth:"900px"}}>
        <div style={{display:"inline-flex",alignItems:"center",gap:"0.5rem",marginBottom:"1.5rem",padding:"0.35rem 1rem",border:"1px solid rgba(201,255,0,0.3)",color:"var(--volt)",fontFamily:"'Barlow Condensed',sans-serif",fontWeight:600,fontSize:"0.85rem",letterSpacing:"0.2em",textTransform:"uppercase"}}>
          <span style={{width:"6px",height:"6px",borderRadius:"50%",background:"var(--volt)",display:"inline-block",animation:"pulse 2s infinite"}}/>
          Est. 2015 · Kazipet, Warangal
        </div>
        <h1 style={{fontFamily:"'Barlow Condensed',sans-serif",fontWeight:900,fontSize:"clamp(3.5rem,10vw,8rem)",lineHeight:0.9,textTransform:"uppercase",letterSpacing:"-0.02em",color:"var(--white)",marginBottom:"1.5rem"}}>
          Train<br/><span style={{color:"var(--volt)"}}>Harder.</span><br/>Live Stronger.
        </h1>
        <p style={{fontFamily:"'Barlow',sans-serif",fontWeight:300,fontSize:"1.1rem",color:"rgba(245,245,240,0.6)",marginBottom:"2.5rem",letterSpacing:"0.05em"}}>
          Premium equipment · Daily Zumba · ₹2,000/month
        </p>
        <div style={{display:"flex",gap:"1rem",justifyContent:"center",flexWrap:"wrap"}}>
          <a href="#membership"
            style={{fontFamily:"'Barlow Condensed',sans-serif",fontWeight:700,fontSize:"1rem",background:"var(--orange)",color:"var(--white)",padding:"0.85rem 2.5rem",textDecoration:"none",letterSpacing:"0.15em",textTransform:"uppercase",transition:"all 0.2s",display:"inline-block"}}
            onMouseEnter={e=>{e.currentTarget.style.background="#ff6a2a";e.currentTarget.style.transform="translateY(-2px)"}}
            onMouseLeave={e=>{e.currentTarget.style.background="var(--orange)";e.currentTarget.style.transform="translateY(0)"}}
          >Join Now</a>
          <a href="#about"
            style={{fontFamily:"'Barlow Condensed',sans-serif",fontWeight:700,fontSize:"1rem",background:"transparent",color:"var(--white)",padding:"0.85rem 2.5rem",textDecoration:"none",letterSpacing:"0.15em",textTransform:"uppercase",border:"1px solid rgba(245,245,240,0.3)",transition:"all 0.2s",display:"inline-block"}}
            onMouseEnter={e=>{e.currentTarget.style.borderColor="var(--volt)";e.currentTarget.style.color="var(--volt)"}}
            onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(245,245,240,0.3)";e.currentTarget.style.color="var(--white)"}}
          >Explore</a>
        </div>
      </div>
      <div style={{position:"absolute",bottom:"2rem",left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",alignItems:"center",gap:"0.5rem",zIndex:1}}>
        <span style={{fontFamily:"'Barlow Condensed',sans-serif",fontSize:"0.7rem",letterSpacing:"0.2em",color:"rgba(245,245,240,0.3)",textTransform:"uppercase"}}>Scroll</span>
        <div style={{width:"1px",height:"40px",background:"linear-gradient(to bottom,rgba(201,255,0,0.5),transparent)",animation:"scrollLine 2s ease-in-out infinite"}}/>
      </div>
      <style>{`
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:0.3}}
        @keyframes scrollLine{0%{transform:scaleY(0);transform-origin:top}50%{transform:scaleY(1);transform-origin:top}51%{transform:scaleY(1);transform-origin:bottom}100%{transform:scaleY(0);transform-origin:bottom}}
      `}</style>
    </section>
  );
}
