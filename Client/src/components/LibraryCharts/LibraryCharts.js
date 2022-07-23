import React from "react";
import "./LibraryCharts.css";
import library from "../../img/library.jpg";

export default function LibraryCharts() {
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
      <div className="likedPlaylistLibray">
        <h3>LIKED SONGS</h3>
      </div>
      <div className="playlistsCards row">
        
      </div>
    </div>
  );
}
