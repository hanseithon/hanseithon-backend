const jwt = require('jsonwebtoken');
const User = require('../../../database').User;

const verifyToken = async (req, res, next) => {
  const token = req.headers.token;

  try {
    const token_secret = process.env.TOKEN_SECRET;
    const pk = jwt.verify(token, token_secret);

    const user = await User.findOne({
      where: {
        pk: pk,
      },
    });

    if (user) {
      res.locals.user = user;
      next();
    } else {
      res.status(403).json({
        success: false,
        message: '권한이 없습니다.',
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

module.exports = verifyToken;
