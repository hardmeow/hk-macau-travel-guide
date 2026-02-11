import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import QuickNavigation from "@/components/QuickNavigation";
import ItineraryTimeline from "@/components/ItineraryTimeline";
import MetroPaymentComparison from "@/components/MetroPaymentComparison";
import MacauTransportComparison from "@/components/MacauTransportComparison";
import LocationCards from "@/components/LocationCards";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <QuickNavigation />
      <ItineraryTimeline />
      <MetroPaymentComparison />
      <MacauTransportComparison />
      <LocationCards />
      <Footer />
    </div>
  );
}
