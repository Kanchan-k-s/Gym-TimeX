
const user= require("../controller/user")
const gym =require("../controller/gyms")
const express = require("express");
const verifytoken = require("../middlewares/verifytoken");
const router = express.Router();
const sponsor = require("../controller/sponsor")

router.post('/login',user.login)
router.post('/register',user.register)
router.post('/register/admin',user.registerAdmin)
// router.use(verifytoken);
function checkRole(req, res, next) {
    // console.log(req.type !=='Admin')
    if (req.type !== "Employee" && req.type !=="Admin") {
        return res.status(401).json({
            success: false,
            msg: "You don't have proper rights to make this request .",
        }); 
    }
    next();
}
// router.use(checkRole)

router.get('/info',verifytoken,checkRole,user.Info)
router.post('/info/update',verifytoken,checkRole,user.InfoUpdate)
router.get('/info',verifytoken,checkRole,user.Info)
router.post('/password/update',verifytoken,checkRole,user.changePassword)
router.get('/sponser/',sponsor.show)
router.get('/sponser/:id',sponsor.addRevenue)
router.post('/add/gym',gym.add)
module.exports = router;