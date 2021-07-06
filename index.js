
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
// import { theaterRouter } from "./routes/theaters.js";
// import router from "./routes/recipe.js";
const app=express();
const PORT=5000;
const con = mongoose.connection;
con.on("open", () => console.log("MongoDB is connected"));

// middleware
app.use(cors());
app.use(express.json());
const theaters=[
    {
      id:1,
      name:"Vasu A/c RGB Laser Dolby",
      address:'22, Dr Besant Rd',
      description:"Cinema featuring a lineup of Tamil films in an air-conditioned                  theater, plus a canteen"
    },
    {
      id:2,
      name:'Baranika Theatre',
      address:'Plot No, 914, Bakthapuri St',
      description:'Basic movie house with a sizable screen, a comfy interior &                      concessions'
    },{
      id:3,
      name:'Selvam Cinema Hall',
      address:'Dr Besant Rd',
      description:'Temporarily closed'
    },
    {
      id:4,
      name:'Kasi Theatre',
      address:'75, TSR Big St',
      description:'Basic movie house with a sizable screen, a comfy interior &                      concessions'
    },
    {
      id:5,
      name:'Vijaya Theatre',
      address:'Premier Towers, Lakshmi Vilas St, beside Anbu Hospital',
      description:"The theater has been renovated and sound quality is very good."
    },
    {
      id:6,
      name:'MSM Theatre',
      address:'Premier Towers, Lakshmi Vilas St',
      description:"Msm theater are part of our life."
    },
    {
      id:7,
      name:'Vijaya Lakshmi Theater',
      address:'Dr Besant Rd',
      description:"theater of new movies were every time released in this place."
    },
    {
      id:8,
      name:'New Vinayaga Cable',
      address:'8/23, KK Neelamegam St',
      description:"theater of new movies were every time released in this place."
    }
  ]
  

app.get("/", (request, respone) => {
  respone.send("Welcome to node app!!!! Hi Guys");
});
app.get("/theaters", (request, respone) => {
    respone.send(theaters);
  });
  app.post('/theaters',async (request, respone) => {
    const addTheater = request.body;
    console.log(addTheater);

    try {
    //   const newTheater = await theater.save();
    theaters.push({"id" : theaters.length+1,...addTheater});
      respone.send(addTheater);
    } catch (err) {
      respone.status(500);
      respone.send(err);
      console.log(err);
    }
  });
  app.delete('/theaters/:id' ,async (request, respone) => {
    const { id } = request.params;
    try {
      const theater = await theaters.filter(e=>e.id!==id);
      
      respone.send({
        message: "Deleted successfully",...theater
      });
    } catch (err) {
      respone.status(500);
      respone.send("User is missing");
      console.log(err);
    }
  })
 

// app.use('/theaters',theaterRouter);
app.listen(PORT, () => console.log("The server is started in " + PORT));
