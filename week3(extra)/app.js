var express = require('express');
var app = express();
var productRouter = require('./routers/products');


app.set('view engine', 'ejs');
app.set('view', __dirname + '/views');


app.use(function(req, res, next) {
    console.log('[URL] : ' + req.url);
    next();
});

app.use('/products', productRouter);
app.use(express.static(__dirname + '/public', {
    maxAge: '1d'
}));


// app.get("/", function(req, res) {
//     res.send("hello express");
// });

app.get('/users', function(req, res) {
    res.json([
        { name: 'yui', age: 33 }
    ]);
});

// es6
app.get('/users/:id', (req, res) => {
    var { id } = req.params;
    res.json({name: 'yui', id });
})

app.listen(3000, function() {
    console.log('listening port 3000');
});