import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { useDataLayeValue } from "./DataLayer";

function Header() {
  const [{ user }, dispatch] = useDataLayeValue();
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />

        <input type="text" placeholder="Search for Artists , Songs" />
      </div>
      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt="AK" />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
