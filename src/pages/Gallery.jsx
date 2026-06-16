import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Modal from "../components/common/Modal";
import galleryData from "../data/gallery.json";

const Gallery = () => {
  const [selectedImage, setSelectedImage] =
    useState(null);

  return (
    <>
      <Navbar />

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-5">

          <h1 className="text-5xl font-bold text-center mb-12">
            Gallery
          </h1>

          <div className="grid md:grid-cols-4 gap-6">

            {galleryData.images.map(
              (image) => (
                <img
                  key={image.id}
                  src={image.image}
                  alt={image.title}
                  onClick={() =>
                    setSelectedImage(
                      image.image
                    )
                  }
                  className="rounded-xl h-72 w-full object-cover cursor-pointer hover:scale-105 transition"
                />
              )
            )}

          </div>

        </div>

      </section>

      <Modal
        image={selectedImage}
        isOpen={!!selectedImage}
        onClose={() =>
          setSelectedImage(null)
        }
      />

      <Footer />
    </>
  );
};

export default Gallery;