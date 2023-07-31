
const { db } = require("../models/dbConfig")

const add = async (req, res) => {
    try {
        const Gyms= db.Models.gyms
        const query = req.body
        const result = await Gyms.create(query)
        res.status(200).json({
            success: true,
            result
        });

    } catch (e) {
        res.status(500).json({
            success: false,
            errors: [{ msg: "Server error" }],
        });
    }
}

const show = async (req, res) => {
    const Gyms = db.Models.gyms
    try {
        const result = await Gyms.findAll();
        res.status(200).json({
            success: true,
            result
        });
    } catch (e) {
        res.status(500).json({
            success: false,
            errors: [{ msg: "Server error" }],
        });
    }
}

const showOne = async(req,res)=>{
    const Gyms = db.Models.gyms
    try {
        const result = await Gyms.findByPk(req.params.id);
        res.status(200).json({
            success: true,
            result
        });
    } catch (e) {
        res.status(500).json({
            success: false,
            errors: [{ msg: "Server error" }],
        });
    }
}

const update = async(req,res)=>{
    const Gyms = db.Models.gyms
    try{
        const data = await Gyms.findOne({ where: { id: req.params.id } });
    if (data) {
      const result= await Gyms.update(req.body, { where: { id: req.params.id } });
      res.status(200).json({
        success: true,
        result
    });
    }
    return "No such Id present";
    }catch(e){
        res.status(500).json({
            success: false,
            errors: [{ msg: "Server error" }],
        });
    }
}

module.exports = {
    add,
    show,
    update,
    showOne
}