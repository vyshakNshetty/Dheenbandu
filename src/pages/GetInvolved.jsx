import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Button from "../components/common/Button";

const GetInvolved = () => {
  return (
    <>
      <Navbar />

      <section className="py-24">

        <div className="max-w-4xl mx-auto text-center px-5">

          <h1 className="text-5xl font-bold mb-8">
            Get Involved
          </h1>

          <p className="mb-10">
            Join our mission through
            volunteering, fundraising and
            community outreach.
          </p>

          <div className="flex justify-center gap-6 flex-wrap">

            <Button>
              Volunteer
            </Button>

            <Button variant="secondary">
              Donate
            </Button>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
};

export default GetInvolved;