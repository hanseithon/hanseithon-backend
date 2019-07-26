const Category = require('../../database').Category;

const router = require('express').Router();

router.post('/', async (req, res) => {
  try {
    const category = req.body.category;

    if (category) {
      await Category.findOrCreate({
        where: {
          name: category,
        },
        default: {
          name: category,
        },
      });

      res.json({
        success: true,
      });
    } else {
      res.status(412).json({
        success: false,
        message: '카테고리를 입력하십시오.',
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: '데이터베이스 에러',
    });
  }
});

router.get('/', async (req, res, next) => {
  try {
    const category = await Category.findAll({});

    res.json({
      success: true,
      data: {
        category,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: '데이터베이스 에러',
    });
  }
});

module.exports = router;
