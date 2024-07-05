 require('dotenv').config();
const express = require("express");
const cors = require('cors');
const toDoRoutes = require("./routes/ToDoRoutes")
const connectDB = require('./confiq/db');
const app = express();
app.use(cors());


const port = process.env.PORT || 9000

app.use(express.json());

// Call the connectDB function
connectDB()

app.get("/test", (req, res) => {
    return res.status(200).json({ success: true, message: "Test successful. Server is successfully running!" })
})
app.use("/todo", toDoRoutes) // Register ToDo routes under the '/todo' path
app.listen(port, () => {
    console.log("Connected to port " + port)
})