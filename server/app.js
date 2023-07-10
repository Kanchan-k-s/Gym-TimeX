require("dotenv").config();
const { client } = require("./config/dbConfig")
const express = require("express")
const cors = require("cors");

const User = require("./routes/user")

const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: false }));
app.use(cors())

// const router = express.Router();
// router.get('/',User);
app.use("/user",User)

app.get('/hi',async(req,res)=>{
    const n = await client.query("Select * from test;")
    const r = n.rows
    res.send(r[0].name)
})

const { connectDB } = require("./config/dbConfig");
const port = process.env.PORT || 3000;

const startServer = async function () {
    try {
      await connectDB();
      const server = app.listen(port, () => {
        console.log("Server is running on port :", port);
      });
      
    } catch (error) {
      console.log("Error in starting the server .");
    }
  };
  
startServer();
  


