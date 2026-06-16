"use client";
import { FadeUp } from "@/Components/motion/Reveal";
import { faqs } from "@/Data/site";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  return (
    <section id="faq" className="relative py-15 overflow-hidden bg-black scroll-mt-20">
        {/* Background Image */}
<div className="absolute inset-0">
  <Image
    src="/Faq.webp"
    alt="FAQ Background"
    fill
   loading="lazy"
    className="object-contain object-center "
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/30" />

  {/* Red Glow */}
  <div className="absolute left-0 bottom-0 h-[400px] w-[400px] rounded-full bg-red-500/20 blur-[120px]" />

  {/* Yellow Glow */}
  <div className="absolute right-0 top-0 h-[350px] hidden md:block w-[350px] rounded-full bg-yellow-500/20 blur-[120px]" />
</div>
      <div className="mx-auto relative z-20 max-w-4xl px-6 lg:px-8">
        <div className="text-center">
          <FadeUp>
            <span className="inline-flex items-center gap-2 rounded-full  bg-yellow-500 px-3 py-1 text-xs font-medium uppercase tracking-wider text-ember">
              FAQ
            </span>
          </FadeUp>
          <FadeUp delay={0.05}>
            <h2 className="mt-4 font-display text-4xl text-amber-50 font-bold tracking-tight md:text-5xl">
              Everything You{" "}
              <span className="text-red-500 hero-title tracking-[2px]">
                Need To Know
              </span>
            </h2>
          </FadeUp>
        </div>

        <div className="mt-12 space-y-3">
          {(showAll ? faqs : faqs.slice(0, 5)).map((f, i) => {
            const isOpen = open === i;
            return (
              <FadeUp key={f.q} delay={i * 0.04}>
                <div className="rounded-2xl border border-amber-50 bg-surface">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-amber-50 font-semibold md:text-lg">
                      {f.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border-r-3 border-red-500 ${isOpen ? "text-red-500" : "text-amber-50"}`}
                    >
                      <Plus size={14} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 text-sm text-yellow-500">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeUp>
            );
          })}
        </div>
        {faqs.length > 5 && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="rounded-full bg-yellow-500 px-6 py-3 font-semibold text-black transition hover:bg-yellow-400"
            >
              {showAll ? "Show Less" : "See More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
