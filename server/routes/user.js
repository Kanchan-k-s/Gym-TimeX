
const user= require("../controller/user")
const gym =require("../controller/gyms")
const express = require("express");

const router = express.Router();

router.get('/booking',user.booking)
router.post('/login',user.login)
router.post('/register',user.register)
router.post('/register/admin',user.registerAdmin)
router.post('/add/gym',gym.add)
module.exports = router;