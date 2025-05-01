
  import React, { useState } from 'react';
  import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

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
  
    // const navigate = useNavigate();
  
    const handleHover = (key) => {
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
        { icon:    <img src=" \Minor project\homenav.png" alt="" /> , label: 'Home', key: 'hoveHome',path:'/' },
        { icon: <img src=" \Minor project\browser.png" alt="" /> , label: 'Pictures', key: 'hovExp',path:'/pinttab' },
        { icon: <img src=" \Minor project\plus.png" alt="" /> , label: 'Post', key: 'hovPost' },
        { icon: <img src=" \Minor project\menunav.png" alt="" /> , label: 'UI', key: 'hovTabs' ,path:'/dribble' },
        { icon: <img src=" \Minor project\send.png" alt="" /> , label: 'Messages', key: 'hovMess', path:'/message' },
        { icon: <img src=" \Minor project\usernav.png" alt="" /> , label: 'Profile', key: 'hovProf' ,path:'/profile'},
        { icon: <img src=" \Minor project\settingnav.png" alt="" /> , label: 'Settings', key: 'hovSett' },
      ];
      const navigate = useNavigate();

  
    return (
      <div className="h-screen fixed left-0 top-0 w-16 p-2 py-4 flex flex-col bg-white text-white z-50">
        <div className="logo p-2 flex items-center justify-center">
          <h1 className="text-blue-700">
          <img src=" \Minor project\logo.png" alt="" className='h-12 '/> 
          </h1>
        </div>
  
        <div className="flex-1 flex flex-col justify-around cursor-pointer" style={{color:'#C3B97D'}}>
          {menuItems.map((item) => (
            <div
              key={item.key}
              className="p-2 flex items-center justify-center relative"
              onMouseEnter={() => handleHover(item.key)}
              onMouseLeave={resetHover}
              onClick={() => navigate(item.path)}
            >
              {item.icon}
  
              <AnimatePresence>
                {hoverName[item.key] && (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-16 mx-1 rounded-lg p-1 px-2 bg-black bg-opacity-70 text-white text-sm shadow-md"
                  >
                    {item.label}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Navbar;
  