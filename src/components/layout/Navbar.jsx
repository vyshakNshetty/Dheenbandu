import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { motion } from "framer-motion";

import { useTheme } from "../../context/ThemeContext";
import { NAV_LINKS } from "../../utils/constants";

import Container from "../common/Container";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const { darkMode, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800"
    >
      <Container>
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-green-600"
          >
            DEENABANDHU TRUST
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-green-600"
                      : "text-gray-700 dark:text-gray-200 hover:text-green-600"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            
   
            <button
              onClick={toggleMenu}
              aria-label="Toggle Menu"
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              {open ? (
                <FiX size={24} />
              ) : (
                <FiMenu size={24} />
              )}
            </button>
          </div>
        </div>
      </Container>

      <MobileMenu
        open={open}
        links={NAV_LINKS}
        closeMenu={closeMenu}
      />
    </motion.nav>
  );
};

export default Navbar;