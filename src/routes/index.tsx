import { createFileRoute } from "@tanstack/react-router";

import { AboutSection } from "@/components/home/about-section";
import { ContactSection } from "@/components/home/contact-section";
import { ExperienceSection } from "@/components/home/experience-section";
import { HeroSection } from "@/components/home/hero-section";
import { ProjectsSection } from "@/components/home/projects-section";
import { SkillsSection } from "@/components/home/skills-section";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SocialDock } from "@/components/layout/social-dock";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Van Nam Phuc | Software Engineer Portfolio" },
      {
        name: "description",
        content:
          "Explore Van Nam Phuc's portfolio: software engineering projects, technical skills, professional experience, and contact information.",
      },
      {
        name: "keywords",
        content:
          "Van Nam Phuc, software engineer, React, TypeScript, portfolio, frontend, full stack",
      },
      { property: "og:title", content: "Van Nam Phuc | Software Engineer Portfolio" },
      {
        property: "og:description",
        content:
          "Projects and experience of Van Nam Phuc, Software Engineer focused on React and TypeScript.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <SiteHeader />

      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <SiteFooter />
      <SocialDock />

      {/* Background effects — fixed behind all content */}
      <div aria-hidden="true" className="fixed inset-0 z-0">
        <ShootingStars />
        <StarsBackground />
      </div>
    </>
  );
}
