import React from "react";
import "./SliderComponent_3.css";
import { useState } from "react";
import { Modal} from "@mantine/core";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Login from "../../img/login.PNG";
import AddToPlaylistModal from "../AddToPlaylistModal/AddToPlaylistModal";

export default function SliderComponent_3() {
  const [opened, setOpened] = useState(false);

  const [SongData, setSongData] = React.useState([]);

  React.useEffect(() => {
    
    let urllastfm=`https://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=India&api_key=37fa14ba27d26e5cefaed6b5832eb835&format=json`
    //let myapiurl="http://localhost:8000/api/topArtists"
    fetch(urllastfm)
      .then(res => res.json())
      .then(data => {
        setSongData(data.tracks.track);
      }
      )
  }, []);
  return (
    <div className="SliderComponent_3">

      <Modal
        className="CreatePlaylistDiv"
        opened={opened}
        onClose={() => setOpened(false)}
        title=  "Add To Playlist"
      >
        <AddToPlaylistModal/>
      </Modal>

      <h2 className="SliderComponentHeading SongComponentHeading">
        Top Tracks
      </h2>
      <div className="Sub-SliderComponent">


        {SongData.map(Song => (
          <div className="SliderComponent_2_card">
          <Card className="cards-layout"
          sx={{backgroundColor: "#485461",
          backgroundImage: "linear-gradient(315deg, #485461 0%, #28313b 74%)"}}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={Login}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {Song?.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {Song?.artist.name}
                </Typography>
              </CardContent>
            </CardActionArea>
            <i class="slider-component2_heart fa-solid fa-plus float-end text-end" onClick={() => setOpened(true)}></i>

          <i class="slider-component2_heart fa-regular fa-heart float-end text-end" ></i>
          
          </Card>
        </div>)
        )}
        
      </div>
    </div>
  );
}
