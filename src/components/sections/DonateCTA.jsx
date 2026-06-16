import Button from "../common/Button";
import Container from "../common/Container";

const DonateCTA = () => {
  return (
    <section className="py-24 bg-blue-700 text-white">

      <Container>

        <div className="text-center">

          <h2 className="text-5xl font-bold mb-6">
            Make A Donation
          </h2>

          <p className="mb-8">
            Every contribution creates
            meaningful impact.
          </p>

          <Button>
            Donate Today
          </Button>

        </div>

      </Container>
    </section>
  );
};

export default DonateCTA;