const { sequelize, db } = require("../models/dbConfig")
const { Op } = require("sequelize")
const add = async (req, res) => {
    try {
        const Sponsor = db.Models.sponsor
        // console.log(db.Models)
        const query = req.body
        // console.log(query)
        const result = await Sponsor.create(query)
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

const addRevenue = async (req, res) => {
    const Sponsor = db.Models.sponsor
    try {
        const adds = await Sponsor.findByPk(req.params.id)
        const result = await Sponsor.update({
            Revenue: adds.Revenue + adds.Amount
            // nop: sequelize.literal('nop +1')
        }, {
            where: {
                id: req.params.id
            }
        });
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
    const Sponsor = db.Models.sponsor
    try {
        const result = await Sponsor.findAll();
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

const update = async (req, res) => {
    const Sponsor = db.Models.sponsor
    try {
        const data = await Sponsor.findOne({ where: { id: req.params.id } });
        if (data) {
            const result = await Sponsor.update(req.body, { where: { id: req.params.id } });
            res.status(200).json({
                success: true,
                result
            });
        }else{
            res.status(400).json({
                success: false,
                msg:"No such Id present"
            });
        }
        
    } catch (e) {
        res.status(500).json({
            success: false,
            errors: [{ msg: "Server error" }],
        });
    }
}

const delrow = async (req, res) => {
    const Sponsor = db.Models.sponsor
    try {
        const result = await Sponsor.destroy({ where: { id: req.params.id } });
        res.status(200).json({
            success: true,
            result
        });
    }
    catch (e) {
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
    delrow,
    addRevenue
}