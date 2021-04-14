import { Avatar } from "@material-ui/core";
import React from "react";
import "./SideBar.css";
import {useSelector} from 'react-redux'
import {selectUser}  from './features/userSlice'



function SideBar() {
  const user = useSelector(selectUser)
  console.log("user===>", user)
  const recentItems = (topic) => {
    return (
      <div className="sidebar__recentItems">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };
  return (
    <div className="sideBar">
      <div className="sidebar__top">
        <img src="https://source.unsplash.com/random" alt="" />

        <Avatar className="sidebar__avatar" src={user.photoUrl} >{user.email[0]}</Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed your Profile</p>
          <p className="sidebar__statNumber">2,346</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on Posts</p>
          <p className="sidebar__statNumber">2,556</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recents</p>
        {recentItems("reactjs")}
        {recentItems("redux")}

        {recentItems("softwares")}
        {recentItems("itjobs")}

        {recentItems("engineering")}
        {recentItems("mobile")}
      </div>
    </div>
  );
}

export default SideBar;
