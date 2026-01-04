export type Project = {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  comingSoon?: boolean;
};

export const projects: Project[] = [
  {
    title: "Weather App",
    description:
      "Weather insights served through Nginx and Gunicorn with a Flask core; responsive front end for quick city lookups and forecasts.",
    technologies: ["Nginx", "Gunicorn", "Flask", "Python 3", "HTML", "CSS", "JavaScript"],
    comingSoon: true
  },
  {
    title: "Student Finance Tracker",
    description:
      "Lightweight web app that helps students budget, categorize spending, and track savings goals without friction.",
    technologies: ["HTML", "CSS", "JavaScript"],
    comingSoon: true
  },
  {
    title: "Regex Data Extractor",
    description:
      "CLI-first Python tool for fast data extraction pipelines with reusable regex snippets and CSV/JSON outputs.",
    technologies: ["Python"],
    comingSoon: true
  },
  {
    title: "zed-bnb",
    description:
      "Accommodation platform built with Next.js and NextAuth, blending TypeScript APIs with Tailwind UI and Python data utilities.",
    technologies: ["Next.js", "Tailwind CSS", "NextAuth.js", "TypeScript", "Python"],
    comingSoon: true
  },
  {
    title: "buy-vb",
    description:
      "Shopify storefront integrated with Flutterwave for payments; optimized product flows and lightweight customizations.",
    technologies: ["Shopify", "Flutterwave"],
    comingSoon: true
  }
];