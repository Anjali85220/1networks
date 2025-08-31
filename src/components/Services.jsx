import { motion } from "framer-motion";
import serviceBg from "../assets/service.png";

const items = [
  { title: "Cloud & Edge Networking", desc: "Seamless, secure, and scalable infrastructure from edge to cloud.", icon: "☁️" },
  { title: "OEM Integration", desc: "Tailored solutions and integrations for OEM partners.", icon: "🔧" },
  { title: "Modern Data Center Infrastructure", desc: "High-performance, scalable, and secure DC designs.", icon: "🏢" },
  { title: "AMC (Annual Maintenance Contracts)", desc: "Proactive maintenance and reliable support.", icon: "🛠️" },
  { title: "Structured Cabling Solutions", desc: "Organized, reliable connectivity with easy scalability.", icon: "🔌" },
  { title: "Servers / Storage", desc: "From desktops to servers—network-ready resources.", icon: "💾" },
  { title: "IT Consulting", desc: "Use technology effectively to achieve growth.", icon: "💡" },
  { title: "Cloud & AI FinOps", desc: "Optimize cloud costs and operations.", icon: "🤖" },
];

export default function Services() {
  return (
     <section
      id="services"
      className="relative pt-28 pb-24 px-8 font-[Poppins] scroll-mt-24 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${serviceBg})` }} // ✅ background applied
    >

      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Services</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Innovative, reliable, and future-ready solutions for modern businesses.
        </p>
      </div>

      {/* Grid of services */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/70 backdrop-blur-lg border border-gray-200 shadow-xl p-6 rounded-2xl hover:scale-105 hover:shadow-2xl transition transform duration-300"
          >
            <div className="text-5xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
