const { sequelize, db } = require("../models/dbConfig")
const { Op } = require("sequelize")
const add = async (req, res) => {
    try {
        const Slots = db.Models.slots
        // console.log(db.Models)
        const query = req.body
        console.log(query)
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
            order: [['date', 'DESC'], ['slot_in', 'ASC']]
        });
        res.send(result)
    } catch (e) {
        console.log(e)
    }
}

const showDate = async (req, res) => {
    // let curr_date = new Date();
    const { curr_date } = req.body
    const Users = db.Models.user
    const Slots = db.Models.slots
    try {
        let result = await Slots.findAll({
            where: {
                date: {
                    [Op.gte]: curr_date
                }
            },
            order: [['date', 'ASC'], ['slot_in', 'ASC']]
        });
        let user = await Users.findByPk(req.userId)
        // console.log(user)
        let Gym = db.Models.gyms;
        const capacity = await Gym.findAll()
        result.forEach(ele => {
            ele.nop = capacity[0].capacity - ele.nop
            if (ele.id === user.slot_id) {
                ele.dataValues['Active'] = true
            }
            else {
                ele.dataValues['Active'] = false
            }
        });
        res.send(result)
    } catch (e) {
        console.log(e)
    }
}

const showOne = async (req, res) => {
    const Slots = db.Models.slots
    try {
        const result = await Slots.findByPk(req.params.id);
        res.send(result)
    } catch (e) {
        console.log(e)
    }
}


const updateNop = async (req, res) => {
    const Slots = db.Models.slots
    const Users = db.Models.user
    const Gyms=db.Models.gyms
    try {
        const Slot_data = await Slots.findOne({ where: { id: req.params.id } });
        const userId = req.userId;
        let capacity = await Gyms.findAll();
        capacity = capacity[0].capacity
        // console.log("capacity", capacity)
        const User_data = await Users.findByPk(userId);
        // console.log(Slot_data.nop)
        // console.log(User_data.slot_id)
        if (Slot_data.nop >= 0 && Slot_data.nop < capacity && User_data.slot_id !== Slot_data.id) {
            if (User_data.slot_id === -1) {
                const user = await Users.update({ 'slot_id': Slot_data.id }, {
                    where: {
                        id: userId
                    }
                })
                const result = await Slots.update({ nop: sequelize.literal('nop +1') }, { where: { id: req.params.id } });

                res.status(200).json({
                    success: true,
                    
                    msg: "Slot Booked",
                     
                  });
            }
            else if (User_data.slot_id !== Slot_data.id) {

                const result = await Slots.update({ nop: sequelize.literal('nop -1') }, { where: { id: User_data.slot_id } });
                const user = await Users.update({ 'slot_id': Slot_data.id }, {
                    where: {
                        id: userId
                    }
                })
                await Slots.update({ nop: sequelize.literal('nop +1') }, { where: { id: Slot_data.id } });

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

            // console.log(result)
            res.status(200).json({
                success: true,
                
                msg: "Slot UnBooked",
                 
              });
            }else{
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
    console.log(req.body)
    const Slots = db.Models.slots
    try {
        const data = await Slots.findOne({ where: { id: req.params.id } });
        if (data) {
            const result = await Slots.update(req.body, { where: { id: req.params.id } });
            res.send(result)
        }
        return "No such Id present";
    } catch (e) {
        console.log(e)
    }
}

const delSlot = async (req, res) => {
    const Slots = db.Models.slots
    try {
        const result = await Slots.destroy({ where: { id: req.params.id } });
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
    showOne,
    delSlot,
    showDate,
    updateNop
}