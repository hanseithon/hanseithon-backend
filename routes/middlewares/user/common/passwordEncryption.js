const crypto = require('crypto');
const randomstring = require('randomstring');

const passwordEncryption = (req, res, next) => {
  const { password } = req.body;
  const user = res.locals.user;

  const encryption = {
    salt: user ? user.salt : null,
    password: password,
  };

  try {
    if (!encryption.salt) {
      encryption.salt = randomstring.generate(64);
    }
    encryption.password = crypto
      .createHash('sha256')
      .update(encryption.password + encryption.salt)
      .digest('base64');
    res.locals.temp = {
      password: encryption.password,
      salt: encryption.salt,
    };

    next();
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: '데이터베이스 에러',
    });
  }
};

module.exports = passwordEncryption;
