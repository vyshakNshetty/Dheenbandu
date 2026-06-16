import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const MobileMenu = ({
  open,
  links,
  closeMenu,
}) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{
            opacity: 0,
            height: 0,
          }}
          animate={{
            opacity: 1,
            height: "auto",
          }}
          exit={{
            opacity: 0,
            height: 0,
          }}
          transition={{
            duration: 0.3,
          }}
          className="md:hidden overflow-hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
        >
          {links.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={closeMenu}
              className={({ isActive }) =>
                `block px-6 py-4 transition ${
                  isActive
                    ? "text-green-600 bg-green-50 dark:bg-gray-800"
                    : "hover:bg-gray-100 dark:hover:bg-gray-800"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;