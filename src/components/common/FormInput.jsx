const FormInput = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
  textarea = false,
}) => {
  return (
    <div className="mb-5">
      <label
        htmlFor={name}
        className="block mb-2 font-medium"
      >
        {label}
      </label>

      {textarea ? (
        <textarea
          id={name}
          name={name}
          rows="5"
          value={value}
          onChange={onChange}
          className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      ) : (
        <input
          id={name}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      )}

      {error && (
        <p className="text-red-500 text-sm mt-1">
          {error}
        </p>
      )}
    </div>
  );
};

export default FormInput;