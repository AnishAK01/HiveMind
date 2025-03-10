import React from 'react';
import RAWUIImage from '../assets/RAWUI.jpg';



const Posts = () => {
    return (
        <div className='h-auto  border-solid m-3 p-2 border-green-500 text-yellow-200 overflow-hidden'>
            Posts
            <div className="ps1  border-solid border-blue-500 m-1 p-1 flex justify-around my-3 flex-wrap">
               

                <div className="post border-2 border-solid border-red-500 h-72 w-auto m-1">
                    <img src={RAWUIImage} alt="img" className="w-auto h-full m-auto" />
                </div>
                <div className="post border-2 border-solid border-red-500 h-72 w-auto m-1 flex items-center justify-center"><img src="./public/assets/solo1.jpg" alt="" className="w-auto h-full m-auto " /></div>
                <div className="post border-2 border-solid border-red-500 h-72 w-auto m-1 flex items-center justify-center"><img src="./public/assets/81993.jpg" alt="" className="w-auto h-full m-auto " /></div>
                <div className="post border-2 border-solid border-red-500 h-72 w-auto m-1 flex items-center justify-center"><img src="./public/assets/pic2.png" alt="" className="w-auto h-full m-auto " /></div>
                <div className="post border-2 border-solid border-red-500 h-72 w-auto m-1">
                    <img src="./public/assets/Unohana.jpg"alt="img" className="w-auto h-full m-auto" />
                </div>
                <div className="post border-2 border-solid border-red-500 h-72 w-auto m-1 flex items-center justify-center"><img src="./public/assets/solo1.jpg" alt="" className="w-auto h-full m-auto " /></div>
                <div className="post border-2 border-solid border-red-500 h-72 w-auto m-1 flex items-center justify-center"><img src="./public/assets/RAWUI.jpg" alt="" className="w-auto h-full m-auto " /></div>
                <div className="post border-2 border-solid border-red-500 h-72 w-auto m-1 flex items-center justify-center"><img src="./public/assets/pic2.png" alt="" className="w-auto h-full m-auto " /></div>
                <div className="post border-2 border-solid border-red-500 h-72 w-auto m-1">
                    <img src="./public/assets/Unohana.jpg" alt="img" className="w-auto h-full m-auto" />
                </div>
                <div className="post border-2 border-solid border-red-500 h-72 w-auto m-1 flex items-center justify-center"><img src="./public/assets/solo1.jpg" alt="" className="w-auto h-full m-auto " /></div>
                <div className="post border-2 border-solid border-red-500 h-72 w-auto m-1 flex items-center justify-center"><img src="./public/assets/81993.jpg" alt="" className="w-auto h-full m-auto " /></div>
                <div className="post border-2 border-solid border-red-500 h-72 w-auto m-1 flex items-center justify-center"><img src="./public/assets/pic2.png" alt="" className="w-auto h-full m-auto " /></div>
            </div>

        </div>
    );
};

export default Posts;
