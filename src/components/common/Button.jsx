import { motion } from "framer-motion";
import clsx from "clsx";

const Button = ({
  children,
  variant = "primary",
  onClick,
}) => {
  const styles = clsx(
    "px-6 py-3 rounded-lg font-semibold transition-all",
    {
      "bg-green-600 text-white hover:bg-green-700":
        variant === "primary",

      "bg-blue-600 text-white hover:bg-blue-700":
        variant === "secondary",

      "border border-green-600 text-green-600 hover:bg-green-600 hover:text-white":
        variant === "outline",
    }
  );

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={styles}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

export default Button;