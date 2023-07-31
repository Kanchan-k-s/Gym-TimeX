const { where } = require("sequelize");
const { sequelize,db } = require("../models/dbConfig");

const add = async (req, res) => {
  try {
    const Equipment = db.Models.equipments;
    // console.log(db.Models);
    const query = req.body;
    const result = await Equipment.create(query);
    res.status(200).json({
      success: true,
      result
  });
  } catch (e) {
    res.status(500).json({
      success: false,
      errors: [{ msg: "Server error" }],
  });
  }
};

const show = async (req, res) => {
  const Equipment = db.Models.equipments;

  try {
    const result = await Equipment.findAll();
    
    res.status(200).json({
      success: true,
      result
  });
  } catch (e) {
    res.status(500).json({
      success: false,
      errors: [{ msg: "Server error" }],
  });
  }
};

const showEmployee = async (req, res) => {
  // console.log("hi 1")
  const Equipment = db.Models.equipments;
  try {
    // const result = await Equipment.findAll();
    const categoryCounts = await  Equipment.findAll({
        attributes: ['category', 
        // [sequelize.fn('COUNT', sequelize.col('category')), 'count']
      ],
        group: ['category'],
      });
      // console.log(categoryCounts)
    //   res.json(categoryCounts);
    // const data ={result,categoryCounts}
    res.status(200).json({
      success: true,
      categoryCounts
  });
  } catch (e) {
    // console.log(e)
    res.status(500).json({
      success: false,
      errors: [{ msg: "Server error" }],
  });
  }
};
const category = async (req, res) => {
  try {
    // console.log("hi")
  const cat = req.params.cat
  const Equipment = db.Models.equipments;
  if(cat==='All')
  {
    // console.log("hi")
    const result = await Equipment.findAll();
    // console.log(result);
    res.status(200).json({
      success: true,
      result
  });
  }
  else{
    const result = await Equipment.findAll({
      where: {
        category: cat,
      },
    });
    
    res.status(200).json({
      success: true,
      result
  });
  }
  
  
    
  } catch (e) {
    res.status(500).json({
      success: false,
      errors: [{ msg: "Server error" }],
  });
  }
};

const showOne = async (req, res) => {
  const Equipment = db.Models.equipments;
  try {
    const result = await Equipment.findByPk(req.params.id);
    res.status(200).json({
      success: true,
      result
  });
  } catch (e) {
    res.status(500).json({
      success: false,
      errors: [{ msg: "Server error" }],
  });
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
      res.status(200).json({
        success: true,
        result
    });
    }
    return "No such Id present";
  } catch (e) {
    res.status(500).json({
      success: false,
      errors: [{ msg: "Server error" }],
  });
  }
};

const delEquip = async (req, res) => {
  const Equipment = db.Models.equipments;
  try {
    const result = await Equipment.destroy({ where: { id: req.params.id } });
    res.status(200).json({
      success: true,
      result
  });
  } catch (e) {
    res.status(500).json({
      success: false,
      errors: [{ msg: "Server error" }],
  });
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
