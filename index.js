const express=require('express');
const app=express();
const  port=process.env.PORT || 3000
// const mongoose=require('mongoose');
// mongoose.connect('mongodb+srv://Admin:Airserve3@cluster0.amd1n.mongodb.net/Tbirds_boundry?retryWrites=true&w=majority',
// { useNewUrlParser: true,  useUnifiedTopology: true },
// (err)=>{
//   if(!err){console.log("Mongodb Connected")}
//   else{console.log(err)}
// });
// const Schema = mongoose.Schema; 

// const Property = new Schema();

// const PropertyModel=mongoose.model('states',Property)
app.get('/',(req,res)=>{
    res.json("My First App is deploying at aws")
})
// app.get('/api',(req,res)=>{
//     PropertyModel.find({},(err,data)=>{
//         if(!err)res.json(data)
//         else res.json(err)
//     })
// })

app.listen(port,()=>{
    console.log("Listening at ",port)
})
