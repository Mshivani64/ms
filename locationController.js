const { Sequelize } = require('sequelize');
const Location = require('../../models/locationModel');
const sequelize = require('../../config/dbConfig');

// Create or update a location
exports.createLocation = async (req, res) => {
  try {
    const { Ncode,  LocationName, CountryId, StateId, CityId, IsActive } = req.body;
    if (!LocationName || !['Y', 'N'].includes(IsActive)) {
      return res.status(400).json({
        message: 'Invalid LocationName or IsActive value',
      });
    }
    // Call the stored procedure using sequelize.query
    const result = await sequelize.query('EXEC USP_LocationInsUpDel @Ncode = :Ncode, @Mode = I, @LocationName = :LocationName, @CountryId = :CountryId, @StateId = :StateId, @CityId = :CityId, @IsActive = :IsActive', {
      replacements: {
        Ncode: Ncode,
   
        LocationName: LocationName,
        CountryId: CountryId,
        StateId: StateId,
        CityId: CityId,
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

// Get all locations
exports.getAllLocations = async (req, res) => {


    
  try {const {
    TableName
} = req.params;
    const result = await sequelize.query('EXEC USP_GetAlltableData @TableName="VW_Location"', {
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

// Get a location by ID
exports.getLocationById = async (req, res) => {
  try {
    const { Ncode } = req.params;

    // Call the stored procedure using sequelize.query
    const result = await sequelize.query('EXEC USP_GetAlltableDataById @TableName="VW_Location",@Ncode = :Ncode', {
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
exports.updateLocation = async (req, res) => {
  try {
    const { Ncode } = req.params;
    const {  LocationName, CountryId, StateId, CityId, IsActive } = req.body;

    // Check if required parameters are provided
    if (!LocationName || !['Y', 'N'].includes(IsActive)) {
      return res.status(400).json({
        message: 'Invalid LocationName or IsActive value',
      });
    }

    // Call the stored procedure using sequelize.query
    const result = await sequelize.query('EXEC USP_LocationInsUpDel @Ncode = :Ncode, @Mode = U, @LocationName = :LocationName, @CountryId = :CountryId, @StateId = :StateId, @CityId = :CityId, @IsActive = :IsActive', {
      replacements: {
        Ncode: Ncode,
        LocationName: LocationName,
        CountryId: CountryId,
        StateId: StateId,
        CityId: CityId,
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
// Delete a location by ID
exports.deleteLocation = async (req, res) => {
  try {
    const { Ncode } = req.params;
    const {  LocationName, CountryId, StateId, CityId, IsActive } = req.body;
 

    // Call the stored procedure using sequelize.query
    const result = await sequelize.query('EXEC USP_LocationInsUpDel @Ncode = :Ncode, @Mode = D, @LocationName = :LocationName, @CountryId = :CountryId, @StateId = :StateId, @CityId = :CityId, @IsActive = :IsActive', {
      replacements: {
        Ncode: Ncode,
      
        LocationName: LocationName,
        CountryId: CountryId,
        StateId: StateId,
        CityId: CityId,
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
