const {db}=require("../models/dbConfig")

const demo=async(req,res)=>{
    try{
        const Gyms=db.Models.gyms
        // console.log(db.Models.gyms)
        // await db.Models.gyms.create({opening_time : '02:00:00',closing_time :'03:00:00',capacity:20});
        const result = await Gyms.findAll()
        res.send(result);
    }catch(e){
        console.log(e)
    }
    
}

const login = async(req,res)=>{
    const User = db.Models.user
    try{
        const result= await User.findAll();
        res.send(result)
    }catch(e){
        console.log(e)
    }
}

const register = async(req,res)=>{
    
    const query = req.body
    const User = db.Models.user
    try{
        const result= await User.create(query);
        console.log(req.body)
        res.send(result)
    }catch(e){
        console.log(e)
    }
}



module.exports={
    demo,
    login,
    register
}

