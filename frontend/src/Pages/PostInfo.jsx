import React, { useEffect, useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DownloadIcon from '@mui/icons-material/Download';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import Masonry from "react-masonry-css";
import Navbar from '../Components/Navbar';
import API from '../utils/axios';
import { AuthContext } from '../context/AuthContext';

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
  const [relatedPosts, setRelatedPosts] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();
  const { post } = location.state || {};
  const { user } = useContext(AuthContext);

  const handleLike = async () => {
    setLiked(!liked);
    setShowHeart(true);
    setTimeout(() => setShowHeart(false), 1000);
    try {
      await API.put(`/posts/like/${post._id}`, {}, {
        headers: { Authorization: `Bearer ${user.token}` }
      });
    } catch (err) {
      console.error("Error liking post", err);
    }
  };

  const toggleSaved = (idx) => {
    if (savedPosts.includes(idx)) {
      setSavedPosts(savedPosts.filter(id => id !== idx));
    } else {
      setSavedPosts([...savedPosts, idx]);
    }
  };

  useEffect(() => {
    const fetchRelated = async () => {
      if (!post) return;
      try {
        const res = await API.get(`/posts/category/${post.category}`);
        const filtered = res.data.filter(p =>
          p._id !== post._id &&
          post?.tags?.some(tag => p.tags?.includes(tag))
        );
        setRelatedPosts(filtered);
      } catch (err) {
        console.error("Failed to fetch related posts:", err);
      }
    };
    fetchRelated();
  }, [post]);

  useEffect(() => {
    if (post && user) {
      setLiked(post?.likes?.includes(user._id));
      setBookmarked(post?.bookmarks?.includes(user._id));
    }
  }, [post, user]);

  return (
    <div className="w-full px-2 sm:px-4 md:w-11/12 mx-auto mt-16 relative">
      <Navbar />

      <button
        onClick={() => navigate('/')}
        className="absolute top-4 left-6 rounded-full z-20 p-2 shadow-md hover:bg-gray-200 transition"
      >
        <img src="/Minor project/arrow-left.png" alt="Back" className="w-5 h-5" />
      </button>

      <div className="flex flex-col lg:flex-row justify-center mt-6 md:mt-10">
        <div className="flex flex-col gap-4 lg:flex-row rounded-2xl p-4 md:p-6 w-full bg-white bg-opacity-70 backdrop-blur-md shadow-xl">

          {/* Left Info */}
          <div className="flex flex-col justify-around w-full lg:w-1/3 gap-6 p-2">
            <div className="flex items-center gap-4">
              <img
  src={
    post?.createdBy?.profilePic ||
    `https://i.pravatar.cc/150?u=${post?.createdBy?._id}`
  }
  alt="profile"
  className="rounded-full h-12 w-12 object-cover"
/>
<h3 className="text-base sm:text-lg font-semibold">
  {post?.createdBy?.name || "Unknown"}
</h3> 
            
            </div>
<h4 className="text-base sm:text-lg font-semibold">{post?.name}</h4>
            <div className="overflow-y-auto max-h-40">
                
              <p className="text-gray-700 text-sm leading-relaxed">{post?.description}</p>
            </div>

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

          {/* Image Section */}
          <div className="relative w-full lg:w-2/3 flex justify-center items-center p-2 rounded-2xl border">
            <img
              src={post?.url || '/assets/Posts/default.jpg'}
              alt="post"
              className="rounded-xl w-full max-h-[300px] sm:max-h-[400px] md:max-h-[500px] object-contain"
            />

            {showHeart && (
              <div className="absolute text-5xl animate-heart-pop text-red-500">
                ❤️
              </div>
            )}

            {/* Icons */}
            <div className="absolute top-1/2 transform -translate-y-1/2 right-0 flex flex-col items-center gap-4 pr-3 sm:pr-5">
              <button onClick={handleLike}>
                <img
                  src={liked ? "/Minor project/love (1).png" : "/Minor project/love.png"}
                  alt="like"
                  className="w-7 sm:w-8 hover:scale-110 transition-transform duration-200"
                />
              </button>
              <img src="/Minor project/direct.png" alt="send" className="w-7 sm:w-8" />
              <img src="/Minor project/chat-bubble.png" alt="comment" className="w-7 sm:w-8 hover:scale-110 transition-transform duration-200" />
              <button onClick={async () => {
                setBookmarked(!bookmarked);
                try {
                  await API.put(`/posts/bookmark/${post._id}`, {}, {
                    headers: { Authorization: `Bearer ${user.token}` }
                  });
                } catch (err) {
                  console.error("Error bookmarking post", err);
                }
              }}>
                <img
                  src={bookmarked ? "/Minor project/bookmark-filled.png" : "/Minor project/bookmark.png"}
                  alt="bookmark"
                  className="w-7 sm:w-8 hover:scale-110 transition-transform duration-200"
                />
              </button>
              <img src="/Minor project/menu.png" alt="menu" className="w-5 sm:w-6 hover:scale-110 transition-transform duration-200" />
            </div>
          </div>
        </div>
      </div>

      {/* Related Section */}
      <div className="px-2 sm:px-4 py-6 mt-10">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-center text-gray-800">
          More Suggestions For You
        </h2>

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
                src={`http://localhost:5000${img.url}`}
                alt={`Post ${idx}`}
                className="w-full h-auto rounded-lg object-cover max-h-60"
              />

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

      {/* Heart Animation */}
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
