import React from 'react';
import RAWUIImage from '../assets/RAWUI.jpg';
import PostsDb from '../imageDB';
import Masonry from "react-masonry-css";

const Posts = ({PostsDb}) => {
      // Breakpoints for responsiveness
      const breakpointColumnsObj = {
        default: 4, // 4 columns for large screens
        1024: 3,    // 3 columns for medium screens
        768: 2,     // 2 columns for tablets
        500: 1      // 1 column for mobile screens
    };
    return (
        // <div className='h-auto  border-solid m-3 p-2 border-green-500 text-yellow-200 overflow-hidden border'>
        // <div>
        //     {
        //        PostsDb.map((img,idx)=>{
        //       return  <img key={idx} src={img.url}/>
        //         })
        //     }
        // </div>
           

        // </div>
        <div className="p-4">
            
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="flex gap-4"
            columnClassName="flex flex-col gap-4"
        >
            {PostsDb.map((img, idx) => (
                <div key={idx} className="rounded-lg overflow-hidden shadow-lg">
                    <img src={img.url} alt={`Post ${idx}`} className="w-full h-auto rounded-md" />
                </div>
            ))}
        </Masonry>
    </div>
    );
};

export default Posts;
