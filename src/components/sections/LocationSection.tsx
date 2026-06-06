"use client";
import { useEffect, useRef } from "react";

export default function LocationSection() {
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
    <section id="location" ref={ref} style={{
      background: "var(--charcoal)",
      padding: "7rem 2rem",
    }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div className="reveal" style={{
          opacity: 0, transform: "translateY(30px)", transition: "all 0.6s ease",
          fontFamily: "'Barlow Condensed',sans-serif",
          fontSize: "0.8rem", fontWeight: 600,
          letterSpacing: "0.3em", textTransform: "uppercase",
          color: "var(--volt)", marginBottom: "1rem",
        }}>Find Us</div>

        <h2 className="reveal" style={{
          opacity: 0, transform: "translateY(30px)", transition: "all 0.6s ease",
          fontFamily: "'Barlow Condensed',sans-serif",
          fontWeight: 900, fontSize: "clamp(2.5rem,5vw,4rem)",
          lineHeight: 0.95, color: "var(--white)",
          marginBottom: "3rem",
        }}>
          Come Train<br /><span style={{ color: "var(--volt)" }}>With Us.</span>
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.8fr",
          gap: "3rem",
          alignItems: "start",
        }}>
          {/* Info */}
          <div>
            {[
              { label: "Address", value: "Kazipet, Warangal\nTelangana 506003" },
              { label: "Hours", value: "Mon – Sun\n5:30 AM – 10:00 PM" },
              { label: "Zumba", value: "6:00–7:00 AM\n6:00–7:00 PM Daily" },
              { label: "Membership", value: "₹2,000 / month" },
            ].map((item, i) => (
              <div key={i} className="reveal" style={{
                opacity: 0, transform: "translateY(30px)", transition: "all 0.6s ease",
                padding: "1.25rem 0",
                borderBottom: "1px solid rgba(245,245,240,0.06)",
              }}>
                <div style={{
                  fontFamily: "'Barlow Condensed',sans-serif",
                  fontSize: "0.75rem", fontWeight: 600,
                  letterSpacing: "0.25em", textTransform: "uppercase",
                  color: "var(--volt)", marginBottom: "0.4rem",
                }}>{item.label}</div>
                <div style={{
                  fontFamily: "'Barlow',sans-serif",
                  fontWeight: 400, fontSize: "1rem",
                  color: "var(--white)",
                  whiteSpace: "pre-line",
                  lineHeight: 1.6,
                }}>{item.value}</div>
              </div>
            ))}
          </div>

          {/* Map */}
          <div className="reveal" style={{
            opacity: 0, transform: "translateY(30px)", transition: "all 0.6s ease",
          }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30450.23624798835!2d79.4800!3d17.9800!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3349b6fdc4b4fd%3A0x8c9f9f9f9f9f9f9f!2sKazipet%2C%20Warangal%2C%20Telangana!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="380"
              style={{
                border: "none",
                filter: "grayscale(100%) invert(92%) contrast(89%)",
                display: "block",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
