const router = require('express').Router()
const db = require('../db')

router.get('', (req, res, next) => {

  db.collection('products')
    .get()
    .then(results => {
      const products = [];
      results.forEach(doc => products.push(Object.assign({id: doc.id}, doc.data())))

      res.format({
        html: () => res.render('products/list', {products}),
        json: () => res.json(products)
      })
    })
    .catch(err => next(err))
})

router.post('', (req, res, next) => {
  const {name, price, info, avg_stars, total_reviews} = req.body

  db.collection('products')
    .add({name, price, info, avg_stars, total_reviews})
    .then(ref => {
      console.log('Added document with ID: ', ref.id)
      res.status(200).send({msg: 'success to add product'})
    })
    .catch(err => next(err))
})

router.get('/new', (req, res) => {
  res.render('products/new')
})

router.get('/:id', (req, res, next) => {
  db.collection('products')
    .doc(req.params.id)
    .get()
    .then(result => {
      if (!result || !result.data()) return res.status(404)
      const product = Object.assign({id: result.id}, result.data())

      res.format({
        html: () => res.render('products/edit', {product}),
        json: () => res.json(product)
      })
    })
    .catch(err => next(err))
})

router.post('/:id', (req, res, next) => {
  res.format({
    html: () => {
      db.collection('products')
        .doc(req.params.id)
        .update(req.body)
        .then(result => {
          res.redirect('/products')
        })
        .catch(err => next(err))
    },
    json: () => {
      res.sendStatus(405)
    }
  })
})

router.put('/:id', (req, res, next) => {
  const updateData = Object.assign({}, req.body)


  db.collection('products')
    .doc(req.params.id)
    .update(updateData)
    .then(result => {
      res.status(200).send({msg: 'success to update product'})
    })
    .catch(err => next(err))
})

router.delete('/:id', (req, res, next) => {
  db.collection('products')
    .doc(req.params.id)
    .delete()
    .then(result => {
      res.status(200).send({msg: 'success to delete product'})
    })
    .catch(err => next(err))
})

module.exports = router