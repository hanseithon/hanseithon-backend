const checkPassword2 = (req, res, next) => {
  const user = res.locals.user;
  const temp = res.locals.temp;
  try {
    if (temp.password === user.password) {
      next();
    } else {
      res.status(412).json({
        success: false,
        message: '존재하지 않는 데이터입니다.',
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      messsage: '데이터베이스 에러',
    });
  }
};

module.exports = checkPassword2;
