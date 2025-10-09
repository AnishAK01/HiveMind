import React, { useState, useEffect, useContext } from 'react';
import StackedGallery from '../Components/CreatedUI';
import Navbar from '../Components/Navbar';
import { AuthContext } from '../context/AuthContext';
import API from '../utils/axios';

const UserProfile = () => {
  const { user } = useContext(AuthContext);

  const [activeSection, setActiveSection] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]); 

  const handleSectionClick = (section) => {
    setActiveSection(prev => (prev === section ? null : section));
  };


  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await API.get('/users/me');
        setUserData(res.data);
      } catch (error) {
        console.error("Error fetching user data", error);
      } finally {
        setLoading(false);
      }
    };

    if (user) fetchUser();
    else setLoading(false);
  }, [user]);

  
  useEffect(() => {
    const fetchUserPosts = async () => {
      try {
        const res = await API.get("/posts/my-posts", {
          headers: { Authorization: `Bearer ${user.token}` }
        });
        setPosts(res.data);
      } catch (error) {
        console.error("Error fetching user posts", error);
      }
    };
    if (user) fetchUserPosts();
  }, [user]);

  if (loading) return <p className='text-center mt-10'>Loading...</p>;

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center text-center">
        <Navbar />
        <h1 className="text-2xl font-semibold text-gray-700">🔒 Please log in to view your profile.</h1>
      </div>
    );
  }

  return (
    <div className='min-h-screen'>
      <Navbar />

      <div className="max-w-5xl mx-auto mt-8 bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <ul className="space-y-2 text-gray-700">
            <li>📧 {userData?.email || 'Email not available'}</li>
            <li>📞 999999999</li>
            <li><a href="#" className='text-blue-500 hover:underline'>My Portfolio</a></li>
            <li><a href="#" className='text-blue-500 hover:underline'>Other Links</a></li>
          </ul>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={userData?.profilePic }
            alt="Profile"
            className="w-32 h-32 rounded-full shadow-lg object-cover mb-3"
          />
          <div className="text-center">
            <h3 className="text-lg font-bold">{userData?.name || "User"}</h3>
            <p className="text-sm text-gray-500">{userData?.username || userData?.email}</p>
          </div>
        </div>

        <div className="flex gap-6 text-center">
          <div>
            <h2 className="font-semibold text-lg">Following</h2>
            <p className="text-gray-600">9</p>
          </div>
          <div>
            <h2 className="font-semibold text-lg">Followers</h2>
            <p className="text-gray-600">10.2M</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-6 space-x-4">
        {["ui", "posts", "saved"].map((section) => (
          <button
            key={section}
            className={`px-4 py-2 rounded font-semibold ${activeSection === section
              ? 'bg-white text-black shadow-md shadow-gray-400'
              : 'bg-white text-black shadow-md shadow-gray-400 hover:bg-yellow-50'
            }`}
            onClick={() => handleSectionClick(section)}
          >
            {section === 'ui' ? 'UI Created' : section === 'posts' ? 'Posts Created' : 'Saved Images'}
          </button>
        ))}
      </div>

      <div className="max-w-5xl mx-auto p-6">
        {activeSection === 'ui' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">🎨 UI Created</h2>
            <StackedGallery sectionType="ui" posts={posts} />
          </div>
        )}
        {activeSection === 'posts' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">📝 Posts Created</h2>
            <StackedGallery sectionType="posts" posts={posts} />
          </div>
        )}
        {activeSection === 'saved' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">📁 Saved Images</h2>
            <StackedGallery sectionType="saved" posts={posts} />
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
