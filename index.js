import express from 'express'
import dotenv from 'dotenv'
import helmet from 'helmet'
import morgan from 'morgan'
import connectDB from './Database/db.js'



dotenv.config();


const app = express();

const PORT = process.env.PORT || 3001;


app.listen(PORT, ()=> {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
})
