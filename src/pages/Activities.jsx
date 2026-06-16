import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Card from "../components/common/Card";
import activitiesData from "../data/activities.json";

const Activities = () => {
  return (
    <>
      <Navbar />

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-5">

          <h1 className="text-5xl font-bold mb-12 text-center">
            Activities
          </h1>

          <div className="grid md:grid-cols-3 gap-8">

            {activitiesData.activities.map(
              (item) => (
                <Card
                  key={item.id}
                  image={item.image}
                  title={item.title}
                  description={
                    item.description
                  }
                />
              )
            )}

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
};

export default Activities;