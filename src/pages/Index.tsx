import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import AstrologerCard from "@/components/AstrologerCard";
import PoojaServices from "@/components/PoojaServices";
import TrainingSection from "@/components/TrainingSection";
import TrustSection from "@/components/TrustSection";
import WaitlistForm from "@/components/WaitlistForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <AstrologerCard />
      <PoojaServices />
      <TrainingSection />
      <TrustSection />
      <WaitlistForm />
      <Footer />
    </div>
  );
};

export default Index;
