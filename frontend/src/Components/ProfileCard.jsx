import { FiMessageSquare, FiPhone, FiMail, FiUserPlus } from "react-icons/fi";
import { motion } from "framer-motion";

export default function ProfileCard({ profile }) {
  return (
    <motion.div
      className="relative w-80 p-6 bg-white bg-opacity-70 backdrop-blur-md rounded-3xl shadow-lg flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <button className="absolute top-4 right-4 text-gray-700 hover:text-black">
        <FiMessageSquare size={24} />
      </button>

      <img
        src={profile.profilePic}
        alt={profile.name}
        className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md mb-4"
      />

      <h2 className="text-2xl font-bold text-gray-800">{profile.name}</h2>

      <p className="text-gray-500 mb-4">{profile.occupation}</p>

      <div className="flex flex-col items-center text-sm text-gray-600 space-y-2 mb-4">
        <div className="flex items-center gap-2">
          <FiPhone />
          <span>{profile.phone}</span>
        </div>
        <div className="flex items-center gap-2">
          <FiMail />
          <span>{profile.email}</span>
        </div>
      </div>

      <button className="flex items-center gap-2 px-5 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
        <FiUserPlus size={18} />
        Follow
      </button>
    </motion.div>
  );
}
