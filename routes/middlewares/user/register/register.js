const User = require('../../../../database/models/user.model');

const register = async (req, res, next) => {
  const user = res.locals.user;

  try {
    await User.create({
      id: user.id,
      password: user.password,
      name: user.name,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: '데이터베이스 에러',
    });
  }
};

module.exports = register;
