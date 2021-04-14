import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Feed from "./Feed";
import { useSelector, useDispatch } from "react-redux";
import SideBar from "./SideBar";
import { selectUser, logout, login } from "./features/userSlice";
import Login from "./Login";
import { auth } from "./firebase";
import Widget from "./Widget";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        ////user logged in

        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoUrl,
          })
        );
      } else {
        //user logged out

        dispatch(logout);
      }
    });
  }, []);
  return (
    <div className="App">
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <SideBar />
          <Feed />
           <Widget/> 

        </div>
      )}
    </div>
  );
}

export default App;
