const User = require('../../../../database').User;

const register = async (req, res, next) => {
  const user = res.locals.user;
  const temp = res.locals.temp;

  console.log(user);

  try {
    await User.create({
      id: user.id,
      password: temp.password,
      name: user.name,
      salt: temp.salt,
    });

    res.json({
      success: true,
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
