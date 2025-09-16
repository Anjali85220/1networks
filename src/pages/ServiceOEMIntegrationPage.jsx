import Navbar from '../components/Navbar';
import oemImage from '../assets/oem.jpg';
export default function ServiceOEMIntegrationPage() {
  return (
    <div className="font-poppins">
      <Navbar />
      <div className="pt-28 pb-24 px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-red-600 mb-6 text-center">OEM Integration</h1>
        <img src={oemImage} alt="OEM Integration" className="w-full max-w-lg mx-auto mb-8 rounded-lg shadow-lg" />
        <div className="text-lg text-gray-700 leading-relaxed">
          <p className="mb-4">
            Our OEM Integration services provide tailored solutions and seamless integrations for Original Equipment Manufacturer (OEM) partners. We specialize in creating customized integrations that enhance the functionality and compatibility of OEM products within your existing infrastructure.
          </p>
          <p className="mb-4">
            By working closely with OEM partners, we ensure that their products integrate smoothly with your systems, reducing compatibility issues and improving overall performance. Our team of experts handles everything from initial compatibility assessments to full-scale integration projects.
          </p>
          <p className="mb-4">
            We offer end-to-end support for OEM integrations, including API development, data synchronization, and ongoing maintenance. This approach allows you to leverage the best-in-class solutions from OEM partners without worrying about integration complexities.
          </p>
          <p>
            Whether you're expanding your product ecosystem or enhancing existing capabilities, our OEM Integration services provide the expertise and resources needed to achieve seamless, efficient integrations that drive business growth.
          </p>
        </div>
      </div>
    </div>
  );
}
