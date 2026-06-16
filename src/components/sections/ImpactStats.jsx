import { motion } from "framer-motion";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

const ImpactStats = ({ stats }) => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">

      <Container>

        <SectionTitle
          title="Our Impact"
          subtitle="Making A Difference"
        />

        <div className="grid md:grid-cols-4 gap-8">

          {stats.map((item) => (
            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              key={item.id}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl text-center shadow-lg"
            >
              <h3 className="text-4xl font-bold text-green-600">
                {item.value}
              </h3>

              <p className="mt-4">
                {item.title}
              </p>
            </motion.div>
          ))}

        </div>

      </Container>
    </section>
  );
};

export default ImpactStats;