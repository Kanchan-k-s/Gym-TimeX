const { client } = require("../config/dbConfig");

exports.demo=async(req,res)=>{
    const result = (await client.query("Select * from users;")).rows;
    res.send(result);
}

