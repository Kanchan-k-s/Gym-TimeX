require("dotenv").config();
const { client } = require("./models/dbConfig")
const express = require("express")
const cors = require("cors");

const User = require("./routes/user")
const Admin = require("./routes/admin")
const Employee = require("./routes/employee")

const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: false }));
app.use(cors())

// const router = express.Router();
// router.get('/',User);
app.use("/user",User)
app.use("/admin",Admin)
app.use("/employee",Employee)

app.get('/hi',async(req,res)=>{
    const n = await client.query("Select * from test;")
    const r = n.rows
    res.send(r[0].name)
})

const { connectDB } = require("./models/dbConfig");
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
  


