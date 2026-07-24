const express = require("express")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const path = require("path")
require("dotenv").config({ path: path.resolve(__dirname, "..", ".env") })

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
<<<<<<< HEAD
    origin: process.env.CLIENT_URL || "http://localhost:5173",
=======
    origin: "https://ai-resume-screening-system-wine.vercel.app/",
>>>>>>> 4242458c6df3cdfb9444831a1c3f62c9b09838a9
    credentials: true
}))

/* require all the routes here */
const authRouter = require("./routes/auth.routes")
const interviewRouter = require("./routes/interview.routes")


/* using all the routes here */
app.use("/api/auth", authRouter)
app.use("/api/interview", interviewRouter)



module.exports = app