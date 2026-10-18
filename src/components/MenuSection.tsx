import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { categories, menu } from "@/data/menu";
import { PizzaCard } from "./PizzaCard";
import { Reveal } from "./Reveal";

export function MenuSection() {
  const [cat, setCat] = useState<(typeof categories)[number]>("All");
  const items = cat === "All" ? menu : menu.filter((m) => m.category === cat);

  return (
    <section id="menu" className="px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-7xl">
        <Reveal className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-tomato">The menu</p>
            <h2 className="font-display mt-4 text-[16vw] text-mozz md:text-[8vw]">Pick your slice.</h2>
          </div>
          <p className="max-w-sm text-cream/60">Tap “Order this” to open WhatsApp with your choice pre-written — the team will confirm options, price and delivery with you.</p>
        </Reveal>

        <div role="tablist" aria-label="Menu categories" className="mt-12 flex gap-2 overflow-x-auto pb-2">
          {categories.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={cat === c}
              onClick={() => setCat(c)}
              className={`eyebrow relative shrink-0 px-4 py-3 transition-colors ${cat === c ? "text-mozz" : "text-cream/50 hover:text-cream"}`}
            >
              {c}
              {cat === c && <motion.span layoutId="tab" className="absolute inset-x-3 bottom-1 h-0.5 bg-tomato" />}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-10 grid gap-x-10 gap-y-14 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {items.map((item, i) => <PizzaCard key={item.id} item={item} index={i} />)}
          </AnimatePresence>
        </motion.div>
        <p className="mt-16 text-sm text-cream/40">Prices in Turkish lira as listed on sliceoflife.site. Burgers, pasta, salads, Indian & Chinese dishes and drinks are also available — ask us on WhatsApp.</p>
      </div>
    </section>
  );
}
