const Board = require('../../../../database').Board;
const BoardLike = require('../../../../database').boardLikes;

const likeBoard = async (req, res, next) => {
  const board_pk = req.query.board_pk;
  const user = res.locals.user;

  try {
    const board = await Board.findOne({
      where: {
        pk: board_pk,
      },
    });

    if (board) {
      const like = await BoardLike.findOne({
        where: {
          user_pk: user.pk,
          board_pk,
        },
      });

      like
        ? await BoardLike.destroy({ where: { user_pk: user.pk, board_pk: board_pk } })
        : await BoardLike.create({ user_pk: user.pk, board_pk: board_pk });

      res.json({
        success: true,
      });
    } else {
      res.status(404).json({
        success: false,
        message: '게시글을 찾을 수 없습니다.',
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

module.exports = likeBoard;
