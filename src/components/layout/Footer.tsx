export default function Footer() {
  return (
    <footer style={{
      background: "var(--black)",
      borderTop: "1px solid rgba(245,245,240,0.06)",
      padding: "2.5rem 2rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "1rem",
    }}>
      <div style={{
        fontFamily: "'Barlow Condensed',sans-serif",
        fontWeight: 900, fontSize: "1.3rem",
        color: "var(--volt)",
      }}>
        JD<span style={{ color: "var(--white)" }}>GYM</span>
      </div>
      <div style={{
        fontFamily: "'Barlow',sans-serif",
        fontSize: "0.85rem",
        color: "rgba(245,245,240,0.3)",
      }}>
        Kazipet, Warangal, Telangana 506003
      </div>
      <div style={{
        fontFamily: "'Barlow',sans-serif",
        fontSize: "0.85rem",
        color: "rgba(245,245,240,0.3)",
      }}>
        © {new Date().getFullYear()} JD Gym. All rights reserved.
      </div>
    </footer>
  );
}
