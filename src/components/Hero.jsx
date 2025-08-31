import heroBg from "../assets/hero-bg.png";

export default function Hero() {
  return (
    <section
      className="relative h-screen flex items-center justify-between px-12 bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      {/* Left Side Content */}
      <div className="w-1/2 z-10">
        <h1 className="text-5xl font-bold leading-tight text-red-700">
          Unified, Intelligent & Scalable Networks
        </h1>
       <p className="mt-6 text-lg text-gray-800 font-poppins">
  We build dynamic, future-proof infrastructure—from edge to cloud— 
  that grows stronger with every connection.
</p>



        {/* CTA Buttons */}
        <div className="mt-10 flex space-x-4">
          <button className="px-6 py-3 bg-red-600 text-white rounded-lg shadow-lg hover:bg-black">
            Contact us
          </button>
          <button className="px-6 py-3 border-2 border-black text-black rounded-lg hover:bg-red-50">
  Explore our services
</button>

        </div>
      </div>
    </section>
  );
}
