//토큰 인증
const verifyToken = require('../middlewares/jwt/verifyToken');

//게시글 작성
const postBoard = require('../middlewares/board/post/postBoard');
//게시글 목록
const getBoard = require('../middlewares/board/get/getBoard');
//게시글 좋아요
const likeBoard = require('../middlewares/board/like/likeBoard');
//게시글 보기
const viewBoard = require('../middlewares/board/get/viewBoard');

const router = require('express').Router();

router.use(verifyToken);

router.post('/', postBoard);
router.get('/', getBoard);

router.get('/view', viewBoard);
router.post('/like', likeBoard);
/* 
router.delete('/');

router.post('/like'); */

module.exports = router;
