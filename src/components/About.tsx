"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-[100px] bg-white max-md:py-[72px]">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-[80px] items-center">
        <motion.div
          className="max-md:order-[-1]"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src="/Dr. Maya Reynolds.png"
            alt="Dr. Maya Reynolds, PsyD"
            width={500}
            height={550}
            className="rounded-[20px] w-full h-[550px] object-cover object-top shadow-[0_16px_48px_rgba(0,0,0,0.08)] max-md:h-[400px] max-md:max-w-[360px] max-md:mx-auto"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[0.85rem] font-semibold uppercase tracking-[2px] text-accent mb-3">
            Meet Your Therapist
          </p>
          <h2 className="mb-5">Dr. Maya Reynolds, PsyD</h2>
          <p className="text-[1.1rem] text-primary font-medium mb-5 leading-[1.7]">
            I&apos;m a licensed clinical psychologist offering therapy for adults who
            feel overwhelmed by anxiety, stress, or the lingering effects of past
            experiences.
          </p>
          <p className="text-body mb-4">
            Many of the people I work with are high-achieving, thoughtful, and
            self-aware—but internally feel exhausted, stuck in overthinking, or
            emotionally on edge. They&apos;re often entrepreneurs, creatives, or
            professionals who have been pushing through stress for years and feel
            disconnected from themselves.
          </p>
          <p className="text-body mb-4">
            I take a warm, collaborative, and grounded approach to therapy.
            Sessions are structured enough to feel supportive, while still leaving
            space for reflection and depth. My goal is not just symptom relief, but
            helping you develop insight, resilience, and a stronger relationship
            with yourself over time.
          </p>
          <a
            href="#contact"
            className="inline-block mt-4 px-8 py-3.5 bg-primary text-white border-2 border-primary rounded-lg text-[0.95rem] font-medium transition-all duration-300 hover:bg-primary-dark hover:border-primary-dark hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(44,95,75,0.3)]"
          >
            Work With Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
