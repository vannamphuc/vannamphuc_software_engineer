import { SiGithub, SiGmail, SiInspire } from "@icons-pack/react-simple-icons";

import { SOCIALS } from "@/lib/data/portfolio";
import { cn } from "@/lib/utils";

const ICON_MAP = {
  github: SiGithub,
  linkedin: SiInspire,
  email: SiGmail,
} as const;

export function SocialDock() {
  return (
    <aside
      aria-label="Social links"
      className="fixed right-8 bottom-8 z-40 flex flex-col gap-4 rounded-full border border-dashed p-3"
    >
      {SOCIALS.map((social) => {
        const Icon = ICON_MAP[social.platform];
        return (
          <a
            key={social.platform}
            href={social.url}
            target={social.platform === "email" ? undefined : "_blank"}
            rel={social.platform === "email" ? undefined : "noopener noreferrer"}
            aria-label={social.platform}
            className={cn("text-muted-foreground transition-colors hover:text-foreground")}
          >
            <Icon className="size-6" />
          </a>
        );
      })}
    </aside>
  );
}
