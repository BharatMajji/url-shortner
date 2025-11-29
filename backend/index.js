
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'; 
import { nanoid } from 'nanoid';
dotenv.config() 
const app=express();
app.use(cors())
app.use(express.json()); 
mongoose.connect(process.env.DATABASE_URL)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err)); 

 const urlSchema=new mongoose.Schema({
    originalUrl:String,
    shortUrl:String,
    clicks:{type:Number,default:0},
 });

const Url=mongoose.model('Url',urlSchema);
app.post('/api/shorten',async(req,res)=>{
    try{
         const{originalUrl}=req.body;
         if(!originalUrl) return res.status(400).json({error:'Original URL is required'});
         const shortUrl=nanoid(8);
         const url=new Url({originalUrl, shortUrl});
        await url.save();
        const baseUrl = process.env.BASE_URL || `https://${req.get('host')}`;
        return res.status(200).json({message:"URL GENERATED SUCCESSFULLY",url:{...url.toObject(), shortUrl: `${baseUrl}/${shortUrl}`}});
    }catch(err){
        console.error(err);
        return res.status(500).json({error:'Server error'});
    }
});
     app.get('/:shortUrl',async(req,res)=>{
        try{
            const{shortUrl}=req.params;
            const url=await Url.findOne({shortUrl});
            if(!url) return res.status(404).json({error:'URL not found'});
            url.clicks+=1;
            await url.save();
            return res.redirect(url.originalUrl);
        }catch(err){
            return res.status(500).json({error:'Server error'});
        }
    });

 app.listen(3000,()=>console.log('Server started on port 3000'));