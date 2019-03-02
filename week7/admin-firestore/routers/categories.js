const router = require('express').Router();
const db = require('../db')

router.get('', (req, res, next) => {

  db.collection('categories')
    .get()
    .then(results => {
      const categories = []
      results.forEach(doc => categories.push(Object.assign({id: doc.id}, doc.data())))
      return categories
    })
    .then(categories => {
      db.collection('products')
        .get()
        .then(results => {
          const products = [];
          results.forEach(doc => products.push(Object.assign({id: doc.id}, doc.data())))
          res.render('categories', {categories, products});
        })
    })
    .catch(err => next(err))
});

router.post('', (req, res, next) => {

  db.collection('categories')
    .doc(req.body.name)
    .set({name: req.body.name, products: []})
    .then(results => {
      res.status(200).send({msg: 'success to add category'});
    })
    .catch(err => next(err))

})


router.get('/:category_name', (req, res, next) => {
  const name = req.params.category_name;

  db.collection('categories')
    .where('name', '==', name)
    .get()
    .then(results => {
      if (!results || !results.size) return res.status(404).json({msg: `${name} 카테고리가 없습니다.`});
      const categories = []
      results.forEach(doc => categories.push(Object.assign({id: doc.id}, doc.data())))
      res.json(categories[0]);
    })
    .catch(err => {
      res.status(500).json({msg: 'internal server error', err});
    })
});

router.put('/:category_id/products', (req, res, next) => {
  const product_id = req.body.product_id
  const category_id = req.params.category_id

  db.collection('categories')
    .doc(category_id)
    .get()
    .then(result => {
      if (!result) throw 400
      return result.data()
    })
    .then(category => {
      category.products.push(product_id)
      return db.collection('categories').doc(category_id).set(category)
    })
    .then(result => {
      res.status(200).send({msg: 'success to add product to category'});
    })
    .catch(err => next(err))
});


module.exports = router;
