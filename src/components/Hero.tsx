"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <header
      id="hero"
      className="pt-[120px] pb-20 bg-gradient-to-br from-secondary via-secondary-dark to-secondary min-h-[90vh] flex items-center max-md:min-h-auto max-md:pt-[100px] max-md:pb-[60px]"
    >
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[60px] items-center max-md:text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-[0.85rem] font-semibold uppercase tracking-[2px] text-accent mb-5">
            Licensed Clinical Psychologist · Santa Monica, CA
          </p>
          <h1 className="mb-6 text-dark">
            Anxiety &amp; Trauma Therapy for High-Achieving Adults in Santa Monica
          </h1>
          <p className="text-[1.1rem] text-muted leading-[1.8] mb-9 max-w-[520px] max-md:mx-auto">
            You&apos;re holding it all together on the outside—but inside, the worry,
            tension, and exhaustion never stop. Therapy can help you slow down,
            reconnect, and build a more sustainable way forward.
          </p>
          <div className="flex gap-4 flex-wrap max-md:justify-center max-[480px]:flex-col max-[480px]:items-stretch">
            <a
              href="#contact"
              className="inline-block px-8 py-3.5 bg-primary text-white border-2 border-primary rounded-lg text-[0.95rem] font-medium transition-all duration-300 hover:bg-primary-dark hover:border-primary-dark hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(44,95,75,0.3)] text-center"
            >
              Schedule a Consultation
            </a>
            <a
              href="#services"
              className="inline-block px-8 py-3.5 bg-transparent text-primary border-2 border-primary rounded-lg text-[0.95rem] font-medium transition-all duration-300 hover:bg-primary hover:text-white hover:-translate-y-0.5 text-center"
            >
              Explore Services
            </a>
          </div>
        </motion.div>
        <motion.div
          className="relative max-md:order-[-1] max-md:max-w-[360px] max-md:mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="hidden md:block absolute -top-4 -right-4 w-full max-w-[520px] h-[calc(100%-16px)] border-[3px] border-accent rounded-3xl z-0 ml-auto" />
          <Image
            src="/cognitive-behavioral-therapy-techniques.jpg"
            alt="Dr. Maya Reynolds, PsyD — Licensed Clinical Psychologist in Santa Monica"
            width={520}
            height={400}
            className="relative z-[1] rounded-3xl w-full max-w-[520px] h-auto object-contain shadow-[0_20px_60px_rgba(44,95,75,0.15)] ml-auto"
            priority
          />
        </motion.div>
      </div>
    </header>
  );
}
