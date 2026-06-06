import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import EquipmentSection from "@/components/sections/EquipmentSection";
import ZumbaSection from "@/components/sections/ZumbaSection";
import MembershipSection from "@/components/sections/MembershipSection";
import LocationSection from "@/components/sections/LocationSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EquipmentSection />
      <ZumbaSection />
      <MembershipSection />
      <LocationSection />
      <Footer />
    </main>
  );
}
