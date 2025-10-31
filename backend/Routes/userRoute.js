const { Register, Login, logout } = require("../controllers/User");

const route = require("express").Router();

route.get("/",(req,res)=>{
    res.send("chalega gi")
})

route.post("/register",Register)
route.post("/login",Login)
route.get('/logout',logout)

module.exports = route