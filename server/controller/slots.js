const { db } = require("../models/dbConfig")
const {Op} =require("sequelize")
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
            order : [['date','DESC'],['slot_in','ASC']]
        });
        res.send(result)
    } catch (e) {
        console.log(e)
    }
}

const showDate = async (req, res) => {
    // let curr_date = new Date();
    const {curr_date}=req.body
    const Slots = db.Models.slots
    try {
        let result = await Slots.findAll({
            where:{
                date:{
                    [Op.gte]:curr_date
                }
            },
            order : [['date','ASC'],['slot_in','ASC']]
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
    console.log(req.body)
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
    delSlot,
    showDate
}