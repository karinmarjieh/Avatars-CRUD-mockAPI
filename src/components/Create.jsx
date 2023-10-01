import React, { useEffect, useState } from "react";
import baseURL from "../api.js";
import axios from "axios";
// import { useNavigate } from 'react-router-dom';

export default function Create() {
  const [avatarName, setAvatarName] = useState("");
  const [avatarImg, setAvatarImg] = useState("");
//   const [error, setError] = useState(true);
// const checkError =()=>{

// }
  const addAvatar = () => {
    const newAvatar = {
      name: avatarName,
      avatarImg: avatarImg,
    };

    axios
      .post(baseURL, newAvatar)
      .then((response) => {
        console.log("Avatar added successfully:", response.data);
        setAvatarName("");
        setAvatarImg("");
        // navigate('/');
      })
      .catch((error) => {
        console.log("Error adding avatar:", error);
      });
  };

  return (
    <div className="create-container">
    <h2>Create Avatar</h2>
    <div className="form-container">
      <label htmlFor="avatarName">Avatar Name:</label>
      <input
        id="avatarName"
        type="text"
        value={avatarName}
        placeholder="Avatar Name"
        onChange={(e) => setAvatarName(e.target.value)}
      />

      <label htmlFor="avatarImg">Avatar Image URL:</label>
      <input
        id="avatarImg"
        type="text"
        value={avatarImg}
        placeholder="Image URL"
        onChange={(e) => setAvatarImg(e.target.value)}
      />

      <button onClick={addAvatar} className="add-button">
        Add Avatar
      </button>
    </div>
  </div>
);
}
