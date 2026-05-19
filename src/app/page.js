import AvailableCars from "@/components/share/AvailableCars";
import Banner from "@/components/share/Banner";
import WhyChoose from "@/components/share/WhyChoicse";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner/>
      <AvailableCars/>
      <WhyChoose/>
    </div>
  );
}
