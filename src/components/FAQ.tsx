"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What should I expect in my first session?",
    answer:
      "Our first session is an opportunity for us to get to know each other. I'll ask about what brings you to therapy, your history, and your goals. You'll also have the chance to ask me questions and see if we feel like a good fit. There's no pressure—my priority is making sure you feel comfortable and heard.",
  },
  {
    question: "What therapy approaches do you use?",
    answer:
      "I integrate evidence-based methods including cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques. My approach is tailored to each client's needs and paced carefully—especially when working with trauma. The goal is to address both the emotional and physiological sides of what you're experiencing.",
  },
  {
    question: "Do you offer telehealth sessions?",
    answer:
      "Yes. I offer secure telehealth sessions for clients located anywhere in California. Many clients appreciate the flexibility of virtual sessions, while others prefer the grounding experience of meeting in person at my Santa Monica office. We can discuss which option works best for you.",
  },
  {
    question: "Who do you typically work with?",
    answer:
      "I work with adults—often high-achieving professionals, entrepreneurs, and creatives—who are dealing with anxiety, panic, trauma, burnout, or perfectionism. Many of my clients appear \"functional\" on the outside but are quietly struggling with constant worry, emotional exhaustion, or the lasting effects of earlier life experiences.",
  },
  {
    question: "What does trauma therapy look like with you?",
    answer:
      "Trauma work is paced carefully and begins with building safety and stabilization. I work with both single-incident trauma and more complex, long-standing patterns. Using EMDR and body-oriented approaches, the focus is on helping your nervous system feel more regulated—not just in our sessions, but in your everyday life.",
  },
  {
    question: "How do I know if you're the right therapist for me?",
    answer:
      "If you're looking for a therapist who combines practical tools with depth-oriented work—and who understands the realities of living and working in a fast-paced environment—I may be a good fit. I believe therapy works best when clients feel respected, understood, and actively involved in the process. I encourage you to reach out for a brief consultation so we can see if it feels right.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-[100px] bg-white max-md:py-[72px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          className="text-center max-w-[700px] mx-auto mb-[60px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[0.85rem] font-semibold uppercase tracking-[2px] text-accent mb-3">
            Common Questions
          </p>
          <h2>Frequently Asked Questions</h2>
          <p className="text-muted text-[1.05rem] mt-4 leading-[1.7]">
            Answers to questions I hear most from prospective clients.
          </p>
        </motion.div>

        <div className="max-w-[760px] mx-auto">
          {faqs.map((faq, i) => (
            <motion.details
              key={i}
              className="border-b border-primary/10 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              open={openIndex === i}
              onToggle={(e) => {
                if ((e.target as HTMLDetailsElement).open) {
                  setOpenIndex(i);
                } else if (openIndex === i) {
                  setOpenIndex(null);
                }
              }}
            >
              <summary className="flex items-center justify-between py-6 cursor-pointer font-heading text-[1.15rem] text-dark list-none transition-colors hover:text-primary max-[480px]:text-base">
                <span>{faq.question}</span>
                <ChevronDown
                  className={`transition-transform duration-300 text-accent ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </summary>
              <motion.p
                className="pb-6 text-muted text-[0.95rem] leading-[1.7]"
                initial={{ opacity: 0 }}
                animate={{ opacity: openIndex === i ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {faq.answer}
              </motion.p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}
