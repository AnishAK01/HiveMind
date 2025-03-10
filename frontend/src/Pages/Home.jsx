import React from 'react';
import Navbar from '../Components/Navbar';
import Search from '../Components/Search';
import Banner from '../Components/Banner';
import Posts from '../Components/Posts';

const Home = () => {
    return (
        <div className="flex bg-black min-h-screen w-screen overflow-hidden justify-center ">
            <Navbar />
            <div className="flex-1 w-full flex flex-col  border-red-400 border-solid border-3 px-4 ">
              
                <Search />
                <Banner />
                <Posts/>
            </div>
        </div>
    );
};



export default Home;