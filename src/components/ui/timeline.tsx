import { BriefcaseBusinessIcon, MapPinIcon } from "lucide-react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

import type { ExperienceEntry } from "@/lib/data/portfolio";

interface TimelineProps {
  data: ExperienceEntry[];
}

export function Timeline({ data }: TimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!contentRef.current) return;
    setHeight(contentRef.current.getBoundingClientRect().height);
  }, [data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "end 20%"],
  });

  const rawHeight = useTransform(scrollYProgress, [0, 1], [0, height]);
  const smoothHeight = useSpring(rawHeight, { stiffness: 85, damping: 22 });
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0.15, 1]);

  return (
    <div ref={containerRef} className="relative">
      <div ref={contentRef} className="relative space-y-16 md:space-y-20">
        {data.map((item, index) => (
          <motion.article
            key={`${item.company}-${item.period}`}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="grid gap-5 pl-12 md:grid-cols-2 md:gap-20 md:pl-0"
          >
            <header className="space-y-2 md:text-right">
              <p className="text-sm font-medium text-highlight">{item.period}</p>
              <h3 className="text-xl font-semibold tracking-tight">{item.company}</h3>
              <p className="inline-flex items-center gap-2 text-sm text-muted-foreground md:justify-end">
                <MapPinIcon className="size-4 text-highlight" />
                {item.location}
              </p>
            </header>

            <div>
              <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground marker:text-highlight">
                {item.highlights.map((highlight) => (
                  <li key={`${index}-${highlight}`}>{highlight}</li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>

      <div
        aria-hidden="true"
        className="absolute top-0 left-2 h-full w-6 md:left-1/2 md:-translate-x-1/2"
      >
        <div className="absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-border to-transparent" />
        <motion.div
          style={{ height: smoothHeight, opacity }}
          className="absolute top-0 left-1/2 w-[5px] -translate-x-1/2 rounded-full bg-gradient-to-b from-highlight via-blue-500 to-transparent"
        />
        <motion.div
          style={{ y: smoothHeight, opacity }}
          className="absolute top-0 left-1/2 size-3 -translate-x-1/2 rounded-full bg-highlight shadow-[0_0_18px_2px_var(--highlight)]"
        />
      </div>

      <div className="pointer-events-none absolute top-0 left-2 md:left-1/2 md:-translate-x-1/2">
        <span className="inline-flex size-6 items-center justify-center rounded-full border border-border bg-card">
          <BriefcaseBusinessIcon className="size-3.5 text-highlight" />
        </span>
      </div>
    </div>
  );
}
