import Header from "../components/sections/Header";
import HeroSection from "../components/sections/HeroSection";
import WelcomeSection from "../components/sections/WelcomeSection";
import ExpectSection from "../components/sections/ExpectSection";
import RecentMessagesSection from "../components/sections/RecentMessagesSection";
import CommunitySection from "../components/sections/CommunitySection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import Footer from "../components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <WelcomeSection />
      <ExpectSection />
      <RecentMessagesSection />
      <CommunitySection />
      {/* <TestimonialsSection /> */}
      <Footer />
    </div>
  );
}
