import AcuCheck from "@/components/AcuCheck";
import AcufiBankVerification from "@/components/AcufiBankVerification";
import AcuPay from "@/components/AcuPay";
import AcuView from "@/components/AcuView";
import BankingPage from "@/components/Banking";
import BankingModels from "@/components/BankingModels";
import FaqSection from "@/components/FAQS";
import Footer from "@/components/Footer";
import FoundingMembersPage from "@/components/FoundingMembers";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Industries from "@/components/IndustriesWeServe";
import Comparison from "@/components/PlatformThatGrows";
import Testimonials from "@/components/Testimonials";
import VerafiSection from "@/components/VerafiSection";

export default function Home() {
  return (
    <main className="bg-white flex justify-center">
      <div className="w-full max-w-[1920px]">
        <Header />
        <HeroSection />
        <BankingPage />
        <AcuCheck />
        <AcuView />
        <AcuPay />
        <VerafiSection />
        <AcufiBankVerification />
        <Comparison />
        <Industries />
        <Testimonials />
        <FoundingMembersPage />
        <BankingModels />
        <FaqSection />
        <Footer />
      </div>
    </main>
  );
}
