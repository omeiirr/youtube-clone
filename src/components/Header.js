import React, { useState } from "react";
import { Link } from "react-router-dom";

import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import MenuIcon from "@material-ui/icons/Menu";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";

import "./Header.css";
import { Avatar } from "@material-ui/core";
function Header() {
  const [inputSearch, setInputSearch] = useState("");
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <Link to="/">
          <img
            className="header__logo"
            src="https://logos-download.com/wp-content/uploads/2016/02/YouTube_logo.png"
            alt=""
          />
        </Link>
      </div>

      <div className="header__input">
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          placeholder="  Search..."
          type="text"
        />

        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header__inputButton" />
        </Link>
      </div>
      {/* <MicIcon /> */}

      <div className="header__icons">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar
          alt="Omeir Fawaz"
          src="https://yt3.ggpht.com/yti/ANoDKi6AKAEtxoomo9CaI1Rwlg6Rr4nxNyBe28YfbiEk=s88-c-k-c0x00ffffff-no-rj-mo"
        />
      </div>
    </div>
  );
}

export default Header;
