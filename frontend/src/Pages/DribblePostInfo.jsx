import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Heart, Eye, ArrowLeft } from 'lucide-react';

const DribbblePostDetail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) return <div className="text-center text-gray-500">No post data found.</div>;

  const { image, team, teamType, likes, views } = state;

  return (
    <div className="min-h-screen px-6 py-8 bg-white">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-sm text-blue-600 mb-4"
      >
        <ArrowLeft className="w-4 h-4 mr-2" /> Back
      </button>

      <div className="max-w-5xl mx-auto">
        <img src={image} alt="UI Detail" className="w-full rounded-xl shadow-lg" />

        <div className="mt-6">
          <h2 className="text-xl font-bold">{team}</h2>
          <p className="text-gray-500">{teamType}</p>

          <div className="flex gap-6 mt-4 text-gray-700 text-sm">
            <div className="flex items-center">
              <Heart className="w-4 h-4 mr-1" /> {likes}
            </div>
            <div className="flex items-center">
              <Eye className="w-4 h-4 mr-1" /> {views}
            </div>
          </div>

          {/* Additional Description */}
          <p className="mt-6 text-gray-600 leading-relaxed">
            This design explores a unique approach to modern e-commerce UI, focusing on elegance and conversion. It uses smooth typography, rich visuals, and a neutral palette to guide user attention.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DribbblePostDetail;
