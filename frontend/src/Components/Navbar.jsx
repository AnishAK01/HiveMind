
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
        { icon:    <CottageIcon style={{ fontSize: '28px' }} /> , label: 'Home', key: 'hoveHome',path:'/' },
        { icon: <ExploreIcon style={{ fontSize: '28px' }} />, label: 'Explore', key: 'hovExp',path:'/explore' },
        { icon: <AddCircleIcon style={{ fontSize: '28px' }} />, label: 'Post', key: 'hovPost' },
        { icon: <DashboardIcon style={{ fontSize: '28px' }}  />, label: 'Tabs', key: 'hovTabs' ,path:'/dribble' },
        { icon: <SendIcon style={{ fontSize: '28px' }} />, label: 'Messages', key: 'hovMess', },
        { icon: <Face3Icon style={{ fontSize: '28px' }} />, label: 'Profile', key: 'hovProf' ,path:'/profilr'},
        { icon: <SettingsIcon style={{ fontSize: '28px' }} />, label: 'Settings', key: 'hovSett' },
      ];
      const navigate = useNavigate();

  
    return (
      <div className="h-screen fixed left-0 top-0 w-16 p-2 py-4 flex flex-col bg-white text-white z-50">
        <div className="logo p-2 flex items-center justify-center">
          <h1 className="text-blue-700">
            <FlutterDashIcon style={{ fontSize: '35px' }} />
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
  