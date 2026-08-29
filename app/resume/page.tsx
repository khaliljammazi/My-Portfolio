import type { Metadata } from "next";
import { ResumeClient } from "./ResumeClient";

export const metadata: Metadata = {
  title: "Resume | Mohamed Khalil Jammazi",
  description:
    "Mohamed Khalil Jammazi - Java Full-Stack Consultant. View or download the English and French CV.",
};

export default function ResumePage() {
  return <ResumeClient />;
}
