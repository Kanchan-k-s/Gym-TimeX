const { db } = require("../models/dbConfig");
const { Op, and } = require("sequelize")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;
const tokenLife = process.env.TOKEN_LIFE;
const allUser = async (req, res) => {
  try {
    const User = db.Models.user;
    const Slots = db.Models.slots;

    const users = await User.findAll({
      attributes: ['id', 'name', 'email', 'check_in', 'check_out', 'slot_id'],
    });

    const slotIds = users.map((user) => user.slot_id);
    const slots = await Slots.findAll({
      attributes: ['id', 'date', 'slot_in', 'slot_out'],
      where: {
        id: slotIds,
      },
    });

    const usersWithSlotInfo = users.map((user) => {
      const userSlot = slots.find((slot) => slot.id === user.slot_id);
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        slot_id: user.slot_id,
        date: userSlot ? userSlot.date : null,
        slot_in: userSlot ? userSlot.slot_in : null,
        slot_out: userSlot ? userSlot.slot_out : null,
        check_in: user.check_in,
        check_out: user.check_out
      };
    });

    // console.log(usersWithSlotInfo);
    res.send(usersWithSlotInfo);
  } catch (e) {
    res.status(500).json({
      success: false,
      errors: [{ msg: "Server error" }],
    });
  }
};
const login = async (req, res) => {
  try {
    const User = db.Models.user;
    const query = { email: req.body.email };
    const result = await User.findOne({ where: query });
    if (result !== null) {
      const data = {
        userId: result.id,
        type: result.type,
      };
      bcrypt.compare(req.body.password, result.password, (err, isMatch) => {
        if (err) {
          res.json({
            success: false,
            errors: [
              {
                msg: "Invalid credentials",
              },
            ],
          });
        }
        if (isMatch) {
          // creating JWT token with payload as user id and role
          jwt.sign(data, secret, { expiresIn: tokenLife }, (err, token) => {
            if (err) {
              res.status(404).json({
                success: false,
                errors: [
                  {
                    msg: err.msg,
                  },
                ],
              });
            } else {
              res.status(200).json({
                success: true,
                token: `${token}`,
                user: {
                  name: result.name,
                  type: result.type,
                },
                message: "Login Successful.",
              });
            }
          });
        } else {
          // password is incorrect
          res.status(400).json({
            success: false,
            errors: [
              {
                msg: "Invalid Credentials",
              },
            ],
          });
        }
      });
    } else {
      res.status(404).json({
        success: false,
        errors: [
          {
            msg: err.msg,
          },
        ],
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      errors: [
        {
          msg: "Internal server error",
        },
      ],
    });
  }
};
const register = async (req, res) => {
  try {
    const User = db.Models.user;
    const query = req.body;
    const check = await User.findAndCountAll({ where: { email: query.email } });
    // console.log(check);
    if (check.count !== 0) {
      res.status(400).json({
        success: false,
        errors: [{ msg: "Email Already Exists" }],
      });
    } else {
      query["type"] = "Employee";
      const hashedPassword = await bcrypt.hash(query.password, 10);
      query.password = hashedPassword;
      const result = await User.create(query);
      const data = {
        userId: result.id,
        type: result.type,
      };
      jwt.sign(data, secret, { expiresIn: tokenLife }, (err, token) => {
        if (err) {
          res.status(404).json({
            success: false,
            errors: [
              {
                msg: err.msg,
              },
            ],
          });
        } else {
          res.status(200).json({
            success: true,
            token: `${token}`,
            user: {
              name: result.name,
              type: result.type,
            },
            message: "Registration Successful.",
          });
        }
      });

    }
  } catch (e) {
    res.status(500).json({
      success: false,
      errors: [{ msg: "Server error" }],
    });
  }
};

const booking = async (req, res) => {
  try {

    let { curr_date } = req.body
    curr_date = new Date(curr_date.split('T')[0] + 'T00:00:00.000Z')
    const User = db.Models.user;
    const Slots = db.Models.slots;

    const users = await User.findAll({
      attributes: ['id', 'name', 'email', 'check_in', 'check_out', 'slot_id'],
    });

    const slotIds = users.map((user) => user.slot_id);
    const slots = await Slots.findAll({
      attributes: ['id', 'date', 'slot_in', 'slot_out'],
      where: {
        id: slotIds,
        date:{
          [Op.eq]:curr_date
        }
      },
    });
    // const text = slots.find((slot) => (slot.id === user.slot_id && slot.date===curr_date));
    let usersWithSlotInfo = users.map((user) => {
      const userSlot = slots.find((slot) => slot.id === user.slot_id );
      // console.log(userSlot)
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        slot_id: user.slot_id,
        date: userSlot ? userSlot.date : null,
        slot_in: userSlot ? userSlot.slot_in : null,
        slot_out: userSlot ? userSlot.slot_out : null,
        check_in: user.check_in,
        check_out: user.check_out
      };
    });
    usersWithSlotInfo = usersWithSlotInfo.filter(ele => {
      // console.log(ele.date ==curr_date)
      if(ele.date !=null)
        return ele
    });
    
    res.send(usersWithSlotInfo)

  } catch (e) {
    console.log(e)
    res.status(500).json({
      success: false,
      errors: [{ msg: "Server error" }],
    });
  }

}

const registerAdmin = async (req, res) => {
  try {
    const User = db.Models.user;
    const query = req.body;
    const check = await User.findAndCountAll({ where: { email: query.email } });
    // console.log(check);
    if (check.count !== 0) {
      res.status(400).json({
        success: false,
        errors: [{ msg: "Email Already Exists" }],
      });
    } else {
      query["type"] = "Admin";
      const hashedPassword = await bcrypt.hash(query.password, 10);
      query.password = hashedPassword;
      const result = await User.create(query);
      console.log(result);
      res.status(201).json({
        success: true,
        user: [
          {
            name: result.name,
            email: result.email,
            type: result.type,
          },
        ],
      });
    }
  } catch (e) {
    res.status(500).json({
      success: false,
      errors: [{ msg: "Server error" }],
    });
  }
};
module.exports = {
  allUser,
  login,
  register,
  registerAdmin,
  booking
};
