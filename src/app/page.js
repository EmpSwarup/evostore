import Carousel from "@/components/carousel/Carousel";
import Hero from "@/components/hero/Hero";
import Latest from "@/components/latest/Latest";
import Payment from "@/components/payment/Payment";
import Emi from "@/components/emi/Emi";

export default function Home() {
  return (
   <>
   <Hero />
   <Carousel />
   <Latest />
   <Emi />
   <Payment />
   </>
  );
}
