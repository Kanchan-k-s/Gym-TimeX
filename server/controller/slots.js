const { db } = require("../models/dbConfig")

const add = async (req, res) => {
    try {
        const Slots = db.Models.slots
        // console.log(db.Models)
        const query = req.body
        const result = await Slots.create(query)
        res.send(result)

    } catch (e) {
        console.log(e)
    }
}

const show = async (req, res) => {
    const Slots = db.Models.slots
    try {
        const result = await Slots.findAll({
            order : [['id','ASC']]
        });
        res.send(result)
    } catch (e) {
        console.log(e)
    }
}

const showOne = async(req,res)=>{
    const Slots = db.Models.slots
    try {
        const result = await Slots.findByPk(req.params.id);
        res.send(result)
    } catch (e) {
        console.log(e)
    }
}

const update = async(req,res)=>{
    const Slots = db.Models.slots
    try{
        const data = await Slots.findOne({ where: { id: req.params.id } });
    if (data) {
      const result= await Slots.update(req.body, { where: { id: req.params.id } });
      res.send(result)
    }
    return "No such Id present";
    }catch(e){
        console.log(e)
    }
}

const delSlot = async(req,res)=>{
    const Slots = db.Models.slots
    try{
        const result= await Slots.destroy({ where: { id: req.params.id } });
        res.json(result)
    }
    catch(e){
        console.log(e)
    }
}

module.exports = {
    add,
    show,
    update,
    showOne,
    delSlot
}