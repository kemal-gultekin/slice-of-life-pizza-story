import { motion } from "framer-motion";
import type { MenuItem } from "@/data/menu";
import { formatPrice, pizzaOrderMessage } from "@/utils/whatsapp";
import { WhatsAppButton } from "./WhatsAppButton";

export function PizzaCard({ item, index }: { item: MenuItem; index: number }) {
  const price = formatPrice(item.price);
  const featured = !!item.image;
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`group border-t border-border pt-6 ${featured ? "md:col-span-2 md:grid md:grid-cols-2 md:gap-10" : ""}`}
    >
      {featured && (
        <div className="overflow-hidden">
          <img src={item.image} alt={item.name} width={1280} height={1280} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-[1.2s] ease-[var(--ease-cine)] group-hover:scale-[1.04]" />
        </div>
      )}
      <div className={`flex flex-col ${featured ? "mt-6 md:mt-0" : ""}`}>
        <div className="flex items-baseline justify-between gap-6">
          <span className="eyebrow text-cream/40">{String(index + 1).padStart(2, "0")} · {item.category}</span>
          {price ? <span className="font-display text-2xl text-tomato">{price}</span> : <span className="eyebrow text-cream/40">Price on request</span>}
        </div>
        <h3 className={`font-display mt-3 text-mozz ${featured ? "text-5xl md:text-6xl" : "text-3xl"}`}>{item.name}</h3>
        {item.description && <p className="mt-3 text-cream/65">{item.description}</p>}
        {item.ingredients.length > 0 && <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-olive" aria-label="Ingredients">
          {item.ingredients.map((g) => <li key={g}>{g}</li>)}
        </ul>}
        {item.dietary && <p className="eyebrow mt-3 text-olive">{item.dietary}</p>}
        <div className="mt-6">
          <WhatsAppButton message={pizzaOrderMessage(item.name, item.price)} variant={featured ? "primary" : "ghost"} className="!py-3">
            Order this
          </WhatsAppButton>
        </div>
      </div>
    </motion.article>
  );
}
