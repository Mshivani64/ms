const {
    Sequelize
} = require('sequelize');
const Country = require('../../models/countryModel');
const sequelize = require('../../config/dbConfig');

// Get all countries using stored procedure
exports.getCountries = async (req, res) => {
    try {
        const {
            TableName
        } = req.params;
        // Call the stored procedure using sequelize.query
        const result = await sequelize.query('EXEC USP_GetAlltableData @TableName="tblcountry"', {

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

// Get a country by ID
exports.getCountryById = async (req, res) => {
    try {
        const {
            Ncode
        } = req.params;
        const {
            TableName
        } = req.params;


        // Call the stored procedure using sequelize.query
        const result = await sequelize.query('EXEC USP_GetAlltableDataById @TableName="tblcountry",@Ncode = :Ncode', {

            replacements: {
                TableName: TableName,
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

// Create a new country
exports.createCountry = async (req, res) => {
    try {


        const {
            CountryName,
            CountryShortName,
            IsActive
        } = req.body;



        if (!CountryName || !['Y', 'N'].includes(IsActive)) {
            return res.status(400).json({
                message: 'Invalid CountryName or IsActive value',
            });
        }






        // Call the stored procedure using sequelize.query
        const result = await sequelize.query('EXEC USP_CountryInsUpDel @Ncode = 0, @Mode = "I", @CountryName = :CountryName, @CountryShortName = :CountryShortName, @IsActive = :IsActive', {
            replacements: {
                CountryName: CountryName,
                CountryShortName: CountryShortName,
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
exports.updateCountryStatus = async (req, res) => {
    try {
        const {
            Ncode
        } = req.params;
        const {
            CountryName,
            CountryShortName,
            IsActive
        } = req.body;



        const result = await sequelize.query('EXEC USP_CountryInsUpDel @Ncode = :Ncode, @Mode = "U", @CountryName = :CountryName, @CountryShortName = :CountryShortName, @IsActive = :IsActive', {
            replacements: {
                Ncode: Ncode,

                CountryName: CountryName,
                CountryShortName: CountryShortName,
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

// Delete a country by Ncode
exports.deleteCountry = async (req, res) => {
    try {
        const {
            Ncode
        } = req.params;
      

        // Call the stored procedure using sequelize.query
        const result = await sequelize.query('EXEC USP_CountryInsUpDel @Ncode = :Ncode, @Mode = "D", @CountryName = "A", @CountryShortName = "A", @IsActive = N', {
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