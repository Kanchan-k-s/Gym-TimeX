
const slot= require("../controller/slots")
const equipment = require ("../controller/equipments")
const gyms = require("../controller/gyms")
const express = require("express");

const router = express.Router();

// router.get('/',slot.login)
router.post('/slot/add',slot.add)
router.get('/slot/all',slot.show)
router.get('/slot/:id',slot.showOne)
router.put('/slot/update/:id',slot.update)

router.post('/equipment/add',equipment.add)
router.get('/equipment/all',equipment.show)
router.get('/equipment/:id',equipment.showOne)
router.put('/equipment/update/:id',equipment.update)

router.post('/gyms/add',gyms.add)
router.get('/gyms/all',gyms.show)
router.get('/gyms/:id',gyms.showOne)
router.put('/gyms/update/:id',gyms.update)


module.exports = router;