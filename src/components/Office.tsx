"use client";

import { MapPin, DoorOpen, Laptop } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const details = [
  {
    icon: MapPin,
    title: "Location",
    description: "123th Street 45 W, Santa Monica, CA 90401",
  },
  {
    icon: DoorOpen,
    title: "In-Person Sessions",
    description:
      "Available at my Santa Monica office — a warm, private space designed for comfort and confidentiality.",
  },
  {
    icon: Laptop,
    title: "Secure Telehealth",
    description:
      "Virtual sessions available for clients located anywhere in California, from the comfort of your own space.",
  },
];

export default function Office() {
  return (
    <section id="office" className="py-[100px] bg-secondary max-md:py-[72px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          className="text-center max-w-[700px] mx-auto mb-[60px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[0.85rem] font-semibold uppercase tracking-[2px] text-accent mb-3">
            Where Healing Happens
          </p>
          <h2>A Calm Space Designed for You</h2>
          <p className="text-muted text-[1.05rem] mt-4 leading-[1.7]">
            My Santa Monica office is a quiet, private space designed to feel calm
            and grounding, with natural light and a comfortable, uncluttered
            environment. Clients often share that the space itself helps them feel
            more at ease the moment they arrive.
          </p>
        </motion.div>

        <div className="grid grid-cols-[1.5fr_1fr] grid-rows-[auto_auto] gap-5 mb-[50px] max-md:grid-cols-1 max-md:grid-rows-auto">
          <motion.div
            className="row-span-2 max-md:row-span-1"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/office1.jpeg"
              alt="Dr. Maya Reynolds' therapy office in Santa Monica — comfortable seating with natural light and warm atmosphere"
              width={750}
              height={600}
              className="rounded-2xl w-full h-full object-cover shadow-[0_12px_36px_rgba(0,0,0,0.08)] min-h-[400px] max-md:min-h-[280px]"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Image
              src="/office2.jpeg"
              alt="Therapy room with comfortable seating, bookshelf, and natural light"
              width={400}
              height={190}
              className="rounded-2xl w-full h-full object-cover shadow-[0_8px_24px_rgba(0,0,0,0.06)] min-h-[190px]"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src="/GettyImages_1324376942.webp"
              alt="Calm therapy environment with warm atmosphere"
              width={400}
              height={190}
              className="rounded-2xl w-full h-full object-cover shadow-[0_8px_24px_rgba(0,0,0,0.06)] min-h-[190px]"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-md:gap-4">
          {details.map((item, i) => (
            <motion.div
              key={i}
              className="flex gap-4 items-start bg-white rounded-xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <item.icon className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <strong className="block text-base mb-1.5 text-dark">
                  {item.title}
                </strong>
                <p className="text-[0.9rem] text-muted leading-[1.6] m-0">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
