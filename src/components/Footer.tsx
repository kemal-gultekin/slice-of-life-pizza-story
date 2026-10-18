import { Clock, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { navLinks } from "./Navbar";
import { Logo } from "./Logo";
import { WhatsAppButton } from "./WhatsAppButton";

export function Footer() {
  return (
    <footer id="contact" className="bg-cream px-5 pb-10 pt-24 text-ink md:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="font-display text-[18vw] leading-none md:text-[11vw]">Slice of Life</p>
        <div className="mt-14 grid gap-12 border-t border-ink/15 pt-12 md:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 text-ink/60">{siteConfig.tagline}</p>
          </div>
          <nav aria-label="Footer">
            <ul className="grid gap-2">
              {navLinks.map((l) => <li key={l.href}><a href={l.href} className="hover:text-tomato">{l.label}</a></li>)}
            </ul>
          </nav>
          <address className="grid gap-4 not-italic text-ink/80">
            <a href={siteConfig.mapUrl} target="_blank" rel="noopener noreferrer" className="flex gap-3 hover:text-tomato"><MapPin className="mt-0.5 size-4 shrink-0" />{siteConfig.address}</a>
            <a href={`tel:+${siteConfig.whatsappNumber}`} className="flex gap-3 hover:text-tomato"><Phone className="mt-0.5 size-4 shrink-0" />{siteConfig.phoneDisplay}</a>
            <p className="flex gap-3"><Clock className="mt-0.5 size-4 shrink-0" />{siteConfig.hours}</p>
          </address>
          <div className="flex flex-col items-start gap-3">
            <WhatsAppButton variant="primary">Order on WhatsApp</WhatsAppButton>
            {siteConfig.socials.map((s) => <a key={s.url} href={s.url} target="_blank" rel="noopener noreferrer" className="hover:text-tomato">{s.label}</a>)}
          </div>
        </div>
        <p className="mt-16 text-sm text-ink/50">© {new Date().getFullYear()} Slice of Life, Lefkoşa. All rights reserved.</p>
      </div>
    </footer>
  );
}
