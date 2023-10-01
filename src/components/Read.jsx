import React, { useEffect, useState } from "react";
import baseURL from "../api.js";
import axios from "axios";
import Update from "./Update.jsx";
import Delete from "./Delete.jsx";
export default function Read() {
  const [avatars, setAvatars] = useState([]);

  const getData = () => {
    axios
      .get(baseURL)
      .then((response) => {
        setAvatars(response.data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="avatar-list" >
      {avatars.length > 0 ? (
        avatars.map((avatar) => {
          return (
            <div key={avatar.id} className="avatar-card" >
              <h1>{avatar.name}</h1>
              <img src={avatar.avatarImg} />
              <Update avatar={avatar} />
              <Delete id={avatar.id}/>
            </div>
          );
        })
      ) : (<p>Loading...</p>)}

    </div>
  );
}
