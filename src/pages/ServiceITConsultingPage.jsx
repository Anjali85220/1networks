import Navbar from '../components/Navbar';
import itImage from '../assets/it.jpg';
export default function ServiceITConsultingPage() {
  return (
    <div className="font-poppins">
      <Navbar />
      <div className="pt-28 pb-24 px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-red-600 mb-6 text-center">IT Consulting</h1>
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
      </div>
    </div>
  );
}
