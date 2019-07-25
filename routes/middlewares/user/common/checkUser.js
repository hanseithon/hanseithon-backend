const User = require('../../../../database').User;

const checkUser = async (req, res, next) => {
  const { id, password, rePassword, name } = req.body;

  try {
    const user = await User.findOne({
      where: {
        id,
      },
    });

    switch (req.path) {
      case '/register':
        user
          ? res.status(412).json({
              success: false,
              message: '중복된 아이디입니다.',
            })
          : (res.locals.user = {
              id: id,
              name: name,
              password: password,
              rePassword: rePassword,
            });
        next();
        break;
      case '/login':
        !user
          ? res.status(412).json({
              success: false,
              message: '존재하지 않는 유저입니다.',
            })
          : (res.locals.user = user);
        next();
        break;
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: '데이터베이스 에러',
    });
  }
};

module.exports = checkUser;
