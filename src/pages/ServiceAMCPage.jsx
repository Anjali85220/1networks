import Navbar from '../components/Navbar';
import amcImage from '../assets/amc.jpg';
export default function ServiceAMCPage() {
  return (
    <div className="font-poppins">
      <Navbar />
      <div className="pt-28 pb-24 px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-red-600 mb-6 text-center">AMC (Annual Maintenance Contracts)</h1>
        <img src={amcImage} alt="AMC (Annual Maintenance Contracts)" className="w-full max-w-lg mx-auto mb-8 rounded-lg shadow-lg" />
        <div className="text-lg text-gray-700 leading-relaxed">
          <p className="mb-4">
            Our Annual Maintenance Contracts (AMC) provide proactive maintenance and reliable support to ensure the optimal performance and longevity of your IT infrastructure. We offer comprehensive maintenance solutions that minimize downtime and maximize the efficiency of your systems.
          </p>
          <p className="mb-4">
            Through our AMC services, we conduct regular inspections, preventive maintenance, and timely repairs to address potential issues before they escalate. Our team of certified technicians ensures that your hardware and software remain up-to-date and fully functional.
          </p>
          <p className="mb-4">
            We tailor our AMC packages to meet your specific needs, offering flexible options for different levels of support. From basic maintenance to comprehensive 24/7 monitoring, we provide the peace of mind that comes with knowing your IT assets are in expert hands.
          </p>
          <p>
            By choosing our AMC services, you can focus on your core business activities while we handle the maintenance and support of your IT infrastructure. This approach not only reduces costs associated with unexpected breakdowns but also extends the lifespan of your equipment.
          </p>
        </div>
      </div>
    </div>
  );
}
