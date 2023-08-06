import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CategoryIcon from '@mui/icons-material/Category';
import FilterFramesIcon from '@mui/icons-material/FilterFrames';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PollIcon from '@mui/icons-material/Poll';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import WysiwygIcon from '@mui/icons-material/Wysiwyg';
import RedditIcon from '@mui/icons-material/Reddit';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import PortraitIcon from '@mui/icons-material/Portrait';
import LogoutIcon from '@mui/icons-material/Logout';
import {Link} from "react-router-dom"
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';

//import {} from "@mui/icons-material"

const Sidebar = () => {
    const { dispatch } = useContext(DarkModeContext);
  return (
    <div className='sidebar'>
        <div className="top">
            <Link to="/" style={{textDecoration:"none"}}>
                <span className="logo">Riya Admin</span>
            </Link>
        </div>
        <hr/>
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li>
                    <DashboardIcon className='icon'/>
                    <span>Dashboard</span>
                </li>
                <p className="title">LISTS</p>
                <Link to="/users" style={{textDecoration:"none"}}>
                <li>
                    <PermIdentityIcon className='icon'/>
                    <span>Users</span>
                </li>
                </Link>
                <Link to="/products" style={{textDecoration:"none"}}>
                <li>
                    <CategoryIcon className='icon'/>
                    <span>Products</span>
                </li>
                </Link>
                <li>
                    < FilterFramesIcon className='icon'/>
                    <span>Orders</span>
                </li>
                <li>
                    <LocalShippingIcon className='icon'/>
                    <span>Delivery</span>
                </li>
                <p className="title">USEFUL</p>
                <li>
                    <PollIcon className='icon'/>
                    <span>Stats</span>
                </li>
                <li>
                    <NotificationsNoneIcon className='icon'/>
                    <span>Notifications</span>
                </li>
                <p className="title">SERVICE</p>
                <li>
                    <WysiwygIcon className='icon'/>
                    <span>System Health</span>
                </li>
                <li>
                    <RedditIcon className='icon'/>
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsApplicationsIcon className='icon'/>
                    <span>Settings</span>
                </li>
                <p className="title">USER</p>
                <li>
                    <PortraitIcon className='icon'/>
                    <span>Profile</span>
                </li>
                <li>
                    <LogoutIcon className='icon'/>
                    <span>Logout</span>
                </li> 
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption" onClick={()=> dispatch({type:"LIGHT"})}></div>
            <div className="colorOption" onClick={()=> dispatch({type:"DARK"})}></div>
        </div>
    </div> 
  )
}

export default Sidebar