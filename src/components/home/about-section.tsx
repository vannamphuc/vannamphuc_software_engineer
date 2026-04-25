import { GraduationCapIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { motion, type Variants } from "motion/react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EDUCATION, PERSONAL } from "@/lib/data/portfolio";

import { CometCard } from "../ui/comet-card";

const reveal: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-title" className="px-5 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <motion.article
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={reveal}
        >
          {/* <Card className="relative border border-border/70 bg-card/80 backdrop-blur-sm"> */}
          <CometCard>
            <div className="rounded-3xl border border-border/70 bg-gradient-to-br from-card via-card to-secondary/30 p-8 shadow-lg">
              <h3 className="text-2xl font-semibold tracking-tight">About Me</h3>
              <p className="text-md mt-3 leading-relaxed">{PERSONAL.summary}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Focus areas include high-performance UI, smooth animation systems, real-time data
                visualization, and secure payment workflows for production mobile and web products.
              </p>
            </div>
          </CometCard>
        </motion.article>

        <motion.aside
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={reveal}
          className="space-y-6"
        >
          <Card className="border border-border/70 bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">Contact</CardTitle>
            </CardHeader>
            <CardContent>
              <address className="not-italic">
                <ul className="space-y-3 text-sm text-muted-foreground marker:text-transparent">
                  <li className="flex items-center gap-3">
                    <PhoneIcon className="size-4 text-highlight" />
                    <span>{PERSONAL.phone}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <MailIcon className="size-4 text-highlight" />
                    <a href={`mailto:${PERSONAL.email}`} className="hover:text-foreground">
                      {PERSONAL.email}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <MapPinIcon className="size-4 text-highlight" />
                    <span>{PERSONAL.location}</span>
                  </li>
                </ul>
              </address>
            </CardContent>
          </Card>

          <Card className="border border-border/70 bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl font-semibold">
                <GraduationCapIcon className="size-5 text-highlight" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent>
              <article className="space-y-1 text-sm text-muted-foreground">
                <h3 className="text-base font-medium text-foreground">{EDUCATION.school}</h3>
                <p>{EDUCATION.major}</p>
                <p>{EDUCATION.period}</p>
                <p>
                  Status: <span className="font-semibold text-highlight">{EDUCATION.gpa}</span>
                </p>
                <a
                  href={EDUCATION.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block pt-2 text-highlight hover:underline"
                >
                  Visit university website
                </a>
              </article>
            </CardContent>
          </Card>
        </motion.aside>
      </div>
    </section>
  );
}
