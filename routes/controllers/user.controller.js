//데이터 형식 검증
/* const registerValidation = require('../middlewares/user/register/_validation'); */

//유저 중복 체크
const checkUser = require('../middlewares/user/common/checkUser');

//회원가입 시 비밀번호와 재입력 비밀번호 일치하는지 확인
const checkPassword1 = require('../middlewares/user/register/checkPassword');

//로그인 시 비밀번호 확인
const checkPassword2 = require('../middlewares/user/login/checkPassword2');

//회원가입
const register = require('../middlewares/user/register/register');

//로그인
const issueToken = require('../middlewares/jwt/issueToken');

//비밀번호 암호화
const passwordEncryption = require('../middlewares/user/common/passwordEncryption');

const router = require('express').Router();

router.post('/register', checkUser, checkPassword1, passwordEncryption, register);
router.post('/login', checkUser, passwordEncryption, checkPassword2, issueToken);

module.exports = router;
