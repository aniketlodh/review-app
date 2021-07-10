const express=require('express')
const mongoose=require('mongoose')
require("dotenv").config()
mongoose.connect('mongodb+srv://Review:Review1234@cluster0.fd6tu.mongodb.net/Review?retryWrites=true&w=majority',{ useNewUrlParser: true , useUnifiedTopology: true })
const reviews=require('./models/reviews')
const bodyParser=require("body-parser");
let PORT=process.e
const app=express()
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
const cors=require('cors')
app.use(
    cors({
      origin: "*"
    })
  );
app.get('/reviews',(req,res)=>{
    reviews.find({},(err,reviews)=>{
        if(err){
            console.log(err);
        }else{
            res.json(reviews)
        }
    }).sort({_id:-1})
})
app.post('/reviews',(req,res)=>{
    let review={
        title:req.body.title,
        description:req.body.description,
        details:req.body.details,
        rating:req.body.rating
    }
    reviews.create(review,(err,review)=>{
        if(err){
            console.log(err);
        }else{
            res.json("success");
        }
    })
})
app.listen(process.env.PORT || 3001,()=>{
    console.log("success");
});