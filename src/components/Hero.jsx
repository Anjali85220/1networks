import homeVideo from "../assets/home_video.mp4";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-12 overflow-hidden"
    >
      {/* 🔴 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={homeVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Mobile Floating Animation Overlay */}
      <div className="absolute inset-0 md:hidden overflow-hidden bg-white/20">
        <div className="absolute w-40 h-40 bg-red-600 rounded-full opacity-30 animate-float1 top-10 left-5"></div>
        <div className="absolute w-28 h-28 bg-black rounded-full opacity-20 animate-float2 bottom-16 right-10"></div>
        <div className="absolute w-32 h-32 bg-white border-2 border-red-500 rounded-full opacity-40 animate-float3 bottom-32 left-12"></div>
      </div>

      {/* Left Side Content */}
      <div className="relative z-10 md:w-1/2 text-center md:text-left pt-40 md:pt-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-red-700">
          Unified, Intelligent & Scalable Networks
        </h1>
        <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-800 font-poppins">
          We build dynamic, future-proof infrastructure—from edge to cloud <br></br>
          — 
          that grows stronger with every connection.
        </p>

        {/* CTA Buttons */}
        <div className="mt-6 md:mt-10 flex flex-col sm:flex-row sm:justify-center md:justify-start gap-4">
          <a 
            href="#contact" 
            className="px-6 py-3 bg-red-600 text-white rounded-lg shadow-lg hover:bg-black transition text-center"
          >
            Contact us
          </a>
          <a 
            href="#services" 
            className="px-6 py-3 border-2 border-black text-black rounded-lg hover:bg-red-50 transition text-center"
          >
            Explore our services
          </a>
        </div>
      </div>
    </section>
  );
}
