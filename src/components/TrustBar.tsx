"use client";

import { ShieldCheck, MapPin, Video, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  { icon: ShieldCheck, text: "Licensed Clinical Psychologist" },
  { icon: MapPin, text: "Santa Monica, California" },
  { icon: Video, text: "In-Person & Telehealth" },
  { icon: HeartHandshake, text: "Evidence-Based Methods" },
];

export default function TrustBar() {
  return (
    <section className="bg-primary py-7">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex justify-center gap-12 flex-wrap max-[480px]:flex-col max-[480px]:gap-4 max-[480px]:items-center max-md:gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.text}
              className="flex items-center gap-2.5 text-white text-[0.9rem] font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <item.icon className="w-5 h-5 text-accent" />
              <span>{item.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
