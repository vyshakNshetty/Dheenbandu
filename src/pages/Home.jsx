import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import HeroSection from "../components/sections/HeroSection";
// import ImpactStats from "../components/sections/ImpactStats";
import AboutPreview from "../components/sections/AboutPreview";
import ActivitiesPreview from "../components/sections/ActivitiesPreview";
import GalleryPreview from "../components/sections/GalleryPreview";
import VolunteerCTA from "../components/sections/VolunteerCTA";
import DonateCTA from "../components/sections/DonateCTA";
import ScrollToTopButton from "../components/common/ScrollToTopButton";
import homeData from "../data/home.json";
import aboutData from "../data/about.json";
import activitiesData from "../data/activities.json";
import galleryData from "../data/gallery.json";

const Home = () => {
  return (
    <>
      <Navbar />

      <HeroSection data={homeData} />

      {/* <ImpactStats
        stats={homeData.stats}
      /> */}

      <AboutPreview
        data={aboutData}
      />

      <ActivitiesPreview
        activities={activitiesData.activities}
      />

      <GalleryPreview
        images={galleryData.images}
      />

      <VolunteerCTA />

      <DonateCTA />

      <Footer />
    </>
  );
};

export default Home;