const crypto = require('crypto');

const passwordEncryption = (req, res, next) => {
  const { password } = req.body;
  const user = res.locals.user;

  const encryption = {
    salt: user ? user.salt : null,
    password: null,
  };

  try {
    if (!user.salt) {
      encryption.salt = crypto.randomBytes(64, (err, buf) => {
        crypto.pbkdf2(password, buf.toString('base64'), 44444, 64, 'sha512');
      });
    }
    encryption.password = crypto.pbkdf2(password, encryption.salt, 44444, 64, 'sha512');

    res.locals.user = {
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
