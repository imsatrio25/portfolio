import Image from "next/image";

type Props = {
  title: string;
  desc: string;
  tech: string[];
  github?: string;
  live?: string;
  img: string;
};

export default function ProjectCard({ title, desc, tech, github, live, img }: Props) {
  return (
    <article className="group flex min-w-0 flex-col rounded-xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-white/20 hover:shadow-xl hover:shadow-black/40">
      <div className="mb-4 overflow-hidden rounded-lg border border-white/10">
        <Image
          src={img}
          alt={`${title} screenshot`}
          width={1280}
          height={720}
          loading="lazy"
          className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-400">{desc}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {tech.map((t) => (
          <li
            key={t}
            className="rounded-full border border-accent/30 px-2.5 py-0.5 font-mono text-xs text-accent"
          >
            {t}
          </li>
        ))}
      </ul>
      {(github || live) && (
        <div className="mt-4 flex gap-4 text-sm font-semibold">
          {github && (
            <a href={github} target="_blank" rel="noreferrer" className="text-neutral-300 transition-colors hover:text-accent">
              GitHub →
            </a>
          )}
          {live && (
            <a href={live} target="_blank" rel="noreferrer" className="text-accent hover:underline">
              Live →
            </a>
          )}
        </div>
      )}
    </article>
  );
}
