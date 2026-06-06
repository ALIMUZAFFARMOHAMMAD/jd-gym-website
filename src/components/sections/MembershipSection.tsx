"use client";
import { useEffect, useRef } from "react";

const perks = [
  "Full equipment access — all day, every day",
  "Daily Zumba classes (morning & evening both)",
  "Locker room access",
  "Trainer guidance on request",
  "No joining fee. No hidden charges.",
];

export default function MembershipSection() {
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
    <section id="membership" ref={ref} style={{
      background: "var(--black)",
      padding: "7rem 2rem",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Background number */}
      <div style={{
        position: "absolute",
        fontFamily: "'Barlow Condensed',sans-serif",
        fontWeight: 900, fontSize: "30vw",
        color: "rgba(255,77,0,0.04)",
        top: "50%", right: "-5vw",
        transform: "translateY(-50%)",
        userSelect: "none", pointerEvents: "none",
        lineHeight: 1,
      }}>2K</div>

      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div className="reveal" style={{
          opacity: 0, transform: "translateY(30px)", transition: "all 0.6s ease",
          fontFamily: "'Barlow Condensed',sans-serif",
          fontSize: "0.8rem", fontWeight: 600,
          letterSpacing: "0.3em", textTransform: "uppercase",
          color: "var(--volt)", marginBottom: "1rem",
        }}>Pricing</div>

        <h2 className="reveal" style={{
          opacity: 0, transform: "translateY(30px)", transition: "all 0.6s ease",
          fontFamily: "'Barlow Condensed',sans-serif",
          fontWeight: 900, fontSize: "clamp(2.5rem,5vw,4rem)",
          lineHeight: 0.95, color: "var(--white)",
          marginBottom: "4rem",
        }}>
          Start<br /><span style={{ color: "var(--volt)" }}>Today.</span>
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
          alignItems: "start",
        }}>
          {/* Price card */}
          <div className="reveal" style={{
            opacity: 0, transform: "translateY(30px)", transition: "all 0.6s ease",
            border: "1px solid rgba(201,255,0,0.25)",
            padding: "3rem",
            position: "relative",
            background: "var(--charcoal)",
          }}>
            <div style={{
              position: "absolute", top: 0, left: 0,
              width: "100%", height: "3px",
              background: "linear-gradient(to right, var(--volt), var(--orange))",
            }} />
            <div style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontSize: "0.8rem", fontWeight: 600,
              letterSpacing: "0.3em", textTransform: "uppercase",
              color: "rgba(245,245,240,0.5)", marginBottom: "1.5rem",
            }}>Monthly Membership</div>

            <div style={{ display: "flex", alignItems: "baseline", gap: "0.25rem", marginBottom: "0.5rem" }}>
              <span style={{
                fontFamily: "'Barlow Condensed',sans-serif",
                fontWeight: 900, fontSize: "5rem",
                color: "var(--white)", lineHeight: 1,
              }}>₹2,000</span>
            </div>
            <div style={{
              fontFamily: "'Barlow',sans-serif",
              fontSize: "0.9rem",
              color: "rgba(245,245,240,0.4)",
              marginBottom: "2.5rem",
            }}>per month · cancel anytime</div>

            <a href="#location" style={{
              display: "block", textAlign: "center",
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 700, fontSize: "1rem",
              background: "var(--orange)", color: "var(--white)",
              padding: "1rem 2rem",
              textDecoration: "none",
              letterSpacing: "0.15em", textTransform: "uppercase",
              transition: "all 0.2s",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "#ff6a2a";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "var(--orange)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
            >Join Now — Visit Us</a>
          </div>

          {/* Perks list */}
          <div>
            <div className="reveal" style={{
              opacity: 0, transform: "translateY(30px)", transition: "all 0.6s ease",
              fontFamily: "'Barlow Condensed',sans-serif",
              fontWeight: 700, fontSize: "1.1rem",
              color: "rgba(245,245,240,0.5)",
              letterSpacing: "0.1em", textTransform: "uppercase",
              marginBottom: "1.5rem",
            }}>Everything Included</div>
            {perks.map((perk, i) => (
              <div key={i} className="reveal" style={{
                opacity: 0, transform: "translateY(30px)", transition: "all 0.6s ease",
                display: "flex", alignItems: "flex-start", gap: "1rem",
                padding: "1rem 0",
                borderBottom: "1px solid rgba(245,245,240,0.06)",
              }}>
                <span style={{
                  color: "var(--volt)", fontSize: "1.1rem",
                  marginTop: "1px", flexShrink: 0,
                }}>✓</span>
                <span style={{
                  fontFamily: "'Barlow',sans-serif",
                  fontWeight: 300, fontSize: "1rem",
                  color: "rgba(245,245,240,0.7)",
                  lineHeight: 1.5,
                }}>{perk}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
