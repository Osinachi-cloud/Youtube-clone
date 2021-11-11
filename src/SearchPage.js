import React from 'react';
import './SearchPage.css';
// import VideoCall from "@material-ui/icons/VideoCall";

import TuneOutlined from '@material-ui/icons/TuneOutlined'
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className= "searchPage-filter">
                <TuneOutlined/>
                <h1>Filter  </h1>

            </div>
            <hr/>
            <ChannelRow
                image="/images/Osinachi1.png"
                channel="C-STEMagic"
                verified
                subs="1M"
                noOfVideos={20}
                description="God Loves You so much"
            />
            <VideoRow
                image="/images/Osinachi1.png"
                channel="C-STEMagic"
                verified
                subs="1M"
                noOfVideos={20}
                timestamp="5 days ago"
                description="God Loves You so much God Loves You so much God Loves You so much"
            />
             <VideoRow
                image="/images/Osinachi1.png"
                channel="C-STEMagic"
                verified
                subs="1M"
                noOfVideos={20}
                timestamp="5 days ago"
                description="God Loves You so much God Loves You so much God Loves You so much"
            />
             <VideoRow
                image="/images/youtube1.png"
                channel="Gabramns"
                verified
                subs="1M"
                noOfVideos={20}
                timestamp="5 days ago"
                description="God Loves You so much God Loves You so much God Loves You so much"
            />
             <VideoRow
                image="/images/youtube2.png"
                channel="Princess"
                verified
                subs="1M"
                noOfVideos={20}
                timestamp="5 days ago"
                description="God Loves You so much God Loves You so much God Loves You so much"
            />

    
        </div>
    )
}

export default SearchPage
