const jwt = require('jsonwebtoken');

const issueToken = (req, res, next) => {
  const user = res.locals.user;

  try {
    const token_secret = process.env.TOKEN_SECRET;
    console.log(token_secret);
    const token = jwt.sign({ pk: user.pk }, token_secret);

    res.json({
      success: true,
      data: {
        user_name: user.name,
      },
      token,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: '데이터베이스 에러',
    });
  }
};

module.exports = issueToken;
