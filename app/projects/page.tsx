import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="wrap pt-10">
      <div className="mb-10">
        <div className="eyebrow">Projects</div>
        <h1 className="font-display font-black text-[clamp(36px,6vw,64px)] leading-none tracking-[-.01em] mt-2.5">
          Discography
        </h1>
        <p className="mt-4 text-dim max-w-[52ch]">
          A collection of work demonstrating my skills in Data Science and Product Design.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <article key={project.id} className="min-w-0 flex flex-col">
            <div className={`cover cover-${i % 3}`}>
              <h3>{project.title}</h3>
            </div>
            <div className="pt-4 flex-1 flex flex-col">
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map((tag) => (
                  <span key={tag} className="font-mono-ui text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-raise text-neon-cyan">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-dim text-[15px]">{project.description}</p>
              {project.link !== "#" && (
                <a href={project.link} className="mt-4 font-bold text-neon-pink hover:underline">
                  View Project <span aria-hidden="true">&rarr;</span>
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
