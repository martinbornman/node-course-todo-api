var express     = require('express');
var bodyParser  = require('body-parser');

var {mongoose} = require('./db/mongoose');  // use ES6 destructioring {mongoose}
var  {Todo} = require('./models/todo');     // use ES6 destructioring {Todo}
var {User} = require('./models/user');      // use ES6 destructioring {User}

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000 my Gin and Bella');
});

module.exports = {app};

