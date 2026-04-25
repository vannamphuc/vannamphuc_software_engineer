import { motion, type Variants } from "motion/react";

import { Timeline } from "@/components/ui/timeline";
import { EXPERIENCES } from "@/lib/data/portfolio";

const reveal: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

export function ExperienceSection() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="px-5 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          id="experience-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={reveal}
          className="pb-10 text-center text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          Experience
        </motion.h2>

        <Timeline data={EXPERIENCES} />
      </div>
    </section>
  );
}
