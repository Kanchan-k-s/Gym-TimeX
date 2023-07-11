const Gyms=require("../models/Gyms")

const demo=async(req,res)=>{
    const result =  await Gyms.findAll();
    res.send(result);
}

module.exports={
    demo
}

