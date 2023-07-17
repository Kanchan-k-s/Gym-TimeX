
const user= require("../controller/user")

const express = require("express");

const router = express.Router();

router.post('/login',user.login)
router.post('/register',user.register)

module.exports = router;