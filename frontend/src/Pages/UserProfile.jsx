import React, { useState } from 'react'
import StackedGallery from '../Components/CreatedUI'
import Navbar from '../Components/Navbar'

const UserProfile = () => {
  const [activeSection, setActiveSection] = useState(null)

  const handleSectionClick = (section) => {
    setActiveSection(prev => (prev === section ? null : section))
  }

  return (
    <div className='min-h-screen '>
      <Navbar />

      {/* USER INFO */}
      <div className="max-w-5xl mx-auto mt-8 bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row justify-between items-center">
        
        {/* Contact Info */}
        <div className="mb-6 md:mb-0">
          <ul className="space-y-2 text-gray-700">
            <li>📧 ushatanwar@gmail.com</li>
            <li>📞 999999999</li>
            <li><a href="#" className='text-blue-500 hover:underline'>My Portfolio</a></li>
            <li><a href="#" className='text-blue-500 hover:underline'>Other Links</a></li>
          </ul>
        </div>

        {/* Profile Image & Name */}
        <div className="flex flex-col items-center">
          <img 
            src="/Minor project/profilepic.jpg" 
            alt="Profile" 
            className="w-32 h-32 rounded-full shadow-lg object-cover mb-3"
          />
          <div className="text-center">
            <h3 className="text-lg font-bold">Usha</h3>
            <p className="text-sm text-gray-500">usha.tanwar </p>
          </div>
        </div>

        {/* Followers Info */}
        <div className="flex gap-6 text-center">
          <div>
            <h2 className="font-semibold text-lg">Following</h2>
            <p className="text-gray-600 text-">9</p>
          </div>
          <div>
            <h2 className="font-semibold text-lg">Followers</h2>
            <p className="text-gray-600">10.2M</p>
          </div>
        </div>
      </div>

      {/* SECTION TOGGLE BUTTONS */}
      <div className="flex justify-center mt-6 space-x-4">
        <button
          className={`px-4 py-2 rounded font-semibold ${activeSection === 'ui' ? 'bg-white text-black shadow-md shadow-gray-400' : 'bg-white text-black shadow-md shadow-gray-400 hover:bg-yellow-50'}`}
          onClick={() => handleSectionClick('ui')}
        >
          UI Created
        </button>
        <button
          className={`px-4 py-2 rounded font-semibold ${activeSection === 'posts' ? 'bg-white text-black shadow-md shadow-gray-400' : 'bg-white text-black shadow-md shadow-gray-400 hover:bg-yellow-50'}`}
          onClick={() => handleSectionClick('posts')}
        >
          Posts Created
        </button>
        <button
          className={`px-4 py-2 rounded font-semibold ${activeSection === 'saved' ? 'bg-white text-black shadow-md shadow-gray-400' : 'bg-white text-black shadow-md shadow-gray-400 hover:bg-yellow-50'}`}
          onClick={() => handleSectionClick('saved')}
        >
          Saved Images
        </button>
      </div>

      {/* CONDITIONAL DISPLAY */}
      <div className="max-w-5xl mx-auto p-6">
        {activeSection === 'ui' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">🎨 UI Created</h2>
            <StackedGallery sectionType="ui" />
          </div>
        )}
        {activeSection === 'posts' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">📝 Posts Created</h2>
            <StackedGallery sectionType="posts" />
          </div>
        )}
        {activeSection === 'saved' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">📁 Saved Images</h2>
            <StackedGallery sectionType="saved" />
          </div>
        )}
      </div>
    </div>
  )
}

export default UserProfile
