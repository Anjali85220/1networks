import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // 2 seconds
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <div className="font-poppins">
      {/* Navbar stays on top */}
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="min-h-screen relative z-0">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen relative z-0">
        <About />
      </section>

      {/* Services Section */}
      <section id="services" className="min-h-screen relative z-0">
        <Services />
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen relative z-0">
        <Contact />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
