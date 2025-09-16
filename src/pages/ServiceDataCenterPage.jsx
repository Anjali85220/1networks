import Navbar from '../components/Navbar';
import dataCenter from '../assets/datacenter.jpg';
export default function ServiceDataCenterPage() {
  return (
    <div className="font-poppins">
      <Navbar />
      <div className="pt-28 pb-24 px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-red-600 mb-6 text-center">Modern Data Center Infrastructure</h1>
        <img src={dataCenter} alt="Modern Data Center Infrastructure" className="w-full max-w-lg mx-auto mb-8 rounded-lg shadow-lg" />
        <div className="text-lg text-gray-700 leading-relaxed">
          <p className="mb-4">
            Our Modern Data Center Infrastructure services deliver high-performance, scalable, and secure data center designs that meet the demands of today's digital landscape. We specialize in creating robust infrastructures that support your business growth and ensure uninterrupted operations.
          </p>
          <p className="mb-4">
            Leveraging cutting-edge technologies and best practices, we design data centers that are energy-efficient, highly available, and adaptable to future needs. From initial planning and architecture to implementation and optimization, our team ensures that your data center infrastructure is built to last.
          </p>
          <p className="mb-4">
            We incorporate advanced cooling systems, redundant power supplies, and comprehensive security measures to protect your critical data and applications. Our scalable designs allow for seamless expansion as your business evolves, minimizing downtime and maximizing efficiency.
          </p>
          <p>
            Whether you're building a new data center or modernizing an existing one, our expertise in data center infrastructure ensures that you have a reliable foundation for your digital operations, enabling you to focus on driving innovation and growth.
          </p>
        </div>
      </div>
    </div>
  );
}
