import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DownloadIcon from '@mui/icons-material/Download';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import Navbar from '../Components/Navbar';
import PostsDb from '../Dbs/imageDB';
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

  const toggleSaved = (idx) => {
    if (savedPosts.includes(idx)) {
      setSavedPosts(savedPosts.filter(id => id !== idx));
    } else {
      setSavedPosts([...savedPosts, idx]);
    }
  };

  const relatedPosts = PostsDb.filter(p =>
    p.url !== post?.url &&
    post?.tags?.some(tag => p.tags?.includes(tag))
  );

  return (
    <div className="w-full md:w-11/12 m-auto mt-16 relative">
      <Navbar />

      {/* Go Back Button */}
      <button
        onClick={() => navigate('/')}
        className="absolute top-4 left-6 rounded-full p-2 shadow-md hover:bg-gray-200 transition"
      >
        <img src="/Minor project/arrow-left.png" alt="Back" className="w-5 h-5" />
      </button>

      {/* Post Main Section */}
      <div className="flex flex-col md:flex-row justify-center mt-8 mx-4 md:mx-0">
        <div className="flex flex-col md:flex-row   rounded-3xl p-6 w-full md:max-w-5xl bg-white bg-opacity-70 backdrop-blur-md shadow-xl relative">

          {/* Left Info Section */}
          <div className="flex flex-col justify-around w-full md:w-1/3 gap-6 p-4">
            {/* Profile Info */}
            <div className="flex items-center gap-4">
              <img src={post?.profilePic} alt="profile" className="rounded-full h-12 w-12 object-cover" />
              <h3 className="text-lg font-semibold">{post?.name}</h3>
            </div>

            {/* Description */}
            <div className="overflow-y-auto max-h-48">
              <p className="text-gray-700 text-sm leading-relaxed">{post?.description}</p>
            </div>

            {/* Comment Input */}
            <div className="flex items-center justify-between">
              <input
                type="text"
                placeholder="Add a comment..."
                className="bg-gray-200 rounded-full py-2 px-4 w-4/5 text-sm focus:outline-none"
              />
              <div className="flex gap-2 text-gray-500 text-xs">
                <p>💬</p>
                <p>📤</p>
                <p>✨</p>
              </div>
            </div>
          </div>

          {/* Image Preview Section */}
          <div className="relative w-full md:w-2/4 flex justify-center items-center p-2 rounded-2xl border-2">
            <img
              src={post?.url || '/assets/Posts/default.jpg'}
              alt="post"
              className="rounded-2xl object-contain w-auto max-h-[500px] mx-auto "
            />

            {showHeart && (
              <div className="absolute text-5xl animate-heart-pop text-red-500">
                ❤️
              </div>
            )}

            {/* Action Icons */}
            <div className="absolute top-1/2 transform -translate-y-1/2 right-0 flex flex-col items-center gap-4">
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
      </div>

      {/* More Suggestions Section */}
      <div className="p-6 mt-10">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">More Suggestions For You</h2>

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex gap-4"
          columnClassName="flex flex-col gap-4"
        >
          {relatedPosts.map((img, idx) => (
            <div
              key={idx}
              className="relative group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => navigate('/postinfo', { state: { post: img } })}
            >
              <img
                src={img.url}
                alt={`Post ${idx}`}
                className="w-full h-auto rounded-lg"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-evenly opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="p-2 bg-red-600 text-white rounded-full hover:bg-red-800 transition">
                  <a href={img.url} download>
                    <DownloadIcon />
                  </a>
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleSaved(idx);
                  }}
                  className="p-2 bg-red-600 text-white rounded-full hover:bg-red-800 transition"
                >
                  {savedPosts.includes(idx) ? <TurnedInIcon /> : <TurnedInNotIcon />}
                </button>
              </div>
            </div>
          ))}
        </Masonry>
      </div>

      {/* Heart Animation Keyframes */}
      <style>{`
        @keyframes heart-pop {
          0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.5);
          }
          50% {
            opacity: 1;
            transform: translate(-50%, -80%) scale(1.3);
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
