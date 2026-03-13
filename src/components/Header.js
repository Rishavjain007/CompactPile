import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { Button } from "./ui/button";
import logo from "../assets/images/Picture.jpg";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initialize on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Technology", path: "/technology" },
    { name: "Team", path: "/team" },
    { name: "Certifications", path: "/certifications" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  const getDesktopNavClass = (path) => {
    if (isActive(path)) {
      return "bg-[#BA0014] text-white shadow-md";
    }

    return isScrolled
      ? "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-[#BA0014] dark:hover:text-[#BA0014]"
      : "text-gray-900 dark:text-white hover:bg-white/20 dark:hover:bg-white/10 hover:text-[#BA0014] dark:hover:text-[#BA0014]";
  };

  const getHeaderBg = () => {
    return isScrolled
      ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg py-2"
      : "bg-white/70 dark:bg-gray-900/70 backdrop-blur-md py-3";
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${getHeaderBg()}`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center p-2 transform group-hover:scale-105 transition-transform duration-300 shadow-lg overflow-hidden">
                <img
                  src={logo}
                  alt="Compact Pile Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span
                  className={`font-bold text-lg sm:text-xl tracking-wide transition-colors duration-300 ${
                    isScrolled
                      ? "text-gray-900 dark:text-white"
                      : "text-gray-900 dark:text-white"
                  }`}
                >
                  Compact Pile
                </span>
                <span
                  className={`text-[11px] sm:text-xs font-medium transition-colors duration-300 ${
                    isScrolled
                      ? "text-gray-600 dark:text-gray-400"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Construction Pvt. Ltd.
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${getDesktopNavClass(link.path)}`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Right Controls */}
            <div className="flex items-center gap-2">
              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className={`rounded-xl transition-all duration-300 ${
                  isScrolled
                    ? "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    : "text-gray-900 dark:text-white hover:bg-white/20 dark:hover:bg-white/10"
                }`}
                aria-label="Toggle theme"
              >
                {theme === "light" ? (
                  <Moon className="h-5 w-5" />
                ) : (
                  <Sun className="h-5 w-5" />
                )}
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden rounded-xl transition-all duration-300 ${
                  isScrolled
                    ? "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    : "text-gray-900 dark:text-white hover:bg-white/20 dark:hover:bg-white/10"
                }`}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Background */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        {/* Mobile Menu Panel */}
        <div
          className={`absolute top-[88px] left-4 right-4 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-4 transition-all duration-300 transform ${
            isMobileMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0"
          }`}
        >
          <nav className="space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? "bg-[#BA0014] text-white shadow-md"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-[#BA0014] dark:hover:text-[#BA0014]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
