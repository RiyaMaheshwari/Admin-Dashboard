import './navbar.scss'
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ListIcon from '@mui/icons-material/List';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';

const Navbar = () => {

  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type='text' placeholder='Search...'/>
          <SearchOutlinedIcon/>
        </div>
        <div className='items'>
          <div className="item">
            <LanguageIcon className='icon'/>
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon className='icon' onClick={()=> dispatch({type:"TOGGLE"})}/>
           
          </div>
          <div className="item">
            <FullscreenIcon className='icon'/>
            
          </div>
          <div className="item">
            <NotificationsNoneIcon className='icon'/>
            <div className="counter">1</div>
            
          </div>
          <div className="item">
            <ChatBubbleOutlineIcon className='icon'/>
            <div className="counter">2</div>
            
          </div>
          <div className="item">
            <ListIcon className='icon'/>
            
          </div>
          <div className='item'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkjalh_jIuX12-FvyG1A1zGgBqDViiNXxTnw&usqp=CAU" alt=""
            className='avatar'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar 