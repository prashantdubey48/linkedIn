import React, { useState } from "react";
import "./Login.css";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [picture, setPicture] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const register = () => {
    if (!name) {
      alert("Please enter full name.");
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoUrl: picture,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: picture,
              })
            );
          });
      })
      .catch((error) => alert(error.message));
  };

  const loginToApp = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password).then((userAuth) => {
      dispatch(
        login({
          email: userAuth.user.email,
          displayName: userAuth.user.displayName,
          uid: userAuth.user.uid,
          photoUrl: userAuth.user.photoUrl,
        })
      );
    }).catch(error => alert(error.message) );
  };
  return (
    <div className="login">
      <img
        src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
        alt=""
      />
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name(Required if Registering)"
        />
        <input
          type="text"
          value={picture}
          onChange={(e) => setPicture(e.target.value)}
          placeholder="PhotoUrl(Optional)"
        />

        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />

        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Password"
        />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a Member?
        <span className="login__register" onClick={register}>
          Register Here
        </span>
      </p>
    </div>
  );
}

export default Login;
