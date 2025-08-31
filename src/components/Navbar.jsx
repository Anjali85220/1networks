import { useEffect, useState } from "react";
import logo from "../assets/logo.ico";

export default function Navbar() {
  const [isHero, setIsHero] = useState(true);

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
          className="w-20 h-20 object-contain"
        />
        <div>
          <h1 className="text-5xl font-bold text-black tracking-wide">
            1NETWORKS
          </h1>
          <p className="text-lg text-red-600 font-semibold mt-1">
            Powering the Networks of Tomorrow.
          </p>
        </div>
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-6 font-poppins">
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
    </nav>
  );
}
