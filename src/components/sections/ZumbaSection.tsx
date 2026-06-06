"use client";
import { useEffect, useRef } from "react";

export default function ZumbaSection() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll<HTMLElement>(".reveal").forEach((el, i) => {
            setTimeout(() => {
              el.style.opacity = "1";
              el.style.transform = "translateY(0)";
            }, i * 150);
          });
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="zumba" ref={ref} style={{
      background: "var(--charcoal)",
      padding: "7rem 2rem",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Big background text */}
      <div style={{
        position: "absolute",
        fontFamily: "'Barlow Condensed',sans-serif",
        fontWeight: 900, fontSize: "20vw",
        color: "rgba(201,255,0,0.03)",
        top: "50%", left: "50%",
        transform: "translate(-50%,-50%)",
        whiteSpace: "nowrap",
        userSelect: "none",
        pointerEvents: "none",
        letterSpacing: "-0.02em",
      }}>ZUMBA</div>

      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div className="reveal" style={{
          opacity: 0, transform: "translateY(30px)", transition: "all 0.6s ease",
          fontFamily: "'Barlow Condensed',sans-serif",
          fontSize: "0.8rem", fontWeight: 600,
          letterSpacing: "0.3em", textTransform: "uppercase",
          color: "var(--volt)", marginBottom: "1rem",
        }}>Daily Classes</div>

        <h2 className="reveal" style={{
          opacity: 0, transform: "translateY(30px)", transition: "all 0.6s ease",
          fontFamily: "'Barlow Condensed',sans-serif",
          fontWeight: 900, fontSize: "clamp(2.5rem,5vw,4rem)",
          lineHeight: 0.95, color: "var(--white)",
          marginBottom: "1rem",
        }}>
          Move. Sweat.<br /><span style={{ color: "var(--volt)" }}>Repeat.</span>
        </h2>

        <p className="reveal" style={{
          opacity: 0, transform: "translateY(30px)", transition: "all 0.6s ease",
          fontFamily: "'Barlow',sans-serif",
          fontWeight: 300, fontSize: "1.05rem",
          color: "rgba(245,245,240,0.6)",
          marginBottom: "3.5rem",
          maxWidth: "500px",
        }}>
          Daily Zumba classes open to all fitness levels. No prior dance experience needed.
        </p>

        {/* Schedule cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "2rem" }}>
          {/* Morning */}
          <div className="reveal" style={{
            opacity: 0, transform: "translateY(30px)", transition: "all 0.6s ease",
            background: "var(--black)",
            border: "1px solid rgba(201,255,0,0.2)",
            padding: "2.5rem",
            position: "relative",
            overflow: "hidden",
          }}>
            <div style={{
              position: "absolute", top: 0, left: 0,
              width: "100%", height: "3px",
              background: "var(--volt)",
            }} />
            <div style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontSize: "0.75rem", fontWeight: 600,
              letterSpacing: "0.3em", textTransform: "uppercase",
              color: "var(--volt)", marginBottom: "1rem",
            }}>Morning Session</div>
            <div style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 900, fontSize: "3.5rem",
              color: "var(--white)", lineHeight: 1,
              marginBottom: "0.25rem",
            }}>6:00</div>
            <div style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 700, fontSize: "1.2rem",
              color: "rgba(245,245,240,0.5)",
              marginBottom: "1.5rem",
            }}>AM — 7:00 AM</div>
            <div style={{
              fontFamily: "'Barlow',sans-serif",
              fontSize: "0.85rem",
              color: "rgba(245,245,240,0.4)",
              letterSpacing: "0.05em",
            }}>Monday – Sunday · All Levels</div>
          </div>

          {/* Evening */}
          <div className="reveal" style={{
            opacity: 0, transform: "translateY(30px)", transition: "all 0.6s ease",
            background: "var(--orange)",
            padding: "2.5rem",
            position: "relative",
            overflow: "hidden",
          }}>
            <div style={{
              position: "absolute", bottom: "-20px", right: "-20px",
              width: "120px", height: "120px", borderRadius: "50%",
              background: "rgba(255,255,255,0.08)",
            }} />
            <div style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontSize: "0.75rem", fontWeight: 600,
              letterSpacing: "0.3em", textTransform: "uppercase",
              color: "rgba(255,255,255,0.8)", marginBottom: "1rem",
            }}>Evening Session</div>
            <div style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 900, fontSize: "3.5rem",
              color: "var(--white)", lineHeight: 1,
              marginBottom: "0.25rem",
            }}>6:00</div>
            <div style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 700, fontSize: "1.2rem",
              color: "rgba(255,255,255,0.7)",
              marginBottom: "1.5rem",
            }}>PM — 7:00 PM</div>
            <div style={{
              fontFamily: "'Barlow',sans-serif",
              fontSize: "0.85rem",
              color: "rgba(255,255,255,0.6)",
              letterSpacing: "0.05em",
            }}>Monday – Sunday · All Levels</div>
          </div>
        </div>

        <p className="reveal" style={{
          opacity: 0, transform: "translateY(30px)", transition: "all 0.6s ease",
          fontFamily: "'Barlow',sans-serif",
          fontSize: "0.9rem",
          color: "rgba(245,245,240,0.35)",
          letterSpacing: "0.05em",
        }}>
          * Both sessions included with standard membership. No extra charge.
        </p>
      </div>
    </section>
  );
}
