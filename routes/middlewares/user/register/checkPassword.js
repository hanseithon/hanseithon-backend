const checkPassword = (req, res, next) => {
  const { password, rePassword } = req.body;

  try {
    if (password === rePassword) {
      next();
    } else {
      res.status(412).json({
        success: false,
        message: '유효하지 않은 정보입니다.',
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: '데이터베이스 에러',
    });
  }
};

module.exports = checkPassword;
