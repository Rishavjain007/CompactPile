import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Moon, Sun, Menu, X, ArrowRight } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { Button } from "./ui/button";
import logo from "../assets/images/Picture.jpg";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setIsMobileMenuOpen(false), [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
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

  const isActive = (path) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg py-2"
            : "bg-white/70 dark:bg-gray-900/70 backdrop-blur-md py-3"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between h-[72px]">

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center p-2 shadow-lg">
              <img src={logo} alt="Logo" className="object-contain" />
            </div>
            <div>
              <p className="font-bold text-lg text-black dark:text-white">Compact Pile</p>
              <p className="text-xs text-gray-500">Construction Pvt. Ltd.</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-xl text-sm font-medium ${
                  isActive(link.path)
                    ? "bg-[#BA0014] text-white"
                    : "text-gray-700 dark:text-gray-300 hover:text-[#BA0014]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-2">

            {/* CTA */}
            <Button asChild className="hidden lg:flex bg-[#BA0014] hover:bg-[#9E0011] rounded-xl">
              <Link to="/contact">
                Get Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            {/* Theme */}
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="text-black dark:text-white">
              {theme === "light" ? <Moon /> : <Sun />}
            </Button>

            {/* Mobile */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-black dark:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-20 left-4 right-4 bg-white dark:bg-gray-900 text-black dark:text-white rounded-2xl shadow-2xl p-4 z-40">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} className="block py-3">
              {link.name}
            </Link>
          ))}
          <Link to="/contact">
            <Button className="w-full mt-4 bg-[#BA0014]">
              Get Quote
            </Button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Header;