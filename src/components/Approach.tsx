"use client";

import { motion } from "framer-motion";

const approaches = [
  {
    number: "01",
    title: "Cognitive-Behavioral Therapy (CBT)",
    description:
      "Identify and shift unhelpful thought patterns that fuel anxiety, worry, and self-criticism. Develop practical coping strategies for everyday challenges.",
  },
  {
    number: "02",
    title: "EMDR Therapy",
    description:
      "Process traumatic memories and reduce their emotional charge, helping your nervous system move out of survival mode and into a place of safety.",
  },
  {
    number: "03",
    title: "Mindfulness-Based Practices",
    description:
      "Cultivate present-moment awareness to break cycles of overthinking, reconnect with your body, and build greater emotional resilience.",
  },
  {
    number: "04",
    title: "Body-Oriented Techniques",
    description:
      "Address the physiological side of stress and trauma. Learn to notice and release tension stored in your body, improving regulation and overall well-being.",
  },
];

export default function Approach() {
  return (
    <section id="approach" className="py-[100px] bg-white max-md:py-[72px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          className="text-center max-w-[700px] mx-auto mb-[60px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[0.85rem] font-semibold uppercase tracking-[2px] text-accent mb-3">
            My Therapeutic Approach
          </p>
          <h2>Practical Tools Meets Depth-Oriented Work</h2>
          <p className="text-muted text-[1.05rem] mt-4 leading-[1.7]">
            I integrate multiple evidence-based methods to address both your mind and
            body.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {approaches.map((item, i) => (
            <motion.div
              key={i}
              className="bg-secondary rounded-2xl p-10 transition-all duration-300 border-l-[4px] border-accent hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(0,0,0,0.06)]"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="font-heading text-[2.5rem] text-primary/[0.35] mb-3">
                {item.number}
              </div>
              <h3 className="mb-3 text-dark">{item.title}</h3>
              <p className="text-muted text-[0.95rem] leading-[1.7]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
