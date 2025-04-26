import React, { useEffect, useRef, useState } from "react";
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import Search from '../Components/Search'
import NotificationsIcon from '@mui/icons-material/Notifications';
import PostsDb from "../Dbs/imageDB";
import ImageSlider from "../Components/PintSlider";
import { Link, Links } from "react-router-dom";
import AboutUs from "../Components/AboutUs";


const Home = () => {
    return (
        <div className="flex min-h-screen w-auto ml-16">
            {/* Sidebar Navbar */}
            <Navbar />

            {/* Main Content */}
            <div className="flex-1 flex flex-col border-red-700 border-solid border-7 p-2">
                <span className='w-11/12 flex fixed items-center justify-evenly'>
                    <Search />
                    <NotificationsIcon />
                </span>

                <Banner />

                <div className="flex-col py-4">
                    <div className="flex justify-center gap-4 border-2 border-black rounded-xl m-4 p-4 bg-white bg-opacity-50 backdrop-blur-md shadow-md">
                        <button className="px-6 py-2 rounded-full font-semibold bg-black text-white hover:bg-opacity-30 hover:backdrop-blur-lg hover:text-black transition duration-300">
                            Pins
                        </button>
                        <Link to="/collabs"><button className="px-6 py-2 rounded-full font-semibold bg-black text-white hover:bg-opacity-30 hover:backdrop-blur-lg hover:text-black transition duration-300">
                            Collabs
                        </button>
                        </Link>
                        <button className="px-6 py-2 rounded-full font-semibold bg-black text-white hover:bg-opacity-30 hover:backdrop-blur-lg hover:text-black transition duration-300">
                            SOON AI
                        </button>
                    </div>


                    {/* This is the working Carousel now */}
                    <div className=" md:grid-cols-2 gap-8 p-6 ">
                        {/* Pictures Section */}
                        <div className="carouselpint flex flex-col items-center bg-white bg-opacity-70 backdrop-blur-md rounded-2xl p-2 shadow-lg mb-3">
                            <h1 className="text-2xl font-bold mb-4 text-gray-800">Pictures</h1>
                            <ImageSlider images={PostsDb} />
                            <Link to="/pinttab">
                              <button className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition font-semibold m-2">
                                    More Posts
                                </button>
                                                            </Link> 
                        </div>

                        {/* User Interfaces Section */}
                        <div className="carouseldrib flex flex-col items-center bg-white bg-opacity-70 backdrop-blur-md rounded-2xl p-2 shadow-lg">
                            <h1 className="text-2xl font-bold mb-4 text-gray-800">User Interfaces</h1>
                            {/* Another carousel can come here */}
                            <ImageSlider images={PostsDb} />
                            <Link to="/pinttab">
                             <button className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition font-semibold m-2">
                                    More Posts
                                </button>

                            </Link> 
                        </div>
                    </div>

                </div>
                <AboutUs/>
            </div>
        </div>
    );
};

export default Home;
