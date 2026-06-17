import React from 'react'
import { FadeUp } from '../motion/Reveal'
import ContactForm from './FitnessInquiryForm'


const Contact = () => {
  return (
       <section id="contact" className="relative py-20 bg-amber-50 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start lg:gap-16">
          <div>
            <FadeUp>
              <span className="inline-flex items-center gap-2 rounded-full  bg-yellow-500 px-3 py-1 text-xs font-medium uppercase tracking-wider text-neon">
                Inquiry
              </span>
            </FadeUp>
            <FadeUp delay={0.05}>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
                Ready to Transform Your <span className="text-red-500 hero-title tracking-[2px]">Fitness Journey</span>
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="mt-4 max-w-md text-muted-foreground">
                Tell us about your fitness goals, experience level, and challenges. Our expert coaches will create a personalized training strategy and contact you within 24 hours.
              </p>
            </FadeUp>
          
          </div>
          <FadeUp>{<ContactForm/>}</FadeUp>
        </div>
      </div>
    </section>
  )
}

export default Contact