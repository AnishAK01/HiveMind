import React, { useEffect, useState } from 'react';
import Banner from '../Components/Banner';
import Search from '../Components/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DribbbleCard from '../Components/DribbleCard';
import Navbar from '../Components/Navbar';
import API from '../utils/axios';

const Dribble = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await API.get("/posts/category/ui");
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="flex min-h-screen w-auto  ml-16">
      <Navbar />
      <div className="flex-1 flex flex-col p-2">
        <span className='w-11/12 flex fixed items-center justify-evenly'>
          <Search />
          <NotificationsIcon />
        </span>

        <Banner />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 py-4">
          {posts.map((post, idx) => (
            <DribbbleCard key={idx} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dribble;
