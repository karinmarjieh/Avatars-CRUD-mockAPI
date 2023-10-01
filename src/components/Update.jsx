import axios from "axios";
import React, { useState } from "react";
import baseURL from "../api.js";

export default function Update({ avatar }) {
  const [isUpdate, setIsUpdate] = useState(false);
  const [avatarName, setAvatarName] = useState("");
  const [avatarImg, setAvatarImg] = useState("");

  const toggleUpdateAvatar = () => {
    setIsUpdate(!isUpdate);
  };

  const updateAvatar = () => {
    const updatedAvatar = {
        name: avatarName || avatar.name ,
        avatarImg: avatarImg || avatar.avatarImg,
      };
    axios.put(baseURL+`/${avatar.id}`, updatedAvatar)
      .then((response) => {
        console.log("Avatar updated successfully:", response.data);
        setAvatarName("");
        setAvatarImg("");
        // navigate('/');
      })
      .catch((error) => {
        console.log("Error updating avatar:", error);
      });
  };
  return (
    <>
      {<button onClick={toggleUpdateAvatar}>Update</button>}
      {isUpdate && (
        <>
          <div>updtiiing{avatar.id}</div>
          <label>Avatar Name :</label>
          <input
            value={avatarName}
            placeholder="avatar name"
            onChange={(e) => setAvatarName(e.target.value)}
          />
          <label>Avatar Image URL :</label>
          <input
            value={avatarImg}
            placeholder="avatar image"
            onChange={(e) => setAvatarImg(e.target.value)}
          />
          <button type="submit" onClick={updateAvatar}>
            update avatar
          </button>
        </>
      )}
    </>
  );
}
