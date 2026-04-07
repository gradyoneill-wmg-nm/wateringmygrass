import type { Metadata } from "next";
import April18Event from "./April18Event";

export const metadata: Metadata = {
  title: "April 18 Global Meditation — Watering My Grass",
  description:
    "One signal. Everyone. Join a synchronized global meditation on April 18, 2026 at 5:00 AM EST. NYC in-person and worldwide via the Non Magic app.",
};

export default function April18Page() {
  return <April18Event />;
}
