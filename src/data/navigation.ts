export interface NavItem {
  title: string;
  href: string;
  section?: string;
}

export const navigationItems: NavItem[] = [
  {
    title: "Introduction",
    href: "/",
    section: "Getting Started"
  },
  {
    title: "Installation", 
    href: "/installation",
    section: "Getting Started"
  },
  {
    title: "Quick Start",
    href: "/quick-start",
    section: "Getting Started"
  },
  {
    title: "CLI Commands",
    href: "/cli-commands",
    section: "Reference"
  },
  {
    title: "Configuration",
    href: "/configuration", 
    section: "Reference"
  },
  {
    title: "Examples",
    href: "/examples",
    section: "Usage"
  },
  {
    title: "Versions",
    href: "/versions",
    section: "Resources"
  },
  {
    title: "Contributing",
    href: "/contributing",
    section: "Resources"
  },
];