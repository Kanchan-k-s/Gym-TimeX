
const user= require("../controller/user")

const express = require("express");

const router = express.Router();

router.get('/',user.demo)

module.exports = router;