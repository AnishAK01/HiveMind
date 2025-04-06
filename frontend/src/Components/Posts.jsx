import React, { useState } from 'react';
import Masonry from "react-masonry-css";
import DownloadIcon from '@mui/icons-material/Download';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import TurnedInIcon from '@mui/icons-material/TurnedIn';

const Posts = ({ PostsDb }) => {
    const breakpointColumnsObj = {
        default: 4,
        1024: 3,
        768: 2,
        500: 1
    };

    // Track saved items by index
    const [savedPosts, setSavedPosts] = useState([]);

    const toggleSaved = (idx) => {
        if (savedPosts.includes(idx)) {
            setSavedPosts(savedPosts.filter(i => i !== idx));
        } else {
            setSavedPosts([...savedPosts, idx]);
        }
    };

    return (
        <div className="p-4">
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="flex gap-4"
                columnClassName="flex flex-col gap-4"
            >
                {PostsDb.map((img, idx) => (
                    <div key={idx} className="relative group rounded-lg overflow-hidden shadow-lg">
                        <img
                            src={img.url}
                            alt={`Post ${idx}`}
                            className="w-full h-auto rounded-md"
                        />

                        {/* Hover overlay with buttons */}
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-evenly opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <button className="p-2 bg-white text-black rounded-full shadow-md hover:bg-gray-200">
                                 <a href={img.url} download> <DownloadIcon /></a>
                            </button>
                           
                            <button
                                onClick={() => toggleSaved(idx)}
                                className="p-2 bg-white text-black rounded-full shadow-md hover:bg-gray-200"
                            >
                                {savedPosts.includes(idx) ? <TurnedInIcon /> : <TurnedInNotIcon />}
                            </button>
                        </div>
                    </div>
                ))}
            </Masonry>
        </div>
    );
};

export default Posts;
