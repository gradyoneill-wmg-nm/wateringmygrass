import type { FC } from "react";

type Frequency =
  | "Gamma"
  | "Beta"
  | "Alpha"
  | "Theta"
  | "Delta"
  | "Schumann"
  | "40Hz"
  | "528Hz"
  | "TM"
  | "HRV"
  | "Breathwork"
  | "MBSR"
  | string;

interface FrequencyBadgeProps {
  frequency: Frequency;
  /** "badge" = bordered (default), "dot" = dot + label, "pill" = filled */
  variant?: "badge" | "dot" | "pill";
  size?: "xs" | "sm";
  className?: string;
}

const FREQUENCY_LABELS: Record<string, string> = {
  Gamma: "Gamma · 40Hz",
  "40Hz": "40Hz Gamma",
  Beta: "Beta · 13–30Hz",
  Alpha: "Alpha · 8–12Hz",
  Theta: "Theta · 4–8Hz",
  Delta: "Delta · 0.5–4Hz",
  Schumann: "Schumann · 7.83Hz",
  "528Hz": "528Hz",
  TM: "TM",
  HRV: "HRV",
  Breathwork: "Breathwork",
  MBSR: "MBSR",
};

const FrequencyBadge: FC<FrequencyBadgeProps> = ({
  frequency,
  variant = "badge",
  size = "sm",
  className = "",
}) => {
  const label = FREQUENCY_LABELS[frequency] ?? frequency;
  const textSize = size === "xs" ? "text-[8px]" : "text-[9px]";

  if (variant === "dot") {
    return (
      <span className={`inline-flex items-center gap-1.5 ${className}`}>
        <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0 opacity-60" />
        <span className={`${textSize} tracking-[0.25em] uppercase text-[#888888]`}>
          {label}
        </span>
      </span>
    );
  }

  if (variant === "pill") {
    return (
      <span
        className={`inline-flex items-center ${textSize} tracking-[0.25em] uppercase text-white bg-[#1a1a1a] px-2.5 py-1 ${className}`}
      >
        {label}
      </span>
    );
  }

  // Default: badge — orange accent
  return (
    <span
      className={`inline-flex items-center ${textSize} tracking-[0.25em] uppercase text-[#F5841F] border border-[#F5841F]/30 px-2 py-0.5 ${className}`}
    >
      {label}
    </span>
  );
};

export default FrequencyBadge;
