"use client";

import { Brain, Flower2, Flame } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  tags: string[];
}

const services: Service[] = [
  {
    icon: Brain,
    title: "Anxiety & Panic Treatment",
    description:
      "If you're living with constant worry, tension in your body, difficulty sleeping, or a sense that you're always bracing for something to go wrong—therapy can help. Using cognitive-behavioral therapy (CBT) and mindfulness-based practices, I help clients understand both the emotional and physiological sides of anxiety and develop practical tools to feel calmer and more grounded.",
    tags: ["Generalized Anxiety", "Panic Attacks", "Overthinking", "Sleep Difficulties"],
  },
  {
    icon: Flower2,
    title: "Trauma & EMDR Therapy",
    description:
      "Whether you've experienced a single-incident trauma or more complex, long-standing patterns stemming from childhood, relationships, or chronic stress—healing is possible. I use EMDR and body-oriented techniques, paced carefully with an emphasis on safety, stabilization, and helping you feel more regulated in your daily life—not just during sessions.",
    tags: ["EMDR", "Complex Trauma", "Childhood Experiences", "Emotional Regulation"],
  },
  {
    icon: Flame,
    title: "Burnout & Perfectionism",
    description:
      "Many high-achieving professionals feel disconnected from themselves after years of pushing through stress. If you're running on empty, held hostage by high internal pressure, or struggling to slow down—therapy can become a space to reconnect and develop more sustainable ways of living and working, without sacrificing what matters to you.",
    tags: ["Professional Burnout", "Perfectionism", "High Achievers", "Work-Life Balance"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-[100px] bg-secondary max-md:py-[72px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          className="text-center max-w-[700px] mx-auto mb-[60px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[0.85rem] font-semibold uppercase tracking-[2px] text-accent mb-3">
            How I Can Help
          </p>
          <h2>Specialized Therapy Services in Santa Monica</h2>
          <p className="text-muted text-[1.05rem] mt-4 leading-[1.7]">
            Evidence-based treatment tailored to help you move from surviving to
            thriving.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl p-10 px-8 transition-all duration-400 border border-primary/[0.08] hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(44,95,75,0.1)]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="w-14 h-14 rounded-[14px] bg-gradient-to-br from-primary to-[#3a7a62] flex items-center justify-center mb-6">
                <service.icon className="w-[26px] h-[26px] text-white" />
              </div>
              <h3 className="mb-4 text-dark">{service.title}</h3>
              <p className="text-muted text-[0.95rem] leading-[1.7] mb-5">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-secondary text-primary px-3.5 py-1.5 rounded-[20px] text-[0.8rem] font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
