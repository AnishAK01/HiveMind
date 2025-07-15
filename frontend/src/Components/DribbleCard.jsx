import React from 'react';
import { useNavigate } from 'react-router-dom';

const DribbbleCard = ({ _id, url, image2, image3, name, description, likes = [], views = 0, teamType = "", ...rest }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/dribble/post', {
      state: {
        _id,
        url,
        image2,
        image3,
        name,
        description,
        likes,
        views,
        teamType,
        ...rest
      },
    });
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white rounded-xl shadow-md hover:shadow-lg transition cursor-pointer"
    >
      <img
        src={`http://localhost:5000${url}`}
        alt="Main UI"
        className="w-full h-48 object-cover rounded-t-xl"
      />
      <div className="p-3">
        <h3 className="text-sm font-semibold">{name}</h3>
        <p className="text-xs text-gray-500">{teamType || 'UI Design'}</p>
        <p className="text-xs text-gray-600 mt-1">
          {likes?.length || 0} ❤️ · {views || 0} 👁️
        </p>
      </div>
    </div>
  );
};

export default DribbbleCard;
