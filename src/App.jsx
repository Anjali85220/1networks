import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";

function App() {
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
    </div>
  );
}

export default App;
