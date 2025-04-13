import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
const Search = () => {
    return (
        <div className=' border-solid border-b-2 w-4/5 h-10 items-center flex rounded-xl items-centre justify-center text-black bg-white  px-4 m-auto z-20'>
          <SearchIcon/>
          <input type="text " className='   w-full m-2 text-blue-300 bg-transparent outline-none' placeholder='Search For Image' />
        </div>
    );
};                  

export default Search;