var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', () => {
    console.log('Server running on port 27017 my Gin and Bella');
});

module.exports = {mongoose};