const { sequelize, db } = require("../models/dbConfig")
const { Op } = require("sequelize")
const add = async (req, res) => {
    try {
        const Sponsor = db.Models.sponsor
        // console.log(db.Models)
        const query = req.body
        // console.log(query)
        const result = await Sponsor.create(query)
        res.send(result)
    } catch (e) {
        console.log(e)
    }
}

const show = async (req, res) => {
    const Sponsor = db.Models.sponsor
    try {
        const result = await Sponsor.findAll();
        res.send(result)
    } catch (e) {
        console.log(e)
    }
}

const update = async(req,res)=>{
    const Sponsor = db.Models.sponsor
    try{
        const data = await Sponsor.findOne({ where: { id: req.params.id } });
    if (data) {
      const result= await Sponsor.update(req.body, { where: { id: req.params.id } });
      res.send(result)
    }
    return "No such Id present";
    }catch(e){
        console.log(e)
    }
}

const delrow = async (req, res) => {
    const Sponsor = db.Models.sponsor
    try {
        const result = await Sponsor.destroy({ where: { id: req.params.id } });
        res.json(result)
    }
    catch (e) {
        console.log(e)
    }
}

module.exports = {
    add,
    show,
    update,
    delrow
}