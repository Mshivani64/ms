const { Sequelize } = require('sequelize');
const UserOTP = require('../../models/localityModel');
const sequelize = require('../../config/dbConfig');
const nodemailer = require('nodemailer');
require('dotenv').config();
const sendOTPEmail = async (email, OTP) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Your OTP Code',
    text: `Your OTP code is: ${OTP}`,
  };

  await transporter.sendMail(mailOptions);
};

exports.generateOTP = async (req, res) => {
  try {
    const { UserID, UserName, Email } = req.body;

    const OTP = Math.floor(Math.random() * 900000 + 100000).toString();

    const ExpiryTime = new Date();
    ExpiryTime.setMinutes(ExpiryTime.getMinutes() + 5);

    const [userOTP, created] = await UserOTP.upsert(
      {
        UserID,
        UserName,
        OTP,
        ExpiryTime,
      },
      {
        returning: true,
      }
    );

    await sendOTPEmail(Email, OTP);

    res.json({
      GeneratedOTP: OTP,
      isNewOTP: created,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};