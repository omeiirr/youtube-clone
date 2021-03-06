import React from "react";
import "./RecommendedVideos.css";
import VideoCard from "./VideoCard";
function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <h3>We recommend</h3>

      <div className="recommendedVideos__videos">

        
          <VideoCard 
          thumbnail="https://i1.wp.com/www.dafontfree.io/wp-content/uploads/2019/05/Auch-Free-Font.jpg?resize=800%2C500&ssl=1"
          title = "YouTube clone with ReactJS" 
          channel="Firebase by Google"
          views="2.3M Views"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwnj0RZ4V5xQUonkbHHFEMa50ZIcQ5uCz0PEA-VU5naY=s68-c-k-c0x00ffffff-no-rj"
          timestamp="3 days ago"
          />


          <VideoCard 
          thumbnail="https://i1.wp.com/www.dafontfree.io/wp-content/uploads/2019/05/Auch-Free-Font.jpg?resize=800%2C500&ssl=1"
          title = "YouTube clone with ReactJS" 
          channel="Firebase by Google"
          views="2.3M Views"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwnj0RZ4V5xQUonkbHHFEMa50ZIcQ5uCz0PEA-VU5naY=s68-c-k-c0x00ffffff-no-rj"
          timestamp="3 days ago"
          />


          <VideoCard 
          thumbnail="https://i1.wp.com/www.dafontfree.io/wp-content/uploads/2019/05/Auch-Free-Font.jpg?resize=800%2C500&ssl=1"
          title = "YouTube clone with ReactJS" 
          channel="Firebase by Google"
          views="2.3M Views"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwnj0RZ4V5xQUonkbHHFEMa50ZIcQ5uCz0PEA-VU5naY=s68-c-k-c0x00ffffff-no-rj"
          timestamp="3 days ago"
          />
      </div>
    </div>
  );
}

export default RecommendedVideos;
