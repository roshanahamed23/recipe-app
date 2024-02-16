import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import {Userrouter} from "../Routes/users.js";
const app = express();

app.use(express.json());
app.use(cors());
app.use('/auth',Userrouter)
app.listen(4000,()=>{
    mongoose.connect('mongodb+srv://roshan:roshan@cluster0.7mllm2v.mongodb.net/Cluster0?retryWrites=true&w=majority',{useNewUrlParser:true})
    console.log('the server started in port 3000');
 })