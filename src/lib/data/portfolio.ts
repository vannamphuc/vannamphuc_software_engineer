import chat1 from "@/assets/images/chat1.png";
import chat2 from "@/assets/images/chat2.png";

// ─── Navigation ──────────────────────────────────────────────────────────────

export const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

// ─── Personal Info ───────────────────────────────────────────────────────────

export const PERSONAL = {
  name: "Van Nam Phuc",
  title: "Frontend Developer",
  email: "phucnamvan@gmail.com",
  phone: "038 712 8854",
  location: "Ho Chi Minh City, Vietnam",
  summary:
    "Frontend Developer with 2 years of experience specializing in React Native and ReactJS development. Proven track record in building high-performance mobile and web applications for fintech, health, and trading platforms.",
  github: "https://github.com/vannamphuc",
  linkedin: "https://linkedin.com/in/vannamphuc",
} as const;

// ─── Skills ──────────────────────────────────────────────────────────────────

export const SKILLS = {
  develop: {
    title: "Frameworks, State, Animation & Mobile",
    description:
      "Expert in creating smooth animations, optimizing performance, and implementing complex features including Web3 integration, real-time visualization, and secure payment systems.",
    items: [
      "React Native",
      "Expo",
      "ReactJS",
      "Next.js",
      "Tailwind CSS",
      "Ant Design",
      "Material UI",
      "shadcn/ui",
      "Redux Toolkit",
      "Zustand",
      "TanStack Query",
      "React Context",
      "Axios",
      "WebSocket",
      "Reanimated",
      "GSAP",
      "Framer Motion",
      "React Navigation",
      "Maps / Geolocation",
      "Notifee",
      "Native Modules (Java/Kotlin)",
      "EAS Build / Update",
      "CodePush",
      "Highcharts",
      "KLineChart",
      "Socket.io",
    ],
  },
  tools: {
    title: "Languages, DevOps & Other",
    description: "Production workflow, optimization, and delivery tooling.",
    items: [
      "JavaScript (ES6+)",
      "TypeScript",
      "Code Splitting",
      "Lazy Loading",
      "Memoization",
      "Lighthouse 90+",
      "React Compiler basics",
      "Git",
      "GitHub Actions",
      "Flipper",
      "Reactotron",
      "ESLint + Prettier",
      "Metro Bundler",
      "WalletConnect",
      "MetaMask",
      "SEO",
      "i18next",
      "Accessibility basics",
      "Google Play / App Store publishing",
    ],
  },
} as const;

// ─── Education ───────────────────────────────────────────────────────────────

export const EDUCATION = {
  school: "FPT College",
  url: "https://caodang.fpt.edu.vn/",
  major: "Mobile Development Program",
  period: "May 2024",
  gpa: "Completed",
} as const;

// ─── Experience ──────────────────────────────────────────────────────────────

export interface ExperienceEntry {
  period: string;
  company: string;
  location: string;
  highlights: string[];
}

export const EXPERIENCES: ExperienceEntry[] = [
  {
    period: "Dec 2023 - Present",
    company: "DK Tech — Mobile & Web Developer",
    location: "Ho Chi Minh City, Vietnam",
    highlights: [
      "Delivered 5+ production apps in fintech, health, and e-commerce domains.",
      "Built mobile commerce features: product catalogs, carts, payment integration, and order tracking.",
      "Integrated Web3 wallets (MetaMask, WalletConnect) for USDT payments and token reward systems.",
      "Implemented secure flows including KYC verification, 2FA, and digital signatures.",
      "Created smooth UX animations with Reanimated and advanced web interactions with GSAP / Framer Motion.",
      "Developed trading features with real-time candlestick charts using KLineChart / Highcharts and WebSocket.",
      "Optimized SEO and achieved Lighthouse 90+ through code splitting and lazy loading.",
    ],
  },
];

// ─── Projects ────────────────────────────────────────────────────────────────

export interface ProjectEntry {
  title: string;
  period: string;
  teamSize: string;
  description: string;
  tech: string[];
  repos: string[];
  images: string[];
  liveUrl?: string;
}

export const PROJECTS: ProjectEntry[] = [
  {
    title: "Trade-BO",
    period: "Apr 2024 - Oct 2025",
    teamSize: "Product Team",
    description:
      "Professional cryptocurrency trading platform with advanced charting, real-time data feeds, and robust security features.",
    tech: [
      "React",
      "KLineChart",
      "Socket.io",
      "Redux",
      "Axios",
      "Tailwind CSS",
      "Google Authenticator API",
    ],
    images: [chat1, chat2, chat1, chat2],
    repos: ["https://github.com/vannamphuc"],
  },
  {
    title: "HEWE Fitness",
    period: "Jan 2024 - Mar 2024",
    teamSize: "Product Team",
    description:
      "Gamified fitness app with GPS tracking, referral rewards, push notifications, and multilingual support.",
    tech: [
      "React Native",
      "Redux Toolkit",
      "Reanimated",
      "React Navigation",
      "Notifee",
      "Maps",
      "Geolocation",
      "i18next",
    ],
    images: [chat2, chat1, chat2, chat1],
    repos: ["https://github.com/vannamphuc"],
  },
  {
    title: "HeweCard (Ameritec Card)",
    period: "Dec 2023 - Jan 2024",
    teamSize: "Product Team",
    description:
      "Digital card management platform with Web3 integration, secure USDT payments, KYC flow, referral tree, and multilingual experience.",
    tech: [
      "React Native",
      "ReactJS",
      "Redux Toolkit",
      "Web3 Modal",
      "Reanimated",
      "i18next",
      "CodePush",
      "Native Modules",
    ],
    images: [chat1, chat2, chat1, chat2],
    repos: ["https://github.com/vannamphuc"],
  },
];

// ─── Social Links ────────────────────────────────────────────────────────────

export const SOCIALS = [
  { platform: "github" as const, url: PERSONAL.github },
  { platform: "linkedin" as const, url: PERSONAL.linkedin },
  { platform: "email" as const, url: `mailto:${PERSONAL.email}` },
] as const;
