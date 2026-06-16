"use client";
import { titleFont } from "@/app/layout";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import Link from "next/link";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-24"
      id="home"
    >
      {/* Background image (parallax) */}
      <motion.div style={{ y }} className="absolute inset-0 ">
        <Image
          width={800}
          height={800}
          src="/Hero_Section.webp"
          alt=""
          priority
          className="h-full w-full object-cover object-center pt-10"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 grid-grain opacity-30" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-yellow-400 px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground backdrop-blur"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-neon text-black" />
          NOW ENROLLING - LIMITED SLOTS AVAILABLE{" "}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className={` mt-6 max-w-4xl font-display text-5xl font-bold leading-[1.02]   md:text-7xl lg:text-8xl text-amber-50 hero-title tracking-[6px]`}
        >
          Transform Your <br />
          <span className="text-red-500 ">Body</span> &amp;{" "}
          <span className="text-red-500">Mind</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 max-w-xl md:text-md text-amber-50"
        >
          Fitness & Boxing Coaching for Beginners and Fitness Enthusiasts. Build
          strength, improve endurance, and develop confidence through structured
          training programs
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-10 flex flex-wrap items-center gap-4 "
        >
          <a
            href="/#contact"
            className="btn-neon inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-black bg-yellow-400"
          >
            Start Training <ArrowRight size={16} />
          </a>
          
        </motion.div>

        {/* Stat cards */}
        {/* <motion.div
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.5 } } }}
          className="mt-16 grid max-w-3xl grid-cols-3 gap-4"
        >
          {[
            { label: "Active Clients", value: 500, suffix: "+" },
            { label: "Certified Trainers", value: 10, suffix: "+" },
            { label: "Achieve Goals", value: 95, suffix: "%" },
          ].map((s) => (
            <motion.div
              key={s.label}
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              className="glass rounded-2xl px-4 py-5 md:px-6 md:py-6 bg-white"
            >
              <div className="font-display text-3xl font-bold tracking-tight md:text-4xl">
                <span className="text-gradient-neon">
                  
                </span>
              </div>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground md:text-sm">{s.label}</div>
            </motion.div>
          ))}
        </motion.div> */}
      </motion.div>
    </section>
  );
}
