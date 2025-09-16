import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import cloudImage from '../assets/cloud.jpg';
import oemImage from '../assets/oem.jpg';
import dataCenter from '../assets/datacenter.jpg';
import amcImage from '../assets/amc.jpg';
import cablesImage from '../assets/cables.jpg';
import serversImage from '../assets/servers.jpg';
import itImage from '../assets/it.jpg';
import Footer from '../components/Footer';
export default function AllServicesPage() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div className="font-poppins">
      <Navbar />
      <div className="pt-28 pb-24 px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-red-600 mb-6 text-center">Our Services</h1>
      </div>

      <section id="cloud-finops" className="pb-24 px-8 max-w-4xl mx-auto scroll-mt-24">
        <h2 className="text-4xl font-bold text-red-600 mb-6 text-center">Cloud & AI FinOps</h2>
        <img src={cloudImage} alt="Advanced Cloud & AI FinOps" className="w-full max-w-lg mx-auto mb-8 rounded-3xl shadow-2xl border-4 border-black-100" />
        <div className="text-lg text-gray-700 leading-relaxed space-y-4">
          <p>
            Our Advanced Cloud & AI FinOps services take cloud cost optimization to the next level with cutting-edge AI-driven analytics and predictive modeling. We leverage machine learning algorithms to forecast usage patterns and automatically adjust resources for maximum efficiency.
          </p>
          <p>
            Beyond basic cost management, our advanced services include real-time monitoring, anomaly detection, and intelligent resource allocation. This proactive approach ensures that your cloud infrastructure not only saves costs but also adapts dynamically to changing business needs.
          </p>
          <p>
            We integrate advanced AI tools to provide deep insights into your cloud operations, enabling data-driven decisions that optimize performance and reduce waste. Our team of AI specialists works alongside cloud experts to deliver unparalleled FinOps capabilities.
          </p>
          <p>
            For organizations seeking the most sophisticated cloud financial management solutions, our Advanced Cloud & AI FinOps services provide the intelligence and automation needed to stay ahead in the competitive digital landscape.
          </p>
        </div>
      </section>

      <section id="oem-integration" className="pb-24 px-8 max-w-4xl mx-auto scroll-mt-24">
        <h2 className="text-4xl font-bold text-red-600 mb-6 text-center">OEM Integration</h2>
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
      </section>

      <section id="data-center" className="pb-24 px-8 max-w-4xl mx-auto scroll-mt-24">
        <h2 className="text-4xl font-bold text-red-600 mb-6 text-center">Modern Data Center Infrastructure</h2>
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
      </section>

      <section id="amc" className="pb-24 px-8 max-w-4xl mx-auto scroll-mt-24">
        <h2 className="text-4xl font-bold text-red-600 mb-6 text-center">AMC (Annual Maintenance Contracts)</h2>
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
      </section>

      <section id="cabling" className="pb-24 px-8 max-w-4xl mx-auto scroll-mt-24">
        <h2 className="text-4xl font-bold text-red-600 mb-6 text-center">Structured Cabling Solutions</h2>
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
      </section>

      <section id="servers" className="pb-24 px-8 max-w-4xl mx-auto scroll-mt-24">
        <h2 className="text-4xl font-bold text-red-600 mb-6 text-center">Servers / Storage</h2>
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
      </section>

      <section id="it-consulting" className="pb-24 px-8 max-w-4xl mx-auto scroll-mt-24">
        <h2 className="text-4xl font-bold text-red-600 mb-6 text-center">IT Consulting</h2>
        <img src={itImage} alt="IT Consulting" className="w-full max-w-lg mx-auto mb-8 rounded-lg shadow-lg" />
        <div className="text-lg text-gray-700 leading-relaxed">
          <p className="mb-4">
            Our IT Consulting services help you use technology effectively to achieve business growth. We provide expert guidance and strategic planning to align your IT infrastructure with your organizational goals.
          </p>
          <p className="mb-4">
            We analyze your current technology landscape, identify areas for improvement, and recommend solutions that enhance efficiency, security, and scalability. Our consultants work closely with your team to develop actionable roadmaps and implement best practices.
          </p>
          <p className="mb-4">
            From digital transformation initiatives to cybersecurity strategies, we offer comprehensive consulting services that empower your business to adapt and thrive in a rapidly changing technological environment.
          </p>
          <p>
            Whether you need assistance with IT governance, cloud adoption, or technology integration, our IT Consulting services provide the expertise and support necessary to drive innovation and competitive advantage.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}

