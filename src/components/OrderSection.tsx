import boxClosed from "@/assets/box-closed.jpg";
import { WhatsAppButton } from "./WhatsAppButton";
import { Reveal } from "./Reveal";

export function OrderSection() {
  return (
    <section className="relative overflow-hidden px-5 py-28 md:px-10 md:py-40" aria-labelledby="order-title">
      <div className="bg-spotlight absolute inset-0" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        <Reveal>
          <img src={boxClosed} alt="A Slice of Life pizza box ready to go" width={1400} height={1050} loading="lazy" className="w-full shadow-food [mask-image:radial-gradient(closest-side,black_80%,transparent)]" />
        </Reveal>
        <Reveal delay={0.1}>
          <h2 id="order-title" className="font-display text-[14vw] text-mozz md:text-[6vw]">Good food is meant to be shared.</h2>
          <p className="mt-6 text-lg text-cream/70">Find your favourite slice and make it a good day.</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#menu" className="btn btn-primary">Order now</a>
            <WhatsAppButton>Chat with us on WhatsApp</WhatsAppButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
