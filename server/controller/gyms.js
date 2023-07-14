
const { db } = require("../models/dbConfig")

const add = async (req, res) => {
    try {
        const Gyms= db.Models.gyms
        const query = req.body
        const result = await Gyms.create(query)
        res.send(result)

    } catch (e) {
        console.log(e)
    }
}

const show = async (req, res) => {
    const Gyms = db.Models.gyms
    try {
        const result = await Gyms.findAll();
        res.send(result)
    } catch (e) {
        console.log(e)
    }
}

const showOne = async(req,res)=>{
    const Gyms = db.Models.gyms
    try {
        const result = await Gyms.findByPk(req.params.id);
        res.send(result)
    } catch (e) {
        console.log(e)
    }
}

const update = async(req,res)=>{
    const Gyms = db.Models.gyms
    try{
        const data = await Gyms.findOne({ where: { id: req.params.id } });
    if (data) {
      const result= await Gyms.update(req.body, { where: { id: req.params.id } });
      res.send(result)
    }
    return "No such Id present";
    }catch(e){
        console.log(e)
    }
}

module.exports = {
    add,
    show,
    update,
    showOne
}