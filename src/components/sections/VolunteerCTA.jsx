import Button from "../common/Button";
import Container from "../common/Container";

const VolunteerCTA = () => {
  return (
    <section className="py-24 bg-green-700 text-white">

      <Container>

        <div className="text-center">

          <h2 className="text-5xl font-bold mb-6">
            Become A Volunteer
          </h2>

          <p className="mb-8">
            Help transform lives through your
            time and dedication.
          </p>

          <Button variant="outline">
            Join Now
          </Button>

        </div>

      </Container>
    </section>
  );
};

export default VolunteerCTA;