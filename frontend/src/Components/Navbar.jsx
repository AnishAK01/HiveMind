import React from 'react';
import FlutterDashIcon from '@mui/icons-material/FlutterDash';
import CottageIcon from '@mui/icons-material/Cottage';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ExploreIcon from '@mui/icons-material/Explore';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SendIcon from '@mui/icons-material/Send';
import Face3Icon from '@mui/icons-material/Face3';
import SettingsIcon from '@mui/icons-material/Settings';

const Navbar = () => {
    return (
        <div className="h-screen fixed left-0 top-0 w-16 p-2 py-4 flex flex-col bg-gray-900 text-white">
            <div className="logo p-2 flex items-center justify-center">
                <h1 className="text-blue-700">
                    <FlutterDashIcon style={{ fontSize: "40px" }} />
                </h1>
            </div>
            <div className="flex-1 flex flex-col justify-around">
                <div className="p-2 flex items-center justify-center">
                    <CottageIcon style={{ fontSize: "40px" }} />
                </div>
                <div className="p-2 flex items-center justify-center">
                    <AddCircleIcon style={{ fontSize: "40px" }} />
                </div>
                <div className="p-2 flex items-center justify-center">
                    <ExploreIcon style={{ fontSize: "40px" }} />
                </div>
                <div className="p-2 flex items-center justify-center">
                    <DashboardIcon style={{ fontSize: "40px" }} />
                </div>
                <div className="p-2 flex items-center justify-center">
                    <SendIcon style={{ fontSize: "40px" }} />
                </div>
                <div className="p-2 flex items-center justify-center">
                    <Face3Icon style={{ fontSize: "40px" }} />
                </div>
                <div className="p-2 flex items-center justify-center">
                    <SettingsIcon style={{ fontSize: "40px" }} />
                </div>
            </div>
        </div>
    );
};

export default Navbar;


