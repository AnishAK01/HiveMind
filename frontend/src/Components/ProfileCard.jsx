import { FiMessageSquare, FiPhone, FiMail, FiUserPlus, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import API from "../utils/axios"
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


export default function ProfileCard({ user, onClose, inHive, toggleHive,onHiveChange }) {
  if (!user) return null;
const { user: currentUser } = useContext(AuthContext);

const handleToggleHive = async () => {
  try {
    const endpoint = inHive
      ? `/hive/remove/${user._id}`
      : `/hive/add/${user._id}`;

    await API.post(endpoint, {}, {
      headers: { Authorization: `Bearer ${currentUser.token}` }
    });

    // Notify parent to update hive state
    onHiveChange(user._id, !inHive);
  } catch (err) {
    console.error("Hive update failed", err);
  }
};

  return (
   <motion.div
  className="w-full max-w-md p-6 bg-white bg-opacity-90 backdrop-blur-md rounded-3xl shadow-2xl z-50 text-center relative"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  exit={{ opacity: 0, scale: 0.8 }}
  transition={{ duration: 0.4 }}
>
      <button onClick={onClose} className="absolute top-4 right-4 text-gray-600 hover:text-black">
        <FiX size={24} />
      </button>

      <button className="absolute top-4 left-4 text-gray-600 hover:text-black">
        <FiMessageSquare size={24} />
      </button>

      <img
        src={user.profilePic || "https://via.placeholder.com/100"}
        alt={user.name || "User"}
        className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md mb-4 mx-auto"
      />

      <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
      <p className="text-gray-500 mb-2">@{user.username}</p>
      <p className="text-sm text-blue-600 mb-4">{user.role}</p>

      <div className="flex flex-col items-center text-sm text-gray-600 space-y-2 mb-6">
        <div className="flex items-center gap-2">
          <FiPhone />
          <span>{user.phone || "N/A"}</span>
        </div>
        <div className="flex items-center gap-2">
          <FiMail />
          <span>{user.email || "N/A"}</span>
        </div>
      </div>

      <button
        onClick={handleToggleHive}
        className={`flex items-center gap-2 px-5 py-2 rounded-full transition ${
          inHive ? "bg-red-500 hover:bg-red-600" : "bg-black hover:bg-gray-800"
        } text-white`}
      >
        <FiUserPlus size={18} />
        {inHive ? "Remove from Hive" : "Add to Hive"}
      </button>
    </motion.div>
  );
}
