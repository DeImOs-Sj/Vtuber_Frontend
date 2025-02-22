import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "FEATURES", path: "/#features", isScroll: true },
    { name: "PRICING", path: "/pricing" },
    { name: "STREAMS", path: "/streams" },

    { name: "BUY", path: "/buy" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  interface NavItem {
    name: string;
    path: string;
    isScroll?: boolean;
  }

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    item: NavItem
  ) => {
    if (item.isScroll) {
      e.preventDefault();
      const element = document.getElementById("features");
      if (element) {
        const headerOffset = 80; // Adjust based on your header height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`bg-[#FCFCE6] border-b-2 border-black relative w-full fixed top-0 z-50 transition-shadow duration-300 ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      {/* Animated top border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-yellow-400 animate-[bounce_1s_ease-in-out_infinite]"></div>

      <div className="max-w-7xl mx-auto py-2 sm:py-3 md:py-4 px-4 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="block">
              <span
                className="font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wider inline-block transform hover:scale-105 transition-transform duration-200"
                style={{
                  fontFamily: "'Bangers', cursive",
                  letterSpacing: "0.1em",
                }}
              >
                <span
                  className="text-yellow-400"
                  style={{
                    textShadow:
                      "2px 2px 0px #000, -1px -1px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000",
                  }}
                >
                  MEME
                </span>
                <span
                  className="text-white ml-2"
                  style={{
                    textShadow:
                      "2px 2px 0px #000, -1px -1px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000",
                  }}
                >
                  TUBER
                </span>
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-black hover:bg-yellow-100 transition-all duration-200 border-2 border-black active:translate-y-1"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:items-center">
            <div className="flex flex-row items-center">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="relative font-bold text-lg px-4 py-2 mx-2 hover:text-yellow-400 transition-colors duration-300 group"
                  style={{
                    fontFamily: "'Bangers', cursive",
                    letterSpacing: "0.05em",
                    textShadow: "1px 1px 0px #000",
                  }}
                  onClick={(e) => handleNavClick(e, item)}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden bg-[#FCFCE6] border-t-2 border-black shadow-md absolute top-full left-0 w-full transition-all duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        style={{ zIndex: 45 }}
      >
        <div className="py-2 px-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="block w-full text-center font-bold text-lg px-4 py-3 hover:bg-yellow-100 rounded transition-all duration-200 active:translate-y-1"
              style={{
                fontFamily: "'Bangers', cursive",
                letterSpacing: "0.05em",
                textShadow: "1px 1px 0px #000",
              }}
              onClick={(e) => handleNavClick(e, item)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile menu backdrop */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden"
          style={{ zIndex: 40 }}
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Header;
