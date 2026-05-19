import AvailableCars from "@/components/share/AvailableCars";
import Banner from "@/components/share/Banner";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner/>
      <AvailableCars/>
    </div>
  );
}
