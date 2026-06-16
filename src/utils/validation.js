export const validateContactForm = (
  values
) => {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = "Name is required";
  }

  if (!values.email.trim()) {
    errors.email =
      "Email is required";
  }

  if (
    values.email &&
    !/\S+@\S+\.\S+/.test(values.email)
  ) {
    errors.email =
      "Invalid email address";
  }

  if (!values.message.trim()) {
    errors.message =
      "Message is required";
  }

  return errors;
};