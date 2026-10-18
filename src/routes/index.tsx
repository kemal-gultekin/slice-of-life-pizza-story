import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { PizzaStoryAnimation } from "@/components/PizzaStoryAnimation";
import { BrandStory } from "@/components/BrandStory";
import { MenuSection } from "@/components/MenuSection";
import { SignaturePizza } from "@/components/SignaturePizza";
import { Gallery } from "@/components/Gallery";
import { WhySliceOfLife } from "@/components/WhySliceOfLife";
import { OrderSection } from "@/components/OrderSection";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Slice of Life — Pizza in Lefkoşa" },
      { name: "description", content: "Fresh pizza, calzones and more in Ortaköy, Lefkoşa. Open daily 11 AM – 11 PM. Order on WhatsApp." },
      { property: "og:title", content: "Slice of Life — Good things take dough" },
      { property: "og:description", content: "Fresh pizza, calzones and more in Ortaköy, Lefkoşa. Order on WhatsApp." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="grain">
      <a href="#menu" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[90] focus:bg-tomato focus:p-3">Skip to menu</a>
      <Navbar />
      <main>
        <PizzaStoryAnimation />
        <BrandStory />
        <MenuSection />
        <SignaturePizza />
        <Gallery />
        <WhySliceOfLife />
        <OrderSection />
      </main>
      <Footer />
    </div>
  );
}
