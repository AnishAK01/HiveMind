import React from 'react';
import RAWUIImage from '../assets/RAWUI.jpg'; // Correct way to import an image

const Posts = () => {
    return (
        <div className='h-auto border-2 border-solid m-3 p-2 border-green-500 text-yellow-200 overflow-hidden'>
            Posts
            <div className="ps1 border-2 border-solid border-blue-500 m-1 p-1 flex flex-wrap justify-around">
                <div className="post border-2 border-solid border-red-500 h-72 w-1/4 m-1">
                    <img src={RAWUIImage} alt="img" className="w-auto h-full m-auto" />
                </div>
                <div className="post border-2 border-solid border-red-500 h-72 w-1/4 m-1 flex items-center justify-center"><img src="./public/assets/RAWUI.jpg" alt="" className="w-auto h-full m-auto " /></div>
                <div className="post border-2 border-solid border-red-500 h-72 w-1/4 m-1 flex items-center justify-center"><img src="./public/assets/RAWUI.jpg" alt="" className="w-auto h-full m-auto " /></div>
                <div className="post border-2 border-solid border-red-500 h-72 w-1/4 m-1 flex items-center justify-center"><img src="./public/assets/RAWUI.jpg" alt="" className="w-auto h-full m-auto " /></div>
            </div>
            <div className="ps2"></div>
            <div className="ps3"></div>
            <div className="ps4"></div>
        </div>
    );
};

export default Posts;
