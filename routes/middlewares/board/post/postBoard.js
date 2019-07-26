const Board = require('../../../../database').Board;
const BoardHashtag = require('../../../../database').BoardHashtag;

const postBoard = async (req, res, next) => {
  const { title, content } = req.body;
  const hashTags = req.body.hashtag;
  const user = res.locals.user;

  try {
    const board = await Board.create({
      user_pk: user.pk,
      title: title,
      content: content,
    });

    if (hashTags) {
      for (var i = 0; i < hashTags.length; i++)
        await BoardHashtag.create({
          board_pk: board.pk,
          hashtag: hashTags[i],
        });
    }
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

module.exports = postBoard;
