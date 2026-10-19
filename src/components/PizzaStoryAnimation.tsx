import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown } from "lucide-react";
import dough from "@/assets/stage-dough.jpg";
import sauce from "@/assets/stage-sauce.jpg";
import cheese from "@/assets/stage-cheese.jpg";
import toppings from "@/assets/stage-toppings.jpg";
import baked from "@/assets/stage-baked.jpg";
import boxOpen from "@/assets/box-open.jpg";
import boxClosed from "@/assets/box-closed.jpg";
import { WhatsAppButton } from "./WhatsAppButton";

const useIso = typeof window === "undefined" ? useEffect : useLayoutEffect;

const captions = [
  { k: "01 — The Dough", t: "Every great pizza starts somewhere." },
  { k: "02 — Tomato", t: "The perfect foundation." },
  { k: "03 — Mozzarella", t: "Made with the good stuff." },
  { k: "04 — Toppings", t: "Every detail matters." },
  { k: "05 — Baked", t: "Made with love. Served with soul." },
];

const stages = [
  { src: dough, alt: "Raw pizza dough dusted with flour" },
  { src: sauce, alt: "Tomato sauce spread over the dough" },
  { src: cheese, alt: "Torn mozzarella over the tomato sauce" },
  { src: toppings, alt: "Mushrooms, olives, peppers and onion on the pizza" },
  { src: baked, alt: "The finished, golden baked pizza" },
];

function Hero() {
  return (
    <div data-hero className="absolute inset-x-0 bottom-0 z-20 px-5 pb-10 md:inset-y-0 md:left-0 md:right-auto md:flex md:w-[42%] md:flex-col md:justify-center md:px-10 md:pb-0">
      <p className="eyebrow text-tomato">Lefkoşa · Since the first slice</p>
      <h1 className="font-display mt-4 text-[17vw] text-mozz md:text-[6.4vw]">Good things<br />take dough.</h1>
      <p className="mt-5 max-w-sm text-base text-cream/70 md:text-lg">Real ingredients. Handmade moments. Pizza worth slowing down for.</p>
      <div className="mt-8 flex items-center gap-6">
        <a href="#menu" className="btn btn-primary">Discover our pizza</a>
        <span className="eyebrow hidden items-center gap-2 text-cream/50 md:inline-flex"><ArrowDown className="size-4 animate-bounce" /> Scroll</span>
      </div>
    </div>
  );
}

function Finale() {
  return (
    <div data-finale className="pointer-events-none absolute inset-x-0 bottom-0 z-20 px-5 pb-10 opacity-0 md:inset-y-0 md:left-auto md:right-0 md:flex md:w-[40%] md:flex-col md:justify-center md:px-10 md:pb-0">
      <p className="eyebrow text-tomato">06 — Boxed</p>
      <h2 className="font-display mt-4 text-[13vw] text-mozz md:text-[5vw]">Your next slice is ready.</h2>
      <p className="mt-4 text-cream/70 md:text-lg">Good food. Good people. Good moments.</p>
      <div className="mt-7 flex flex-wrap gap-3">
        <a href="#menu" className="btn btn-primary">Order your pizza</a>
        <WhatsAppButton>Order via WhatsApp</WhatsAppButton>
      </div>
    </div>
  );
}

function StaticStory() {
  return (
    <section id="home" className="relative px-5 pb-16 pt-28 md:px-10">
      <div className="mx-auto max-w-5xl">
        <h1 className="font-display text-[15vw] text-mozz md:text-8xl">Good things take dough.</h1>
        <p className="mt-5 max-w-md text-cream/70">Real ingredients. Handmade moments. Pizza worth slowing down for.</p>
        <a href="#menu" className="btn btn-primary mt-8">Discover our pizza</a>
        <ol className="mt-16 grid gap-12 md:grid-cols-2">
          {stages.map((s, i) => (
            <li key={i}>
              <img src={s.src} alt={s.alt} width={1400} height={1400} loading={i ? "lazy" : "eager"} className="aspect-square w-full object-cover" />
              <p className="eyebrow mt-4 text-tomato">{captions[i].k}</p>
              <p className="font-display mt-2 text-4xl">{captions[i].t}</p>
            </li>
          ))}
          <li>
            <img src={boxClosed} alt="Pizza in a closed Slice of Life box" width={1400} height={1050} loading="lazy" className="aspect-square w-full object-cover" />
            <p className="font-display mt-4 text-4xl">Your next slice is ready.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href="#menu" className="btn btn-primary">Order your pizza</a>
              <WhatsAppButton>Order via WhatsApp</WhatsAppButton>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
}

export function PizzaStoryAnimation() {
  const root = useRef<HTMLElement>(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const fn = () => setReduced(mq.matches);
    mq.addEventListener("change", fn);
    return () => mq.removeEventListener("change", fn);
  }, []);

  useIso(() => {
    if (reduced || !root.current) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const mobile = window.innerWidth < 768;
      const q = gsap.utils.selector(root);
      const layers = q("[data-layer]");
      const caps = q("[data-cap]");

      gsap.set(layers.slice(1), { autoAlpha: 0 });
      gsap.set(layers[1]!, { autoAlpha: 1, clipPath: "circle(0% at 52% 48%)" });
      gsap.set(caps, { autoAlpha: 0, y: 30 });

      const tl = gsap.timeline({
        defaults: { ease: "power2.inOut" },
        scrollTrigger: {
          trigger: root.current!,
          start: "top top",
          end: mobile ? "+=380%" : "+=560%",
          scrub: 0.8,
          pin: q("[data-pin]")[0]!,
          anticipatePin: 1,
        },
      });

      const capIn = (i: number, at: number | string) => {
        tl.to(caps[i]!, { autoAlpha: 1, y: 0, duration: 0.5 }, at);
      };
      const capOut = (i: number, at: number | string) => tl.to(caps[i]!, { autoAlpha: 0, y: -30, duration: 0.4 }, at);

      // Hero out → stage 1
      tl.to(q("[data-hero]"), { autoAlpha: 0, y: -40, duration: 0.6 }, 0);
      tl.to(q("[data-pizza]"), { scale: mobile ? 1 : 1.04, xPercent: mobile ? 0 : -42, duration: 1.2 }, 0);
      capIn(0, 0.4);
      capOut(0, 1.4);
      // Sauce: organic spread from the center outward
      tl.to(layers[1]!, { clipPath: "circle(75% at 52% 48%)", duration: 1.4, ease: "power1.inOut" }, 1.5);
      capIn(1, 1.7);
      capOut(1, 3);
      // Mozzarella
      tl.fromTo(layers[2]!, { autoAlpha: 0, scale: 1.015 }, { autoAlpha: 1, scale: 1, duration: 0.9 }, 3.1);
      capIn(2, 3.2);
      capOut(2, 4.3);
      // Toppings settle gently
      tl.fromTo(layers[3]!, { autoAlpha: 0, y: -14, filter: "blur(6px)" }, { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 0.9, ease: "power2.out" }, 4.4);
      capIn(3, 4.5);
      capOut(3, 5.6);
      // Bake: warm crossfade + glow
      tl.fromTo(layers[4]!, { autoAlpha: 0, filter: "brightness(1.25) saturate(0.8)" }, { autoAlpha: 1, filter: "brightness(1) saturate(1)", duration: 1 }, 5.7);
      tl.to(q("[data-glow]"), { autoAlpha: 1, duration: 1 }, 5.7);
      tl.to(q("[data-steam]"), { autoAlpha: 0.5, duration: 0.6 }, 6.2);
      capIn(4, 5.9);
      capOut(4, 7.1);
      tl.to(q("[data-steam]"), { autoAlpha: 0, duration: 0.4 }, 7.1);
      // Into the box: open box appears, pizza shrinks into its slot
      tl.to(q("[data-boxopen]"), { autoAlpha: 1, duration: 0.6 }, 7.2);
      tl.to(q("[data-stack]"), { scale: 0.62, yPercent: 17, duration: 1.1, ease: "power3.inOut" }, 7.3);
      tl.to(q("[data-stack]"), { autoAlpha: 0, duration: 0.4 }, 8.3);
      tl.to(q("[data-glow]"), { autoAlpha: 0, duration: 0.4 }, 8.3);
      // Lid closes: open box tilts away, closed box settles in
      tl.to(q("[data-boxopen]"), { rotateX: 35, scale: 0.9, autoAlpha: 0, duration: 0.8, ease: "power2.in" }, 8.8);
      tl.fromTo(q("[data-boxclosed]"), { autoAlpha: 0, y: -30, scale: 1.04 }, { autoAlpha: 1, y: 0, scale: 1, duration: 0.8, ease: "power2.out" }, 9.2);
      
      tl.to(q("[data-finale]"), { autoAlpha: 1, pointerEvents: "auto", duration: 0.6 }, 9.7);
      tl.to({}, { duration: 0.6 });
    }, root);
    return () => ctx.revert();
  }, [reduced]);

  if (reduced) return <StaticStory />;

  return (
    <section id="home" ref={root} className="relative" aria-label="How a Slice of Life pizza comes together">
      <div data-pin className="relative h-[100svh] overflow-hidden bg-ink">
        <div className="bg-spotlight absolute inset-0" aria-hidden />
        <div className="absolute inset-x-0 top-0 bottom-[30%] flex items-center justify-center md:bottom-0 md:pl-[34%]">
        <div
          data-pizza
          className="relative aspect-square w-[min(108vw,58svh)] md:w-[min(78svh,54vw)]"
          style={{ perspective: 1200 }}
        >
          <div data-glow className="absolute inset-[-10%] rounded-full bg-tomato/20 opacity-0 blur-3xl" aria-hidden />
          <div data-boxopen className="absolute inset-[-12%] opacity-0" style={{ transformOrigin: "50% 40%" }}>
            <img src={boxOpen} alt="The pizza placed in an open Slice of Life box" width={1400} height={1400} className="size-full object-cover [mask-image:radial-gradient(closest-side,black_80%,transparent)]" />
          </div>
          <div data-stack className="absolute inset-0">
            {stages.map((s, i) => (
              <img
                key={i}
                data-layer
                src={s.src}
                alt={s.alt}
                width={1400}
                height={1400}
                fetchPriority={i === 0 ? "high" : "auto"}
                className="absolute inset-0 size-full object-cover [mask-image:radial-gradient(closest-side,black_86%,transparent_100%)]"
                style={{ willChange: "opacity, clip-path, transform" }}
              />
            ))}
            <div data-steam className="pointer-events-none absolute inset-x-[25%] -top-[8%] h-1/3 bg-[radial-gradient(closest-side,var(--color-mozz),transparent)] opacity-0 blur-2xl" aria-hidden />
          </div>
          <div data-boxclosed className="absolute inset-[2%] flex items-center opacity-0">
            <img src={boxClosed} alt="Pizza boxed in a closed, branded Slice of Life box" width={1400} height={1050} className="w-full shadow-food [mask-image:radial-gradient(closest-side,black_82%,transparent)]" />
          </div>
        </div>
        </div>

        <Hero />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 px-5 pb-12 md:inset-y-0 md:left-auto md:right-0 md:flex md:w-[40%] md:items-center md:px-10 md:pb-0">
          <div className="relative w-full">
            {captions.map((c, i) => (
              <div key={i} data-cap className="absolute bottom-0 left-0 right-0 opacity-0 md:top-1/2 md:bottom-auto md:-translate-y-1/2">
                <p className="eyebrow text-tomato">{c.k}</p>
                <p className="font-display mt-3 text-[11vw] text-mozz md:text-[4.6vw]">{c.t}</p>
              </div>
            ))}
          </div>
        </div>

        <Finale />
      </div>
    </section>
  );
}
