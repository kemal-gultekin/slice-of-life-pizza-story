import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import hands from "@/assets/gallery-hands.jpg";
import room from "@/assets/gallery-room.jpg";
import { Reveal } from "./Reveal";
import { siteConfig } from "@/config/siteConfig";

export function BrandStory() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [60, -60]);

  return (
    <section id="story" ref={ref} className="relative bg-cream px-5 py-28 text-ink md:px-10 md:py-40">
      <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-12">
        <div className="md:col-span-7">
          <Reveal>
            <p className="eyebrow text-tomato">Our story · {siteConfig.city}</p>
            <h2 className="font-display mt-5 text-[14vw] md:text-[7.5vw]">Not just pizza.<br />A slice of life.</h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-10 grid gap-6 text-lg leading-relaxed text-ink/75 md:max-w-xl">
            <p>Slice of Life is a cozy restaurant in Lefkoşa serving fresh, delicious food made with quality ingredients.</p>
            <p>We believe every meal should be simple, tasty, and memorable — from casual lunches to late-night cravings, it's a place where good food meets good vibes.</p>
          </Reveal>
        </div>
        <div className="relative md:col-span-5">
          <motion.img style={{ y }} src={hands} alt="Dough being stretched by hand" width={1024} height={1280} loading="lazy" className="aspect-[4/5] w-full object-cover" />
        </div>
      </div>
      <Reveal className="mx-auto mt-16 max-w-7xl md:mt-28">
        <img src={room} alt="Evening atmosphere in a warmly lit dining room" width={1400} height={933} loading="lazy" className="aspect-[21/9] w-full object-cover" />
        <p className="eyebrow mt-4 text-ink/50">A cozy spot to eat, laugh, and connect.</p>
      </Reveal>
    </section>
  );
}
