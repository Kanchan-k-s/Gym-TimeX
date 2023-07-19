
const slot = require("../controller/slots")
const equipment = require("../controller/equipments")
const gyms = require("../controller/gyms")
const express = require("express");
const verifytoken = require("../middlewares/verifytoken");


const router = express.Router();

function checkRole(req, res, next) {
    if (req.type !== "Admin") {
        return res.status(401).json({
            success: false,
            msg: "You don't have proper rights to make this request .",
        });
    }
    next();
}
router.use(verifytoken);

router.use(checkRole);

// router.get('/',slot.login)
router.post('/slot/add', slot.add)
router.get('/slot/all', slot.show)
router.get('/slot/:id', slot.showOne)
router.delete('/slot/:id', slot.delSlot)
router.put('/slot/update/:id', slot.update)

router.post('/equipment/add', equipment.add)
router.get('/equipment/all', equipment.show)
router.get('/equipment/:id', equipment.showOne)
router.delete('/equipment/:id', equipment.delEquip)
router.put('/equipment/update/:id', equipment.update)

router.post('/gyms/add', gyms.add)
router.get('/gyms/all', gyms.show)
router.get('/gyms/:id', gyms.showOne)
router.put('/gyms/update/:id', gyms.update)


module.exports = router;