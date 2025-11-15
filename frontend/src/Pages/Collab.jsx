import React, { useState, useRef, useEffect, useContext } from 'react';
import Navbar from '../Components/Navbar';
import ProfileCard from '../Components/ProfileCard';
import SearchIcon from '@mui/icons-material/Search';
import SearchPeopleSection from '../Components/SearchPeopleSection';
import { motion, AnimatePresence } from 'framer-motion';
import API from "../utils/axios";
import { AuthContext } from '../context/AuthContext';

const Collab = () => {
  const { user } = useContext(AuthContext);
  const [toggleSearch, setToggleSearch] = useState(false);
  const [hiveUsers, setHiveUsers] = useState([]);
  const [hiveIds, setHiveIds] = useState([]);
  const searchRef = useRef(null);

  const handleSearchToggle = () => {
    setToggleSearch(prev => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setToggleSearch(false);
      }
    };

    if (toggleSearch) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggleSearch]);

  useEffect(() => {
    const fetchHive = async () => {
      try {
        const res = await API.get('/hive');
        setHiveUsers(res.data);
        setHiveIds(res.data.map(u => u._id));
      } catch (err) {
        console.error("Failed to fetch hive", err);
      }
    };
    if (user) fetchHive();
  }, [user]);
  const handleHiveChange = (id, added, profile) => {
  if (added) {
    setHiveUsers(prev => [...prev, profile]);
    setHiveIds(prev => [...prev, id]);
  } else {
    setHiveUsers(prev => prev.filter(u => u._id !== id));
    setHiveIds(prev => prev.filter(uid => uid !== id));
  }
};

  return (
    <div className="flex min-h-screen w-auto ml-16 relative">
      <Navbar />

      <AnimatePresence>
        {toggleSearch && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-0 left-0 w-full h-full z-30 bg-white/80 backdrop-blur-md flex justify-center items-start pt-20"
          >
            <div ref={searchRef} className="relative z-40 bg-white p-4 rounded-xl shadow-lg flex justify-center">
              <button
                onClick={handleSearchToggle}
                className="absolute top-0 right-2 px-3 py-1 bg-black text-white rounded-full"
              >
                X
              </button>
              <SearchPeopleSection onHiveChange={handleHiveChange} hiveIds={hiveIds} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`flex-1 flex flex-col border border-gray-300 rounded-2xl m-6 p-6 shadow-md transition duration-300 ${toggleSearch ? 'blur-sm pointer-events-none select-none' : ''}`}>
        <div className="flex justify-between items-center mb-4">
          {!toggleSearch && (
            <button
              className="border bg-black text-white p-2 rounded-full flex items-center gap-2 z-10"
              onClick={handleSearchToggle}
            >
              <SearchIcon /> Search
            </button>
          )}
          <h1 className="text-3xl font-bold text-gray-800 text-center flex-grow">
            🤝 People in your Hive!!!!
          </h1>
        </div>

        {/* Hive Users */}
        <div className="flex flex-wrap justify-center gap-10 p-4">
          {hiveUsers.map((profile) => (
            <ProfileCard
              key={profile._id}
              user={profile}
              inHive={true}
              onHiveChange={(id, added) => {
                if (!added) {
                  setHiveUsers(prev => prev.filter(u => u._id !== id));
                  setHiveIds(prev => prev.filter(uid => uid !== id));
                }
              }}
            />
          ))}
        </div>

        <div className="h-px bg-gray-300 my-8 mx-auto w-4/5"></div>

        <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
          More People to Invite............
        </h2>

        {/* Static Profiles or Suggestions */}
        <div className="flex flex-wrap justify-center gap-10 p-4">
          {/* {profiles.map((profile) => (
            <ProfileCard key={profile.id} user={profile} />
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default Collab;
