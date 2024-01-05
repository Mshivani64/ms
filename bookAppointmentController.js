const { Sequelize } = require('sequelize');
const Appointment = require('../../models/AppointmentSlotModel');
const sequelize = require('../../config/dbConfig');
exports.bookAppointment = async (req, res) => {
  try {
 
    const {
      EnrollmentCenterName,
      AppointmentCenterId,
      CenterPostalCode,
      PersonalDetailsXml,
      DocumantXml,
      AppointmentSlotBookId,
      AppointmentDate,
      ApointmentTime,
      EmailId,
      IsActive,
      IsApprove,
     
    } = req.body;
    if (!AppointmentCenterId| !['Y', 'N'].includes(IsActive)) {
      return res.status(400).json({
          message: 'Invalid AppointmentCenterId, or IsActive value',
      });
  }
    // Call the stored procedure using Sequelize
    const result = await sequelize.query(
      'EXEC USP_BookAppointmentInsUpDel @Ncode = 0, @Mode = I, @EnrollmentCenterName = :EnrollmentCenterName, @AppointmentCenterId = :AppointmentCenterId, @CenterPostalCode = :CenterPostalCode, @PersonalDetailsXml = :PersonalDetailsXml, @DocumantXml = :DocumantXml, @AppointmentSlotBookId = :AppointmentSlotBookId, @AppointmentDate = :AppointmentDate, @ApointmentTime = :ApointmentTime, @IsActive = :IsActive, @IsApprove = :IsApprove,@EmailId = :EmailId',
      {
        replacements: {
          EnrollmentCenterName,
          AppointmentCenterId,
          CenterPostalCode,
          PersonalDetailsXml,
          DocumantXml,
          AppointmentSlotBookId,
          AppointmentDate,
          ApointmentTime,
          
          IsActive,
          IsApprove,
          EmailId,
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
// // Read all appointments
// exports.getAllAppointments = async (req, res) => {
//   try {
//     const appointments = await tblBookAppointment.findAll();
//     res.json(appointments);
//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// };

// // Read an appointment by ID
// exports.getAppointmentById = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const appointment = await BookAppointment.findByPk(id);
//     if (!appointment) {
//       return res.status(404).json({ message: 'Appointment not found' });
//     }
//     res.json(appointment);
//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// };

// // Update an appointment by ID
// exports.updateAppointment = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const {
//       EnrollmentCenterName,
//       AppointmentCenterId,
//       CenterPostalCode,
//       PersonalDetailsXml,
//       DocumantXml,
//       AppointmentSlotBookId,
//       AppointmentDate,
//       ApointmentTime,
//       IsActive,
//       IsApprove,
//     } = req.body;

//     // Validate input
//     if (!AppointmentCenterId || !['Y', 'N'].includes(IsActive)) {
//       return res.status(400).json({
//         message: 'Invalid AppointmentCenterId or IsActive value',
//       });
//     }

//     const appointment = await BookAppointment.findByPk(id);

//     if (!appointment) {
//       return res.status(404).json({ message: 'Appointment not found' });
//     }

//     // Update appointment attributes
//     appointment.EnrollmentCenterName = EnrollmentCenterName;
//     appointment.AppointmentCenterId = AppointmentCenterId;
//     appointment.CenterPostalCode = CenterPostalCode;
//     appointment.PersonalDetailsXml = PersonalDetailsXml;
//     appointment.DocumantXml = DocumantXml;
//     appointment.AppointmentSlotBookId = AppointmentSlotBookId;
//     appointment.AppointmentDate = AppointmentDate;
//     appointment.ApointmentTime = ApointmentTime;
//     appointment.IsActive = IsActive;
//     appointment.IsApprove = IsApprove;

//     // Save the updated appointment
//     await appointment.save();

//     res.json({ message: 'Appointment updated successfully' });
//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// };

// // Delete an appointment by ID
// exports.deleteAppointment = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const appointment = await BookAppointment.findByPk(id);

//     if (!appointment) {
//       return res.status(404).json({ message: 'Appointment not found' });
//     }

//     // Delete the appointment
//     await appointment.destroy();

//     res.json({ message: 'Appointment deleted successfully' });
//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// };



