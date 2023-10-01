import React from "react";
import axios from "axios";
import baseURL from "../api";

export default function Delete({ id }) {
    const deleteAvatar = () =>{
        axios.delete(baseURL+`/${id}`).then((response)=>{console.log("success",response.data);})
    }
  return (
    <button type="submit" onClick={deleteAvatar}>
      delete avatar
    </button>
  );
}
