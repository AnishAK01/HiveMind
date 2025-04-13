import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Heart, Eye, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '../Components/Navbar';

const DribbblePostDetail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state)
    return <div className="text-center text-gray-500 py-20">No post data found.</div>;

  const { image, image2, image3, team, teamType, likes, views } = state;
  console.log("Post state:", state);

  return (
    <div className="min-h-screen px-4 md:px-10 py-8 bg-gradient-to-br  ml-16">
      {/* Back button */}<Navbar/>
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-sm text-blue-600 mb-6 hover:underline "
      >
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Feed
      </button>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-xl p-6 md:p-10">
        {/* Gallery */}
        <div className="flex space-x-4 overflow-x-auto snap-x snap-mandatory">
  {[image, image2, image3].map((img, idx) => (
    <img key={idx} src={img} className="w-[300px] snap-center rounded-xl" alt="" />
  ))}
</div>


        {/* Post Info */}
        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-gray-800">{team}</h2>
          <p className="text-sm text-blue-600 font-medium">{teamType}</p>

          <div className="flex gap-6 mt-2 text-gray-700 text-sm">
            <div className="flex items-center">
              <Heart className="w-4 h-4 mr-1 text-red-500" /> {likes}
            </div>
            <div className="flex items-center">
              <Eye className="w-4 h-4 mr-1 text-gray-500" /> {views}
            </div>
          </div>

          <p className="mt-4 text-gray-600 leading-relaxed">
            This design explores a unique approach to modern e-commerce UI, focusing on elegance and conversion. It uses smooth typography, rich visuals, and a neutral palette to guide user attention.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow">
            Appreciate
          </button>
          <button className="border border-gray-300 px-5 py-2 rounded-lg text-gray-700 hover:bg-gray-100">
            Follow Team
          </button>
        </div>
      </div>
    </div>
  );
};

export default DribbblePostDetail;
