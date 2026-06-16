import Container from "../common/Container";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <Container>
        <div className="grid md:grid-cols-3 gap-8">

          <div>
            <h3 className="text-xl font-bold mb-4">
              NGO Foundation
            </h3>

            <p>
              Empowering communities through
              education, food support and
              environmental sustainability.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2">
              <li>About</li>
              <li>Activities</li>
              <li>Volunteer</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">
              Contact
            </h3>

            <p>info@ngo.org</p>
            <p>+91 9876543210</p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          © 2026 NGO Foundation
        </div>
      </Container>
    </footer>
  );
};

export default Footer;