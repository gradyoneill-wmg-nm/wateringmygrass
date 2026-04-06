import type { Metadata } from "next";
import CalendarClient from "./CalendarClient";

export const metadata: Metadata = {
  title: "Content Calendar — Watering My Grass",
  description:
    "Weekly content schedule across Instagram, TikTok, YouTube Shorts, LinkedIn, and Twitter. Tracks scripting, production, and publishing status per agent.",
};

export default function CalendarPage() {
  return <CalendarClient />;
}
