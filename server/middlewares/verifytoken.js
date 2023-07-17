const jwt = require("jsonwebtoken");

const secret = process.env.JWT_SECRET;

const verifytoken = (req, res, next) => {
  //checking token is valid or not
  try {
    const authtoken = req.header("Authorization");
    const token = authtoken.split(" ")[1];
    if (!token) {
      return res.status(401).send({
        success: false,
        errors: [{ msg: "Please authenticate using valid token" }],
      });
    }

    const data = jwt.verify(token, secret);
    req.userId = data.userId;
    req.type = data.type;
    next();
  } catch (error) {
    return res.status(401).send({
      success: false,
      errors: [{ msg: "Please authenticate using valid token" }],
    });
  }
};

module.exports = verifytoken;
