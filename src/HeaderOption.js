import { Avatar } from "@material-ui/core";
import React from "react";
import { selectUser } from "./features/userSlice";
import {useSelector} from 'react-redux'
import "./HeaderOption.css";
function HeaderOption({ avatar,Icon, title , onClick }) {

  const user = useSelector(selectUser)

  return (
    <div  onClick={onClick} className="headerOptions">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && <Avatar className="headerOption__icon" src={user?.photoUrl} alt = "">{user?.email[0]}</Avatar>}
      <h3 className="headerOptions__title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
