var router = require('express').Router();

var products = [
    { id: "1", info: 'lorem info 1', name: 'Note 01', price: 2000, avg_stars: 4, total_reviews: 10 },
    { id: "2", info: 'lorem info 2', name: 'Note 02', price: 3000, avg_stars: 3, total_reviews: 10 },
    { id: "3", info: 'lorem info 3', name: 'Note 03', price: 4000, avg_stars: 1, total_reviews: 10 },
    { id: "4", info: 'lorem info 4', name: 'Note 04', price: 5000, avg_stars: 5, total_reviews: 10 }
];

router.get('/', function(req, res) {
    // res.send('product list');
    // console.log('asdfasdf');
    res.render('list', products);
});

router.get('/:id', function(req, res) {
    res.send(req.params.id + ' product');
})

module.exports = router;