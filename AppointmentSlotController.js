const { Sequelize } = require('sequelize');
const Appointment = require('../../models/AppointmentSlotModel');
const sequelize = require('../../config/dbConfig');
exports.insertAppointment = async (req, res) => {
  try {
 
    const {
  
    EnrollmentCenterName,
      SlotDate,
      SlotFromTime,
      SlotToTime,
      AppointmentPerSlot,
      IsActive,
     
    } = req.body;
    if (!EnrollmentCenterName| !['Y', 'N'].includes(IsActive)) {
      return res.status(400).json({
          message: 'Invalid EnrollmentCenterName, or IsActive value',
      });
  }
    // Call the stored procedure using Sequelize
    const result = await sequelize.query(
      'EXEC USP_AppointmentSlotInsUpDel @Ncode = 0, @Mode = I, @EnrollmentCenterName = :EnrollmentCenterName, @SlotDate = :SlotDate, @SlotFromTime = :SlotFromTime, @SlotToTime = :SlotToTime, @AppointmentPerSlot = :AppointmentPerSlot, @IsActive = :IsActive',
      {
        replacements: {
  
           EnrollmentCenterName,
            SlotDate,
            SlotFromTime,
            SlotToTime,
            AppointmentPerSlot,
            IsActive,
        },
       
        type: Sequelize.QueryTypes.SELECT,
      }
    );
    console.log("result")

    res.json({
      message: result[0].status,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.getallAppointment = async (req, res) => {
  try {
    const { TableName } = req.params;

    const result = await sequelize.query('EXEC USP_GetAlltableData @TableName="tblAppointmentSlot"', {
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

exports.getAppointmentById = async (req, res) => {
  try {
    const { Ncode } = req.params;

    const result = await sequelize.query(
      'EXEC USP_GetAlltableDataById @TableName = "tblAppointmentSlot", @Ncode = :Ncode',
      {
        replacements: {
          Ncode,
        },
        type: Sequelize.QueryTypes.SELECT,
      }
    );

    res.json(result[0]);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.updateAppointment = async (req, res) => {
  try {
    const { Ncode } = req.params;
    const {
    
     
    
    
        EnrollmentCenterName,
        SlotDate,
        SlotFromTime,
        SlotToTime,
        AppointmentPerSlot,
        IsActive,
       
      } = req.body;

    // Validate input
    if (!EnrollmentCenterName || !['Y', 'N'].includes(IsActive)) {
      return res.status(400).json({
        message: 'Invalid EnrollmentCenterName or IsActive value',
      });
    }

    // Call the stored procedure using Sequelize
    const result = await sequelize.query(
        'EXEC USP_AppointmentSlotInsUpDel @Ncode = :Ncode, @Mode = U, @EnrollmentCenterName = :EnrollmentCenterName, @SlotDate = :SlotDate, @SlotFromTime = :SlotFromTime, @SlotToTime = :SlotToTime, @AppointmentPerSlot = :AppointmentPerSlot, @IsActive = :IsActive',
      {
        replacements: {
            Ncode,
           EnrollmentCenterName,
            SlotDate,
            SlotFromTime,
            SlotToTime,
            AppointmentPerSlot,
            IsActive,
           
        },
       
        type: Sequelize.QueryTypes.SELECT,
      }
    );

    res.json({
      message: result[0].status,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
exports.deleteAppointment  = async (req, res) => {
  try {
    const { Ncode } = req.params;
   

    const result = await sequelize.query(
        'EXEC USP_AppointmentSlotInsUpDel @Ncode = :Ncode, @Mode = D, @EnrollmentCenterName = "A", @SlotDate = 0, @SlotFromTime = 0, @SlotToTime = 0, @AppointmentPerSlot = 0, @IsActive = N',
      {
        replacements: {
            Ncode,
        
        },
        type: Sequelize.QueryTypes.SELECT,
      }
    );

    res.json({
      message: result[0].status,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
