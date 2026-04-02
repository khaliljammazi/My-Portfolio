import { Metadata } from "next";
import ProjectsListClient from "./ProjectsListClient";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore my portfolio of web development projects including enterprise applications, e-commerce platforms, and innovative mobile apps.",
  openGraph: {
    title: "Projects | Jammazi Khalil",
    description:
      "Explore my portfolio of web development projects including enterprise applications, e-commerce platforms, and innovative mobile apps.",
  },
};

export default function ProjectsPage() {
  return <ProjectsListClient />;
}
