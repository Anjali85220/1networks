import Navbar from '../components/Navbar';
import cablesImage from '../assets/cables.jpg';
export default function ServiceCablingPage() {
  return (
    <div className="font-poppins">
      <Navbar />
      <div className="pt-28 pb-24 px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-red-600 mb-6 text-center">Structured Cabling Solutions</h1>
        <img src={cablesImage} alt="Structured Cabling Solutions" className="w-full max-w-lg mx-auto mb-8 rounded-lg shadow-lg" />
        <div className="text-lg text-gray-700 leading-relaxed">
          <p className="mb-4">
            Our Structured Cabling Solutions provide organized, reliable connectivity with easy scalability for your business infrastructure. We design and implement cabling systems that support high-speed data transmission and ensure seamless communication across your network.
          </p>
          <p className="mb-4">
            We use industry-standard materials and best practices to create cabling infrastructures that are durable, efficient, and easy to maintain. Our solutions are tailored to meet the specific needs of your facility, whether it's a small office or a large enterprise data center.
          </p>
          <p className="mb-4">
            Our team handles everything from initial site surveys and design to installation and testing, ensuring that your cabling system meets all performance and safety standards. We also provide documentation and support for future upgrades and expansions.
          </p>
          <p>
            With our Structured Cabling Solutions, you can expect improved network performance, reduced downtime, and a scalable infrastructure that grows with your business needs.
          </p>
        </div>
      </div>
    </div>
  );
}
