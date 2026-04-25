import { Code2Icon, WrenchIcon } from "lucide-react";
import { motion, type Variants } from "motion/react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CometCard } from "@/components/ui/comet-card";
import { SKILLS } from "@/lib/data/portfolio";

const reveal: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};

const chipReveal: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.25 } },
};

export function SkillsSection() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="px-5 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <motion.h2
            id="skills-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={reveal}
            className="text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Skills & Tech Stack
          </motion.h2>

          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={reveal}
          >
            <Card className="border border-border/70 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Code2Icon className="size-5 text-highlight" />
                  {SKILLS.develop.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {SKILLS.develop.description}
                </p>
                <motion.ul
                  variants={stagger}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className="flex list-none flex-wrap gap-2"
                >
                  {SKILLS.develop.items.map((skill) => (
                    <motion.li key={skill} variants={chipReveal}>
                      <Badge
                        variant="outline"
                        className="border-border/80 px-3 py-1 text-xs transition-colors hover:border-highlight hover:text-highlight"
                      >
                        {skill}
                      </Badge>
                    </motion.li>
                  ))}
                </motion.ul>
              </CardContent>
            </Card>
          </motion.article>

          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={reveal}
          >
            <Card className="border border-border/70 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <WrenchIcon className="size-5 text-highlight" />
                  {SKILLS.tools.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {SKILLS.tools.description}
                </p>
                <ul className="flex list-none flex-wrap gap-2">
                  {SKILLS.tools.items.map((tool) => (
                    <li key={tool}>
                      <Badge
                        variant="outline"
                        className="border-border/80 px-3 py-1 text-xs transition-colors hover:border-highlight hover:text-highlight"
                      >
                        {tool}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.article>
        </div>

        <motion.aside
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={reveal}
          className="lg:pt-24"
        >
          <figure className="mx-auto max-w-md">
            <CometCard>
              <div className="rounded-3xl border border-border/70 bg-gradient-to-br from-card via-card to-secondary/30 p-8 shadow-lg">
                <div className="mb-5 inline-flex rounded-full border border-highlight/40 bg-highlight/10 px-3 py-1 text-xs font-medium text-highlight">
                  Engineer Mindset
                </div>
                <h3 className="text-2xl font-semibold tracking-tight">
                  Build for scale, maintain for years.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  I focus on clean architecture, predictable state management, and UX consistency to
                  ship reliable software in production.
                </p>
              </div>
            </CometCard>
          </figure>
        </motion.aside>
      </div>
    </section>
  );
}
