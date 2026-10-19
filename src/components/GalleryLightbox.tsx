import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { gallery } from "@/data/gallery";

export function GalleryLightbox({ index, onChange }: { index: number | null; onChange: (i: number | null) => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const n = gallery.length;

  useEffect(() => {
    if (index === null) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onChange(null);
      if (e.key === "ArrowRight") onChange((index + 1) % n);
      if (e.key === "ArrowLeft") onChange((index - 1 + n) % n);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, n, onChange]);

  return (
    <AnimatePresence>
      {index !== null && (
        <motion.div role="dialog" aria-modal="true" aria-label="Image viewer" className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/95 p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => onChange(null)}>
          <button ref={closeRef} onClick={() => onChange(null)} aria-label="Close" className="absolute right-4 top-4 inline-flex size-12 items-center justify-center text-cream"><X className="size-7" /></button>
          <button onClick={(e) => { e.stopPropagation(); onChange((index - 1 + n) % n); }} aria-label="Previous image" className="absolute left-2 inline-flex size-12 items-center justify-center text-cream md:left-6"><ChevronLeft className="size-8" /></button>
          <AnimatePresence mode="wait">
            <motion.figure key={index} initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }} onClick={(e) => e.stopPropagation()} className="max-h-full max-w-5xl">
              <img src={gallery[index]!.src} alt={gallery[index]!.alt} className="max-h-[80svh] w-auto object-contain" />
              <figcaption className="mt-3 flex justify-between text-sm text-cream/60"><span>{gallery[index]!.alt}</span><span>{index + 1} / {n}</span></figcaption>
            </motion.figure>
          </AnimatePresence>
          <button onClick={(e) => { e.stopPropagation(); onChange((index + 1) % n); }} aria-label="Next image" className="absolute right-2 inline-flex size-12 items-center justify-center text-cream md:right-6"><ChevronRight className="size-8" /></button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
