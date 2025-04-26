import React from 'react'
import Navbar from '../Components/Navbar'
import ProfileCard from '../Components/ProfileCard'
import profiles from '../Dbs/collabprfileDb'

const Collab = () => {
  return (
    <div className="flex min-h-screen w-auto ml-16 ">
      {/* Sidebar Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col border border-gray-300 rounded-2xl m-6 p-6 shadow-md">

        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          🤝 People in your Hive!!!!
        </h1>

        {/* First Set of Profiles */}
        <div className="flex flex-wrap justify-center gap-10 p-4">
          {profiles.map((profile) => (
            <ProfileCard key={profile.id} profile={profile} />
          ))}
        </div>

        {/* Divider Line */}
        <div className="h-px bg-gray-300 my-8 mx-auto w-4/5"></div>

        {/* More People Heading */}
        <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
          More People to Invite............
        </h2>

        {/* Second Set of Profiles */}
        <div className="flex flex-wrap justify-center gap-10 p-4">
          {profiles.map((profile) => (
            <ProfileCard key={profile.id} profile={profile} />
          ))}
        </div>

      </div>
    </div>
  )
}

export default Collab
