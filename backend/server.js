const express = require("express");
const app = express();
const cors = require("cors")
const cookieParser = require("cookie-parser")
const colors = require("colors")
require("dotenv").config();
require("./Models/db")
const route = require("./Routes/userRoute")
const path = require("path")

const _dirname = path.resolve();


app.use(cors({
    origin: "http://localhost:5173", 
    credentials: true                
  }))
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use("/api",route)


app.use(express.static(path.join(_dirname,"/frontend/dist")))
app.get('/*',(req,res)=>{
  res.sendFile(path.resolve(_dirname,"frontend","dist","index.html"))
})

app.listen(process.env.PORT,()=>{
    console.log(`serveris running on`.bgCyan.white , process.env.PORT)
})