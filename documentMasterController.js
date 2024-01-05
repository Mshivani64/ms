const { Sequelize } = require('sequelize');
const sequelize = require('../../config/dbConfig');

// Create or update a document
exports.createDocument = async (req, res) => {
  try {
    const {  DocumentName, DocumentType, DocumentRequired, IsActive } = req.body;
    
    if (!DocumentName|| !['Y', 'N'].includes(IsActive)) {
        return res.status(400).json({
            message: 'Invalid DocumentName or IsActive value',
        });
    }
    const result = await sequelize.query('EXEC USP_DocumentMasterInsUpDel @Ncode = :Ncode, @Mode = I, @DocumentName = :DocumentName, @DocumentType = :DocumentType,  @DocumentRequired = :DocumentRequired, @IsActive = :IsActive', {
      replacements: {
      
        DocumentName: DocumentName,
        DocumentType: DocumentType,
        DocumentRequired: DocumentRequired,
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

// Get all documents
exports.getAllDocuments = async (req, res) => {
  try {
    const { TableName } = req.params;

    const result = await sequelize.query('EXEC USP_GetAlltableData @TableName="tblDocumentMaster"', {
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

// Get a document by ID
exports.getDocumentById = async (req, res) => {
  try {
    const { Ncode } = req.params;

    const result = await sequelize.query('EXEC USP_GetAlltableDataById @TableName="tblDocumentMaster",@Ncode = :Ncode', {
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
exports.UpdateDocument = async (req, res) => {
    try {
      const { Ncode } = req.params;
      const {   DocumentName, DocumentType, DocumentRequired, IsActive } = req.body;
  
      const result = await sequelize.query('EXEC USP_DocumentMasterInsUpDel @Ncode = :Ncode, @Mode = U, @DocumentName = :DocumentName, @DocumentType = :DocumentType,  @DocumentRequired = :DocumentRequired, @IsActive = :IsActive', {
        replacements: {
            Ncode:Ncode,
          DocumentName: DocumentName,
          DocumentType: DocumentType,
          DocumentRequired: DocumentRequired,
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
// Delete a document by ID
exports.deleteDocument = async (req, res) => {
  try {
    const { Ncode} = req.params;

    const result = await sequelize.query('EXEC USP_DocumentMasterInsUpDel @Ncode = :Ncode, @Mode = D, @DocumentName = "A", @DocumentType = "A", @DocumentRequired = "A", @IsActive = N', {
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
