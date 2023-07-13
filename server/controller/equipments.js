const { db } = require("../models/dbConfig")

const add = async (req, res) => {
    try {
        const Equipment = db.Models.equipments
        // console.log(db.Models)
        const query = req.body
        const result = await Equipment.create(query)
        res.send(result)

    } catch (e) {
        console.log(e)
    }
}

const show = async (req, res) => {
    const Equipment = db.Models.equipments
    try {
        const result = await Equipment.findAll();
        console.log(result)
        res.send(result)
    } catch (e) {
        console.log(e)
    }
}

const showOne = async(req,res)=>{
    const Equipment = db.Models.equipments
    try {
        const result = await Equipment.findByPk(req.params.id);
        res.send(result)
    } catch (e) {
        console.log(e)
    }
}

const update = async(req,res)=>{
    const Equipment = db.Models.equipments
    try{
        const data = await Equipment.findOne({ where: { id: req.params.id } });
    if (data) {
      const result= await Equipment.update(req.body, { where: { id: req.params.id } });
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