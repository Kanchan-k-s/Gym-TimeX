const { db,sequelize } = require("../models/dbConfig");
const { Op,QueryTypes  } = require("sequelize")


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
    res.status(200).json({
      usersWithSlotInfo,
      message: "Showing All User.",
    });
    // console.log(usersWithSlotInfo);
    // res.send(usersWithSlotInfo);
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
    const users = await sequelize.query("SELECT users.id as id,users.name,slots.slot_in,slots.slot_out FROM users, slots, relations where relations.user_id=users.id and relations.slot_id=slots.id and relations.date = :date ", 
    { 
      replacements: { date: curr_date },
      type: QueryTypes.SELECT 
    });
    // console.log(users)
    res.send(users)
   

  } catch (e) {
    // console.log(e)
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
      // console.log(result);
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

const Info = async (req, res) => {
  try {
    
    const User = db.Models.user;
    const userId = req.userId;
    const users = await User.findByPk(userId);
    
    res.send({ name: users.name })
  } catch (e) {
    return res.status(500).json({
      success: false,
      errors: [
        {
          msg: "Internal server error",
        },
      ],
    });
  }
}

const InfoUpdate = async (req, res) => {
  try {
    // console.log("di")
    const Users = db.Models.user;
    // console.log(req.body)
    const user_name = req.body.name;
    // console.log(user_name)
    const userId = req.userId;
    const users = await Users.update({ 'name': user_name }, {
      where: {
        id: userId
      }
    });

    res.send({
      success: true,
      msg: "Successfully Updated"

    })
  } catch (e) {
    return res.status(400).json({
      success: false,
      errors: [
        {
          msg: "Internal server error",
        },
      ],
    });
  }
}

const changePassword = async (req, res) => {
  try {
    const user_id = req.userId;
    const Users = db.Models.user;
    const newpassword = req.body.password;
    
    const { oldpassword, confirmPassword } = req.body;
    // Create Hashing of password
    
    const salt = await bcrypt.genSalt(10);
    // console.log(newpassword === confirmPassword)
    if (newpassword === confirmPassword) {
      
      const results = await Users.findByPk(user_id)

      // console.log(results);
      if (results) {
        const user = results;
        bcrypt.compare(
          oldpassword,
          user.password,
          async (err, isMatch) => {
            if (err) {
              return res.status(404).json({
                success: false,
                errors: [
                  {
                    msg: "Error occured at password matching",
                  },
                ],
              });
            }

            // checking if password is matching or not
            if (isMatch) {
              const hashedPassword = await bcrypt.hash(newpassword, salt);
              const update = await Users.update({
                password: hashedPassword
              },{
                where:{
                  id:user_id
                }
              })
              
              return res.status(201).json({
                success: true,
                msg: "Password Changed Successfully .",
              });
            } else {
              // password is incorrect
              return res.status(400).json({
                success: false,
                errors: [
                  {
                    msg: "Invalid credentials!",
                  },
                ],
              });
            }
          }
        );
      } else {
        // if user does not exist
        return res.status(400).json({
          success: false,
          errors: [
            {
              msg: "Invalid credentials!",
            },
          ],
        });
      }
    }

    else {
      return res.status(404).json({
        success: false,
        errors: [
          {
            msg: "Password and Confirm Password are not matching.",
          },
        ],
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      errors: [
        {
          msg: "Internal server error",
        },
      ],
    });
  }

}
module.exports = {
  allUser,
  login,
  register,
  registerAdmin,
  booking,
  Info,
  InfoUpdate,
  changePassword
};
