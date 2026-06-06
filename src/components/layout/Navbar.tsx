"use client";
import { useEffect, useState } from "react";
const links = ["About", "Equipment", "Zumba", "Membership", "Location"];
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav style={{
      position:"fixed",top:0,left:0,right:0,zIndex:100,
      padding:"0 2rem",height:"64px",
      display:"flex",alignItems:"center",justifyContent:"space-between",
      background:scrolled?"rgba(13,13,13,0.95)":"transparent",
      backdropFilter:scrolled?"blur(10px)":"none",
      borderBottom:scrolled?"1px solid #2a2a2a":"none",
      transition:"all 0.3s ease",
    }}>
      <a href="#" style={{fontFamily:"'Barlow Condensed',sans-serif",fontWeight:900,fontSize:"1.5rem",color:"var(--volt)",textDecoration:"none",letterSpacing:"0.05em"}}>
        JD<span style={{color:"var(--white)"}}>GYM</span>
      </a>
      <ul style={{display:"flex",gap:"2rem",listStyle:"none",margin:0,padding:0}}>
        {links.map(link => (
          <li key={link}>
            <a href={`#${link.toLowerCase()}`}
              style={{fontFamily:"'Barlow Condensed',sans-serif",fontWeight:600,fontSize:"0.95rem",color:"var(--white)",textDecoration:"none",letterSpacing:"0.1em",textTransform:"uppercase",transition:"color 0.2s"}}
              onMouseEnter={e=>(e.currentTarget.style.color="var(--volt)")}
              onMouseLeave={e=>(e.currentTarget.style.color="var(--white)")}
            >{link}</a>
          </li>
        ))}
      </ul>
      <a href="#membership"
        style={{fontFamily:"'Barlow Condensed',sans-serif",fontWeight:700,fontSize:"0.9rem",background:"var(--orange)",color:"var(--white)",padding:"0.5rem 1.25rem",textDecoration:"none",letterSpacing:"0.1em",textTransform:"uppercase"}}
        onMouseEnter={e=>(e.currentTarget.style.background="#ff6a2a")}
        onMouseLeave={e=>(e.currentTarget.style.background="var(--orange)")}
      >Join Now</a>
    </nav>
  );
}
