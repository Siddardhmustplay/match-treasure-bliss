
import Hero from "@/components/Hero";
import GameDescription from "@/components/GameDescription";
import FeatureHighlights from "@/components/FeatureHighlights";
import AboutSection from "@/components/AboutSection";
import StickyFooter from "@/components/StickyFooter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <GameDescription />
      <FeatureHighlights />
      <AboutSection />
      <div className="h-24"></div> {/* Spacer for sticky footer */}
      <StickyFooter />
    </div>
  );
};

export default Index;
