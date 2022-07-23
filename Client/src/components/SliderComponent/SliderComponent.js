import React from 'react'
import './SliderComponent.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Login from '../../img/login.PNG'


export default function SliderComponent() {
  const [SongData, setSongData] = React.useState([]);

  React.useEffect(() => {
    const apikey='37fa14ba27d26e5cefaed6b5832eb835';
    let urllastfm=`http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${apikey}&format=json`
    //let myapiurl="http://localhost:8000/api/topArtists"
    fetch(urllastfm)
      .then(res => res.json())
      .then(data => {
        setSongData(data.artists.artist);
      }
      )
  }, []);
   
   


 



  return (
    <div className='SliderComponent'>
      <h2 className='SliderComponentHeading SongComponentHeading'>Trending Songs</h2>
      <div className='Sub-SliderComponent'>
        {SongData.map((Song) => <div className="card">
      <Card 
      sx={{backgroundColor: "#485461",
      backgroundImage: "linear-gradient(315deg, #485461 0%, #28313b 74%)", color: "white"}}>
      <CardActionArea>
        <CardMedia
          //component={`"${Song.image[0]['#text']}"`}
          component="img"
          height="240"
          image={Login}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {Song.name}
          </Typography>
          <Typography variant="body2" color="text.secondary"
          sx={{color: "lightgrey"}}>
            {Song.listeners}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
        )}

      <div className="card">
      <Card >
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image={Login}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Song Name
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Artist Name
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>

    <div className="card">
      <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image={Login}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Song Name
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Artist Name
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>

    <div className="card">
      <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image={Login}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Song Name
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Artist Name
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>

    <div className="card">
      <Card >
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image={Login}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Song Name
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Artist Name
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>

    


    </div>
    </div>
  )
}
