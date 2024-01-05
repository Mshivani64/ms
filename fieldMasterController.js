// controllers/fieldMasterController.js
const { Sequelize } = require('sequelize');
const FieldMaster = require('../../models/fieldMasterModel');
const sequelize = require('../../config/dbConfig');


exports.createOrUpdateFieldMaster = async (req, res) => {
  try {
    const { FieldName, FieldType, FieldValue, FieldRequired, IsActive } = req.body;
   
    if (!FieldName|| !['Y', 'N'].includes(IsActive)) {
      return res.status(400).json({
          message: 'Invalid FieldName or IsActive value',
      });
  }
    // Call the stored procedure using sequelize.query
    const result = await sequelize.query('EXEC USP_FieldMasterInsUpDel @Ncode = 0, @Mode = I, @FieldName = :FieldName, @FieldType = :FieldType, @FieldValue = :FieldValue, @FieldRequired = :FieldRequired, @IsActive = :IsActive', {
      replacements: {
       
       FieldName: FieldName,
        FieldType: FieldType,
        FieldValue: FieldValue,
        FieldRequired: FieldRequired,
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

// Get all field masters
exports.getAllFieldMasters = async (req, res) => {
  try {
    const result = await sequelize.query('EXEC USP_GetAlltableData @TableName="tblFieldMaster"', {
      type: Sequelize.QueryTypes.SELECT,
    });

    res.json(result);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get a field master by ID
exports.getFieldMasterById = async (req, res) => {
  try {
    const { Ncode } = req.params;

    // Call the stored procedure using sequelize.query
    const result = await sequelize.query('EXEC USP_GetAlltableDataById @TableName="tblFieldMaster",@Ncode = :Ncode', {
      replacements: {
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
// Create or update a Field Master
exports.UpdateFieldMaster = async (req, res) => {
  try {
    const {Ncode}=req.params
    const {  FieldName, FieldType, FieldValue, FieldRequired, IsActive } = req.body;

   
    if (!FieldName || !['Y', 'N'].includes(IsActive)) {
      return res.status(400).json({
        message: 'Invalid FieldName or IsActive value',
      });
    }

    // Call the stored procedure using sequelize.query
    const result = await sequelize.query('EXEC USP_FieldMasterInsUpDel @Ncode = :Ncode, @Mode = U, @FieldName = :FieldName, @FieldType = :FieldType, @FieldValue = :FieldValue, @FieldRequired = :FieldRequired, @IsActive = :IsActive', {
      replacements: {
        Ncode: Ncode,
        FieldName: FieldName,
        FieldType: FieldType,
        FieldValue: FieldValue,
        FieldRequired: FieldRequired,
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
// Delete a field master by ID
exports.deleteFieldMaster = async (req, res) => {
  try {
    const {Ncode}=req.params
    

    // Call the stored procedure using sequelize.query
    const result = await sequelize.query('EXEC USP_FieldMasterInsUpDel @Ncode = :Ncode, @Mode = D, @FieldName = "A", @FieldType = "A", @FieldValue = 0, @FieldRequired = "A", @IsActive = N', {
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
