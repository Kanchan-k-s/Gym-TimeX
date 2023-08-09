const { sequelize, db } = require("../models/dbConfig")
const { Op } = require("sequelize")
const add = async (req, res) => {
    try {
        const Slots = db.Models.slots
        // console.log(db.Models)
        const query = req.body
        // console.log(query)
        const result = await Slots.create(query)
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
    const Slots = db.Models.slots
    try {
        const result = await Slots.findAll({
            order: [['date', 'DESC'], ['slot_in', 'ASC']]
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

const showDate = async (req, res) => {
    // let curr_date = new Date();
    const { curr_date } = req.body
    const Users = db.Models.user
    const Slots = db.Models.slots
    const Relation = db.Models.relations
    try {
        let result = await Slots.findAll({
            where: {
                date: {
                    [Op.eq]: curr_date.split('T')[0]+'T00:00:00.000Z'
                }
            },
            order: [['date', 'ASC'], ['slot_in', 'ASC']]
        });
        // console.log(req.userId)
        // console.log(curr_date)
        let rel = await Relation.findAll({where:{
            user_id:req.userId,
            date:curr_date.split('T')[0]+'T00:00:00.000Z'
        }})
        // console.log(rel)
        let Gym = db.Models.gyms;
        const capacity = await Gym.findAll()
        if(result.length>0)
        {
            if(rel.length>0)
            {
                result.forEach(ele => {
                    ele.nop = capacity[0].capacity - ele.nop
                    // console.log(rel[0].slot_id)
                    if ( ele.id === rel[0].slot_id) {
                        ele.dataValues['Active'] = true
                    }
                    else {
                        ele.dataValues['Active'] = false
                    }
                });
                res.send({
                    success:true,
                    result
                })
                
            }
            else{
                result.forEach(ele => {
                    ele.nop = capacity[0].capacity - ele.nop
                    ele.dataValues['Active']=false
                })
                res.send({
                    success:true,
                    result
                })
            }
            
            
        }else{
            res.send({
                success:false,
                msg:"No Slot"
            })
        }
        
    } catch (e) {
        res.status(500).json({
            success: false,
            errors: [{ msg: "Server error" }],
        });
    }
}

const showOne = async (req, res) => {
    const Slots = db.Models.slots
    try {
        const result = await Slots.findByPk(req.params.id);
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


const updateNop = async (req, res) => {
    const Slots = db.Models.slots
    const Users = db.Models.user
    const Gyms = db.Models.gyms
    const Relation = db.Models.relations
    try {
        const Slot_data = await Slots.findOne({ where: { id: req.params.id } });
        const userId = req.userId;
        let capacity = await Gyms.findAll();
        capacity = capacity[0].capacity
        // console.log("capacity", capacity)
        const User_data = await Users.findByPk(userId);
        // console.log(Slot_data.nop)
        // console.log(User_data.slot_id,userId )
         if (Slot_data.nop <= 0 ||( Slot_data.nop < capacity && User_data.slot_id !== Slot_data.id)) {
            if (User_data.slot_id === -1) {
                const user = await Users.update({ 'slot_id': Slot_data.id }, {
                    where: {
                        id: userId
                    }
                })
                const result = await Slots.update({ nop: sequelize.literal('nop +1') }, { where: { id: req.params.id } });
                const rel = await Relation.findOrCreate({ where: { 'slot_id': req.params.id, 'user_id': userId ,'date': Slot_data.date} })
                res.status(200).json({
                    success: true,

                    msg: "Slot Booked",

                });
            }
            else if (User_data.slot_id !== Slot_data.id) {
                // console.log("hi")
                const result = await Slots.update({ nop: sequelize.literal('nop -1') }, { where: { id: User_data.slot_id } });
                const user = await Users.update({ 'slot_id': Slot_data.id }, {
                    where: {
                        id: userId
                    }
                })
                await Slots.update({ nop: sequelize.literal('nop +1') }, { where: { id: Slot_data.id } });
                
                const rel = await Relation.destroy({ where: { 'slot_id': User_data.slot_id ,'user_id': userId,'date': Slot_data.date } })
                const check = await Relation.findOrCreate({ where: { 'slot_id': Slot_data.id, 'user_id': userId,'date': Slot_data.date } })
                // if()
                // const rel = await Relation.create({'slot_id':req.params.id,'user_id':userId})
                res.status(200).json({
                    success: true,

                    msg: "Slot Booked",

                });
            }
        }else if (User_data.slot_id === Slot_data.id) {

            const result = await Slots.update({ nop: sequelize.literal('nop -1') }, { where: { id: User_data.slot_id } });
            const user = await Users.update({ 'slot_id': -1 }, {
                where: {
                    id: userId
                }
            })
            const rel = await Relation.destroy({ where: { 'slot_id': req.params.id, 'user_id': userId , 'date':Slot_data.date} })
            // console.log(result)
            res.status(200).json({
                success: true,

                msg: "Slot UnBooked",

            });
        }else {
            return res.status(400).json({
                success: false,
                errors: [
                    {
                        msg: "Cannot Book this Slot",
                    },
                ],
            });

        }


    } catch (e) {
        return res.status(404).json({
            success: false,
            errors: [
                {
                    msg: "Error occured",
                },
            ],
        });
    }
}

const update = async (req, res) => {
    // console.log(req.body)
    const Slots = db.Models.slots
    try {
        const data = await Slots.findOne({ where: { id: req.params.id } });
        if (data) {
            const result = await Slots.update(req.body, { where: { id: req.params.id } });
            res.status(200).json({
                success: true,
                result
            });
        }else{
            res.status(200).json({
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

const delSlot = async (req, res) => {
    const Slots = db.Models.slots
    try {
        const result = await Slots.destroy({ where: { id: req.params.id } });
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
    showOne,
    delSlot,
    showDate,
    updateNop
}