import { motion } from "framer-motion";
import aboutBg from "../assets/about1.png";
import about2Bg from "../assets/about2.png";

const uniqueValues = [
  { title: "Innovative Solutions", description: "Leveraging the latest advancements.", icon: "🚀" },
  { title: "Expert Team", description: "Experienced professionals.", icon: "👥" },
  { title: "Comprehensive Services", description: "End-to-end solutions.", icon: "🔄" },
  { title: "Customer-Centric Approach", description: "Tailored solutions.", icon: "❤️" },
  { title: "Reliability and Quality", description: "Proven track record.", icon: "✅" },
  { title: "Cost-Effective Solutions", description: "Clear pricing.", icon: "💰" },
  { title: "Commitment to Excellence", description: "Strict quality control.", icon: "🏆" },
  { title: "Tailored Solutions", description: "Customizable options.", icon: "⚙️" },
];

export default function About() {
  return (
    <>
      {/* === Section 1: About Us Hero + Mission, Vision, Story === */}
      <section
  id="about"
  className="relative min-h-screen bg-no-repeat bg-cover bg-center flex items-center font-[Poppins] pt-32"
  style={{ backgroundImage: `url(${aboutBg})` }}
>

        <div className="relative z-10 w-full md:w-3/4 lg:w-2/3 ml-auto mr-0 px-20 py-10 space-y-10">
          {/* Mission + Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
            {/* Our Vision */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full bg-gray-100 border-2 border-black rounded-2xl shadow-xl p-8"
            >
              <h2 className="inline-block px-5 py-2 mb-5 text-xl md:text-2xl font-semibold tracking-wide text-black rounded-full border-2 border-black bg-red-600 shadow-md">
                Our Vision
              </h2>
              <p className="text-base leading-relaxed font-light text-black">
                To be the leading force in next-generation network infrastructure,
                enabling seamless connectivity from edge to cloud. To be a catalyst
                for positive change through technology, shaping a future where
                innovation and creativity know no bounds.
              </p>
            </motion.div>

            {/* Our Mission */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="w-full bg-gray-100 border-2 border-black rounded-2xl shadow-xl p-8"
            >
              <h2 className="inline-block px-5 py-2 mb-5 text-xl md:text-2xl font-semibold tracking-wide text-black rounded-full border-2 border-black bg-red-600 shadow-md">
                Our Mission
              </h2>
              <p className="text-base leading-relaxed font-light text-black">
                Our mission is to create transformative technology solutions that
                empower businesses and individuals to thrive in a rapidly evolving
                digital world. We are committed to delivering innovative,
                user-centric products and services that drive growth, efficiency,
                and success for our clients.
              </p>
            </motion.div>
          </div>

          {/* Spiral Story */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className="mt-12 w-full bg-gray-100 border-2 border-black rounded-2xl shadow-xl p-8"
          >
            <h2 className="inline-block px-5 py-2 mb-5 text-xl md:text-2xl font-semibold tracking-wide text-black rounded-full border-2 border-black bg-red-600 shadow-md">
              The Spiral Story
            </h2>
            <div className="space-y-3 text-base leading-relaxed font-light text-black">
              <p>
                The spiral of red dots at the heart of 1NETWORKS symbolizes our
                mission: building dynamic, intelligent, ever-expanding networks
                that grow stronger with every connection.
              </p>
              <p>
                Each dot signifies a node of connection—growing stronger and more
                integrated as they converge. The red hue embodies energy, passion,
                and strength, reflecting our commitment to powerful, scalable
                networking solutions.
              </p>
              <p>
                At 1NETWORKS, we don't just connect devices—we connect
                possibilities. Our intelligent, scalable solutions are designed to
                power the next generation of digital infrastructure.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* === Section 2: Our Values === */}
      <section
        className="relative min-h-screen bg-no-repeat bg-cover bg-center flex items-center font-[Poppins] pt-32 flex items-center justify-center font-[Poppins] px-10 py-10"
        style={{ backgroundImage: `url(${about2Bg})` }}
      >
        <div className="w-full max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { title: "Customer First", description: "Your goals shape our solutions. We prioritize your success above all else.", icon: "🎯" },
              { title: "Integrity", description: "We build trust through transparency and ethical practices in everything we do.", icon: "🤝" },
              { title: "Innovation", description: "We challenge norms and push boundaries to create better outcomes for everyone.", icon: "💡" },
              { title: "Reliability", description: "We deliver what we promise—every time, without compromise.", icon: "⚡" },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gray-100 border-2 border-black rounded-2xl shadow-lg p-10 flex flex-col items-center text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-lg font-semibold text-black mb-2">{value.title}</h3>
                <p className="text-sm text-black leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
{/* === Section 3: What Makes Us Unique === */}
<section
  className="relative min-h-screen bg-no-repeat bg-cover bg-center flex items-center font-[Poppins] px-10 py-20 font-[Poppins] bg-no-repeat bg-cover bg-center"
  style={{ backgroundImage: `url(${require("../assets/about3.png")})` }}
>
  {/* Title without box */}
  <motion.h2
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-3xl md:text-4xl font-bold text-black mb-20 text-right"
  >
    WHAT MAKES US UNIQUE
  </motion.h2>

  {/* Values Grid */}
  <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
    {uniqueValues.map((value, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="flex items-center justify-end space-x-6 md:space-x-8"
      >
        {/* Glassmorphic Text Box */}
        <div className="max-w-xs text-right p-4 rounded-xl bg-gray-900/30 backdrop-blur-md shadow-lg border border-gray-300/30">
          <h3 className="text-lg md:text-xl font-semibold text-gray-900">
            {value.title}
          </h3>
          <p className="text-sm md:text-base leading-relaxed text-gray-700">
            {value.description}
          </p>
        </div>

        {/* Glassmorphic Icon Box */}
        <div className="w-24 h-24 flex items-center justify-center rounded-xl bg-white-500/30 backdrop-blur-md shadow-lg border-2 border-gray-900/30">
          {value.icon}
        </div>
      </motion.div>
    ))}
  </div>

</section>    </>
  );
}