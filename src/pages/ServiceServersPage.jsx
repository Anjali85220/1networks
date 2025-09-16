import Navbar from '../components/Navbar';
import serversImage from '../assets/servers.jpg';
export default function ServiceServersPage() {
  return (
    <div className="font-poppins">
      <Navbar />
      <div className="pt-28 pb-24 px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-red-600 mb-6 text-center">Servers / Storage</h1>
        <img src={serversImage} alt="Servers / Storage" className="w-full max-w-lg mx-auto mb-8 rounded-lg shadow-lg" />
        <div className="text-lg text-gray-700 leading-relaxed">
          <p className="mb-4">
            Our Servers and Storage solutions provide network-ready resources ranging from desktops to enterprise-grade servers. We offer comprehensive hardware solutions that are designed to meet the diverse computing needs of modern businesses.
          </p>
          <p className="mb-4">
            From high-performance workstations for individual users to robust server clusters for mission-critical applications, we provide scalable and reliable hardware that integrates seamlessly with your existing infrastructure. Our storage solutions ensure data availability, security, and efficient management.
          </p>
          <p className="mb-4">
            We work with leading manufacturers to deliver cutting-edge technology that balances performance, reliability, and cost-effectiveness. Our team assists with hardware selection, configuration, deployment, and ongoing support to ensure optimal performance.
          </p>
          <p>
            Whether you're upgrading your current setup or building a new infrastructure, our Servers and Storage services provide the hardware foundation you need to support your business operations and drive productivity.
          </p>
        </div>
      </div>
    </div>
  );
}
