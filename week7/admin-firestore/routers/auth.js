const router = require('express').Router()
const db = require('../db')
const jwt = require('jwt-simple')
const config = require('../config')

const isValidEmail = (email) => {
  const regex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

  return regex.test(email)
}

router.post('/login', (req, res) => {
  const {email, password} = req.body

  if (!email || !password) return res.status(400).send({msg: '이메일 또는 비밀번호를 넣어주세요.'})
  if (!isValidEmail(email)) return res.status(400).send({msg: '유효하지 않은 이메일 형식입니다.'})

  db.collection('users')
    .where('email', '==', email)
    .where('password', '==', password)
    .limit(1)
    .get()
    .then(results => {
      if (!results || !results.size) return res.status(401).json({msg: '해당하는 사용자가 없습니다.'})
      let user
      results.forEach(doc => {
        user = Object.assign({id: doc.id}, doc.data())
      })
      const token = jwt.encode(user, config.auth.key)
      res.json({token, msg: '로그인 성공!'})
    })
    .catch(err => {
      debugger
      if (err) return res.status(500).send({msg: 'internal server error'})
    })
})

router.post('/signup', function (req, res) {
  const {email, password} = req.body
  if (!email || !password) return res.status(400).send({msg: '이메일 또는 비밀번호를 넣어주세요.'})
  if (!isValidEmail(email)) return res.status(400).send({msg: '유효하지 않은 이메일 형식입니다.'})

  db.collection('users')
    .where('email', '==', email)
    .get()
    .then(result => {
      if (result && result.size) throw {code: 400, msg: '이미 등록된 이메일 입니다.'}

      return db.collection('users').add({email, password})
    })
    .then(results => {
      res.json({msg: '회원가입이 완료 되었습니다.'})
    })
    .catch(err => {
      if (!err.code || err instanceof Error) return res.status(500).send({msg: 'internal server error'})
      res.status(err.code).send({msg: err.msg})
    })
})

module.exports = router
