import { formatRestaurantName } from "@/lib/utils";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import MenuSection from "@/components/MenuSection";
import Footer from "@/components/Footer";

export default async function RestaurantPage({
  params,
}: {
  params: Promise<{ restaurant: string }>;
}) {
  const { restaurant } = await params;
  const name = formatRestaurantName(restaurant);

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900 overflow-hidden">
      <Navbar name={name} />
      <HeroSection name={name} />
      <AboutSection name={name} />
      <MenuSection name={name} />
      <Footer name={name} />
    </main>
  );
}
