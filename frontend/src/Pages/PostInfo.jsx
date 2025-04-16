import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DownloadIcon from '@mui/icons-material/Download';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import Navbar from '../Components/Navbar';
import PostsDb from '../imageDB'; // Adjust the path as needed
import Masonry from "react-masonry-css";

const PostInfo = () => {
  const breakpointColumnsObj = {
    default: 4,
    1024: 3,
    768: 2,
    500: 1
};


    const [savedPosts, setSavedPosts] = useState([]);

  const [liked, setLiked] = useState(false);
  const [showHeart, setShowHeart] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const { post } = location.state || {};
  
  const handleLike = () => {
    setLiked(!liked);
    setShowHeart(true);
    setTimeout(() => setShowHeart(false), 1000);
  };
  const relatedPosts = PostsDb.filter(p => 
    p.url !== post?.url && 
    post?.tags?.some(tag => p.tags?.includes(tag))
  );

  return (
    <div className='w-11/12 m-auto h-screen mt-12 ml-24 relative'>
      <Navbar />
      {/* Go Back Button */}
      <button
        onClick={() => navigate('/')}
        className="absolute top-3 left-3 rounded-full p-2 shadow hover:bg-gray-300 transition"
      >
        <img src="/Minor project/arrow-left.png" alt="Back" className="w-5 h-5" />
      </button>

      <div className="h-5/6">
        <div className="w-2/4 m-auto flex h-full gap-0 relative border border-gray-300 rounded-2xl p-4">
          {/* Left Profile/Details Section */}
          <div className='flex flex-col justify-around h-96'>
            <div className='h-12 flex items-center justify-around w-56'>
              <img src={post?.profilePic} alt="profile" className='rounded-full h-full w-12' />
              <h3>{post?.name}</h3>
            </div>

            <div className='w-56 h-72 p-2 overflow-y-auto'>
              <p>{post?.description}</p>
            </div>

            <div className='w-56 h-12 p-2'>
              <div className='flex items-center justify-between'>
                <input type="text" className='bg-gray-200 w-3/4 rounded-2xl p-1 text-sm' placeholder='Add Text' />
                <div className='flex gap-1'>
                  <p>e</p>
                  <p>e</p>
                  <p>e</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center items-center w-96 overflow-hidden relative p-1 ">
            <img src={post?.url || '/assets/Posts/default.jpg'} alt="post" className="rounded-3xl h-full w-full mr-2" />
            {showHeart && (
              <div className="absolute text-4xl animate-heart-pop left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                ❤️
              </div>
            )}
          </div>

          {/* Action Icons */}
          <div className='h-96 flex flex-col justify-around items-center gap-2'>
            <button onClick={handleLike}>
              <img
                src={liked ? "/Minor project/love (1).png" : "/Minor project/love.png"}
                alt="like"
                className="w-8 hover:scale-110 transition-transform duration-200"
              />
            </button>
            <img src="/Minor project/direct.png" alt="send" className="w-8" />
            <img src="/Minor project/chat-bubble.png" alt="comment" className="w-8 hover:scale-110 transition-transform duration-200" />
            <button onClick={() => setBookmarked(!bookmarked)}>
              <img
                src={bookmarked ? "/Minor project/bookmark-filled.png" : "/Minor project/bookmark.png"}
                alt="bookmark"
                className="w-8 hover:scale-110 transition-transform duration-200"
              />
            </button>
            <img src="/Minor project/menu.png" alt="menu" className="w-6 hover:scale-110 transition-transform duration-200" />
          </div>
        </div>
      </div>

      {/* More Suggestions Section */}
      <div className="p-2 mt-2 text-center">More suggestions...
           <Masonry
                        breakpointCols={breakpointColumnsObj}
                        className="flex gap-4"
                        columnClassName="flex flex-col gap-4"
                    >
                       {relatedPosts.map((img, idx) => (
                          
                           
                          <div key={idx} className="relative group rounded-lg overflow-hidden shadow-lg" onClick={() => navigate('/postinfo', { state: { post: img } })}>
        
                                <img
                                    src={img.url}
                                    alt={`Post ${idx}`}
                                    className="w-full h-auto rounded-md"
                                />
        
                                {/* Hover overlay with buttons */}
                                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-evenly opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <button className="p-2 bg-red-600 text-white rounded-full shadow-md hover:bg-red-900">
                                        <a href={img.url} download> <DownloadIcon /></a>
                                    </button>
        
                                    <button
                                        onClick={() => toggleSaved(idx)}
                                        className="p-2 bg-red-600 text-white rounded-full shadow-md hover:bg-red-900"
                                    >
                                        {savedPosts.includes(idx) ? <TurnedInIcon /> : <TurnedInNotIcon />}
                                    </button>
                                </div>
                            </div> 
                        ))}
                    </Masonry>
      </div>
    

      {/* Heart Animation */}
      <style>{`
        @keyframes heart-pop {
          0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.5);
          }
          50% {
            opacity: 1;
            transform: translate(-50%, -80%) scale(1.2);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -120%) scale(0.8);
          }
        }
        .animate-heart-pop {
          animation: heart-pop 1s ease-out;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
};

export default PostInfo;