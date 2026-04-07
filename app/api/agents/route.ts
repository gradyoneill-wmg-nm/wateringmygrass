import { NextRequest } from "next/server";

export const runtime = "edge";

// ── Types ─────────────────────────────────────────────────────────────────────

type AgentStatus = "alive" | "idle" | "offline";
type TaskStatus = "running" | "blocked" | "done";

interface AgentTask {
  id: string;
  description: string;
  startedAt: string;
  status: TaskStatus;
  progressPct?: number;
}

interface Agent {
  id: string;
  name: string;
  emoji: string;
  role: string;
  status: AgentStatus;
  lastSeen: string;
  currentTask: AgentTask | null;
  completedToday: number;
  totalCompleted: number;
  capabilities: string[];
}

// ── Agent registry ─────────────────────────────────────────────────────────────
// lastSeen / startedAt are expressed as offsets so the response is always
// fresh relative to request time. We compute them in GET().

const AGENT_DEFS: Omit<Agent, "lastSeen" | "currentTask"> & {
  lastSeenMinutesAgo: number;
  task: (Omit<AgentTask, "startedAt"> & { startedMinutesAgo: number }) | null;
}[] = [
  {
    id: "rat",
    name: "Rat",
    emoji: "🐀",
    role: "Non Magic CTO — engineering, infrastructure, build pipeline",
    status: "alive",
    lastSeenMinutesAgo: 0,
    completedToday: 7,
    totalCompleted: 342,
    capabilities: ["Next.js", "TypeScript", "Supabase", "React Native", "CI/CD", "API design"],
    task: {
      id: "wmg-005",
      description:
        "Building WMG feature set: CRM dashboard, TM course landing page, agents API endpoint, homepage hero improvements",
      status: "running",
      progressPct: 72,
      startedMinutesAgo: 18,
    },
  },
  {
    id: "rosefinch",
    name: "Rose Finch",
    emoji: "🌹",
    role: "WMG CTO — site architecture, component library, Vercel deployment",
    status: "alive",
    lastSeenMinutesAgo: 4,
    completedToday: 5,
    totalCompleted: 218,
    capabilities: [
      "Next.js App Router",
      "Tailwind CSS",
      "Vercel",
      "design systems",
      "SEO",
      "performance optimization",
    ],
    task: {
      id: "wmg-004",
      description:
        "Reviewing homepage hero redesign — CTA sizing, hero copy punch, LiveSessionCounter fallback",
      status: "running",
      progressPct: 55,
      startedMinutesAgo: 4,
    },
  },
  {
    id: "rockbird",
    name: "Rockbird",
    emoji: "🐦",
    role: "WMG Editorial — articles, newsletter, content calendar",
    status: "alive",
    lastSeenMinutesAgo: 11,
    completedToday: 3,
    totalCompleted: 94,
    capabilities: [
      "long-form writing",
      "science communication",
      "SEO copywriting",
      "newsletter strategy",
      "editorial calendar",
    ],
    task: {
      id: "editorial-003",
      description:
        "Drafting '40Hz Gamma: Why MIT Researchers Think This Frequency Could Change Everything' — targeting 2,400 words",
      status: "running",
      progressPct: 80,
      startedMinutesAgo: 45,
    },
  },
  {
    id: "raccoon",
    name: "Raccoon",
    emoji: "🦝",
    role: "Market Intel — SEO research, competitor monitoring, keyword opportunities",
    status: "idle",
    lastSeenMinutesAgo: 38,
    completedToday: 4,
    totalCompleted: 156,
    capabilities: [
      "SEO research",
      "competitor analysis",
      "keyword strategy",
      "Google Trends",
      "content gap analysis",
    ],
    task: null,
  },
  {
    id: "roadrunner",
    name: "Roadrunner",
    emoji: "🦩",
    role: "Grants — wellness non-profit funding, application drafting, compliance",
    status: "alive",
    lastSeenMinutesAgo: 7,
    completedToday: 2,
    totalCompleted: 67,
    capabilities: [
      "grant writing",
      "NIH/NSF research",
      "non-profit structure",
      "impact metrics",
      "compliance review",
    ],
    task: {
      id: "grants-002",
      description:
        "Researching NCCIH Exploratory/Developmental grants for mind-body practice research organizations",
      status: "running",
      progressPct: 40,
      startedMinutesAgo: 22,
    },
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Route handler
// ─────────────────────────────────────────────────────────────────────────────

export async function GET(_req: NextRequest) {
  const now = Date.now();

  const agents: Agent[] = AGENT_DEFS.map((def) => {
    const { lastSeenMinutesAgo, task, ...rest } = def;

    const lastSeen = new Date(now - lastSeenMinutesAgo * 60_000).toISOString();

    const currentTask: AgentTask | null = task
      ? {
          id: task.id,
          description: task.description,
          status: task.status,
          progressPct: task.progressPct,
          startedAt: new Date(now - task.startedMinutesAgo * 60_000).toISOString(),
        }
      : null;

    return { ...rest, lastSeen, currentTask };
  });

  const alive = agents.filter((a) => a.status === "alive").length;
  const idle = agents.filter((a) => a.status === "idle").length;
  const offline = agents.filter((a) => a.status === "offline").length;
  const activeTaskCount = agents.filter((a) => a.currentTask !== null).length;
  const totalCompletedToday = agents.reduce((s, a) => s + a.completedToday, 0);

  return Response.json(
    {
      mesh: {
        name: "Non Magic / WMG Agent Mesh",
        version: "1.0.0",
        totalAgents: agents.length,
        alive,
        idle,
        offline,
        activeTaskCount,
        totalCompletedToday,
        generatedAt: new Date(now).toISOString(),
      },
      agents,
    },
    {
      headers: {
        "Cache-Control": "no-store",
        "Content-Type": "application/json",
      },
    }
  );
}
