const { Sequelize } = require('sequelize');
const Branch = require('../../models/branchModel');
const sequelize = require('../../config/dbConfig');

// Create or update a branch
exports.createBranch = async (req, res) => {
  try {
    const { Ncode,  BranchName, BranchCode, CountryId, StateId, CityId, LocalityId, PostalCode, Address, Email, Contact, Mobile, IsActive } = req.body;
    
    if (!BranchName|| !['Y', 'N'].includes(IsActive)) {
        return res.status(400).json({
            message: 'Invalid BranchName or IsActive value',
        });
    }
    const result = await sequelize.query('EXEC USP_BranchMasterInsUpDel @Ncode = :Ncode, @Mode = I, @BranchName = :BranchName, @BranchCode = :BranchCode, @CountryId = :CountryId, @StateId = :StateId, @CityId = :CityId, @LocalityId = :LocalityId, @PostalCode = :PostalCode, @Address = :Address, @Email = :Email, @Contact = :Contact, @Mobile = :Mobile, @IsActive = :IsActive', {
      replacements: {
        Ncode: Ncode,
        BranchName: BranchName,
        BranchCode: BranchCode,
        CountryId: CountryId,
        StateId: StateId,
        CityId: CityId,
        LocalityId: LocalityId,
        PostalCode: PostalCode,
        Address: Address,
        Email: Email,
        Contact: Contact,
        Mobile: Mobile,
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

// Get all branches
exports.getAllBranches = async (req, res) => {
  try {
    const { TableName } = req.params;

    const result = await sequelize.query('EXEC USP_GetAlltableData @TableName = tblBranchMaster', {
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

// Get a branch by ID
exports.getBranchById = async (req, res) => {
  try {
    const { Ncode } = req.params;

    const result = await sequelize.query('EXEC USP_GetAlltableDataById @TableName = "tblBranchMaster", @Ncode = :Ncode', {
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
exports.UpdateBranch = async (req, res) => {
    try {
      const { Ncode,  BranchName, BranchCode, CountryId, StateId, CityId, LocalityId, PostalCode, Address, Email, Contact, Mobile, IsActive } = req.body;
      
    
      const result = await sequelize.query('EXEC USP_BranchMasterInsUpDel @Ncode = :Ncode, @Mode = U, @BranchName = :BranchName, @BranchCode = :BranchCode, @CountryId = :CountryId, @StateId = :StateId, @CityId = :CityId, @LocalityId = :LocalityId, @PostalCode = :PostalCode, @Address = :Address, @Email = :Email, @Contact = :Contact, @Mobile = :Mobile, @IsActive = :IsActive', {
        replacements: {
          Ncode: Ncode,
          BranchName: BranchName,
          BranchCode: BranchCode,
          CountryId: CountryId,
          StateId: StateId,
          CityId: CityId,
          LocalityId: LocalityId,
          PostalCode: PostalCode,
          Address: Address,
          Email: Email,
          Contact: Contact,
          Mobile: Mobile,
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
// Delete a branch by ID
exports.deleteBranch = async (req, res) => {
  try {
    const { Ncode, BranchName, BranchCode, CountryId, StateId, CityId, LocalityId, PostalCode, Address, Email, Contact, Mobile, IsActive } = req.body;

    const result = await sequelize.query('EXEC USP_BranchMasterInsUpDel @Ncode = :Ncode, @Mode = D, @BranchName = :BranchName, @BranchCode = :BranchCode, @CountryId = :CountryId, @StateId = :StateId, @CityId = :CityId, @LocalityId = :LocalityId, @PostalCode = :PostalCode, @Address = :Address, @Email = :Email, @Contact = :Contact, @Mobile = :Mobile, @IsActive = :IsActive', {
      replacements: {
        Ncode: Ncode,
        BranchName: BranchName,
        BranchCode: BranchCode,
        CountryId: CountryId,
        StateId: StateId,
        CityId: CityId,
        LocalityId: LocalityId,
        PostalCode: PostalCode,
        Address: Address,
        Email: Email,
        Contact: Contact,
        Mobile: Mobile,
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
