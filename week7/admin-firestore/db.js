const admin = require('firebase-admin')
const serviceAccount = require('./fastcampus-844c0b925c5e.json')

let db = {}

const init = () => {
  const credential = admin.credential.cert(serviceAccount)

  admin.initializeApp({
    credential,
  })

  db = admin.firestore()
}

const collection = (collection) => {
  return db.collection(collection)
}

module.exports = {init, collection}
