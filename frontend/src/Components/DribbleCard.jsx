import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Eye } from 'lucide-react';

const DribbbleCard = ({ image, team, teamType, likes, views }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/dribble/post', {
      state: { image, team, teamType, likes, views },
    });
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 bg-white"
    >
      <img src={image} alt="UI Design" className="w-full h-60 object-cover" />
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex flex-col">
          <span className="text-sm font-semibold">{team}</span>
          {teamType && <span className="text-xs text-gray-500">{teamType}</span>}
        </div>
        <div className="flex items-center space-x-4 text-sm text-gray-600">
          <div className="flex items-center">
            <Heart className="w-4 h-4 mr-1" /> {likes}
          </div>
          <div className="flex items-center">
            <Eye className="w-4 h-4 mr-1" /> {views}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DribbbleCard;
