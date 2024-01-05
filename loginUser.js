const { Sequelize } = require('sequelize');
const sequelize = require('../../config/dbConfig');
const { Op } = require('sequelize');
const { User } = require('../../models/loginUserModel');


exports.userLogin = async (req, res) => {
  try {
    const { Email, Password } = req.body;

 
    const result = await sequelize.query('EXEC USP_UserLogin @Email = :Email, @Password = :Password', {
      replacements: {
        Email: Email,
        Password: Password,
      },
      type: Sequelize.QueryTypes.SELECT,
    });

    if (result.length > 0 && result[0].status === '0') {
      // User exists, but login failed
      res.status(401).json({
        message: 'Invalid credentials. Please check your email and password.',
      });
    } else if (result.length > 0) {
      // User exists, you can generate a JWT token here if needed
      res.json({
        message: 'Login successful',
        user: result[0], // Assuming the stored procedure returns user details
      });
    } else {
      // User doesn't exist, suggest signing up
      res.status(401).json({
        message: 'User does not exist. Please sign up.',
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};