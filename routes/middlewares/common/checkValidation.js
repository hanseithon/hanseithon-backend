const { validationResult } = require('express-validator');

const checkValidation = (req, res, next) => {
  const result = validationResult(req);
  if (result.array().length) {
    console.log(result);
    res.status(412).json({
      success: false,
      message: '잘못된 데이터 형식입니다.',
    });
  } else {
    next();
  }
};

module.exports = checkValidation;
