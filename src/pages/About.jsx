import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PageTransition from "../components/layout/PageTransition";
import aboutData from "../data/about.json";

const About = () => {
  return (
    <PageTransition>
      <Navbar />

      <section className="py-24">

        <div className="max-w-6xl mx-auto px-5">

          <h1 className="text-5xl font-bold mb-8">
            {aboutData.title}
          </h1>

          <img
            src={aboutData.image}
            alt={aboutData.title}
            className="rounded-xl mb-10"
          />

          <p className="mb-6">
            {aboutData.description}
          </p>

          <h2 className="text-3xl font-bold mb-4">
            Mission
          </h2>

          <p>{aboutData.mission}</p>

          <h2 className="text-3xl font-bold mt-8 mb-4">
            Vision
          </h2>

          <p>{aboutData.vision}</p>

        </div>

      </section>

      <Footer />
    </PageTransition>
  );
};

export default About;