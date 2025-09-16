import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link} from 'react-router-dom';
import logo from "../assets/logo.ico";

export default function Navbar() {
  const [isHero, setIsHero] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const titleRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      if (heroSection) {
        const heroBottom = heroSection.offsetHeight;
        setIsHero(window.scrollY < heroBottom - 80);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex justify-between items-center px-6 py-2 z-50 transition-all duration-300
        ${
          isOpen
            ? "bg-black backdrop-blur-md" // when menu open on mobile
            : isHero
            ? "bg-gradient-to-r from-black/10 via-gray-100/60 to-black/90 backdrop-blur-md" // when over video
            : "bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-md" // after scroll
        }`}
    >
      {/* Logo + Title */}
      <div className="flex items-center space-x-3">
        <img
          src={logo}
          alt="1NETWORKS Logo"
          className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
        />
        <div>
          <h1
            ref={titleRef}
            className={`text-2xl sm:text-5xl font-bold tracking-tight ${
              isHero ? "text-black drop-shadow" : "text-black"
            }`}
          >
            1NETWORKS
          </h1>
          <p
            className={`text-xs sm:text-sm ${
              isHero ? "text-red-500" : "text-red-600"
            }`}
          >
            Powering the Networks of Tomorrow
          </p>
        </div>
      </div>

      {/* Desktop Nav Links */}
      <ul className="hidden md:flex space-x-4 lg:space-x-6 font-medium">
        {navItems.map((item) => (
          <li key={item.label}>
            <Link
              to={item.path}
              className={`px-6 py-2 rounded-full text-base shadow-md transition-all duration-300
                ${
                  isHero
                    ? "bg-white/90 text-black hover:bg-red-600 hover:text-white"
                    : "bg-black text-white hover:bg-red-600"
                }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger */}
      <button
        className={`md:hidden p-2 ${isHero ? "text-white" : "text-black"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Sidebar Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-black text-white backdrop-blur-md shadow-lg transform
          ${isOpen ? "translate-x-0" : "translate-x-full"}
          transition-transform duration-300 md:hidden z-50`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-xl font-bold text-red-400">Menu</h2>
          <button onClick={() => setIsOpen(false)}>
            <X size={28} />
          </button>
        </div>
        <ul className="flex flex-col space-y-4 p-6 bg-black">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-lg bg-white text-black text-lg font-semibold shadow hover:bg-red-600 hover:text-white transition-all"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
