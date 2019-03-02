const router = require('express').Router()
const db = require('../db')
const auth = require('../auth')

router.get('', (req, res, next) => {
  db.collection('orders')
    .get()
    .then(results => {
      const orders = []
      results.forEach(doc => orders.push(Object.assign({id: doc.id}, doc.data())))
      res.format({
        html () {
          res.render('orders', {orders})
        },
        json () {
          res.json(orders)
        }
      })
    })
    .catch(err => next(err))
})

router.post('', auth.authenticate(), (req, res, next) => {
  const {customer, items, order_note, address, payment, total_price} = req.body

  db.collection('orders')
    .add({customer, items, order_note, address, payment, total_price})
    .then(ref => {
      res.status(200).json({msg: 'success to order'})
    })
    .catch(err => res.status(500).json({msg: 'internal server error'}))
})

module.exports = router
