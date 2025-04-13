import React, { useState } from 'react'
import StackedGallery from '../Components/CreatedUI'
import Navbar from '../Components/Navbar'

const UserProfile = () => {
  const [activeSection, setActiveSection] = useState(null)

  const handleSectionClick = (section) => {
    setActiveSection(prev => prev === section ? null : section)
  }

  return (
    <div className=' w-5/6 h-auto m-auto ml-32'>
      <Navbar/>
      {/* USER INFO */}
      <div className="usersec border flex justify-evenly p-8 items-center">
        <span className='flex'>
          <ul>
            <li className='m-4'>Mail</li>
            <li className='m-4'>Phone</li>
            <li className='m-4'><a href="#">My Portfolio Link</a></li>
            <li className='m-4'><a href="#">Other links</a></li>
          </ul>
        </span>

        <span>
          <div>
            <img src="\Minor project\profilepic.jpg" alt="" className='rounded-full shadow-black shadow-2xl' />
          </div>
          <div className="infom-2 p-3 flex-col text-center ">
            <h3>Name</h3>
            <h4 className='text-gray-500'>username</h4>
          </div>
        </span>

        <span className=' h-auto w-auto flex'>
          <h2 className='m-4'>Following <p className='text-center'>2</p></h2>
          <h2 className='m-4'>Followers <p className='text-center'>2</p></h2>
        </span>
      </div>

      {/* TOGGLE BUTTONS */}
      <div className="flex justify-evenly m-2">
        <button className="px-4 py-2 bg-purple-500 text-white rounded" onClick={() => handleSectionClick('ui')}>
          UI Created
        </button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={() => handleSectionClick('posts')}>
          Posts Created
        </button>
        <button className="px-4 py-2 bg-green-500 text-white rounded" onClick={() => handleSectionClick('saved')}>
          Saved Images
        </button>
      </div>

      {/* CONDITIONAL DISPLAY */}
      <div className="p-4">
        {activeSection === 'ui' && (
          <div>
            <h1 className='ml-16 text-xl font-semibold'>UI Created</h1>
            <StackedGallery sectionType="ui" />
          </div>
        )}
        {activeSection === 'posts' && (
          <div>
            <h1 className='ml-16 text-xl font-semibold'>Posts Created</h1>
            <StackedGallery sectionType="posts" />
          </div>
        )}
        {activeSection === 'saved' && (
          <div>
            <h1 className='ml-16 text-xl font-semibold'>Saved Images</h1>
            <StackedGallery sectionType="saved" />
          </div>
        )}
      </div>
    </div>
  )
}

export default UserProfile
