import React, {useState } from 'react';
import './Header.css';
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import Notifications from "@material-ui/icons/Notifications";
import VideoCall from "@material-ui/icons/VideoCall";
import Apps from "@material-ui/icons/Apps";
import Avatar from "@material-ui/core/Avatar";
import { Link } from 'react-router-dom';


 


function Header() {
        const [inputSearch, setInputSearch] = useState('');

    return (
        <div className="header">
            <div className="header-left">
                <MenuIcon/>
                <Link to="/">
                    <img  className="header-logo" 
                    src="/images/youtube.png" 
                    alt="alternative"/>
                
                </Link>
            </div>

            <div className="header-input">
                <input 
                onChange={e => setInputSearch(e.target.value)}
                 value={inputSearch}
                 placeholder="Search" 
                 type="text"
                />
            <Link to={`/search/${inputSearch}`}>
                <SearchIcon className="header-inputButton"/>
            </Link>
            
            </div>
            <div className="header-icons">
                <VideoCall className="header-icon"/>
                <Apps className="header-icon"/>
                <Notifications className="header-icon"/>
                <Avatar
                    alt="Osinachi"
                    src="/images/Osinachi1.png"
                />
            </div>
        </div>
    )
}

export default Header
