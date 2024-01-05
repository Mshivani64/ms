// controllers/localityController.js
const {
  Sequelize
} = require('sequelize');
const {
  Locality
} = require('../../models/localityModel');
const sequelize = require('../../config/dbConfig');
// Create or update a locality
exports.createLocality = async (req, res) => {
  try {
    const {
    
      LocalityName,
      CityId,
      LocationId,
      CountryId,
      StateId,
      IsActive,
      Pincode
    } = req.body;


    if (!LocalityName || !['Y', 'N'].includes(IsActive)) {
      return res.status(400).json({
        message: 'Invalid LocalityName or IsActive value',
      });
    }
    // Call the stored procedure using sequelize.query
    const result = await sequelize.query('EXEC USP_LocalityInsUpDel @Ncode = 0, @Mode = I, @LocalityName = :LocalityName, @LocationId = :LocationId, @CityId = :CityId, @CountryId = :CountryId, @StateId = :StateId, @IsActive = :IsActive, @Pincode = :Pincode', {
      replacements: {
      
        LocalityName: LocalityName,
        LocationId: LocationId,
        CityId: CityId,
        CountryId: CountryId,
        StateId: StateId,
        IsActive: IsActive,
        Pincode: Pincode,
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

// Get all localities
exports.getAllLocalities = async (req, res) => {
  try {
    const {
      TableName
    } = req.params;
    const result = await sequelize.query('EXEC USP_GetAlltableData @TableName="VW_Locality"', {
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

exports.getLocalityById = async (req, res) => {
  try {
    const {
      Ncode
    } = req.params;
    const {
      TableName
    } = req.params;

    // Call the stored procedure using sequelize.query
    const result = await sequelize.query('EXEC USP_GetAlltableDataById @TableName="VW_Locality", @Ncode = :Ncode', {
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
exports.getStateByCountryId = async (req, res) => {
  try {const {
    Ncode
} = req.params;

  

    // Call the stored procedure using sequelize.query
    const result = await sequelize.query('EXEC USP_GET_State @Ncode = :Ncode', {
      replacements: {
      
     
        Ncode: Ncode,
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
exports.getCityBystateId = async (req, res) => {
  try {
    const {
      Ncode
    } = req.params;


    // Call the stored procedure using sequelize.query
    const result = await sequelize.query('EXEC USP_GET_City @Ncode = :Ncode', {

      replacements: {

        Ncode: Ncode,

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

// exports.getLocalityBycityId = async (req, res) => {
//   try {
//     const {
//       Ncode
//     } = req.params;
   

//     // Call the stored procedure using sequelize.query
//     const result = await sequelize.query('USP_GET_Locality @Ncode = :Ncode', {
//       replacements: {
       
//         Ncode: Ncode,
//       },
//       type: Sequelize.QueryTypes.SELECT,
//     });

//     res.json(result);
//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// };




exports.updateLocality = async (req, res) => {
  try {
    const {
      Ncode
    } = req.params;
    const {
      LocalityName,
      CityId,
      LocationId,
      CountryId,
      StateId,
      IsActive,
      Pincode
    } = req.body;

    // Check if required parameters are provided
    if (!LocalityName || !['Y', 'N'].includes(IsActive)) {
      return res.status(400).json({
        message: 'Invalid LocalityName or IsActive value',
      });
    }

    // Call the stored procedure using sequelize.query
    const result = await sequelize.query('EXEC USP_LocalityInsUpDel @Ncode = :Ncode, @Mode = U, @LocalityName = :LocalityName, @LocationId = :LocationId, @CityId = :CityId, @CountryId = :CountryId, @StateId = :StateId, @IsActive = :IsActive, @Pincode = :Pincode', {
      replacements: {
        Ncode: Ncode,
        LocalityName: LocalityName,
        LocationId: LocationId,
        CityId: CityId,
        CountryId: CountryId,
        StateId: StateId,
        IsActive: IsActive,
        Pincode: Pincode,
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
// Delete a locality by ID
exports.deleteLocality = async (req, res) => {
  try {
    const {
      Ncode
    } = req.params;
    

    // Call the stored procedure using sequelize.query
    const result = await sequelize.query('EXEC USP_LocalityInsUpDel @Ncode = :Ncode, @Mode = D, @LocalityName = "A", @LocationId = 0, @CityId = 0, @CountryId = 0, @StateId = 0, @IsActive = N, @Pincode = 0', {
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