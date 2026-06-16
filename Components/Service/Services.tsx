"use client";
import { FadeUp, Stagger, StaggerItem } from "@/Components/motion/Reveal";
import { services } from "@/Data/site";

import { Dumbbell, Laptop2, Flame, Activity, Salad, Trophy, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = { Dumbbell, Laptop2, Flame, Activity, Salad, Trophy };

export function Services() {
  return (
    <section id="services" className="relative py-20 bg-black text-amber-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <FadeUp>
            <span className="inline-flex items-center gap-2 rounded-full  px-3 py-1 text-xs font-medium uppercase tracking-wider text-black bg-yellow-500">
              Services
            </span>
          </FadeUp>
          <FadeUp delay={0.05}>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
              Training Programs <span className="hero-title text-red-500 tracking-[3px] inline-block md:text-4xl text-3xl">Designed For Your Goals</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="mt-4">
             Whether your goal is fat loss, muscle gain, boxing skills, or overall fitness, we provide structured coaching to help you stay consistent and achieve results.
            </p>
          </FadeUp>
        </div>

        <Stagger className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = iconMap[s.icon] ?? Dumbbell;
            return (
              <StaggerItem key={s.title}>
                <div className="group relative h-full rounded-2xl p-px transition duration-300 hover:scale-[1.02]">
                  <div
                    aria-hidden
                    className="absolute inset-0 rounded-2xl bg-black group-hover:border-none border-r border-t border-white opacity-60 transition group-hover:opacity-100 group-hover:shadow-[-3px_3px_12px_rgba(0,0,0,0.25)] shadow-red-500"
                  />
                  <div className="relative h-full rounded-2xl bg-surface p-7">
                    <div className="grid h-15 w-15 place-items-center rounded-xl bg-yellow-500 text-white transition  group-hover:text-neon-foreground">
                      <Icon size={22} />
                    </div>
                    <h3 className="mt-6 font-display text-xl font-semibold">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
                   
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
