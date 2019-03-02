const passport = require('passport')
const passportJWT = require('passport-jwt')
const cfg = require('./config')
const ExtractJwt = passportJWT.ExtractJwt
const Strategy = passportJWT.Strategy

const db = require('./db')

const params = {
  secretOrKey: cfg.auth.key,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
}

const init = () => {
  const strategy = new Strategy(params, function (payload, done) {

    db.collection('users').doc(payload.id)
      .get()
      .then(user => {
        if (!user || !user.data()) return done(new Error('User not found'))
        done(null, {id: user._id})
      })
      .catch(err => {
        if (err) return done(err)
      })
  })

  passport.use(strategy)

  passport.serializeUser(function (user, done) {
    done(null, user)
  })

  passport.deserializeUser(function (user, done) {
    done(null, user)
  })

  return passport.initialize()
}

const authenticate = () => {
  return passport.authenticate('jwt', cfg.auth.session)
}

module.exports = {init, authenticate}
