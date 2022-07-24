import React from "react";
import "./SearchBarPage.css";




import '../SliderComponent_2/SliderComponent_2.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import { Modal} from "@mantine/core";
import { CardActionArea } from '@mui/material';

import AddToPlaylistModal from '../AddToPlaylistModal/AddToPlaylistModal';
import { useState } from "react";

export default function SearchBarPage() {


  const [opened, setOpened] = useState(false);
  const [heart, setHeart] = useState('slider-component2_heart fa-regular fa-heart float-end text-end')

  const [Id, setId] = useState('')
  //Resultstate
  
 const [SongName, setSongName] =useState('')
 const [tracks, setTracks] =useState([]);

 React.useEffect(() => {
if(SongName!==''){
  fetch(`https://muzixcloud.herokuapp.com/api/searchTrack?track=${SongName}`,{
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }

  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
    setTracks(data.tracks.items);
  })
}
}, [SongName])


function addLikedSong(track) {
    
  fetch("https://likedapi.herokuapp.com/api/addLikedSong", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      likedSong :track
    })
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
     
      document.getElementById(heart).classList.add("fa-solid");

    }
    )
}



  return (
    <div className="SearchBarPage">
      <Modal
        className="CreatePlaylistDiv"
        opened={opened}
        onClose={() => setOpened(false)}
        title=  "Create PlayList"
      >
        <AddToPlaylistModal SongList={tracks} Id={Id}/>
      </Modal>
      <div className="searchBarDiv">
        <div className="search-bar">
          <i
            class="fa-solid fa-magnifying-glass float-end"
            
          ></i>
          <input
            type="text"
            placeholder="Search"
            name="SearchBox"
            id="search"
            onChange={(e) => setSongName(e.target.value)}
          />
        </div>
      </div>

      <div className="searchedItemDiv">
        <h3>Your Search Results</h3>
      </div>
      <div className="AllSearchedSongs">
      {tracks?.map((track) =>
          <div className="SliderComponent_2_card" key={track.id}>
            
          <Card className='cards-layout'
          sx={{backgroundColor: "#485461",
            backgroundImage: "linear-gradient(315deg, #485461 0%, #28313b 74%)"}}>
          
          <CardActionArea>
          
            <img src={track.album.images[1].url} id="image"  alt="green iguana" />
           
            

            <CardContent >
              <Typography gutterBottom variant="h5" component="div">
               
              {track.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              {track.artists.name}
              <audio controls>
                <source src={track.preview_url} type="audio/mpeg" />
              </audio>

              </Typography>
            </CardContent>
          </CardActionArea>
          <i class="slider-component2_heart fa-solid fa-plus float-end text-end" id="plus" onClick={() => {setOpened(true);setId(track.id)}}></i>

          <i id="heart" class={`${heart}`}  onClick={addLikedSong.bind(this,track)} ></i>
          
          
        </Card>
        </div>)}
        


          


       </div>
     
    </div>
  );
}
