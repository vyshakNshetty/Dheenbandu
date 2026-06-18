import { useMemo, useState } from "react";
import Container from "../common/Container";
import Button from "../common/Button";

/**
 * Font note: this component leans on "Fraunces" for display headings and
 * "Inter" for body copy. If your project doesn't already load these, add the
 * line below to your global stylesheet (globals.css / index.css) instead of
 * importing it per-component — kept inline here only so this file previews
 * correctly on its own.
 *   @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600&family=Inter:wght@400;500;600&display=swap');
 */

const DEFAULT_VIDEO = "https://youtu.be/_k62nGcF7wk?si=PTCD1rWU_H9ZHN1f";

function getYouTubeId(url = "") {
  const patterns = [
    /youtu\.be\/([^?&]+)/,
    /youtube\.com\/watch\?v=([^?&]+)/,
    /youtube\.com\/embed\/([^?&]+)/,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  if (/^[\w-]{6,}$/.test(url)) return url;
  return null;
}

const DEFAULTS = {
  about: {
    heading: "About us",
    paragraphs: [
      "Deenabandhu is a voluntary organization committed to the welfare of orphaned and destitute children from all castes, creed, and religion. The organization was founded in 1992 by Prof. G. S. Jayadev in Chamarajanagara, Karnataka.",
      "Deenabandhu's humble beginnings comprised of a small group of six boys living in a rented house, now Deenabandhu children's home nurtures 40 boys and 40 girls. The trust also runs a school for children from neighboring villages, catering to LKG to 10th std, and offers significantly discounted education to kids from underprivileged backgrounds. Indo-MIM fully supports the school's expenses. Additionally, Deenabandhu has founded a Teacher Resource Center (TRC) to promote experiential learning in government schools across Karnataka.",
      "The trust also provides scholarships to deserving students from rural and underprivileged backgrounds, supports women through skill training, and is engaged in biodiversity conservation projects.",
    ],
  },
  founder: {
    heading: "The founder",
    image: "/images/about/founder.jpg",
    paragraphs: [
      "Prof. G. S. Jayadeva, the founder of Deenabandhu Trust, comes from a distinguished literary lineage, being the son of the renowned Kannada poet, Rashtrakavi G. S. Shivarudrappa. An educationist with almost 40 years of experience, he has dedicated his life to working on various social issues, recognized with accolades including the Mahatma Gandhi Seva Award-Karnataka.",
    ],
  },
  journey: {
    heading: "Our journey",
    image: "/images/about/journey.jpg",
    paragraphs: [
      "Deenabandhu was founded in 1992 with a first batch of 6 boys in a rented house. In 1994, construction began on cottages for boys; 4 were built, each housing 12 boys under the care of a house mother or father.",
      "A home for girls followed in 2005, and in 2010 a permanent green home was established, able to accommodate 40 girls and 3 house mothers.",
      "In 1998, a primary school opened near Ramasamudra village, later growing to LKG–10th std with full support from Indo-MIM, and in 2006 a Teacher Resource Center (TRC) was set up to spread experiential education across government schools statewide.",
    ],
  },
  board: {
    heading: "Board of Trustees",
    trustees: [
      { name: "Dr. R. S. Nagarjuna", role: "Physician", position: "President" },
      { name: "Sri. G. S. Jayadeva", role: "Social worker", position: "Secretary" },
      { name: "Mr. R. Subash", role: "Civil engineering consultant and builder", position: "Treasurer" },
      { name: "Mr. Ketan Devadiga", role: "Deenabandhu TRC Project Coordinator", position: "Joint Secretary" },
      { name: "Sri. G. R. Ashwathanarayana", role: "Businessman", position: "Trustee" },
      { name: "Smt. M. N. Sumana", role: "Advocate", position: "Trustee" },
      { name: "Mr. G. Jayaram", role: "Retd. KAS Officer", position: "Trustee" },
      { name: "Dr. Shashishekar Shivaswamy", role: "Former Head of Flight Physics Dept., Airbus Group", position: "Trustee" },
    ],
  },
  partner: {
    eyebrow: "Become a partner",
    headline: "Help us scale impact with every new volunteer and donation.",
    body: "Join hands with us to support real people, build resilient communities, and grow long-term change.",
    buttonLabel: "Learn More",
  },
};

const AboutPreview = ({ data }) => {
  const about = { ...DEFAULTS.about, ...data?.about };
  const founder = { ...DEFAULTS.founder, ...data?.founder };
  const journey = { ...DEFAULTS.journey, ...data?.journey };
  const board = { ...DEFAULTS.board, ...data?.board };
  const partner = { ...DEFAULTS.partner, ...data?.partner };
  const video = data?.video || DEFAULT_VIDEO;

  const videoId = useMemo(() => getYouTubeId(video) || getYouTubeId(DEFAULT_VIDEO), [video]);

  const [activeTab, setActiveTab] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [thumbSrc, setThumbSrc] = useState(`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`);

  const tabs = useMemo(
    () => [
      { type: "video", label: "About us", eyebrow: "Who we are", heading: about.heading, paragraphs: about.paragraphs },
      { type: "image", label: "The founder", eyebrow: "Our founder", heading: founder.heading, paragraphs: founder.paragraphs, image: founder.image },
      { type: "image", label: "Our journey", eyebrow: "How we got here", heading: journey.heading, paragraphs: journey.paragraphs, image: journey.image },
      { type: "grid", label: "Board of Trustees", eyebrow: "Leadership", heading: board.heading, trustees: board.trustees },
    ],
    [about, founder, journey, board]
  );

  const current = tabs[activeTab];

  return (
    <section className="relative overflow-hidden bg-[#15261B] py-24">
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-[#E8A33D]/10 blur-3xl" />

      <Container>
        <div className="relative rounded-[1.75rem] border border-white/10 bg-[#1B2E20] p-6 shadow-[0_40px_100px_rgba(0,0,0,0.45)] sm:p-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            {current.type !== "grid" && (
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-lg">
                {current.type === "video" ? (
                  playing ? (
                    <iframe
                      className="absolute inset-0 h-full w-full"
                      src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                      title={current.heading}
                      allow="accelerate-compute; autoplay; encrypted-media; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <button
                      type="button"
                      onClick={() => setPlaying(true)}
                      aria-label="Play video"
                      className="group absolute inset-0 h-full w-full"
                    >
                      <img
                        src={thumbSrc}
                        onError={() => setThumbSrc(`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`)}
                        alt="About Deenabandhu video thumbnail"
                        className="h-full w-full object-cover opacity-80 transition group-hover:opacity-95"
                      />
                      <span className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                      <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#E8A33D] shadow-xl transition-transform group-hover:scale-105">
                        <svg viewBox="0 0 24 24" className="h-6 w-6 translate-x-[1px] fill-[#15261B]">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </span>
                    </button>
                  )
                ) : (
                  <>
                    <img src={current.image} alt={current.heading} className="h-full w-full object-cover" />
                    <span className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                  </>
                )}
              </div>
            )}

            <div className={current.type === "grid" ? "lg:col-span-2" : ""}>
              <div key={activeTab} className="animate-[fadeIn_0.35s_ease-out] motion-reduce:animate-none">
                <p className="font-['IBM_Plex_Mono',monospace] text-xs uppercase tracking-[0.3em] text-[#E8A33D]">
                  {current.eyebrow}
                </p>
                <h2
                  className={`mt-4 font-['Fraunces',Georgia,serif] text-3xl font-semibold leading-tight text-[#F4EFE3] sm:text-4xl ${
                    current.type === "grid" ? "text-center" : ""
                  }`}
                >
                  {current.heading}
                </h2>

                {current.paragraphs && (
                  <div className="mt-5 max-w-2xl space-y-4 text-[#B9C7AE]">
                    {current.paragraphs.map((p, i) => (
                      <p key={i} className="leading-7">
                        {p}
                      </p>
                    ))}
                  </div>
                )}

                {current.type === "grid" && (
                  <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {current.trustees.map((t) => (
                      <div
                        key={t.name}
                        className="rounded-2xl border border-white/10 bg-[#22392A] p-5 transition-colors hover:border-[#E8A33D]/40"
                      >
                        <h3 className="font-['Fraunces',Georgia,serif] text-base font-semibold text-[#F4EFE3]">
                          {t.name}
                        </h3>
                        <p className="mt-1 text-xs text-[#B9C7AE]/80">{t.role}</p>
                        <p className="mt-3 text-sm font-semibold text-[#E8A33D]">{t.position}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sequence wayfinder */}
          <div className="mt-12 sm:mt-16">
            <div className="relative flex items-center justify-between">
              <div className="absolute left-0 right-0 top-1/2 h-px bg-white/15" aria-hidden="true" />
              {tabs.map((tab, i) => (
                <button
                  key={tab.label}
                  type="button"
                  onClick={() => setActiveTab(i)}
                  aria-current={activeTab === i}
                  className="group relative z-10 flex flex-1 flex-col items-center gap-3 outline-none"
                >
                  <span
                    className={`h-3 w-3 rounded-full ring-4 ring-[#1B2E20] transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#E8A33D] ${
                      activeTab === i ? "bg-[#E8A33D] scale-125" : "bg-white/30 group-hover:bg-white/60"
                    }`}
                  />
                  <span
                    className={`px-1 text-center text-xs font-medium leading-tight transition-colors sm:text-sm ${
                      activeTab === i ? "text-[#F4EFE3]" : "text-[#B9C7AE]/70 group-hover:text-[#B9C7AE]"
                    }`}
                  >
                    {tab.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Closing call to action */}
     
      </Container>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default AboutPreview;