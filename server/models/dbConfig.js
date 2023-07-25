// const { Pool } = require("pg");
const { Sequelize, DataTypes } = require("sequelize")
const sequelize = new Sequelize(process.env.URI,{
  dialect: 'postgres',
  logging: false, 
  // Set to true if you want to see SQL logs in the console
  timezone: '+05:30', // Set Indian Standard Time (IST) UTC offset (+05:30)
})
// const pool = new Pool({
//   connectionString: process.env.URI,
//   ssl: true,
//   keepAlive: true,
// });
const db = {};
const client = {
  query: async (query, params, user_id = null, callback = null) => {
    // const _ = await pool.connect();
    const _ = await sequelize.authenticate();
    
    db.Sequelize = Sequelize;
    db.sequelize = sequelize;

    db.Models = require("./Models")(sequelize, DataTypes)
    // db.Gyms= require("./Gyms.js")(sequelize, DataTypes)
    // sequelize.sync({ alter: true })
    // try {
    //   // console.log(query, user_id);
    //   if (user_id) {
    //     await _.query(`set public.user_id=${user_id}`);
    //   }
    //   if (callback) {
    //     return _.query(query, params, callback);
    //   }
    //   return _.query(query, params);
    // } catch (error) {
    //   console.log(error.message);
    //   throw error;
    // } finally {
    //   sequelize.close() 
    // }
  },
};

const connectDB = async function () {
  try {
    // await pool.connect();
    const connect=await sequelize.authenticate();
    console.log("Successfully connected to the Database.");
    
    db.Sequelize = Sequelize;
    db.sequelize = sequelize;

    db.Models = require("./Models")(sequelize, DataTypes)
    // db.Gyms= require("./Gyms.js")(sequelize, DataTypes)
    sequelize.sync({ alter: true })
  } catch (error) {
    console.log("Error in connecting to the database .", error);
  }
};

// module.exports = { pool, connectDB,client};
module.exports = { sequelize, connectDB, client, db };