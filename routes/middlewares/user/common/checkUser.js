const User = require('../../../../database/models/user.model');

const checkUser = async (req, res, next) => {
  const { id } = req.body;

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
          : next();
      case '/login':
        user
          ? (res.local.user = user)
          : res.status(412).json({
              success: false,
              message: '존재하지 않는 유저입니다.',
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

module.exports = checkUser;
