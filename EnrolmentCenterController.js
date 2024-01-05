const { Sequelize } = require('sequelize');
const EnrolmentCenter = require('../../models/EnrolmentCenterModels');
const sequelize = require('../../config/dbConfig');
exports.insertEnrolmentCenter = async (req, res) => {
  try {
 
    const {
    
      CountryId,
      StateId,
      CityId,
      LocalityId,
      PostalCode,
      Address1,
      Address2,
      Landmark,
      ContactPersonName,
      ContactPersonEmail,
      ContactPersonMobile,
      IsActive,
    } = req.body;
    if (!CountryId|| !['Y', 'N'].includes(IsActive)) {
      return res.status(400).json({
          message: 'Invalid CountryId, or IsActive value',
      });
  }
    // Call the stored procedure using Sequelize
    const result = await sequelize.query(
      'EXEC USP_EnrolmentCenterInsUpDel @Ncode = 0, @Mode = I, @CountryId = :CountryId, @StateId = :StateId, @CityId = :CityId, @LocalityId = :LocalityId, @PostalCode = :PostalCode, @Address1 = :Address1, @Address2 = :Address2, @Landmark = :Landmark, @ContactPersonName = :ContactPersonName, @ContactPersonEmail = :ContactPersonEmail, @ContactPersonMobile = :ContactPersonMobile, @IsActive = :IsActive',
      {
        replacements: {
      
          CountryId,
          StateId,
          CityId,
          LocalityId,
          PostalCode,
          Address1,
          Address2,
          Landmark,
          ContactPersonName,
          ContactPersonEmail,
          ContactPersonMobile,
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

exports.getallEnrolmentCenter = async (req, res) => {
  try {
    const { TableName } = req.params;

    const result = await sequelize.query('EXEC USP_GetAlltableData @TableName="tblEnrolmentCenter"', {
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

exports.getEnrolmentCenterById = async (req, res) => {
  try {
    const { Ncode } = req.params;

    const result = await sequelize.query(
      'EXEC USP_GetAlltableDataById @TableName = "tblEnrolmentCenter", @Ncode = :Ncode',
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


exports.getLocationByPostalId = async (req, res) => {
  try {
    const { PostalCode } = req.body;

    const result = await sequelize.query(
      'EXEC USP_GetLocationsByPostalCode  @PostalCode = :PostalCode',
      {
        replacements: {
          PostalCode,
        },
        type: Sequelize.QueryTypes.SELECT,
      }
    );

    res.json(result);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


exports.updateEnrolmentCenter = async (req, res) => {
  try {
    const { Ncode } = req.params;
    const {
      CountryId,
      StateId,
      CityId,
      LocalityId,
      PostalCode,
      Address1,
      Address2,
      Landmark,
      ContactPersonName,
      ContactPersonEmail,
      ContactPersonMobile,
      IsActive,
    } = req.body;

    // Validate input
    if (!CountryId || !['Y', 'N'].includes(IsActive)) {
      return res.status(400).json({
        message: 'Invalid CountryId or IsActive value',
      });
    }

    // Call the stored procedure using Sequelize
    const result = await sequelize.query(
      'EXEC USP_EnrolmentCenterInsUpDel @Ncode = :Ncode, @Mode = U, @CountryId = :CountryId, @StateId = :StateId, @CityId = :CityId, @LocalityId = :LocalityId, @PostalCode = :PostalCode, @Address1 = :Address1, @Address2 = :Address2, @Landmark = :Landmark, @ContactPersonName = :ContactPersonName, @ContactPersonEmail = :ContactPersonEmail, @ContactPersonMobile = :ContactPersonMobile, @IsActive = :IsActive',
      {
        replacements: {
          Ncode,
          CountryId,
          StateId,
          CityId,
          LocalityId,
          PostalCode,
          Address1,
          Address2,
          Landmark,
          ContactPersonName,
          ContactPersonEmail,
          ContactPersonMobile,
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
exports.deleteEnrolmentCenter = async (req, res) => {
  try {
    const { Ncode } = req.params;
    const {
    
      CountryId,
      StateId,
      CityId,
      LocalityId,
      PostalCode,
      Address1,
      Address2,
      Landmark,
      ContactPersonName,
      ContactPersonEmail,
      ContactPersonMobile,
      IsActive,
    } = req.body;

    const result = await sequelize.query(
      'EXEC USP_EnrolmentCenterInsUpDel @Ncode = :Ncode, @Mode = D, @CountryId = :CountryId, @StateId = :StateId, @CityId = :CityId, @LocalityId = :LocalityId, @PostalCode = :PostalCode, @Address1 = :Address1, @Address2 = :Address2, @Landmark = :Landmark, @ContactPersonName = :ContactPersonName, @ContactPersonEmail = :ContactPersonEmail, @ContactPersonMobile = :ContactPersonMobile, @IsActive = :IsActive',
      {
        replacements: {
          Ncode,
          CountryId,
          StateId,
          CityId,
          LocalityId,
          PostalCode,
          Address1,
          Address2,
          Landmark,
          ContactPersonName,
          ContactPersonEmail,
          ContactPersonMobile,
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

