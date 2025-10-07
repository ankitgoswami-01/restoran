import AboutSection from "@/compontes/AboutSection";
import Breakfast from "@/compontes/Breakfast";
import HeroHeader from "@/compontes/HeroHeader";
import MasterChefs from "@/compontes/MasterChefs";
import OurClients from "@/compontes/OurClients";
import ReservationSection from "@/compontes/ReservationSection";
import Service from "@/compontes/Service";
import TrendingRecipes from "@/compontes/TrendingRecipes";
import { Brackets } from "lucide-react";
import Image from "next/image";
export const metadata = {
  title: "SkyHub | Discover the Taste of Perfection",
  description: "Welcome to SkyHub — your destination for authentic flavors, world-class dining, and premium service. Explore our menu, meet our chefs, and enjoy an unforgettable experience.",
};

export default function Home() {
  return (
   <>
   <HeroHeader/>
   <Service/>
   <AboutSection/>
   <Breakfast/>
   <TrendingRecipes/>
   <ReservationSection/>
   <MasterChefs/>
   <OurClients/>

   </>
  );
}
