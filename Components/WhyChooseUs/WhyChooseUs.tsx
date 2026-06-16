"use client";
import { FadeUp, Stagger, StaggerItem } from "@/Components/motion/Reveal";
import { whyChoose } from "@/Data/site";
import { BadgeCheck, UserCog, Clock, LineChart, MessageCircle, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = { BadgeCheck, UserCog, Clock, LineChart, MessageCircle };

export function WhyChooseUs() {
  return (
    <section className="relative py-20 bg-amber-50">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-surface/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <div>
            <FadeUp>
              <span className="inline-flex items-center gap-2 rounded-full bg-yellow-500 px-3 py-1 text-xs font-medium uppercase tracking-wider">
                WHY CHOOSE ZEN FIT BOX
              </span>
            </FadeUp>
            <FadeUp delay={0.05}>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
                Built different. <br />
                <span className="hero-title text-red-500 tracking-[3px]">Trained differently.</span>
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="mt-4 max-w-md text-muted-foreground">
                We focus on practical fitness and boxing coaching designed to help you build strength, improve conditioning, and stay consistent with your goals. Every program is tailored to your fitness level and progress.
              </p>
            </FadeUp>
          </div>

          <Stagger className="grid gap-4 sm:grid-cols-2">
            {whyChoose.map((f) => {
              const Icon = iconMap[f.icon] ?? BadgeCheck;
              return (
                <StaggerItem key={f.title}>
                  <div className="glass group h-full rounded-2xl p-6 transition hover:-translate-y-1 hover:border-neon/50 border-l-3 border-red-500">
                    <div className="grid h-10 w-10 place-items-center rounded-lg bg-yellow-500 text-neon transition group-hover:bg-neon group-hover:text-neon-foreground">
                      <Icon size={18} />
                    </div>
                    <h3 className="mt-5 font-display text-lg font-semibold">{f.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{f.description}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
