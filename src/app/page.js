import Carousel from "@/components/carousel/Carousel";
import Hero from "@/components/hero/Hero";
import Latest from "@/components/latest/Latest";
import Bestselling from "@/components/bestselling/Bestselling";
import Payment from "@/components/payment/Payment";
import Emi from "@/components/emi/Emi";

export default function Home() {
  return (
   <>
   <Carousel />
   <Hero />
   <Latest />
   <Bestselling />
   <Emi />
   <Payment />
   </>
  );
}
