const { Sequelize } = require('sequelize');
const State = require('../../models/stateModel');
const sequelize = require('../../config/dbConfig');

// Create, update, or delete a state
exports.createState = async (req, res) => {
  try {
    const { Ncode,  StateName, CountryId, IsActive ,Code} = req.body;
    
    if (!StateName|| !['Y', 'N'].includes(IsActive)) {
      return res.status(400).json({
          message: 'Invalid StateName or IsActive value',
      });
  }
    // Call the stored procedure using sequelize.query
    const result = await sequelize.query('EXEC USP_StateInsUpDel @Ncode = 0, @Mode = I, @StateName = :StateName, @CountryId = :CountryId, @IsActive = :IsActive, @Code =:Code', {
      replacements: {
        Ncode: Ncode,
        StateName: StateName,
        CountryId: CountryId,
        IsActive: IsActive,
        Code:Code,
       
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

// Get all states
exports.getAllStates = async (req, res) => {
  try {  
const {
    TableName
} = req.params;
    // Call the stored procedure using sequelize.query
    const result = await sequelize.query('EXEC USP_GetAlltableData @TableName="VW_State"', {
        replacements: {
          
            TableName:TableName,

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
exports.getAllCountry = async (req, res) => {
  try {  
    const {
      Ncode
  } = req.params;
    // Call the stored procedure using sequelize.query
    const result = await sequelize.query('EXEC USP_GetAlltableData @TableName="tblCountry"', {
        
        type: Sequelize.QueryTypes.SELECT,
    });

      


    res.json(result);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get a state by ID
exports.getStateById = async (req, res) => {
  try {const {
    Ncode
} = req.params;
    const {
        TableName
    } = req.params;
  

    // Call the stored procedure using sequelize.query
    const result = await sequelize.query('EXEC USP_GetAlltableDataById @TableName="VW_State",@Ncode = :Ncode', {
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
// Update state status, name, and short name
exports.UpdatedState = async (req, res) => {
    try {
        const { Ncode } = req.params;
        const { StateName, CountryId, IsActive,Code} = req.body;

        if (!StateName || !CountryId || !['Y', 'N'].includes(IsActive)) {
            return res.status(400).json({
                message: 'Invalid StateName, CountryId, or IsActive value',
            });
        }

        // Call the stored procedure using sequelize.query
        const UpdatedState = await sequelize.query('EXEC USP_StateInsUpDel @Ncode = :Ncode, @Mode = "U", @StateName = :StateName, @CountryId = :CountryId, @IsActive = :IsActive, @Code = :Code', {
            replacements: {
                Ncode: Ncode,
                StateName: StateName,
                CountryId: CountryId,
                IsActive: IsActive,
                Code:Code,
               
            },
            type: Sequelize.QueryTypes.SELECT,
        });

        res.json({
            message: UpdatedState[0].status,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};


// Delete a state by ID
exports.deleteState = async (req, res) => {
  try {
    const {
        Ncode
    } = req.params;

   
    // Call the stored procedure using sequelize.query
    const result = await sequelize.query('EXEC USP_StateInsUpDel @Ncode = :Ncode, @Mode = "D", @StateName = "A", @CountryId = 0, @IsActive = N, @Code = "A"', {
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
