import React from 'react';
import './ChannelRow.css';
// import { Avatar } from "material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Verified from '@material-ui/icons/CheckCircleOutline';
// import A from "@material-ui/core/Avatar";



function ChannelRow({image, channel, subs, noOfVideos, verified, description}) {
    return (
        <div className="channelRow">
            <Avatar className="channelRow-logo"
                alt={channel}
                src={image}
            />
            <div className="channelRow-text">
                <h4>
                    {channel} {verified && <Verified/>} 
                </h4>
                <p>
                    {subs} subscribers . {noOfVideos} videos
                </p>
                <p>
                    {description}
                </p>

            </div>
            
            
        </div>
    )
}

export default ChannelRow
