import { motion, type Variants } from "motion/react";

import { PERSONAL } from "@/lib/data/portfolio";

/** Stagger container — children animate sequentially */
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

/** Shared reveal: fade-in + slide-up */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

/** Horizontal line scale animation */
const lineExpand: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

export function HeroSection() {
  const scrollDown = () => {
    const hero = document.getElementById("hero");
    if (hero) {
      window.scrollTo({
        top: hero.clientHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative flex h-screen flex-col items-center justify-center gap-5 px-5"
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center gap-5"
      >
        {/* ── Name ── */}
        <motion.h1
          variants={fadeUp}
          className="bg-gradient-to-b from-foreground to-muted-foreground bg-clip-text text-center text-3xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl"
        >
          {PERSONAL.name.toUpperCase()}
        </motion.h1>

        {/* ── Decorative line ── */}
        <motion.div
          variants={lineExpand}
          className="h-[3px] w-full max-w-[600px] origin-center bg-foreground sm:max-w-[500px]"
          aria-hidden="true"
        />

        {/* ── Title ── */}
        <motion.p
          variants={fadeUp}
          className="text-center text-lg text-muted-foreground sm:text-xl"
        >
          {PERSONAL.title}
        </motion.p>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.button
        type="button"
        onClick={scrollDown}
        aria-label="Scroll to content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
      >
        <div className="relative flex flex-col items-center">
          {/* Mouse outline */}
          <span className="relative block h-10 w-7 rounded-xl border border-foreground">
            {/* Scroll dot */}
            <motion.span
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-2 left-1/2 block h-2.5 w-[3px] -translate-x-1/2 rounded-full bg-foreground"
            />
          </span>
          {/* Vertical line below mouse */}
          <span className="mt-1 block h-6 w-px bg-foreground" aria-hidden="true" />
        </div>
      </motion.button>
    </section>
  );
}
