"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-dark text-white/70 py-[60px] max-md:py-10">
      <motion.div
        className="max-w-[1200px] mx-auto px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 mb-12 max-md:gap-8">
          <div>
            <a
              href="#"
              className="font-heading text-[1.3rem] text-white block mb-3"
            >
              Dr. Maya Reynolds, PsyD
            </a>
            <p className="text-[0.9rem] leading-[1.6]">
              Licensed Clinical Psychologist
              <br />
              Santa Monica, California
            </p>
          </div>

          <div>
            <h4 className="text-white mb-4 text-[0.95rem] font-semibold font-body">
              Quick Links
            </h4>
            <ul>
              {["about", "services", "approach", "office", "faq", "contact"].map((item) => (
                <li key={item} className="mb-2.5 text-[0.9rem]">
                  <a
                    href={`#${item}`}
                    className="hover:text-accent transition-colors"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4 text-[0.95rem] font-semibold font-body">
              Services
            </h4>
            <ul>
              <li className="mb-2.5 text-[0.9rem]">
                <a href="#services" className="hover:text-accent transition-colors">
                  Anxiety &amp; Panic
                </a>
              </li>
              <li className="mb-2.5 text-[0.9rem]">
                <a href="#services" className="hover:text-accent transition-colors">
                  Trauma &amp; EMDR
                </a>
              </li>
              <li className="mb-2.5 text-[0.9rem]">
                <a href="#services" className="hover:text-accent transition-colors">
                  Burnout &amp; Perfectionism
                </a>
              </li>
              <li className="mb-2.5 text-[0.9rem]">
                <a href="#services" className="hover:text-accent transition-colors">
                  Telehealth Therapy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4 text-[0.95rem] font-semibold font-body">
              Contact
            </h4>
            <ul>
              <li className="mb-2.5 text-[0.9rem]">123th Street 45 W</li>
              <li className="mb-2.5 text-[0.9rem]">Santa Monica, CA 90401</li>
              <li className="mb-2.5 text-[0.9rem]">
                <a
                  href="mailto:dr.mayareynolds@example.com"
                  className="hover:text-accent transition-colors"
                >
                  dr.mayareynolds@example.com
                </a>
              </li>
              <li className="mb-2.5 text-[0.9rem]">
                <a
                  href="tel:+13105551234"
                  className="hover:text-accent transition-colors"
                >
                  (310) 555-1234
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-[0.85rem]">
          <p>&copy; 2026 Dr. Maya Reynolds, PsyD. All rights reserved.</p>
          <p className="mt-2 text-[0.8rem] italic text-white/40">
            This website is for informational purposes only and does not
            constitute medical advice. Dr. Maya Reynolds is a fictional therapist
            created for demonstration purposes.
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
