import Container from "../common/Container";
import Button from "../common/Button";

const ActivitiesPreview = ({ activities = [] }) => {
  return (
    <section className="py-24">
      <Container>
        <div className="mb-12">
          <h2 className="text-4xl font-bold">Our Activities</h2>
          <p className="mt-4 max-w-2xl text-gray-600">
            Discover the programs and community initiatives we run to support families, education, and the environment.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {activities.map((activity) => (
            <article key={activity.id} className="rounded-3xl overflow-hidden shadow-lg bg-white">
              <img
                src={activity.image}
                alt={activity.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">{activity.title}</h3>
                <p className="mb-6 text-gray-600">{activity.description}</p>
                <Button>Learn More</Button>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ActivitiesPreview;