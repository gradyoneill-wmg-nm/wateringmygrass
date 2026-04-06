import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Build Log — Watering My Grass",
  description:
    "Rat's daily build log. Every commit. Every ship. The raw history of what gets built and why.",
};

interface GitHubCommit {
  sha: string;
  commit: {
    message: string;
    author: {
      name: string;
      date: string;
    };
  };
  html_url: string;
}

interface ParsedCommit {
  sha: string;
  type: string;
  subject: string;
  body: string;
  date: string;
  url: string;
  author: string;
}

function parseCommit(raw: GitHubCommit): ParsedCommit {
  const lines = raw.commit.message.trim().split("\n");
  const firstLine = lines[0] ?? "";

  // Parse conventional commit prefix: feat:, fix:, chore:, docs:, etc.
  const conventionalMatch = firstLine.match(/^(\w+)(\(.+?\))?!?:\s*(.+)$/);
  const type = conventionalMatch ? conventionalMatch[1] : "ship";
  const subject = conventionalMatch ? conventionalMatch[3] : firstLine;
  const body = lines
    .slice(2)
    .join("\n")
    .trim();

  return {
    sha: raw.sha.slice(0, 7),
    type,
    subject,
    body,
    date: raw.commit.author.date,
    url: raw.html_url,
    author: raw.commit.author.name,
  };
}

function typeLabel(type: string): { label: string; color: string } {
  const map: Record<string, { label: string; color: string }> = {
    feat:    { label: "FEATURE",  color: "#ffffff" },
    fix:     { label: "FIX",      color: "#ff6b6b" },
    chore:   { label: "CHORE",    color: "#555555" },
    docs:    { label: "DOCS",     color: "#888888" },
    refactor:{ label: "REFACTOR", color: "#888888" },
    style:   { label: "STYLE",    color: "#888888" },
    test:    { label: "TEST",     color: "#888888" },
    perf:    { label: "PERF",     color: "#aaaaaa" },
    ci:      { label: "CI",       color: "#555555" },
    build:   { label: "BUILD",    color: "#555555" },
    ship:    { label: "SHIP",     color: "#ffffff" },
  };
  return map[type] ?? { label: type.toUpperCase(), color: "#888888" };
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "America/New_York",
  });
}

function groupByDate(commits: ParsedCommit[]): Map<string, ParsedCommit[]> {
  const groups = new Map<string, ParsedCommit[]>();
  for (const c of commits) {
    const day = formatDate(c.date);
    if (!groups.has(day)) groups.set(day, []);
    groups.get(day)!.push(c);
  }
  return groups;
}

async function getCommits(): Promise<ParsedCommit[]> {
  const token = process.env.GITHUB_TOKEN;
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };
  if (token) headers["Authorization"] = `Bearer ${token}`;

  try {
    const res = await fetch(
      "https://api.github.com/repos/gradyoneill-wmg-nm/wateringmygrass/commits?per_page=60",
      { headers, next: { revalidate: 300 } }
    );
    if (!res.ok) return [];
    const data: GitHubCommit[] = await res.json();
    return data.map(parseCommit);
  } catch {
    return [];
  }
}

export default async function BuildLogPage() {
  const commits = await getCommits();
  const grouped = groupByDate(commits);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <div className="max-w-3xl mx-auto px-6 pt-20 pb-32">
        {/* Header */}
        <div className="mb-16">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#555555] mb-4">
            Rat / Build Log
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-[-0.02em] mb-6">
            What shipped.
          </h1>
          <p className="text-[#888888] max-w-lg leading-relaxed">
            Every commit. No spin. This is the raw history of what gets built,
            fixed, and shipped at Watering My Grass — pulled live from GitHub.
          </p>
        </div>

        {commits.length === 0 ? (
          <div className="border border-[#222222] p-8 text-center">
            <p className="text-[#555555] text-sm">
              No commits found. Set{" "}
              <code className="text-[#888888]">GITHUB_TOKEN</code> in your
              environment if the repo is private.
            </p>
          </div>
        ) : (
          <div className="space-y-12">
            {Array.from(grouped.entries()).map(([day, dayCommits]) => (
              <div key={day}>
                {/* Day header */}
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[10px] tracking-[0.25em] uppercase text-[#444444]">
                    {day}
                  </span>
                  <div className="flex-1 border-t border-[#1a1a1a]" />
                  <span className="text-[10px] text-[#333333]">
                    {dayCommits.length} commit{dayCommits.length !== 1 ? "s" : ""}
                  </span>
                </div>

                {/* Commits */}
                <div className="space-y-px">
                  {dayCommits.map((commit) => {
                    const { label, color } = typeLabel(commit.type);
                    return (
                      <div
                        key={commit.sha}
                        className="bg-[#0d0d0d] border border-[#1a1a1a] p-5 hover:border-[#333333] transition-colors group"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-3 mb-2">
                              <span
                                className="text-[9px] tracking-[0.2em] uppercase border px-1.5 py-0.5 shrink-0"
                                style={{
                                  color,
                                  borderColor:
                                    color === "#ffffff"
                                      ? "#444444"
                                      : "#2a2a2a",
                                }}
                              >
                                {label}
                              </span>
                              <code className="text-[10px] text-[#444444] font-mono shrink-0">
                                {commit.sha}
                              </code>
                            </div>
                            <p className="text-sm font-light leading-snug text-white group-hover:text-[#eeeeee]">
                              {commit.subject}
                            </p>
                            {commit.body && (
                              <p className="mt-2 text-xs text-[#555555] leading-relaxed line-clamp-2">
                                {commit.body}
                              </p>
                            )}
                          </div>
                          <a
                            href={commit.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[10px] text-[#333333] hover:text-[#888888] transition-colors shrink-0 mt-1"
                            aria-label="View on GitHub"
                          >
                            ↗
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer CTA */}
        <div className="mt-20 pt-10 border-t border-[#222222]">
          <p className="text-[#555555] text-sm mb-4">
            Building in public. Following along?
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link
              href="/april18"
              className="px-6 py-2.5 bg-white text-black text-xs tracking-[0.15em] uppercase hover:bg-[#e0e0e0] transition-colors"
            >
              Join April 18 →
            </Link>
            <a
              href="https://nonmagic.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 border border-[#333333] text-[#888888] text-xs tracking-[0.15em] uppercase hover:border-white hover:text-white transition-colors"
            >
              Non Magic App ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
