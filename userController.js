const { Sequelize } = require('sequelize');
const { User } = require('../../models/userModel');
const sequelize = require('../../config/dbConfig');

// Create or update a user
exports.create = async (req, res) => {
    try {
      const { Name, EnrollmentCenter, Email, Mobile, Password, IsActive, RoleId } = req.body;
  
      if (!EnrollmentCenter| !['Y', 'N'].includes(IsActive)) {
        return res.status(400).json({
            message: 'Invalid EnrollmentCenter or IsActive value',
        });
    }
      const result = await sequelize.query('EXEC USP_UserMasterInsUpDel @Ncode = 0, @Mode = I, @EnrollmentCenter = :EnrollmentCenter, @Name = :Name, @Email = :Email, @Mobile = :Mobile, @Password = :Password, @IsActive = :IsActive, @RoleId = :RoleId', {
        replacements: {
        
          Name: Name,
          EnrollmentCenter: EnrollmentCenter,
          Email: Email,
          Mobile: Mobile,
          Password: Password,
          IsActive: IsActive,
          RoleId: RoleId,
        },
        type: Sequelize.QueryTypes.SELECT,
      });
  
      res.json({
        message: result[0].status,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };
  

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const { TableName } = req.params;
    const result = await sequelize.query('EXEC USP_GetAlltableData @TableName="tblUserMaster"', {
      replacements: {
        TableName: TableName,
      },
      type: Sequelize.QueryTypes.SELECT,
    });

    res.json(result);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get user by ID
exports.getUserById = async (req, res) => {
  try {
    const { Ncode } = req.params;
    const { TableName } = req.params;

    const result = await sequelize.query('EXEC USP_GetAlltableDataById @TableName="tblUserMaster", @Ncode = :Ncode', {
      replacements: {
        TableName: TableName,
        Ncode: Ncode,
      },
      type: Sequelize.QueryTypes.SELECT,
    });

    res.json(result[0]);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Update user
exports.updateUser = async (req, res) => {
  try {
    const { Ncode } = req.params;
    const {  Name, EnrollmentCenter, Email, Mobile, Password, IsActive, RoleId } = req.body;

    // Check if required parameters are provided
    if (!EnrollmentCenter| !['Y', 'N'].includes(IsActive)) {
      return res.status(400).json({
          message: 'Invalid EnrollmentCenter or IsActive value',
      });
  }
    const result = await sequelize.query('EXEC USP_UserMasterInsUpDel @Ncode = :Ncode, @Mode = U, @EnrollmentCenter = :EnrollmentCenter, @Name = :Name, @Email = :Email, @Mobile = :Mobile, @Password = :Password, @IsActive = :IsActive, @RoleId = :RoleId', {
      replacements: {
        Ncode: Ncode,
        EnrollmentCenter: EnrollmentCenter,
        Name: Name,
        Email: Email,
        Mobile: Mobile,
        Password: Password,
        IsActive: IsActive,
        RoleId: RoleId,
      },
      type: Sequelize.QueryTypes.SELECT,
    });

    res.json({
      message: result[0].status,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete user by ID
exports.deleteUser = async (req, res) => {
  try {
    const { Ncode } = req.params;
   
  

    const result = await sequelize.query('EXEC USP_UserMasterInsUpDel @Ncode = :Ncode, @Mode = D, @EnrollmentCenter = "A", @Name = "A", @Email = "A", @Mobile = 0, @Password = 0, @IsActive = N, @RoleId = 0', {
      replacements: {
        Ncode: Ncode,
       

      },
      type: Sequelize.QueryTypes.SELECT,
    });

    res.json({
      message: result[0].status,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
