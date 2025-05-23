const express = require('express')

const app = express();
require('dotenv').config();
const aiRoutes = require('./Routes/Ai.route');
const PORT = 5000
app.use(express.json())

app.get("/",(req,res)=> {
    return res.json({
        success:"true",
        msg:"Server is Live !"
    })
})

app.use("/ai",aiRoutes);

app.listen(PORT,() => {
    console.log(`Server is Listening on ${PORT}`)
})