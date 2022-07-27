import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { useNavigate } from "react-router";
import "./CreatePlayListModal.css";

export default function CreatePlayListModal() {
  
  const [PlayListName, setPlayListName] = React.useState("");
  
  let navigate = useNavigate();

  function CreatePlaylist() {
    console.log("hello");
    fetch("https://muzixplaylist.herokuapp.com/api/createPlaylist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name: PlayListName,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPlaylistData(data);
        document.getElementById("alert").classList.add("alert-appear");
        document.getElementById("alert").classList.remove("alert-box");
      })
      .catch((err) => {
        document.getElementById("alert").value = "Playlist already exists";
      });
  }

  return (
    <div className="CreatePlayListModal">
      <div id="alert" className="alert-box">
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>'{PlayListName}' Playlist Created! —{" "}
          <strong>check it out!</strong>
        </Alert>
      </div>
      <TextField
        id="standard-basic"
        onChange={(e) => setPlayListName(e.target.value)}
        label="#Playlist"
        variant="standard"
        sx={{ width: 300, marginLeft: "50px" }}
      />
      <Button
        onClick={CreatePlaylist}
        variant="outlined"
        style={{ float: "right", marginTop: "15px" }}
      >
        Create
      </Button>
    </div>
  );
}