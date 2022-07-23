import React from 'react'
import './PlaylistSongPage.css'

import { useState } from "react";
import '../SliderComponent_2/SliderComponent_2.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import { CardActionArea } from '@mui/material';



import personalPlaylistImage from '../../img/personalplaylist.jpg'

import Typography from "@mui/material/Typography";

import { useParams } from 'react-router-dom';

export default function PlaylistSongPage() {

    let { id } = useParams();

    const [playlist, setPlaylist] = React.useState([]);
    React.useEffect(() => {
        // get playlists
        fetch(`https://muzixplaylist.herokuapp.com/api/getPlaylist/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(data => {console.log(data)
                setPlaylist(data);
            }
            );  
    }, [id]);

function deleteSong(SongId) {

    fetch(`https://muzixplaylist.herokuapp.com/api/deleteSongToPlaylist/${playlist._id}/${SongId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
       
    }).then(res => res.json())
        .then(data => {
          console.log(data)
          console.log("hello")
            // filter data by spliceing the song
            //use splice to remove the song from the playlist
            console.log(SongId,"SongId")
            data.songs.map((song,index)=>{
              console.log(song.favPlaylist[0].id,"songs id")
              if(song.favPlaylist[0].id===SongId){
                  data.songs.splice(index,1);
                  setPlaylist(data);
              }

          }
          )
           

            
     
}
    );
}

  

  return (
    <div className='PlaylistSongPage'>
            <div className="LikedSongHead">
            <img className='playlistImg' src={personalPlaylistImage} alt="" />
            <h1 className='LikedName' style={{fontFamily: "Open Sans", fontSiz: "16px"}}>{playlist.playlistName} </h1>
        </div>

        <div className='Sub-SliderComponent'>
        {playlist.songs?.map((item) =>
          <div className="SliderComponent_2_card" >
            
          <Card className='cards-layout'
          sx={{backgroundColor: "#485461",
            backgroundImage: "linear-gradient(315deg, #485461 0%, #28313b 74%)"}}>
          
          <CardActionArea>
          
          <img src={item.favPlaylist[0].album.images[1].url} id="image"  alt="green iguana"/>
           
          
            

            <CardContent >
              <Typography gutterBottom variant="h5" component="div">
               
              {item.favPlaylist[0].name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              {item.favPlaylist[0].artists.name}
              

              <audio controls>
                <source src={item.favPlaylist[0].preview_url} type="audio/mpeg" />
              </audio>

              </Typography>
            </CardContent>
          </CardActionArea>
          <i class="slider-component2_heart fa-solid fa-minus float-end text-end" id="plus" onClick={deleteSong.bind(this,item.favPlaylist[0].id)}></i>

          <i id="heart" class="slider-component2_heart fa-regular fa-heart float-end text-end"  ></i>
          
          
        </Card>
        </div>)}


      

    </div>
        
        
    </div>
  )
}
