
const express = require('express')
require ('dotenv').config()

const app = express()

//middleware
app.use(express.json());

const connectDB = require('./config/connectDB')
connectDB()

//route Test
app.get('/', (req, res) => {
    res.status(200).json("Ceci est un Test");
});

//app.use(("/api/user",require("./routes/user.routes")))
app.use("/api/user", require("./routes/user.routes"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, (err) => {
    err ?
    console.log(err) : 
    console.log(`le serveur a demarrer sur le port : http://localhost:${PORT}`)
})
