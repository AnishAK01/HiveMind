import React from 'react';
import { useNavigate } from 'react-router-dom';

const DribbbleCard = ({ image, image2, image3, team, teamType, likes, views }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/dribble/post', {
      state: {
        image,
        image2,
        image3,
        team,
        teamType,
        likes,
        views,
      },
    });
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white rounded-xl shadow-md hover:shadow-lg transition cursor-pointer"
    >
      <img
        src={image}
        alt="Main UI"
        className="w-full h-48 object-cover rounded-t-xl"
      />
      <div className="p-3">
        <h3 className="text-sm font-semibold">{team}</h3>
        <p className="text-xs text-gray-500">{teamType}</p>
        <p className="text-xs text-gray-600 mt-1">
          {likes} ❤️ · {views} 👁️
        </p>
      </div>
    </div>
  );
};

export default DribbbleCard;
