
const user= require("../controller/user")

const express = require("express");

const router = express.Router();

router.get('/',user.login)
router.post('/register',user.register)

module.exports = router;