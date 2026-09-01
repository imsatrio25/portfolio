import fs from "fs";
import path from "path";
import ProjectCard from "./ProjectCard";

type Project = {
  title: string;
  slug: string;
  year: number;
  tech: string[];
  github: string;
  live: string;
  desc: string;
};

function parseFrontmatter(raw: string): { data: Record<string, string | string[]>; body: string } {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  const data: Record<string, string | string[]> = {};
  let body = raw;
  if (m) {
    body = m[2];
    for (const line of m[1].split("\n")) {
      const kv = line.match(/^(\w+):\s*(.*)$/);
      if (!kv) continue;
      const [, key, rawVal] = kv;
      if (rawVal.startsWith("[")) {
        data[key] = rawVal
          .slice(1, -1)
          .split(",")
          .map((s) => s.trim().replace(/^"|"$/g, ""))
          .filter(Boolean);
      } else {
        data[key] = rawVal.replace(/^"|"$/g, "");
      }
    }
  }
  return { data, body };
}

function descFromBody(body: string): string {
  // first non-empty, non-bullet line = the one-line pitch
  const line = body
    .split("\n")
    .map((l) => l.trim())
    .find((l) => l.length > 0 && !l.startsWith("-"));
  return line ?? "";
}

export default function ProjectGrid() {
  const dir = path.join(process.cwd(), "content/projects");
  const projects: Project[] = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .sort()
    .map((f) => {
      const raw = fs.readFileSync(path.join(dir, f), "utf8");
      const { data, body } = parseFrontmatter(raw);
      return {
        title: (data.title as string) ?? f,
        slug: (data.slug as string) ?? f.replace(/\.mdx$/, ""),
        year: Number(data.year ?? 0),
        tech: (data.tech as string[]) ?? [],
        github: (data.github as string) ?? "",
        live: (data.live as string) ?? "",
        desc: descFromBody(body),
      };
    });

  return (
    <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2">
      {projects.map((p) => (
        <ProjectCard
          key={p.slug}
          title={p.title}
          desc={p.desc}
          tech={p.tech}
          github={p.github || undefined}
          live={p.live || undefined}
          img={`/projects/${p.slug}.svg`}
        />
      ))}
    </div>
  );
}
