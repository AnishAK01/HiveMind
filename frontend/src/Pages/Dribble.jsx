import React from 'react'
import Banner from '../Components/Banner'
import Search from '../Components/Search'
import NotificationsIcon from '@mui/icons-material/Notifications';
import uiDb from '../Dbs/uiDb';
import DribbbleCard from '../Components/DribbleCard';
import Navbar from '../Components/Navbar';
const Dribble = () => {
  return (
    <div className="flex min-h-screen w-auto  ml-16">
      {/* Sidebar Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col border-red-700 border-solid border-7 p-2">
        <span className='w-11/12 flex fixed items-center justify-evenly  '>

          <Search />
          <NotificationsIcon />
        </span>

        <Banner />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 py-4" >
          {uiDb.map((post, idx) => (
            <DribbbleCard key={idx} {...post} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dribble
