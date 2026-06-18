import { motion } from "framer-motion";
import Button from "../common/Button";
import Container from "../common/Container";

const HeroSection = ({ data }) => {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${data.heroImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <Container>
        <div className="relative z-10 h-screen flex items-center">

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="max-w-3xl text-white"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              {data.title}
            </h1>

            <p className="text-xl mb-8">
              {data.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button>
                {data.primaryButton}
              </Button>
              <Button variant="outline">
                {data.secondaryButton}
              </Button>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};

export default HeroSection;