"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="contact" className="py-[100px] bg-gradient-to-br from-secondary to-secondary-dark text-center max-md:py-[72px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          className="max-w-[650px] mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[0.85rem] font-semibold uppercase tracking-[2px] text-accent mb-3">
            Ready to Begin?
          </p>
          <h2 className="mb-5">You Don&apos;t Have to Keep Pushing Through Alone</h2>
          <p className="text-muted text-[1.05rem] mb-9 leading-[1.7]">
            Taking the first step toward therapy can feel like a big decision. I&apos;m
            here to make that step as easy as possible. Whether you&apos;re ready to start
            or just have questions, I&apos;d love to hear from you.
          </p>
          <div className="flex gap-4 justify-center flex-wrap mb-6 max-[480px]:flex-col max-[480px]:items-stretch">
            <a
              href="mailto:dr.mayareynolds@example.com"
              className="inline-block px-10 py-4.5 bg-primary text-white border-2 border-primary rounded-lg text-[1.05rem] font-medium transition-all duration-300 hover:bg-primary-dark hover:border-primary-dark hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(44,95,75,0.3)] text-center"
            >
              Schedule a Free Consultation
            </a>
            <a
              href="tel:+13105551234"
              className="inline-block px-10 py-4.5 bg-transparent text-primary border-2 border-primary rounded-lg text-[1.05rem] font-medium transition-all duration-300 hover:bg-primary hover:text-white hover:-translate-y-0.5 text-center"
            >
              Call (310) 555-1234
            </a>
          </div>
          <p className="text-[0.85rem] text-muted font-medium">
            In-person sessions in Santa Monica · Telehealth throughout California
          </p>
        </motion.div>
      </div>
    </section>
  );
}
