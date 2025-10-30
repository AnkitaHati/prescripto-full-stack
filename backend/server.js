import express from "express"
import cors from 'cors'
import 'dotenv/config'
import connectDB from "./config/mongodb.js"
import connectCloudinary from "./config/cloudinary.js"
import userRouter from "./routes/userRoute.js"
import doctorRouter from "./routes/doctorRoute.js"
import adminRouter from "./routes/adminRoute.js"

// app config
const app = express()
const PORT = process.env.PORT || 4000   // ✅ Use uppercase consistently

connectDB()
connectCloudinary()

// middlewares
app.use(express.json())
app.use(cors())

// api endpoints
app.use("/api/user", userRouter)
app.use("/api/admin", adminRouter)
app.use("/api/doctor", doctorRouter)

app.get("/", (req, res) => {
  res.send("✅ API Working Successfully")
})

// ✅ Important: bind to 0.0.0.0 so Render detects the open port
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server started on PORT ${PORT}`)
})
