import type { Metadata } from "next";
import ArticlesClient from "./ArticlesClient";

export const metadata: Metadata = {
  title: "Articles — Watering My Grass",
  description:
    "Long-form science articles on transcendental meditation, frequency science, HRV, breathwork, and the neuroscience of practice.",
};

export default function ArticlesPage() {
  return <ArticlesClient />;
}
