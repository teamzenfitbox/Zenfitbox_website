"use client";

import { motion } from "framer-motion";
import { FadeUp } from "../motion/Reveal";
import Image from "next/image";
import { timeline } from "@/Data/site";



export function About() {
  return (
    <section id="about" className="relative py-28 bg-amber-50">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <FadeUp>
          <div className="relative">
            <div className="relative  overflow-hidden rounded-3xl shadow-yellow-500  shadow-[5px_8px_20px_rgba(0,0,0,0.3)]">
              <Image
              width={1000}
              height={1000}
              loading="lazy"
                src="/aboutImg.webp"
                alt="Coach reviewing a client's training program"
                className="aspect-[4/5] h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass glow-neon absolute -bottom-6 -right-6 hidden rounded-2xl p-5 md:block"
            >
            </motion.div>
          </div>
          </FadeUp>
   

        <div>
            <FadeUp>
         
            <span className="inline-flex items-center gap-2 rounded-full  bg-yellow-500 px-3 py-1 text-xs font-medium uppercase tracking-wider ">
              ABOUT ZEN FIT BOX
            </span>
          </FadeUp>
          <FadeUp delay={0.05}>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
              Coaching built on <span className="text-red-500 about-title tracking-[3px]">discipline</span>, not hype
            </h2>
            </FadeUp>
         
         <FadeUp delay={0.1}>
            <p className="mt-5 text-muted-foreground">
             At Zen Fit Box, we help individuals improve their fitness, strength, and confidence through structured fitness and boxing training.Our goal is to create a supportive environment where beginners and fitness enthusiasts can train consistently, learn proper techniques, and achieve long-term results.
            </p>
            </FadeUp>
        

          <div className="mt-10 space-y-6">
            {timeline.map((t, i) => (
                <FadeUp key={t.number} delay={i * 0.05}>
              
                <div className="flex gap-5" >
                  <div className="flex flex-col items-center">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full border-r-4 border-red-500 font-display text-md font-bold text-neon">
                      {t.number}
                    </div>
                    {i < timeline.length - 1 && <div className="mt-2 h-full w-px bg-gradient-to-b from-neon/40 to-transparent" />}
                  </div>
                  <div className="pb-2">
                    <h3 className="font-display text-lg font-semibold">{t.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{t.body}</p>
                  </div>
                </div>
             </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
