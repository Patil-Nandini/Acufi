
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroBankVerification from "@/components/HeroBankVerification";
import HowItWorks from "@/components/HowItWorks";
import RelatedProducts from "@/components/RelatedProducts";
import WhyBankVerification from "@/components/WhyBankVerification";


export default function Home() {
  return (
    <main className="bg-white flex justify-center">
      <div className="w-full max-w-[1920px] h-full">
        <Header />
       <HeroBankVerification/>
       <WhyBankVerification/>
       <HowItWorks/>
       <RelatedProducts/>
        <Footer />
      </div>
    </main>
  );
}
