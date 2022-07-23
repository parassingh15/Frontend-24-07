import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';

export default function CreatePlayListModal() {
  const [PlayListName, setPlayListName] = React.useState('');
  let navigate = useNavigate();

  function CreatePlaylist(){
    console.log("hello");
    fetch('https://muzixplaylist.herokuapp.com/api/createPlaylist', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },

    body: JSON.stringify({
        name: PlayListName
    })
}).then(res => res.json())
    .then(data => {
      console.log(data)
      document.getElementById("alert").innerHTML+="<div class='alert alert-success' role='alert'>Playlist created successfully</div>";
     
    }
    ).catch(err=>{

        document.getElementById("alert").value="Playlist already exists";
    })

  
  
  
  }
  return (
    <div className='CreatePlayListModal'>
        <div id="alert"></div>
        <TextField id="standard-basic" onChange={e=>setPlayListName(e.target.value)} label="#Playlist" variant="standard" 
        sx={{width: 300, marginLeft: "50px"}}/>
        <Button onClick={CreatePlaylist} variant="outlined" style={{float: "right", marginTop: "15px"}} >Create</Button>

    </div>
  )
}
