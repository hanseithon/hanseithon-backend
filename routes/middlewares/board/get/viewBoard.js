const User = require('../../../../database').User;
const Board = require('../../../../database').Board;
const boardLikes = require('../../../../database').boardLikes;
const BoardHashtag = require('../../../../database').BoardHashtag;

const viewBoard = async (req, res, next) => {
  const user = res.locals.user;
  const board_pk = req.body.board_pk;

  try {
    const board = await Board.findOne({
      where: {
        pk: board_pk,
      },
    });

    const BoardLike = await boardLikes.findAll({
      where: {
        board_pk: board_pk,
      },
    });

    const boardHashtag = await BoardHashtag.findAll({
      where: {
        board_pk: board_pk,
      },
    });

    res.json({
      success: true,
      data: {
        board: {
          pk: board_pk,
          title: board.title,
          content: board.content,
        },
        boardLike: {
          isLiked: BoardLike.some(val => val.pk === user.pk),
          likeCount: BoardLike ? BoardLike.length : 0,
        },
        boardHashtag: {
          boardHashtag,
        },
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: '데이터베이스 에러',
    });
  }
};

module.exports = viewBoard;
