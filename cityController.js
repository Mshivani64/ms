const {
  Sequelize
} = require('sequelize');
const City = require('../../models/cityModel');
const sequelize = require('../../config/dbConfig');

// Create, update, or delete a city
exports.insertCity = async (req, res) => {
  try {
    const {
      CityName,
      CountryId,
      StateId,
      IsActive
    } = req.body;

    if (!CityName || !['Y', 'N'].includes(IsActive)) {
      return res.status(400).json({
        message: 'Invalid CityName or IsActive value',
      });
    }

    // Call the stored procedure using sequelize.query
    const result = await sequelize.query('EXEC USP_CityInsUpDel @Ncode = 0, @Mode = I, @CityName = :CityName, @CountryId = :CountryId, @StateId = :StateId, @IsActive = :IsActive', {
      replacements: {
        CityName: CityName,
        CountryId: CountryId,
        StateId: StateId,
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

// Get all cities
exports.getAllCities = async (req, res) => {
  try {
    const {
      TableName
    } = req.params;
    // Call the stored procedure using sequelize.query
    const result = await sequelize.query('EXEC USP_GetAlltableData @TableName="VW_City"', {

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

// Get a city by ID
exports.getCityById = async (req, res) => {
  try {
    const {
      Ncode
    } = req.params;
    const {
      TableName
    } = req.params;


    // Call the stored procedure using sequelize.query
    const result = await sequelize.query('EXEC USP_GetAlltableDataById @TableName="VW_City",@Ncode = :Ncode', {

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


// Get a city by state ID
// exports.getCityBystateId = async (req, res) => {
//   try {
//     const {
//       Ncode
//     } = req.params;


//     // Call the stored procedure using sequelize.query
//     const result = await sequelize.query('EXEC USP_GET_City @Ncode = :Ncode', {

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



// Update a location
exports.updateCity = async (req, res) => {
  try {
    const {
      Ncode
    } = req.params;
    const {
      CityName,
      CountryId,
      StateId,
      IsActive
    } = req.body;



    // Call the stored procedure using sequelize.query
    const result = await sequelize.query('EXEC USP_CityInsUpDel @Ncode = :Ncode, @Mode = U, @CityName = :CityName, @CountryId = :CountryId, @StateId = :StateId, @IsActive = :IsActive', {
      replacements: {
        Ncode: Ncode,
        CityName: CityName,
        CountryId: CountryId,
        StateId: StateId,
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
// Delete a city by ID
exports.deleteCity = async (req, res) => {
  try {
    const {
      Ncode
    } = req.params;
    

    // Call the stored procedure using sequelize.query
    const result = await sequelize.query('EXEC USP_CityInsUpDel @Ncode = :Ncode, @Mode = "D", @CityName = "A", @CountryId = 0, @StateId = 0, @IsActive = N', {
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