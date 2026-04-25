import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { motion, type Variants } from "motion/react";

import { ContactForm } from "@/components/home/contact-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PERSONAL } from "@/lib/data/portfolio";

const reveal: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

export function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="px-5 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          id="contact-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={reveal}
          className="pb-10 text-center text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          Contact
        </motion.h2>

        <div className="grid gap-6 lg:grid-cols-2">
          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={reveal}
          >
            <Card className="h-full border border-border/70 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl">Get In Touch</CardTitle>
              </CardHeader>
              <CardContent>
                <address className="not-italic">
                  <ul className="space-y-4 text-sm text-muted-foreground marker:text-transparent">
                    <li className="flex items-center gap-3">
                      <MailIcon className="size-4 text-highlight" />
                      <a href={`mailto:${PERSONAL.email}`} className="hover:text-foreground">
                        {PERSONAL.email}
                      </a>
                    </li>
                    <li className="flex items-center gap-3">
                      <PhoneIcon className="size-4 text-highlight" />
                      <span>{PERSONAL.phone}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <MapPinIcon className="size-4 text-highlight" />
                      <span>{PERSONAL.location}</span>
                    </li>
                  </ul>
                </address>
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
                <CardTitle className="text-xl">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
