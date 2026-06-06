"use client";
import { useEffect, useRef } from "react";

const stats = [
  { value: "2015", label: "Year Founded" },
  { value: "6+", label: "Years Strong" },
  { value: "2", label: "Zumba Sessions Daily" },
  { value: "₹2K", label: "Per Month" },
];

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll<HTMLElement>(".reveal").forEach((el, i) => {
            setTimeout(() => {
              el.style.opacity = "1";
              el.style.transform = "translateY(0)";
            }, i * 120);
          });
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} style={{
      background: "var(--charcoal)",
      padding: "7rem 2rem",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Background accent */}
      <div style={{
        position: "absolute", top: 0, left: 0,
        width: "4px", height: "100%",
        background: "var(--volt)",
      }} />

      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Section label */}
        <div className="reveal" style={{
          opacity: 0, transform: "translateY(30px)", transition: "all 0.6s ease",
          fontFamily: "'Barlow Condensed',sans-serif",
          fontSize: "0.8rem", fontWeight: 600,
          letterSpacing: "0.3em", textTransform: "uppercase",
          color: "var(--volt)", marginBottom: "1rem",
        }}>
          Our Story
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "5rem",
          alignItems: "center",
        }}>
          {/* Left — text */}
          <div>
            <h2 className="reveal" style={{
              opacity: 0, transform: "translateY(30px)", transition: "all 0.6s ease",
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 900, fontSize: "clamp(2.5rem,5vw,4rem)",
              lineHeight: 0.95, color: "var(--white)",
              marginBottom: "1.5rem",
            }}>
              Built For<br /><span style={{ color: "var(--volt)" }}>Results.</span>
            </h2>

            <p className="reveal" style={{
              opacity: 0, transform: "translateY(30px)", transition: "all 0.6s ease",
              fontFamily: "'Barlow',sans-serif",
              fontWeight: 300, fontSize: "1.05rem",
              color: "rgba(245,245,240,0.65)",
              lineHeight: 1.8, marginBottom: "1.25rem",
            }}>
              JD Gym has been the go-to training destination in Kazipet since 2015.
              We provide professional-grade equipment, energetic Zumba sessions,
              and a community that pushes you to your personal best.
            </p>

            <p className="reveal" style={{
              opacity: 0, transform: "translateY(30px)", transition: "all 0.6s ease",
              fontFamily: "'Barlow',sans-serif",
              fontWeight: 300, fontSize: "1.05rem",
              color: "rgba(245,245,240,0.65)",
              lineHeight: 1.8, marginBottom: "2rem",
            }}>
              Whether you're a first-timer or a seasoned athlete, JD Gym is your space
              to train hard, move freely, and live stronger every single day.
            </p>

            <a className="reveal" href="#membership" style={{
              opacity: 0, transform: "translateY(30px)", transition: "all 0.6s ease",
              display: "inline-block",
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 700, fontSize: "0.9rem",
              color: "var(--volt)",
              letterSpacing: "0.15em", textTransform: "uppercase",
              textDecoration: "none",
              borderBottom: "1px solid var(--volt)",
              paddingBottom: "2px",
            }}>
              View Membership →
            </a>
          </div>

          {/* Right — stats grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1px",
            background: "rgba(245,245,240,0.08)",
          }}>
            {stats.map((s, i) => (
              <div key={i} className="reveal" style={{
                opacity: 0, transform: "translateY(30px)", transition: "all 0.6s ease",
                background: "var(--charcoal)",
                padding: "2.5rem 2rem",
                position: "relative",
              }}>
                <div style={{
                  position: "absolute", top: 0, left: 0,
                  width: "100%", height: "2px",
                  background: i === 0 ? "var(--volt)" : "transparent",
                }} />
                <div style={{
                  fontFamily: "'Barlow Condensed',sans-serif",
                  fontWeight: 900, fontSize: "3rem",
                  color: "var(--volt)", lineHeight: 1,
                  marginBottom: "0.5rem",
                }}>{s.value}</div>
                <div style={{
                  fontFamily: "'Barlow',sans-serif",
                  fontWeight: 400, fontSize: "0.85rem",
                  color: "rgba(245,245,240,0.5)",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
