import Container from "../common/Container";
import Button from "../common/Button";

const AboutPreview = ({ data }) => {
  const {
    title = "About Our NGO",
    description = "Creating sustainable change through education, healthcare and environmental programs.",
    image = "https://images.unsplash.com/photo-1469571486292-b53601020f1e",
    mission = "Empowering communities through meaningful action.",
    vision = "A world where every individual has opportunities to thrive.",
  } = data || {};

  return (
    <section className="py-24 bg-slate-50">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] items-center">
          <div className="relative rounded-[2rem] overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.12)]">
            <img
              src={image}
              alt={title}
              className="w-full h-[560px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            <div className="absolute left-6 bottom-6 right-6 rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl text-white shadow-xl">
              <p className="text-xs uppercase tracking-[0.35em] text-emerald-200/90">
                About us
              </p>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                {title}
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-100/90 sm:text-base">
                {description}
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-[2rem] border border-slate-200/80 bg-white p-8 shadow-lg">
              <span className="inline-flex rounded-full bg-emerald-100 px-4 py-1 text-sm font-semibold text-emerald-700">
                Our mission
              </span>
              <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                {mission}
              </h3>
              <p className="mt-4 text-slate-600 leading-7">
                {vision}
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm">
                <h4 className="text-xl font-semibold text-slate-900">Education</h4>
                <p className="mt-3 text-slate-600 leading-7">
                  Expanding learning opportunities with community-driven classes, mentorship, and training.
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm">
                <h4 className="text-xl font-semibold text-slate-900">Healthcare</h4>
                <p className="mt-3 text-slate-600 leading-7">
                  Bringing care to underserved areas through wellness camps, screenings, and support services.
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] bg-gradient-to-r from-emerald-600 to-cyan-600 p-8 text-white shadow-2xl">
              <p className="text-sm uppercase tracking-[0.28em] opacity-90">
                Become a partner
              </p>
              <h3 className="mt-4 text-3xl font-semibold">
                Help us scale impact with every new volunteer and donation.
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/90">
                Join hands with us to support real people, build resilient communities, and grow long-term change.
              </p>
              <div className="mt-8">
                <Button>Learn More</Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutPreview;
