"use client";

import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const clientTypes = [
  "High-achieving professionals feeling the weight of constant internal pressure",
  "Entrepreneurs and creatives disconnected from themselves after years of pushing through",
  "Individuals navigating the lasting impact of earlier life experiences on their confidence and relationships",
  "People experiencing anxiety, panic, or stress that feels unmanageable despite being \"functional\"",
  "Anyone ready to slow down and develop a more sustainable relationship with themselves",
];

export default function Clients() {
  return (
    <section className="py-[100px] bg-gradient-to-br from-primary to-primary-dark text-white max-md:py-[72px]">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-10 md:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[0.85rem] font-bold uppercase tracking-[2px] text-accent mb-3">
            Who I Work With
          </p>
          <h2 className="!text-white font-bold mb-5">
            Therapy for Adults Who Appear &quot;Fine&quot; but Feel Far From It
          </h2>
          <p className="text-white/80 mb-4">
            You might look like you have it all together—succeeding at work,
            maintaining relationships, showing up every day. But internally, you feel
            exhausted, on edge, or stuck in a loop of overthinking and worry.
          </p>
          <p className="text-white/80 mb-4">I work with adults who are:</p>
          <ul className="mt-6">
            {clientTypes.map((item, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-3 mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <CheckCircle2 className="w-[22px] h-[22px] text-accent flex-shrink-0 mt-0.5" />
                <span className="text-white/90 text-[0.95rem] leading-[1.6]">
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          className="max-md:order-[-1]"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src="/shutterstock_2498983935.webp"
            alt="Mental health therapy illustration — untangling the complexity of the mind"
            width={500}
            height={500}
            className="rounded-[20px] w-full h-[500px] object-cover shadow-[0_20px_60px_rgba(0,0,0,0.2)] max-md:h-[350px]"
          />
        </motion.div>
      </div>
    </section>
  );
}
