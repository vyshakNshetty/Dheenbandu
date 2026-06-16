const SectionTitle = ({
  title,
  subtitle,
}) => {
  return (
    <div className="text-center mb-12">
      <p className="text-green-600 font-semibold">
        {subtitle}
      </p>

      <h2 className="text-4xl font-bold mt-2">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;