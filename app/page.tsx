import Link from "next/link";
import ProjectFocusChart from "@/components/ProjectFocusChart";
import { education, experiences } from "@/data/resume";
import { projects } from "@/data/projects";
import CompanyLogo from "@/components/CompanyLogo";
import SpinningRecord from "@/components/SpinningRecord";
import { getOnRepeatSong } from "@/lib/spotify";

const skills = [
  "SQL", "Snowflake", "BigQuery", "MySQL", "Python", "pandas", "NumPy", "scikit-learn", "R",
  "Airflow", "Git", "Streamlit", "Tableau", "Looker Studio", "SAP BusinessObjects", "Excel",
  "Matplotlib", "Seaborn", "A/B Testing", "ETL Pipelines", "Data Modeling", "Regression Modeling",
  "Causal Inference", "LLM Workflows", "React", "Jupyter", "Experiment Design", "ML modeling",
];

const shortcuts = [
  { title: "Resume", sub: "Playlist · PDF", href: "/Yeung_Ingrid.pdf", glyph: "CV", cover: "sc-pink", newTab: true },
  { title: "LinkedIn", sub: "Profile · Connect", href: "https://www.linkedin.com/in/ingridkaiyiyeung/", glyph: "in", cover: "sc-cyan", newTab: true },
  { title: "GitHub", sub: "Repos · Code", href: "https://github.com/yingridkaiyi", glyph: "</>", cover: "sc-gold", newTab: true },
  { title: "Email", sub: "Say hi · Booking", href: "mailto:ingridyeung2027@u.northwestern.edu", glyph: "@", cover: "sc-violet", newTab: false },
];

const city = (location: string) => location.split(",")[0];

// Festival-poster billing for the skills lineup: headliners biggest, then two smaller tiers.
const headliners = ["Python", "SQL", "ML modeling", "A/B Testing", "Data Modeling"];
const rest = skills.filter((s) => !headliners.includes(s));
const lineupTiers = [headliners, rest.slice(0, 10), rest.slice(10)];

export const revalidate = 3600;

export default async function Home() {
  const song = await getOnRepeatSong();
  return (
    <div className="wrap">
      {/* HERO */}
      <header className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-x-8 gap-y-6 pt-10">
        {/* Spans the record's height: verified line pinned level with its top, name centred on the record */}
        <div className="md:col-start-1 md:row-start-1 relative flex flex-col justify-center">
          <div className="poster-meta md:absolute md:top-0 md:left-0">
            <span className="verified">
              <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="12" fill="currentColor" /><path d="M7 12.5l3.2 3.2L17 9" fill="none" stroke="var(--ink)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              Verified Data Enthusiast
            </span>
            <span>Statistics &amp; Data Science · Northwestern &apos;27</span>
          </div>
          <div>
            <p className="lineup-kicker">Headlining</p>
            <h1 className="headliner">
              <span className="neon">Ingrid</span> <span className="outline">Yeung</span>
            </h1>
          </div>
        </div>
        <SpinningRecord song={song} />
        <div className="md:col-start-1 md:row-start-2 self-end grid grid-cols-2 gap-2 max-w-[520px]">
          {shortcuts.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="shortcut"
              {...(s.newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              <span className={`shortcut-cover ${s.cover}`} aria-hidden="true">{s.glyph}</span>
              <span className="min-w-0">
                <span className="shortcut-title">{s.title}</span>
                <span className="shortcut-sub">{s.sub}</span>
              </span>
              <span className="shortcut-play" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
              </span>
            </Link>
          ))}
        </div>
      </header>

      {/* SKILLS LINEUP */}
      <section className="lineup" aria-labelledby="lineup-title">
        <p id="lineup-title" className="lineup-kicker">The Lineup · Skills</p>
        {lineupTiers.map((tier, t) => (
          <div key={t} className={`lineup-tier tier-${t + 1}`}>
            {tier.map((skill, i) => (
              <span key={skill}>{i > 0 && <i aria-hidden="true">✦</i>}{skill}</span>
            ))}
          </div>
        ))}
      </section>

      {/* EXPERIENCE CHART */}
      <section id="experience" className="section">
        <div className="section-head">
          <h2>The Hot {experiences.length}</h2>
          <span>Experience · newest first</span>
        </div>
        <div className="panel overflow-hidden">
          {experiences.map((exp, i) => (
            <div key={exp.id} className="chart-row">
              <div className="chart-rank">
                {i + 1}
                {i === 0 && <span className="block font-mono-ui text-[11px] mt-1 tracking-wider text-neon-pink">NEW</span>}
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <CompanyLogo src={exp.logo} name={exp.company} size={44} />
                  <div className="min-w-0">
                    <h3 className="font-display font-extrabold text-[19px]">{exp.role}</h3>
                    <div className="text-neon-pink font-bold text-sm mt-0.5">{exp.company}</div>
                  </div>
                </div>
                <p className="text-dim text-[15px] max-w-[62ch]">{exp.description[0]}</p>
                {exp.description.length > 1 && (
                  <details>
                    <summary>Full track notes</summary>
                    <ul>
                      {exp.description.slice(1).map((d) => <li key={d}>{d}</li>)}
                    </ul>
                  </details>
                )}
              </div>
              <div className="chart-meta">
                <span><b className="text-text">{exp.period}</b></span>
                <span>{city(exp.location)}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <div className="section-head">
          <h2>Discography</h2>
          <Link href="/projects" className="font-mono-ui text-[13px] text-neon-cyan uppercase tracking-widest hover:underline">All projects →</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {projects.slice(0, 3).map((p, i) => (
            <div key={p.id} className="min-w-0">
              <div className={`cover cover-${i % 3}`}><h3>{p.title}</h3></div>
              <div className="pt-3">
                <b className="font-mono-ui text-xs text-neon-cyan tracking-wider uppercase">{p.tags.slice(0, 2).join(" · ")}</b>
                <p className="text-dim text-[15px] mt-1.5 line-clamp-3">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION + LISTENING BREAKDOWN */}
      <section className="section grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="panel p-6 min-w-0">
          <div className="eyebrow mb-2">Education</div>
          <h3 className="font-display font-extrabold text-2xl">{education.school}</h3>
          <p className="text-dim mt-1">{education.degree}</p>
          <div className="flex gap-6 mt-4 font-mono-ui text-sm">
            <span><span className="text-dim">GPA </span><b>{education.gpa}</b></span>
            <span className="text-dim">{education.graduation}</span>
          </div>
          <div className="mt-5 text-[15px]">
            <div className="font-mono-ui text-xs text-dim uppercase tracking-widest mb-1">Coursework</div>
            <p>{education.coursework.join(" · ")}</p>
            <div className="font-mono-ui text-xs text-dim uppercase tracking-widest mt-4 mb-1">Undergrad TA</div>
            <p>{education.teaching.join(" · ")}</p>
          </div>
        </div>
        <div className="panel p-6 min-w-0">
          <div className="eyebrow mb-2">Listening breakdown</div>
          <h3 className="font-display font-extrabold text-2xl">What I work on</h3>
          <ProjectFocusChart />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <div className="section-head">
          <h2>Liner Notes</h2>
          <span>About me</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-5">
          <div className="panel p-6 text-[17px] leading-relaxed space-y-4 min-w-0">
            <p>
              I am really passionate about the technical side of data—predictive modeling, building dashboards, engineering features—but I&apos;m most excited when I can use those skills to solve real-world consumer problems and generate more product insights.
            </p>
            <p>
              My experience has been a mix of rigorous engineering and business strategy, from ML engineering at DeepManifold and product analytics at Pixocial to music and live entertainment analytics at Live Nation and Sony Music Publishing, where I built data platforms, pricing dashboards, and A&amp;R research tools.
            </p>
            <p>
              Outside of academics, I am very passionate about dancing and choreography, and I have choreographed several pieces for Northwestern&apos;s dance teams, including Fusion Dance Company and Refresh Dance Crew.
            </p>
          </div>
          <div className="grid gap-5 content-start">
            <div className="panel p-5">
              <div className="font-mono-ui text-xs text-dim uppercase tracking-widest mb-1.5">On repeat</div>
              <b>Choreography &amp; performance, K-Pop concerts, music, running (half marathon), traveling</b>
            </div>
            <div className="panel p-5">
              <div className="font-mono-ui text-xs text-dim uppercase tracking-widest mb-1.5">Dance</div>
              <Link href="/dance" className="font-bold text-neon-cyan hover:underline">See my choreography →</Link>
            </div>
            <div className="panel p-5">
              <div className="font-mono-ui text-xs text-dim uppercase tracking-widest mb-1.5">Booking</div>
              <b className="break-all">ingridyeung2027@u.northwestern.edu</b>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
