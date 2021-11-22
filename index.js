const express= require("express");
const knex = require('./knex/knex.js');
const app=express();
const cors=require("cors");
app.use(cors());
app.use(express.json());
const db=require("./database/database");

const fullstackRoute=require("./routes/fulstackrout");
app.use("/angNode/",fullstackRoute);
app.listen(5000,()=>{
    console.log("server runs in the ports   5000")
})