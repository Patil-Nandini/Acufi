
import Footer from "@/components/Footer";
import Image from "next/image";
import "../../app/globals.css";
import GlobalHeader from "@/components/GlobalHeader";
 
export default function UnderRenovation() {
  return (
    <>
      <GlobalHeader />
      <div className="flex items-center justify-center min-h-screen bg-[white]">
        <Image
          src="/under-renovation.svg"
          alt="Under Renovation"
          width={500}
          height={500}
          priority
        />
      </div>
      <Footer />
    </>
  );
}
 