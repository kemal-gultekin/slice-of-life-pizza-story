import { useState } from "react";
import { gallery } from "@/data/gallery";
import { GalleryLightbox } from "./GalleryLightbox";
import { Reveal } from "./Reveal";

export function Gallery() {
  const [index, setIndex] = useState<number | null>(null);
  return (
    <section id="gallery" className="px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="eyebrow text-tomato">Gallery</p>
          <h2 className="font-display mt-4 text-[16vw] text-mozz md:text-[8vw]">More than just food.</h2>
        </Reveal>
        <ul className="mt-14 grid auto-rows-[44vw] grid-cols-2 gap-3 md:auto-rows-[18vw] md:grid-cols-4 md:gap-4">
          {gallery.map((g, i) => (
            <li key={i} className={`${g.span} ${i === 0 ? "col-span-2 row-span-2" : ""}`}>
              <button type="button" onClick={() => setIndex(i)} className="group relative block size-full overflow-hidden" aria-label={`Open image: ${g.alt}`}>
                <img src={g.src} alt={g.alt} width={g.w} height={g.h} loading="lazy" className="size-full object-cover transition-transform duration-[1.2s] ease-[var(--ease-cine)] group-hover:scale-105" />
                <span className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/25" />
              </button>
            </li>
          ))}
        </ul>
      </div>
      <GalleryLightbox index={index} onChange={setIndex} />
    </section>
  );
}
