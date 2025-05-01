import React, { useState } from 'react';

import PostsDb from '../Dbs/imageDB'; // Adjust path if needed
import Search from './Search';

const ImageGallery = () => {
  const [searchText, setSearchText] = useState(''); // Holds the search input

  // Filter posts based on the search text (matching tags)
  const filteredPosts = PostsDb.filter(post =>
    post.tags.some(tag =>
      tag.toLowerCase().includes(searchText.toLowerCase()) // Case-insensitive match
    )
  );

  return (
    <div className="p-4">
      {/* Search component for taking user input */}
      <Search onSearch={setSearchText} />

      {/* Gallery of filtered images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-2">
              <img
                src={post.url} // Assuming 'url' is the image URL
                alt={post.name}
                className="rounded-lg mb-2"
              />
              <div className="flex items-center gap-2">
                <img
                  src={post.profilePic} // Assuming 'profilePic' is the URL for the user's avatar
                  alt="profile"
                  className="w-8 h-8 rounded-full"
                />
                <span className="font-semibold">{post.name}</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">{post.description}</p>
              <p className="text-xs text-blue-400 mt-1">
                #{post.tags.join(' #')} {/* Display tags as hashtags */}
              </p>
            </div>
          ))
        ) : (
          // Message when no posts are found based on the search text
          <p className="col-span-full text-center text-gray-500">No matching tags found.</p>
        )}
      </div>
    </div>
  );
};

export default ImageGallery;
