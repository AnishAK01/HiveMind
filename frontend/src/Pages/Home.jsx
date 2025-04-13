import React from 'react';
import Navbar from '../Components/Navbar';
import Search from '../Components/Search';
import Banner from '../Components/Banner';
import Posts from '../Components/Posts';
import PostsDb from '../imageDB';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'


const Home = () => {
          const navigate = useNavigate();
    
    return (
        <div className="flex min-h-screen w-auto  ml-16">
            {/* Sidebar Navbar */}
            <Navbar />
            
            {/* Main Content */}
            <div className="flex-1 flex flex-col border-red-700 border-solid border-7 p-2">
                <span className='w-11/12 flex fixed items-center justify-evenly z-50 '>
               
                     <Search  />
                     <span className="backdrop-blur-sm bg-white/30  p-1  rounded-lg" ><NotificationsIcon/>
                   <Link to={'/auth'} className='ml-4' > <LoginIcon />
                   </Link>  </span>
                    
                </span>
               
                <Banner />
                <Posts PostsDb={PostsDb}/>
            </div>
        </div>
    );
};

export default Home;

//
// import React from 'react';
// import Navbar from '../Components/Navbar';
// import Search from '../Components/Search';
// import Banner from '../Components/Banner';
// import Posts from '../Components/Posts';

// const Home = () => {
//     return (
//         <div className="flex bg-slate-500 min-h-screen overflow-hidden">
//             {/* Fixed Navbar */}
//             <Navbar />
            
//             {/* Main Content - Takes Full Width Minus Navbar */}
//             <div className="flex-1 flex flex-col ml-16 h-screen overflow-y-auto p-4">
//                 <Search />
//                 <Banner />
//                 <Posts />
//             </div>
//         </div>
//     );
// };

// export default Home;

