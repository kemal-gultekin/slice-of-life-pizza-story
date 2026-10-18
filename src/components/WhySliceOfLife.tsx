import { Clock, MapPin, MessageCircle, UtensilsCrossed } from "lucide-react";
import { Reveal } from "./Reveal";
import { siteConfig } from "@/config/siteConfig";

const values = [
  { icon: UtensilsCrossed, title: "Made fresh every day", body: "Fresh, delicious food made with quality ingredients." },
  { icon: Clock, title: "Open daily", body: siteConfig.hours.replace("Open daily · ", "") + ", for lunch and late-night cravings." },
  { icon: MessageCircle, title: "Order on WhatsApp", body: "Message us your choice and we'll confirm the details with you." },
  { icon: MapPin, title: "In the heart of Ortaköy", body: siteConfig.address },
];

export function WhySliceOfLife() {
  return (
    <section className="border-y border-border px-5 py-24 md:px-10 md:py-32" aria-labelledby="why-title">
      <div className="mx-auto max-w-7xl">
        <h2 id="why-title" className="font-display text-5xl text-mozz md:text-7xl">Why Slice of Life?</h2>
        <ul className="mt-14 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <li key={v.title}>
              <Reveal delay={i * 0.08}>
                <v.icon className="size-6 text-tomato" strokeWidth={1.5} aria-hidden />
                <h3 className="font-display mt-6 text-2xl">{v.title}</h3>
                <p className="mt-3 text-cream/60">{v.body}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
