import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow';
import HomeIcon from "@material-ui/icons/Home";
import Whatshot from "@material-ui/icons/Whatshot";
import Subscriptions from "@material-ui/icons/Subscriptions";
import VideoLibrary from  "@material-ui/icons/Subscriptions";
import History from  "@material-ui/icons/History";
import OndemandVideo from  "@material-ui/icons/OndemandVideo";
import WatchLater from  "@material-ui/icons/WatchLater";
import ThumbUpAltOutlined from  "@material-ui/icons/ThumbUpAltOutlined";
import ExpandMoreOutlined from  "@material-ui/icons/ExpandMoreOutlined";
// import { Link } from 'react-router-dom';


function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow selected Icon={HomeIcon} title="Home"/>
            {/* <Link to="/trending"> */}
                <SidebarRow Icon={Whatshot} title="Trending"/>

            {/* </Link> */}
            <SidebarRow Icon={Subscriptions} title="Subsription"/>
            <hr/>
            <SidebarRow Icon={VideoLibrary} title="Library"/>
            <SidebarRow Icon={History} title="History"/> 
            <SidebarRow Icon={OndemandVideo} title="Your Videos"/>
            <SidebarRow Icon={WatchLater} title="Watch Later"/>
            <SidebarRow Icon={ThumbUpAltOutlined} title="Liked Videos"/>
            <SidebarRow Icon={ExpandMoreOutlined} title="Show more"/>
        </div>
    )
}

export default Sidebar
