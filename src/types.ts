export type Analytics =
  | { PROVIDER: "google"; MEASUREMENT_ID: string }
  | { PROVIDER: "umami"; WEBSITE_ID: string; SRC: string };

export type Site = {
  TITLE: string;
  DESCRIPTION: string;
  EMAIL: string;
  NUM_POSTS_ON_HOMEPAGE: number;
  NUM_PROJECTS_ON_HOMEPAGE: number;
  ANALYTICS?: Analytics;
};

export type Metadata = {
  TITLE: string;
  DESCRIPTION: string;
};

export type Socials = {
  NAME: string;
  HREF: string;
  ICON: string;
}[];