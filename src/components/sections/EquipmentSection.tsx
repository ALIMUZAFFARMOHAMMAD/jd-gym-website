"use client";
import { useEffect, useRef } from "react";

const equipment = [
  { icon: "🏋️", name: "Free Weights", desc: "Full dumbbell rack from 2.5kg to 50kg" },
  { icon: "⚡", name: "Barbells & Plates", desc: "Olympic barbells with full plate set" },
  { icon: "🔩", name: "Squat Rack", desc: "Power cage for squats, bench & pull-ups" },
  { icon: "🚴", name: "Cardio Machines", desc: "Treadmills, bikes & ellipticals" },
  { icon: "💪", name: "Resistance Bands", desc: "Full set for mobility & accessory work" },
  { icon: "🎯", name: "Dumbbell Zone", desc: "Dedicated floor space for free movement" },
];

export default function EquipmentSection() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll<HTMLElement>(".reveal").forEach((el, i) => {
            setTimeout(() => {
              el.style.opacity = "1";
              el.style.transform = "translateY(0)";
            }, i * 100);
          });
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="equipment" ref={ref} style={{
      background: "var(--black)",
      padding: "7rem 2rem",
      position: "relative",
    }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ marginBottom: "4rem" }}>
          <div className="reveal" style={{
            opacity: 0, transform: "translateY(30px)", transition: "all 0.6s ease",
            fontFamily: "'Barlow Condensed',sans-serif",
            fontSize: "0.8rem", fontWeight: 600,
            letterSpacing: "0.3em", textTransform: "uppercase",
            color: "var(--volt)", marginBottom: "1rem",
          }}>What We Have</div>
          <h2 className="reveal" style={{
            opacity: 0, transform: "translateY(30px)", transition: "all 0.6s ease",
            fontFamily: "'Barlow Condensed',sans-serif",
            fontWeight: 900, fontSize: "clamp(2.5rem,5vw,4rem)",
            lineHeight: 0.95, color: "var(--white)",
          }}>
            Pro-Grade<br /><span style={{ color: "var(--volt)" }}>Equipment.</span>
          </h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1px",
          background: "rgba(245,245,240,0.06)",
        }}>
          {equipment.map((item, i) => (
            <div key={i} className="reveal" style={{
              opacity: 0, transform: "translateY(30px)",
              transition: "all 0.6s ease",
              background: "var(--black)",
              padding: "2.5rem 2rem",
              position: "relative",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "var(--charcoal)";
              const bar = e.currentTarget.querySelector<HTMLElement>(".top-bar");
              if (bar) bar.style.width = "100%";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "var(--black)";
              const bar = e.currentTarget.querySelector<HTMLElement>(".top-bar");
              if (bar) bar.style.width = "0%";
            }}
            >
              <div className="top-bar" style={{
                position: "absolute", top: 0, left: 0,
                width: "0%", height: "2px",
                background: "var(--volt)",
                transition: "width 0.3s ease",
              }} />
              <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{item.icon}</div>
              <h3 style={{
                fontFamily: "'Barlow Condensed',sans-serif",
                fontWeight: 700, fontSize: "1.3rem",
                color: "var(--white)", marginBottom: "0.5rem",
                textTransform: "uppercase", letterSpacing: "0.05em",
              }}>{item.name}</h3>
              <p style={{
                fontFamily: "'Barlow',sans-serif",
                fontWeight: 300, fontSize: "0.9rem",
                color: "rgba(245,245,240,0.5)",
                lineHeight: 1.6,
              }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
