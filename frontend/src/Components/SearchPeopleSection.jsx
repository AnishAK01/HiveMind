import React, { useState } from 'react';
import Search from './Search';
import API from '../utils/axios';
import ProfileCard from './ProfileCard';

const SearchPeopleSection = () => {
  const [results, setResults] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [hive, setHive] = useState([]); // local hive state

  const handleSearch = async (query) => {
    try {
      const res = await API.get(`/users/search?q=${query}`);
      setResults(res.data);
    } catch (err) {
      console.error("Search error:", err);
    }
  };

  const handleSelectUser = (user) => {
    setSelectedUser(user);
  };

  const handleCloseCard = () => {
    setSelectedUser(null);
  };

  // local toggle for hive membership
  const toggleHive = (id, added) => {
    if (added) {
      setHive([...hive, id]);
    } else {
      setHive(hive.filter(uid => uid !== id));
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-300 to-slate-500 fixed z-10 w-1/2 pt-6 pb-10 px-6 rounded-xl shadow-2xl overflow-y-auto max-h-[80vh]">
      <Search onSearch={handleSearch} placeholder="Search by username..." />

      <ul className="mt-6 space-y-4">
        {results.map(user => (
          <li
            key={user._id}
            className="bg-white rounded-xl shadow-md p-4 flex items-center gap-4 hover:scale-[1.02] transition-transform duration-300 hover:shadow-lg cursor-pointer"
            onClick={() => handleSelectUser(user)}
          >
            <img
              src={user.profilePic}
              alt={user.username}
              className="w-16 h-16 rounded-full object-cover border-2 border-slate-300"
            />
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold text-gray-800">{user.name}</h2>
              <h3 className="text-sm text-gray-500">@{user.username}</h3>
              <span className="text-xs mt-1 px-2 py-1 bg-blue-100 text-blue-700 rounded-full w-fit">
                {user.role}
              </span>
            </div>
          </li>
        ))}
      </ul>

      {results.length === 0 && (
        <p className="text-center text-gray-700 mt-10 text-sm italic">
          No users found. Try a different username.
        </p>
      )}

      {selectedUser && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center px-4">
          <ProfileCard
            user={selectedUser}
            onClose={handleCloseCard}
            inHive={hive.includes(selectedUser._id)}
            onHiveChange={toggleHive} // ✅ use local toggle
          />
        </div>
      )}
    </div>
  );
};

export default SearchPeopleSection;
