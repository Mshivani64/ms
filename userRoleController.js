// controllers/userRoleController.js
const { Sequelize } = require('sequelize');
const sequelize = require('../../config/dbConfig');

// Create or update a user role
exports.createOrUpdateUserRole = async (req, res) => {
  try {
    const {  UserRole, IsActive } = req.body;
    if (!UserRole| !['Y', 'N'].includes(IsActive)) {
      return res.status(400).json({
          message: 'Invalid UserRole or IsActive value',
      });
  }
    
    const result = await sequelize.query('EXEC USP_UserRoleInsUpDel @Ncode = 0, @Mode = I, @UserRole = :UserRole, @IsActive = :IsActive', {
      replacements: {
       
        UserRole: UserRole,
        IsActive: IsActive,
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

// Get all user roles
exports.getAllUserRoles = async (req, res) => {
  try {
    const { TableName } = req.params;

    const result = await sequelize.query('EXEC USP_GetAlltableData @TableName = "tblUserRole"', {
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

// Get a user role by ID
exports.getUserRoleById = async (req, res) => {
  try {
    const { Ncode } = req.params;
    const { TableName } = req.params;

    const result = await sequelize.query('EXEC USP_GetAlltableDataById @TableName = tblUserRole, @Ncode = :Ncode', {
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

// Update user role
exports.updateUserRole = async (req, res) => {
  try {    const { Ncode } = req.params;
    const { UserRole, IsActive } = req.body;

    const result = await sequelize.query('EXEC USP_UserRoleInsUpDel @Ncode = :Ncode, @Mode = U, @UserRole = :UserRole, @IsActive = :IsActive', {
      replacements: {
        Ncode: Ncode,
        UserRole: UserRole,
        IsActive: IsActive,
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
// Delete a user role by ID
exports.deleteUserRole = async (req, res) => {
  try {
    const { Ncode } = req.params;
   

    const result = await sequelize.query('EXEC USP_UserRoleInsUpDel @Ncode = :Ncode, @Mode = D, @UserRole = "A", @IsActive = N', {
      replacements: {
      
        Ncode:Ncode,
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
