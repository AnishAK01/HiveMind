import React, { useState } from 'react'
import Search from './Search'
import API from '../utils/axios'
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
const SearchPeopleSection = () => {
    const [results, setResults] = useState([]);

    const handleSearch = async (query) => {
        try {
            const res = await API.get(`/users/search?q=${query}`);
            setResults(res.data);
        } catch (err) {
            console.error("Search error:", err);
        }
    };

    return (
        <div className="bg-gradient-to-br from-slate-300 to-slate-500 fixed z-10 w-1/2 pt-6 pb-10 px-6 rounded-xl shadow-2xl overflow-y-auto max-h-[80vh]">
            <Search onSearch={handleSearch} placeholder="Search by username..." />

            <ul className="mt-6 space-y-4">
                {results.map(user => (
                    <li
                        key={user._id}
                        className="bg-white rounded-xl shadow-md p-4 flex items-center gap-4 hover:scale-[1.02] transition-transform duration-300 hover:shadow-lg"
                    >
                        <img
                            src={user.profilePic }
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
                <p className="text-center text-gray-700 mt-10 text-sm italic">No users found. Try a different username.</p>
            )}
        </div>
    );
};

export default SearchPeopleSection