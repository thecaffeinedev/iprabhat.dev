import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Prabhat",
  DESCRIPTION: "Software Engineer working on ML infrastructure, passionate about distributed systems, databases, and backend development.",
  EMAIL: "iprabhatdev@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
  GA_MEASUREMENT_ID: "G-1M4YEK0F3D", 
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Prabhat Kumar Sahu - Software Engineer specializing in ML infrastructure and backend systems.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Articles about software engineering, machine learning, distributed systems, and my experiences in tech.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects with links to repositories and live demos.",
};

export const ABOUT: Metadata = {
  TITLE: "About",
  DESCRIPTION: "Learn more about Prabhat Kumar Sahu - Software Engineer working on ML infrastructure at DeepEdge.",
};

export const USES: Metadata = {
  TITLE: "Uses",
  DESCRIPTION: "Tools, technologies, and setup I use for development and productivity.",
};

export const SOCIALS: Socials = [
  {
    NAME: "X (formerly Twitter)",
    HREF: "https://x.com/thecaffeinedev",
    ICON: "x",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/thecaffeinedev",
    ICON: "github",
  },
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/prabhat-kumar-sahu-b9a53674/",
    ICON: "linkedin",
  },
];
