"use client"
import Image from "next/image";
import { FadeUp } from "../motion/Reveal";

export default function BeginnerSection() {
  return (
    <section className="relative overflow-hidden bg-black py-20  ">
      {/* Background Image */}
      <div className="absolute inset-0 ">
        <Image
          src="/Banner.webp"
          alt="Fitness Training"
          fill
          loading="lazy"
          className=" object-cover md:object-contain md:object-right object-left transition-all
duration-300
hover:scale-105
hover:-translate-y-2 " 
        />

     

        <div className="absolute left-0 bottom-0 h-[500px] w-[500px]  rounded-full bg-red-600/30 blur-[150px]" />

       
      </div>

     
      <div className="relative z-10 mx-auto max-w-5xl px-6 ">
        <FadeUp>
          <h2 className="text-4xl font-black text-amber-50 uppercase md:text-5xl lg:text-6xl ">
            READY TO{" "}
            <span className="hero-title tracking-[1px] text-red-500">
              TRANSFORM YOURSELF
            </span>
          </h2>
        </FadeUp>
        <FadeUp>
          <p className="mt-8 text-xl font-bold text-amber-50 md:text-3xl">
            Start your journey with our
            <span className="text-red-500 hero-title ">
              {" "}
              Boxing & Fitness
            </span>{" "}
            Program
          </p>
        </FadeUp>
        <FadeUp>
          <div className="mt-8">
            <p className="text-md font-bold uppercase tracking-wider text-white md:text-2xl">
              START ANYTIME →
              <span className="text-red-500 hero-title tracking-[2px]">
                {" "}
                LIMITED SLOTS AVAILABLE
              </span>
            </p>
          </div>
        </FadeUp>
        <FadeUp>
          <a href="/#contact">
          <button className="mt-12 rounded-xl bg-yellow-500 px-10 py-3 cursor-pointer text-lg font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-red-600 hover:shadow-[0_0_40px_rgba(239,68,68,0.5)]">
            Register Now
          </button>
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
