const { where } = require("sequelize");
const { sequelize,db } = require("../models/dbConfig");

const add = async (req, res) => {
  try {
    const Equipment = db.Models.equipments;
    console.log(db.Models);
    const query = req.body;
    const result = await Equipment.create(query);
    res.send(result);
  } catch (e) {
    console.log(e);
  }
};

const show = async (req, res) => {
  const Equipment = db.Models.equipments;
  try {
    const result = await Equipment.findAll();
    res.send(result);
  } catch (e) {
    console.log(e);
  }
};

const showEmployee = async (req, res) => {
  const Equipment = db.Models.equipments;
  try {
    const result = await Equipment.findAll();
    const categoryCounts = await  Equipment.findAll({
        attributes: ['category', 
        // [sequelize.fn('COUNT', sequelize.col('category')), 'count']
      ],
        group: ['category'],
      });
  
    //   res.json(categoryCounts);
    const data ={result,categoryCounts}
    res.send(data);
  } catch (e) {
    console.log(e);
  }
};
const category = async (req, res) => {
  const cat = req.params.cat
  const Equipment = db.Models.equipments;
  try {
    const result = await Equipment.findAll({
      where: {
        category: cat,
      },
    });
    // console.log(result);
    res.send(result);
  } catch (e) {
    console.log(e);
  }
};

const showOne = async (req, res) => {
  const Equipment = db.Models.equipments;
  try {
    const result = await Equipment.findByPk(req.params.id);
    res.send(result);
  } catch (e) {
    console.log(e);
  }
};

const update = async (req, res) => {
  const Equipment = db.Models.equipments;
  try {
    const data = await Equipment.findOne({ where: { id: req.params.id } });
    if (data) {
      const result = await Equipment.update(req.body, {
        where: { id: req.params.id },
      });
      res.send(result);
    }
    return "No such Id present";
  } catch (e) {
    console.log(e);
  }
};

const delEquip = async (req, res) => {
  const Equipment = db.Models.equipments;
  try {
    const result = await Equipment.destroy({ where: { id: req.params.id } });
    res.json(result);
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  add,
  show,
  showEmployee,
  update,
  showOne,
  delEquip,
  category,
};
