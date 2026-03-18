import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import gecoreLogo from "../Assets/images/gecore-logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const updateNavbarHeight = () => {
      if (!navRef.current) {
        return;
      }

      const { height } = navRef.current.getBoundingClientRect();
      document.documentElement.style.setProperty(
        "--navbar-height",
        `${height}px`,
      );
    };

    updateNavbarHeight();

    const resizeObserver = new ResizeObserver(updateNavbarHeight);
    if (navRef.current) {
      resizeObserver.observe(navRef.current);
    }

    window.addEventListener("resize", updateNavbarHeight);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateNavbarHeight);
    };
  }, [isScrolled, isMobileMenuOpen]);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/services", label: "Services" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <motion.nav
      ref={navRef}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg py-4" : "bg-white/95 py-6"
      }`}
    >
      <div className="container-custom relative flex items-center justify-between px-4 sm:px-6 md:px-0">
        {/* Logo */}
        <Link
          to="/"
          className="absolute left-1/2 -translate-x-1/2 flex items-center md:static md:translate-x-0"
        >
          <img
            src={gecoreLogo}
            alt="GECORE 360"
            className="h-12 md:h-14 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-montserrat font-medium transition-all duration-300 relative group ${
                isActive(link.path)
                  ? "text-primary-green"
                  : "text-gray-700 hover:text-primary-blue"
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-primary transform transition-transform duration-300 ${
                  isActive(link.path)
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link to="/contact" className="btn-gradient">
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden ml-auto text-gray-700 hover:text-primary-blue transition-colors"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-t border-gray-200 mt-4"
        >
          <div className="container-custom px-4 sm:px-6 md:px-0 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`font-montserrat font-medium transition-colors ${
                  isActive(link.path)
                    ? "text-primary-green"
                    : "text-gray-700 hover:text-primary-blue"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-gradient text-center"
            >
              Get Started
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
