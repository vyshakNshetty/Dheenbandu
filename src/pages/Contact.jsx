import { useState } from "react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import FormInput from "../components/common/FormInput";

import { validateContactForm } from "../utils/validation";

const Contact = () => {
  const [values, setValues] =
    useState({
      name: "",
      email: "",
      message: "",
    });

  const [errors, setErrors] =
    useState({});

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors =
      validateContactForm(values);

    setErrors(validationErrors);

    if (
      Object.keys(validationErrors)
        .length === 0
    ) {
      alert(
        "Form submitted successfully!"
      );

      setValues({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <>
      <Navbar />

      <section className="py-24">

        <div className="max-w-3xl mx-auto px-5">

          <h1 className="text-5xl font-bold text-center mb-12">
            Contact Us
          </h1>

          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-xl rounded-xl p-8"
          >

            <FormInput
              label="Name"
              name="name"
              value={values.name}
              onChange={handleChange}
              error={errors.name}
            />

            <FormInput
              label="Email"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              error={errors.email}
            />

            <FormInput
              label="Message"
              name="message"
              textarea
              value={values.message}
              onChange={handleChange}
              error={errors.message}
            />

            <button
              className="bg-green-600 text-white px-6 py-3 rounded-lg"
            >
              Send Message
            </button>

          </form>

        </div>

      </section>

      <Footer />
    </>
  );
};

export default Contact;