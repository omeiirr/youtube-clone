import React from "react";
import "./SearchPage.css";

import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";

function SearchVideos() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>Filter</h2>
      </div>

      <hr />

      <ChannelRow
        image="https://i1.wp.com/www.dafontfree.io/wp-content/uploads/2019/05/Auch-Free-Font.jpg?resize=800%2C500&ssl=1"
        channel="Traversy Media"
        verified
        subs="500k"
        noOfVideos={382}
        description="Tutorials on web development. Enjoy!"
      />

      <hr />

      <VideoRow
        views="39k"
        subs="200k"
        description="Tutorials on web development. Enjoy!"
        timestamp="a week ago"
        channel="Traversy Media"
        title="Homemaking Ideas"
        image="https://images.unsplash.com/photo-1611095973362-88e8e2557e58?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
      />

      <VideoRow
        views="39k"
        subs="200k"
        description="Tutorials on web development. Enjoy!"
        timestamp="a week ago"
        channel="Traversy Media"
        title="Homemaking Ideas"
        image="https://images.unsplash.com/photo-1611095973362-88e8e2557e58?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
      />

      <VideoRow
        views="39k"
        subs="200k"
        description="Tutorials on web development. Enjoy!"
        timestamp="a week ago"
        channel="Traversy Media"
        title="Homemaking Ideas"
        image="https://images.unsplash.com/photo-1611095973362-88e8e2557e58?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
      />
    </div>
  );
}

export default SearchVideos;
