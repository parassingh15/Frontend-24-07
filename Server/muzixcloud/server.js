import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import SongRoutes from './routes/SongRoutes.js';
const app=express();
app.use(cors());
app.use(bodyParser.json());
app.use("/api",SongRoutes);


let port=process.env.PORT || 8000;
app.listen(port,()=>{
    console.log('server is running on port 8000');
}
);

