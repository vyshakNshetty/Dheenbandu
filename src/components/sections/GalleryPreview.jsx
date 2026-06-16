import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

const GalleryPreview = ({ images }) => {
  return (
    <section className="py-24">

      <Container>

        <SectionTitle
          title="Gallery"
          subtitle="Moments Of Impact"
        />

        <div className="grid md:grid-cols-4 gap-6">

          {images.map((item) => (
            <img
              key={item.id}
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="rounded-xl h-72 w-full object-cover"
            />
          ))}

        </div>

      </Container>
    </section>
  );
};

export default GalleryPreview;