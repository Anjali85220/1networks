import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import ServiceCloudFinOpsPage from './pages/ServiceCloudFinOpsPage';
import ServiceOEMIntegrationPage from './pages/ServiceOEMIntegrationPage';
import ServiceDataCenterPage from './pages/ServiceDataCenterPage';
import ServiceAMCPage from './pages/ServiceAMCPage';
import ServiceCablingPage from './pages/ServiceCablingPage';
import ServiceServersPage from './pages/ServiceServersPage';
import ServiceITConsultingPage from './pages/ServiceITConsultingPage';
import ServiceCloudFinOps2Page from './pages/ServiceCloudFinOps2Page';

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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="font-poppins">
            <Navbar />

            <section id="hero" className="min-h-screen relative z-0">
              <Hero />
            </section>

            <section id="about" className="min-h-screen relative z-0">
              <About />
            </section>

            <section id="services" className="min-h-screen relative z-0">
              <Services />
            </section>

            <section id="contact" className="min-h-screen relative z-0">
              <Contact />
            </section>

            <Footer />
          </div>
        } />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services/cloud-finops" element={<ServiceCloudFinOpsPage />} />
        <Route path="/services/oem-integration" element={<ServiceOEMIntegrationPage />} />
        <Route path="/services/data-center" element={<ServiceDataCenterPage />} />
        <Route path="/services/amc" element={<ServiceAMCPage />} />
        <Route path="/services/cabling" element={<ServiceCablingPage />} />
        <Route path="/services/servers" element={<ServiceServersPage />} />
        <Route path="/services/it-consulting" element={<ServiceITConsultingPage />} />
        <Route path="/services/cloud-finops-2" element={<ServiceCloudFinOps2Page />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
