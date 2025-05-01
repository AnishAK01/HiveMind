import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

const Search = ({ onSearch }) => {
  const [input, setInput] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onSearch(input); // Submit the input when Enter is pressed
    }
  };

  return (
    <div className="border-solid border-b-2 w-4/5 h-10 items-center flex rounded-xl justify-center text-black bg-white px-4 m-auto z-20">
      <SearchIcon />
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)} // Update input on change
        onKeyDown={handleKeyDown} // Handle Enter key
        className="w-full m-2  bg-transparent outline-none"
        placeholder="Search For Image"
      />
    </div>
  );
};

export default Search;
