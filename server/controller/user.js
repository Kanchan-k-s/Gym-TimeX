const { db } = require("../models/dbConfig")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const secret = process.env.JWT_SECRET;
const tokenLife = process.env.TOKEN_LIFE;

const demo = async (req, res) => {
    try {
        const Gyms = db.Models.gyms
        // console.log(db.Models.gyms)
        // await db.Models.gyms.create({opening_time : '02:00:00',closing_time :'03:00:00',capacity:20});
        const result = await Gyms.findAll()
        res.send(result);
    } catch (e) {
        console.log(e)
    }

}

const login =
    async (req, res) => {
        try {
            const User = db.Models.user
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
                        jwt.sign(
                            data,
                            secret,
                            { expiresIn: tokenLife },
                            (err, token) => {
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
                                            name: result.email,
                                            type: result.type,
                                        },
                                        message: "Login Successful.",
                                    });
                                }
                            }
                        );
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
                })
            }
            else {
                res.status(404).json({
                    success: false,
                    errors: [
                        {
                            msg: err.msg,
                        },
                    ],
                })
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

    const query = req.body
    query["type"] = "Employee"
    const User = db.Models.user
    console.log(query)
    try {
        const hashedPassword = await bcrypt.hash(query.password, 10);
        query.password = hashedPassword;
        console.log(query.password)
        const result = await User.create(query);
        console.log(req.body)
        res.send(result)
    } catch (e) {
        console.log(e)
    }
}



module.exports = {
    demo,
    login,
    register
}

