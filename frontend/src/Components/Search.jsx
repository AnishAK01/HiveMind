import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
const Search = () => {
    return (
        <div className=' border-solid border w-full h-10 my-3 items-center flex rounded-xl items-centre justify-center text-white border-gray-500  px-4 '>
          <SearchIcon/>
          <input type="text " className='   w-full m-2 text-blue-300 bg-transparent outline-none' placeholder='Search For Image' />
        </div>
    );
};

export default Search;