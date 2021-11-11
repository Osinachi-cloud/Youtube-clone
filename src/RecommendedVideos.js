import React from 'react';
import './RecommendedVideos.css';
import VideoCard from './VideoCard';

function RecommendedVideos() {
    return (
        <div className="recommendedVideos">
           <h2> Recommended videos</h2>
           <div className="recommendedVideos-videos">
               <VideoCard
               title="Become a Full Stack software developer"
               views="2.3M views"
               timestamp="3 days ago"
               channelImage="images/Osinachi1.png"
               channel="C-STEMagic"
               image="images/software.jpg"
               />
                 <VideoCard
               title="Become a Graphic designer"
               views="2M views"
               timestamp="10 days ago"
               channelImage="images/Osinachi1.png"
               channel="C-STEMagic"
               image="images/graphic.png"
               />
                <VideoCard
               title="Become a Professional Networker"
               views="2B views"
               timestamp="10 years ago"
               channelImage="images/Osinachi1.png"
               channel="C-STEMagic"
               image="images/networking.png"
               />
                           <VideoCard
               title="Become a Full Stack software developer"
               views="2.3M views"
               timestamp="3 days ago"
               channelImage="images/Osinachi1.png"
               channel="C-STEMagic"
               image="images/software.jpg"
               />
                 <VideoCard
               title="Become a Graphic designer"
               views="2M views"
               timestamp="10 days ago"
               channelImage="images/Osinachi1.png"
               channel="C-STEMagic"
               image="images/graphic.png"
               />
                <VideoCard
               title="Become a Professional Networker"
               views="2B views"
               timestamp="10 years ago"
               channelImage="images/Osinachi1.png"
               channel="C-STEMagic"
               image="images/networking.png"
               />
                 <VideoCard
               title="Become a Graphic designer"
               views="2M views"
               timestamp="10 days ago"
               channelImage="images/Osinachi1.png"
               channel="C-STEMagic"
               image="images/graphic.png"
               />
                <VideoCard
               title="Become a Professional Networker"
               views="2B views"
               timestamp="10 years ago"
               channelImage="images/Osinachi1.png"
               channel="C-STEMagic"
               image="images/networking.png"
               />
               <VideoCard
               title="Become a Full Stack software developer"
               views="2.3M views"
               timestamp="3 days ago"
               channelImage="images/Osinachi1.png"
               channel="C-STEMagic"
               image="images/software.jpg"
               />

                <VideoCard
                image="/images/youtube1.png"
                channel="Gabramns"
                // verified
                // subs="1M"
                // noOfVideos={20}
                timestamp="5 days ago"
                description="God Loves You so much God Loves You so much God Loves You so much"
                 />
                <VideoCard
                image="/images/youtube2.png"
                channel="Princess"
                // verified
                // subs="1M"
                // noOfVideos={20}
                timestamp="5 days ago"
                description="God Loves You so much God Loves You so much God Loves You so much"
                />
              

           </div>
            
        </div>
    )
}

export default RecommendedVideos
