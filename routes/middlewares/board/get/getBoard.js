const Board = require('../../../../database').Board;

const getBoard = async (req, res, next) => {
  try {
    const board = await Board.findAll({
      order: [['createdAt', 'DESC']],
    });

    if (board) {
      res.json({
        success: true,
        data: {
          board: board
            ? board.map(val => ({
                pk: val.pk,
                title: val.title,
                content: val.content,
                createdAt: val.createdAt,
                updatedAt: val.updatedAt,
              }))
            : '게시물이 없습니다.',
        },
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

module.exports = getBoard;
