const express = require("express")
const cors = require("cors")
require("dotenv").config()

const aiRoutes = require("./routes/aiRoutes")

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req,res)=> {
    res.json({
        message: "AniVerse API Running"
    })
})

app.use("/api/ai", aiRoutes)
const PORT = 5000;

app.listen(PORT, ()=> {
    console.log(
        `Server runnign on ${PORT}`
    )
});