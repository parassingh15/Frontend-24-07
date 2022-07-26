import React from "react";
import "./LibraryCharts.css";
import library from "../../img/library.jpg";
import { useNavigate } from "react-router";


export default function LibraryCharts() {
  let navigate = useNavigate();
  return (
    <div className="LibraryCharts">
      <div className="LikedSongHead">
        <img className="playlistImg" src={library} alt="" />
        <h1
          className="LikedName"
          style={{ fontFamily: "Open Sans", fontSiz: "16px" }}
        >
          Music Library
        </h1>
      </div>
      <div className="liked-songs-lists"></div>
      <div className="likedPlaylistLibray"
      style={{cursor: "pointer"}}
      onClick={()=> navigate('/liked')}
      >
        <h3>LIKED SONGS</h3>
      </div>
      <div className="playlistsCards row">
        
      </div>
    </div>
  );
}
