import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <motion.div
      className="max-w-5xl mx-auto my-12 p-8 rounded-3xl bg-white bg-opacity-70 backdrop-blur-lg shadow-xl flex flex-col items-center text-center"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
        About Us
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-3xl">
        Welcome to our creative hub! 🚀 We bring together designers, developers, and dreamers to share,
        inspire, and collaborate. Whether it's stunning pictures, futuristic UIs, or AI-driven creativity —
        we are building a community where imagination meets innovation.
      </p>
      <p className="text-md md:text-lg text-gray-500 max-w-2xl">
        Our mission is to empower creators by showcasing ideas, fostering collaborations, and embracing 
        the future of design and technology. Join us on this incredible journey! 🌟
      </p>
    </motion.div>
  );
}
