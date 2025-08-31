import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // hamburger + close icons
import logo from "../assets/logo.ico";

export default function Navbar() {
  const [isHero, setIsHero] = useState(true);
  const [isOpen, setIsOpen] = useState(false); // sidebar state

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

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex justify-between items-center px-6 py-3 z-50 transition-all duration-300 ${
        isHero
          ? "bg-transparent"
          : "bg-white/90 backdrop-blur-md border-b border-white/30 shadow-lg"
      }`}
    >
      {/* Logo + Title */}
      <div className="flex items-center space-x-3">
        <img
          src={logo}
          alt="1NETWORKS Logo"
          className="w-14 h-14 sm:w-20 sm:h-20 object-contain"
        />
        <div>
          <h1 className="text-2xl sm:text-5xl font-bold text-black tracking-wide">
            1NETWORKS
          </h1>
          <p className="text-sm sm:text-lg text-red-600 font-semibold mt-1">
            Powering the Networks of Tomorrow.
          </p>
        </div>
      </div>

      {/* Desktop Nav Links */}
      <ul className="hidden md:flex space-x-6 font-poppins">
        {["hero", "about", "services", "contact"].map((id) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className="px-6 py-2 border border-black rounded-full text-lg text-black hover:bg-black hover:text-red-400 cursor-pointer transition"
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
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
          {["hero", "about", "services", "contact"].map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-lg border-b border-gray-200 text-black hover:text-red-600 transition"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
