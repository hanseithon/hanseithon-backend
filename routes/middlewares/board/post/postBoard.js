const Board = require('../../../../database').Board;

const postBoard = (req, res, next) => {
  const { title, content } = req.body;

  try {
    await Board.create({
      title: title,
      content: content
    })

    res.json({
      success: true
    })
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: '데이터베이스 에러',
    });
  }
};
