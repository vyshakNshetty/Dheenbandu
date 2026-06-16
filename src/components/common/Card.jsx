import React from "react";

const Card = ({
  image,
  title,
  description,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300">

      <img
        src={image}
        alt={title}
        loading="lazy"
        className="w-full h-60 object-cover"
      />

      <div className="p-6">

        <h3 className="text-xl font-bold mb-3">
          {title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300">
          {description}
        </p>

      </div>
    </div>
  );
};

export default React.memo(Card);