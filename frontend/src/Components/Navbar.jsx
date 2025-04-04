// import React from 'react';
// import FlutterDashIcon from '@mui/icons-material/FlutterDash';
// import CottageIcon from '@mui/icons-material/Cottage';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
// import ExploreIcon from '@mui/icons-material/Explore';
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import SendIcon from '@mui/icons-material/Send';
// import Face3Icon from '@mui/icons-material/Face3';
// import SettingsIcon from '@mui/icons-material/Settings';
// import { useState } from "react";

// const Navbar = () => {
//     const [ hoverName , setHoverName] = useState({hoveHome:false,hovExp:false,hovPost:false,hovTabs:false,hovMess:false,hovPost:false,hovSett:false,hovProf:false})

   
//     const hoverButton = ()=>{
//         return setHoverName(true);
//     }

    
//     return (
//         <div className="h-screen fixed left-0 top-0 w-16 p-2 py-4 flex flex-col bg-gray-900 text-white " >
//             <div className="logo p-2 flex items-center justify-center">
//                 <h1 className="text-blue-700">
//                     <FlutterDashIcon style={{ fontSize: "35px" }} />
//                 </h1>
//             </div>
//                 <div className="flex-1 flex flex-col justify-around cursor-pointer">
//                     <div className="p-2 flex items-center justify-center" onMouseEnter={()=>{setHoverName({hoveHome:true,hovExp:false,hovPost:false,hovMess:false,hovTabs:false,hovMess:false,hovProf:false,hovSett:false})}} onMouseLeave={()=>{return setHoverName(false)}} >
//                         <CottageIcon style={{ fontSize: "35px" }} />
//                    {
//                     hoverName.hoveHome ==true ? ( <div className='fixed left-16 mx-1  rounded-lg p-1 bg-black bg-opacity-50'>Home</div>):null
//                    }
//                     {/* <div className='fixed left-16 mx-1  rounded-lg p-1 bg-black bg-opacity-50'>Home</div> */}
                   
//                 </div>
                
//                 <div className="p-2 flex items-center justify-center" onMouseEnter={()=>{setHoverName({hoveHome:false,hovExp:true,hovPost:false,hovMess:false,hovTabs:false,hovMess:false,hovProf:false,hovSett:false})}} onMouseLeave={()=>{return setHoverName(false)}}>
//                     <ExploreIcon style={{ fontSize: "35px" }} />
//                      {
//                     hoverName.hovExp == true ? ( <div className='fixed left-16 mx-1  rounded-lg p-1 bg-black bg-opacity-50'>Explore</div>):null
//                    }
//                 </div>
//                 <div className="p-2 flex items-center justif y-center" onMouseEnter={()=>{setHoverName({hoveHome:false,hovExp:false,hovPost:true,hovMess:false,hovTabs:false,hovMess:false,hovProf:false,hovSett:false})}} onMouseLeave={()=>{return setHoverName(false)}}>
//                     <AddCircleIcon style={{ fontSize: "35px" }} />
//                      {
//                     hoverName.hovPost == true ? ( <div className='fixed left-16 mx-1  rounded-lg p-1 bg-black bg-opacity-50'>Post</div>):null
//                    }
//                 </div>
//                 <div className="p-2 flex items-center justify-center" onMouseEnter={()=>{setHoverName({hoveHome:false,hovExp:false,hovPost:false,hovMess:false,hovTabs:true,hovMess:false,hovProf:false,hovSett:false})}} onMouseLeave={()=>{return setHoverName(false)}}>
//                     <DashboardIcon style={{ fontSize: "35px" }} />
//                      {
//                     hoverName.hovTabs == true ? ( <div className='fixed left-16 mx-1  rounded-lg p-1 bg-black bg-opacity-50'>Tabs</div>):null
//                    }
//                 </div>
//                 <div className="p-2 flex items-center justify-center" onMouseEnter={()=>{setHoverName({hoveHome:false,hovExp:false,hovPost:false,hovMess:false,hovTabs:false,hovMess:true,hovProf:false,hovSett:false})}} onMouseLeave={()=>{return setHoverName(false)}}>
//                     <SendIcon style={{ fontSize: "35px" }} />
//                      {
//                     hoverName.hovMess == true ? ( <div className='fixed left-16 mx-1  rounded-lg p-1 bg-black bg-opacity-50'>Messages</div>):null
//                    }
//                 </div>
//                 <div className="p-2 flex items-center justify-center" onMouseEnter={()=>{setHoverName({hoveHome:false,hovExp:false,hovPost:false,hovMess:false,hovTabs:false,hovMess:false,hovProf:true,hovSett:false})}} onMouseLeave={()=>{return setHoverName(false)}}>
//                     <Face3Icon style={{ fontSize: "35px" }} />
//                      {
//                     hoverName.hovProf == true ? ( <div className='fixed left-16 mx-1  rounded-lg p-1 bg-black bg-opacity-50'>Profile</div>):null
//                    }
//                 </div>
//                 <div className="p-2 flex items-center justify-center" onMouseEnter={()=>{setHoverName({hoveHome:false,hovExp:false,hovPost:false,hovMess:false,hovTabs:false,hovMess:false,hovProf:false,hovSett:true})}} onMouseLeave={()=>{return setHoverName(false)}}>
//                     <SettingsIcon style={{ fontSize: "35px" }} />
//                      {
//                     hoverName .hovSett== true ? ( <div className='fixed left-16 mx-1  rounded-lg p-1 bg-black bg-opacity-50'>Settings</div>):null
//                    }
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Navbar;
import React, { useState } from 'react';
import FlutterDashIcon from '@mui/icons-material/FlutterDash';
import CottageIcon from '@mui/icons-material/Cottage';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ExploreIcon from '@mui/icons-material/Explore';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SendIcon from '@mui/icons-material/Send';
import Face3Icon from '@mui/icons-material/Face3';
import SettingsIcon from '@mui/icons-material/Settings';

const Navbar = () => {
  const [hoverName, setHoverName] = useState({
    hoveHome: false,
    hovExp: false,
    hovPost: false,
    hovTabs: false,
    hovMess: false,
    hovProf: false,
    hovSett: false,
  });

  const handleHover = (key) => {
    // Reset all to false, then activate the hovered key
    const newState = Object.keys(hoverName).reduce((acc, curr) => {
      acc[curr] = curr === key;
      return acc;
    }, {});
    setHoverName(newState);
  };

  const resetHover = () => {
    setHoverName({
      hoveHome: false,
      hovExp: false,
      hovPost: false,
      hovTabs: false,
      hovMess: false,
      hovProf: false,
      hovSett: false,
    });
  };

  const menuItems = [
    { icon: <CottageIcon style={{ fontSize: '35px' }} />, label: 'Home', key: 'hoveHome' },
    { icon: <ExploreIcon style={{ fontSize: '35px' }} />, label: 'Explore', key: 'hovExp' },
    { icon: <AddCircleIcon style={{ fontSize: '35px' }} />, label: 'Post', key: 'hovPost' },
    { icon: <DashboardIcon style={{ fontSize: '35px' }} />, label: 'Tabs', key: 'hovTabs' },
    { icon: <SendIcon style={{ fontSize: '35px' }} />, label: 'Messages', key: 'hovMess' },
    { icon: <Face3Icon style={{ fontSize: '35px' }} />, label: 'Profile', key: 'hovProf' },
    { icon: <SettingsIcon style={{ fontSize: '35px' }} />, label: 'Settings', key: 'hovSett' },
  ];

  return (
    <div className="h-screen fixed left-0 top-0 w-16 p-2 py-4 flex flex-col bg-white " style={{color:'#C3B97D'}}>
      <div className="logo p-2 flex items-center justify-center">
        <h1 className="text-blue-700">
          <FlutterDashIcon style={{ fontSize: '35px' }} />
        </h1>
      </div>

      <div className="flex-1 flex flex-col justify-around cursor-pointer">
        {menuItems.map((item) => (
          <div
            key={item.key}
            className="p-2 flex items-center justify-center relative"
            onMouseEnter={() => handleHover(item.key)}
            onMouseLeave={resetHover}
          >
            {item.icon}
            {hoverName[item.key] && (
              <div className="absolute left-16 mx-1 rounded-lg p-1 px-2 bg-black bg-opacity-50 text-white text-sm">
                {item.label}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
 

