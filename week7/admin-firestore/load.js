const data = require('./data')

const admin = require('firebase-admin')
const serviceAccount = require('./fastcampus-844c0b925c5e.json')
const credential = admin.credential.cert(serviceAccount)

admin.initializeApp({
  credential,
})

db = admin.firestore()

const categoryMap = {}

data.forEach(d => {
  db.collection('products')
    .doc(d.p.id)
    .set(d.p)
    .then(ref => console.log(`Product ${d.p.name} load success`))
    .catch(err => { throw err})

  if (!categoryMap[d.c]) categoryMap[d.c] = [] 
  categoryMap[d.c].push(d.p.id)
})

Object.keys(categoryMap).forEach(key => {
  db.collection('categories')
    .doc(key)
    .set({name: key, products: categoryMap[key]})
    .then(ref => console.log(`Category ${key} load success`))
    .catch(err => { throw err})
})
