import express  from 'express'


import {router} from './routes/route.js'
import { fetchCryptoData } from './job/fetchCryptoData.js';
import dotenv from "dotenv"
import { connectDB } from './config/db.js';
dotenv.config()
connectDB(); 
const runJobEveryTwoHours = () => {
    console.log('Starting job at:', new Date().toISOString());
    fetchCryptoData();
  };
  
 
  setInterval(runJobEveryTwoHours, 2 * 60 * 60 * 1000);
  
 
  runJobEveryTwoHours();

const app = express();

app.use(express.json())

app.use("/api/v1",router);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
