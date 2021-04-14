import React, { useState, useEffect } from "react";
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import InputOptions from "./InputOptions";
import ImageIcon from "@material-ui/icons/Image";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import EventIcon from "@material-ui/icons/Event";
import AssignmentIcon from "@material-ui/icons/Assignment";
import Post from "./Post";
import { db } from "./firebase";
import firebase from "firebase";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import FlipMove from 'react-flip-move'

function Feed() {
  const [post, setPost] = useState([]);
  const [input, setInput] = useState("");
  const user = useSelector(selectUser);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPost(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user?.photoUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter Post Here..."
            />
            <button type="submit" onClick={sendPost}>
              Send
            </button>
          </form>
        </div>
        <div className="feed_inputOptions">
          <InputOptions title="Photo" Icon={ImageIcon} color="#70B5F9" />
          <InputOptions title="Video" Icon={VideoCallIcon} color="#E7A33E" />

          <InputOptions title="Event" Icon={EventIcon} color="#C0CBCD" />
          <InputOptions
            title="Write Articles"
            Icon={AssignmentIcon}
            color="#7FC15E"
          />
        </div>
      </div>
      {/* Posts */}
      <FlipMove>
        {post.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
