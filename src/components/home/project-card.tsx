import { SiGithub } from "@icons-pack/react-simple-icons";
import { CalendarIcon, ExternalLinkIcon, UsersIcon } from "lucide-react";
import { motion } from "motion/react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CometCard } from "@/components/ui/comet-card";
import { env } from "@/env/client";
import type { ProjectEntry } from "@/lib/data/portfolio";

interface ProjectCardProps {
  project: ProjectEntry;
}

function getUnpicUrl(src: string) {
  if (/^https?:\/\//.test(src)) {
    return `https://unpic.pics/img/${src}`;
  }
  const absoluteUrl = new URL(src, env.VITE_BASE_URL).toString();
  return `https://unpic.pics/img/${absoluteUrl}`;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Card className="h-full border border-border/70 bg-card/80 backdrop-blur-sm">
        <CardHeader className="space-y-3">
          <CardTitle className="text-xl leading-tight font-semibold tracking-tight">
            {project.title}
          </CardTitle>
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
        </CardHeader>

        <CardContent className="space-y-5">
          {project.images.length > 0 ? (
            <figure>
              <CometCard>
                <ul className="grid list-none gap-2 sm:grid-cols-2">
                  {project.images.slice(0, 4).map((image, index) => (
                    <li key={`${project.title}-image-${index}`}>
                      <img
                        src={getUnpicUrl(image)}
                        alt={`${project.title} screenshot ${index + 1}`}
                        loading="lazy"
                        className="h-32 w-full rounded-xl border border-border/60 object-cover"
                        onError={(event) => {
                          event.currentTarget.src = image;
                        }}
                      />
                    </li>
                  ))}
                </ul>
              </CometCard>
            </figure>
          ) : null}

          <p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p>

          <ul className="flex list-none flex-wrap gap-2">
            {project.tech.map((tech) => (
              <li key={`${project.title}-${tech}`}>
                <Badge variant="outline" className="border-border/80 text-xs">
                  {tech}
                </Badge>
              </li>
            ))}
          </ul>
        </CardContent>

        <CardFooter className="flex-col items-start gap-2">
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
              Live Demo
              <ExternalLinkIcon className="size-3.5" />
            </a>
          ) : null}
        </CardFooter>
      </Card>
    </motion.article>
  );
}
