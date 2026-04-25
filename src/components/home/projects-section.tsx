import { SiGithub } from "@icons-pack/react-simple-icons";
import { Image } from "@unpic/react";
import {
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ExternalLinkIcon,
  GlobeIcon,
  UsersIcon,
  XIcon,
} from "lucide-react";
import {
  motion,
  type MotionValue,
  type Variants,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { PROJECTS } from "@/lib/data/portfolio";

const reveal: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.42, ease: "easeOut" },
  },
};

function getActiveIndex(latest: number, breakpoints: number[]) {
  let closestIndex = 0;
  for (let index = 0; index < breakpoints.length; index += 1) {
    const currentDistance = Math.abs(latest - breakpoints[index]);
    const closestDistance = Math.abs(latest - breakpoints[closestIndex]);
    if (currentDistance < closestDistance) closestIndex = index;
  }
  return closestIndex;
}

function useActiveProject(scrollYProgress: MotionValue<number>) {
  const [activeIndex, setActiveIndex] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const breakpoints = PROJECTS.map((_, index) => index / PROJECTS.length);
    setActiveIndex(getActiveIndex(latest, breakpoints));
  });
  return activeIndex;
}

export function ProjectsSection() {
  const ref = useRef<HTMLElement>(null);
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 35%", "end 35%"],
  });

  const activeIndex = useActiveProject(scrollYProgress);
  const activeProject = PROJECTS[activeIndex];
  const imageCount = activeProject.images.length;
  const previewImage = previewIndex === null ? null : activeProject.images[previewIndex];
  const safePreviewIndex = previewIndex ?? 0;

  const goToPrevImage = useCallback(() => {
    setPreviewIndex((current) => {
      if (current === null) return current;
      return (current - 1 + imageCount) % imageCount;
    });
  }, [imageCount]);

  const goToNextImage = useCallback(() => {
    setPreviewIndex((current) => {
      if (current === null) return current;
      return (current + 1) % imageCount;
    });
  }, [imageCount]);

  useEffect(() => {
    if (previewIndex === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setPreviewIndex(null);
      if (event.key === "ArrowLeft") goToPrevImage();
      if (event.key === "ArrowRight") goToNextImage();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [previewIndex, goToPrevImage, goToNextImage]);

  return (
    <>
      <section
        id="projects"
        aria-labelledby="projects-title"
        className="px-5 py-24 md:py-32"
        ref={ref}
      >
        <div className="mx-auto max-w-6xl">
          <motion.h2
            id="projects-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={reveal}
            className="pb-10 text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Projects
          </motion.h2>

          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
            <div>
              <div className="space-y-16">
                {PROJECTS.map((project, index) => (
                  <motion.article
                    key={`${project.title}-${project.period}`}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    animate={{ opacity: activeIndex === index ? 1 : 0.35 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="space-y-4"
                  >
                    <header className="space-y-2">
                      <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
                        <p className="inline-flex items-center gap-1.5">
                          <CalendarIcon className="size-3.5 text-highlight" />
                          {project.period}
                        </p>
                        <p className="inline-flex items-center gap-1.5">
                          <UsersIcon className="size-3.5 text-highlight" />
                          {project.teamSize}
                        </p>
                      </div>
                    </header>

                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>

                    <ul className="flex list-none flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <li key={`${project.title}-${tech}`}>
                          <Badge variant="outline" className="border-border/80 text-xs">
                            {tech}
                          </Badge>
                        </li>
                      ))}
                    </ul>

                    <div className="space-y-2">
                      {project.repos.map((repo) => (
                        <a
                          key={repo}
                          href={repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                          <SiGithub className="size-4 text-highlight" />
                          <span className="break-all">{repo}</span>
                          <ExternalLinkIcon className="size-3.5" />
                        </a>
                      ))}

                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium text-highlight hover:underline"
                        >
                          <GlobeIcon className="size-3.5" />
                          Live Demo
                          <ExternalLinkIcon className="size-3.5" />
                        </a>
                      ) : null}
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>

            <aside className="hidden lg:block">
              <div className="sticky top-28 rounded-3xl border border-border/70 bg-card/80 p-4 backdrop-blur-sm">
                <p className="pb-3 text-sm font-medium text-muted-foreground">
                  Preview: {activeProject.title}
                </p>
                <ul className="grid list-none gap-2 sm:grid-cols-2">
                  {activeProject.images.slice(0, 4).map((image, index) => (
                    <li key={`${activeProject.title}-preview-${index}`}>
                      <button
                        type="button"
                        onClick={() => setPreviewIndex(index)}
                        className="block w-full"
                        aria-label={`Open screenshot ${index + 1} of ${activeProject.title}`}
                      >
                        <Image
                          src={image}
                          alt={`${activeProject.title} screenshot ${index + 1}`}
                          layout="constrained"
                          width={360}
                          height={220}
                          className="h-36 w-full rounded-xl border border-border/60 object-cover transition-opacity hover:opacity-85"
                        />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {previewImage ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Project image preview"
          className="fixed inset-0 z-[70] flex items-center justify-center p-4"
        >
          <button
            type="button"
            onClick={() => setPreviewIndex(null)}
            className="absolute inset-0 bg-black/85"
            aria-label="Close preview by backdrop"
          />
          <button
            type="button"
            onClick={goToPrevImage}
            className="absolute top-1/2 left-5 z-10 -translate-y-1/2 rounded-full border border-white/40 bg-black/50 p-2 text-white hover:bg-black/70"
            aria-label="Previous image"
          >
            <ChevronLeftIcon className="size-6" />
          </button>
          <button
            type="button"
            onClick={goToNextImage}
            className="absolute top-1/2 right-5 z-10 -translate-y-1/2 rounded-full border border-white/40 bg-black/50 p-2 text-white hover:bg-black/70"
            aria-label="Next image"
          >
            <ChevronRightIcon className="size-6" />
          </button>
          <button
            type="button"
            onClick={() => setPreviewIndex(null)}
            className="absolute top-5 right-5 z-10 rounded-full border border-white/40 bg-black/50 p-2 text-white hover:bg-black/70"
            aria-label="Close preview"
          >
            <XIcon className="size-5" />
          </button>
          <div className="z-10 max-h-[90vh] w-full max-w-5xl">
            <Image
              src={previewImage}
              alt={`${activeProject.title} full preview ${safePreviewIndex + 1}`}
              layout="constrained"
              width={1600}
              height={980}
              priority
              className="mx-auto max-h-[90vh] w-auto rounded-2xl border border-white/20 object-contain"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
