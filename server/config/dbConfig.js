const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.URI,
  ssl: true,
  keepAlive: true,
});

const client = {
    query: async (query, params, user_id = null, callback = null) => {
      const _ = await pool.connect();
      try {
        // console.log(query, user_id);
        if (user_id) {
          await _.query(`set public.user_id=${user_id}`);
        }
        if (callback) {
          return _.query(query, params, callback);
        }
        return _.query(query, params);
      } catch (error) {
        console.log(error.message);
        throw error;
      } finally {
        _.release();
      }
    },
  };
  
const connectDB = async function () {
    try {
      await pool.connect();
      console.log("Successfully connected to the Database.");
    } catch (error) {
      console.log("Error in connecting to the database .", error);
    }
  };

  module.exports = { pool, connectDB,client};