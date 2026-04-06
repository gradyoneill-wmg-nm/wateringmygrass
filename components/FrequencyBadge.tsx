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
  /** "badge" = bordered pill (default), "dot" = colored dot + label, "pill" = filled pill */
  variant?: "badge" | "dot" | "pill";
  /** Override size: "sm" (default) or "xs" */
  size?: "xs" | "sm";
  className?: string;
}

const FREQUENCY_CONFIG: Record<
  string,
  { label: string; color: string; bg: string; border: string }
> = {
  Gamma: {
    label: "Gamma · 40Hz",
    color: "text-yellow-500",
    bg: "bg-yellow-950",
    border: "border-yellow-800",
  },
  "40Hz": {
    label: "40Hz Gamma",
    color: "text-yellow-500",
    bg: "bg-yellow-950",
    border: "border-yellow-800",
  },
  Beta: {
    label: "Beta · 13–30Hz",
    color: "text-orange-400",
    bg: "bg-orange-950",
    border: "border-orange-800",
  },
  Alpha: {
    label: "Alpha · 8–12Hz",
    color: "text-indigo-400",
    bg: "bg-indigo-950",
    border: "border-indigo-800",
  },
  Theta: {
    label: "Theta · 4–8Hz",
    color: "text-violet-400",
    bg: "bg-violet-950",
    border: "border-violet-800",
  },
  Delta: {
    label: "Delta · 0.5–4Hz",
    color: "text-slate-400",
    bg: "bg-slate-900",
    border: "border-slate-700",
  },
  Schumann: {
    label: "Schumann · 7.83Hz",
    color: "text-emerald-400",
    bg: "bg-emerald-950",
    border: "border-emerald-800",
  },
  "528Hz": {
    label: "528Hz",
    color: "text-teal-400",
    bg: "bg-teal-950",
    border: "border-teal-800",
  },
  TM: {
    label: "TM",
    color: "text-blue-400",
    bg: "bg-blue-950",
    border: "border-blue-800",
  },
  HRV: {
    label: "HRV",
    color: "text-green-400",
    bg: "bg-green-950",
    border: "border-green-800",
  },
  Breathwork: {
    label: "Breathwork",
    color: "text-cyan-400",
    bg: "bg-cyan-950",
    border: "border-cyan-800",
  },
  MBSR: {
    label: "MBSR",
    color: "text-pink-400",
    bg: "bg-pink-950",
    border: "border-pink-800",
  },
};

const FALLBACK = {
  label: "",
  color: "text-[#888888]",
  bg: "bg-[#1a1a1a]",
  border: "border-[#333333]",
};

const FrequencyBadge: FC<FrequencyBadgeProps> = ({
  frequency,
  variant = "badge",
  size = "sm",
  className = "",
}) => {
  const config = FREQUENCY_CONFIG[frequency] ?? {
    ...FALLBACK,
    label: frequency,
  };

  const label = config.label || frequency;

  const textSize = size === "xs" ? "text-[8px]" : "text-[9px]";
  const tracking = "tracking-[0.25em]";
  const uppercase = "uppercase";

  if (variant === "dot") {
    return (
      <span className={`inline-flex items-center gap-1.5 ${className}`}>
        <span
          className={`w-1.5 h-1.5 rounded-full shrink-0 ${config.color.replace("text-", "bg-")}`}
        />
        <span className={`${textSize} ${tracking} ${uppercase} ${config.color}`}>
          {label}
        </span>
      </span>
    );
  }

  if (variant === "pill") {
    return (
      <span
        className={`inline-flex items-center ${textSize} ${tracking} ${uppercase} ${config.color} ${config.bg} px-2.5 py-1 ${className}`}
      >
        {label}
      </span>
    );
  }

  // Default: badge
  return (
    <span
      className={`inline-flex items-center ${textSize} ${tracking} ${uppercase} ${config.color} border ${config.border} px-2 py-0.5 ${className}`}
    >
      {label}
    </span>
  );
};

export default FrequencyBadge;
