const mongoose = require("mongoose")

mongoose.connect(process.env.MONN_CONN).then((res)=>{
    console.log("DB Connected")
}).catch((error)=>{
   console.log("error",error)
})