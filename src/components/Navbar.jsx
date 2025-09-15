import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
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
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex justify-between items-center px-6 py-3 z-50 transition-all duration-300 
        ${
          isHero && !isOpen
            ? "bg-transparent md:bg-transparent"
            : "bg-white md:bg-white/90 md:backdrop-blur-md md:border-b md:border-white/30 md:shadow-lg"
        }`}
    >
      {/* Logo + Title */}
      <div className="flex items-center space-x-3">
        <img
          src={logo}
          alt="1NETWORKS Logo"
          className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
        />
        <div className="inline-block text-center sm:text-left">
          <h1
            ref={titleRef}
            className="text-3xl sm:text-5xl font-semibold text-black leading-tight"
          >
            1NETWORKS
          </h1>
          <p className="mt-1 text-[0.7rem] sm:text-sm text-red-600 whitespace-nowrap">
            Powering the Networks of Tomorrow
          </p>
        </div>
      </div>

      {/* Desktop Nav Links */}
      <ul className="hidden md:flex space-x-6 font-poppins">
        {navItems.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className="px-10 py-2 rounded-full text-lg bg-black text-white border border-black hover:bg-black hover:text-red-400 cursor-pointer transition"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden p-2 text-black"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 md:hidden z-50`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold text-red-600">Menu</h2>
          <button onClick={() => setIsOpen(false)}>
            <X size={28} />
          </button>
        </div>
        <ul className="flex flex-col space-y-4 p-6 font-poppins">
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-lg border-b border-gray-200 text-black hover:text-red-600 transition"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
