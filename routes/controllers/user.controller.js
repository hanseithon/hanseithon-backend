/* //데이터 형식 체크
const registerValidation = ;
const checkValidation = ;

//유저 중복 체크
const checkUser = 

//회원가입 시 비밀번호와 재입력 비밀번호 일치하는지 확인
const checkPassword = ;

//비밀번호 암호화
const passwordEncryption = ;

const register =; */

const router = require('express').Router();

console.log(3);
router.post('/register', require('../middlewares/user/register/_validation'));
console.log(4);
router.use(require('../middlewares/common/checkValidation'));

router.post(
  '/register',
  require('../middlewares/user/common/checkUser'),
  require('../middlewares/user/register/checkPassword'),
  require('../middlewares/user/common/passwordEncryption'),
  require('../middlewares/user/register/register')
);

module.exports = router;
