import React, { useState, useEffect, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Heart, Eye, ArrowLeft } from 'lucide-react';
import Navbar from '../Components/Navbar';
import API from '../utils/axios';
import { AuthContext } from '../context/AuthContext';

const DribbblePostDetail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const post = state; 

  useEffect(() => {
    if (post && user) {
      setLiked(post?.likes?.includes(user._id));
      setBookmarked(post?.bookmarks?.includes(user._id));
    }
  }, [post, user]);

  const handleLike = async () => {
    setLiked(!liked);
    try {
      await API.put(`/posts/like/${post._id}`, {}, {
        headers: { Authorization: `Bearer ${user.token}` }
      });
    } catch (err) {
      console.error("Like failed", err);
    }
  };

  const handleBookmark = async () => {
    setBookmarked(!bookmarked);
    try {
      await API.put(`/posts/bookmark/${post._id}`, {}, {
        headers: { Authorization: `Bearer ${user.token}` }
      });
    } catch (err) {
      console.error("Bookmark failed", err);
    }
  };

  if (!post)
    return <div className="text-center text-gray-500 py-20">No post data found.</div>;

  const imageList = [post.url, post.image2, post.image3].filter(Boolean);

  return (
    <div className="min-h-screen px-4 md:px-10 py-8 bg-gradient-to-br ml-16">
      <Navbar />

      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-sm text-blue-600 mb-6 hover:underline"
      >
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Feed
      </button>

      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-xl p-6 md:p-10">
        <div className="flex space-x-4 overflow-x-auto snap-x snap-mandatory">
          {imageList.map((img, idx) => (
            <img
              key={idx}
              src={img}
              className="w-[300px] snap-center rounded-xl object-cover"
              alt={`Design ${idx}`}
            />
          ))}
        </div>

        <div className="space-y-3 mt-6">
          <h2 className="text-2xl font-bold text-gray-800">{post.team}</h2>
          <p className="text-sm text-blue-600 font-medium">{post.teamType}</p>

          <div className="flex gap-6 mt-2 text-gray-700 text-sm">
            <button onClick={handleLike} className="flex items-center gap-1">
              <Heart className="w-4 h-4 text-red-500" />
              {liked ? 'Liked' : 'Like'} ({post.likes?.length || 0})
            </button>

            <div className="flex items-center gap-1">
              <Eye className="w-4 h-4 text-gray-500" /> {post.views || 0} views
            </div>
          </div>

          <p className="mt-4 text-gray-600 leading-relaxed">
            {post.description || "This is a high-quality design post with multiple images and team details."}
          </p>

          <div className="mt-6 flex gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow">
              Chat
            </button>
            <button
              onClick={handleBookmark}
              className="border border-gray-300 px-5 py-2 rounded-lg text-gray-700 hover:bg-gray-100"
            >
              {bookmarked ? 'Bookmarked' : 'Bookmark'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DribbblePostDetail;
