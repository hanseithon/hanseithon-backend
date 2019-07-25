//토큰 인증
const verifyToken = require('../middlewares/jwt/verifyToken');

//게시글 작성
const postBoard = require('../middlewares/board/post/postBoard');

const router = require('express').Router();

router.use(verifyToken);

router.post('/', postBoard);

router.delete('/');

router.post('/like');

module.exports = router;
