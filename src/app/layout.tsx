import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JD Gym | Fitness Center in Kazipet, Warangal",
  description: "JD Gym in Kazipet, Warangal — premium equipment, daily Zumba at 6AM & 6PM, ₹2,000/month.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
