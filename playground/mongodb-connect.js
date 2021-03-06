// const MongoClient = require('mongodb').MongoClient; (Object destructuring below as well)
const {MongoClient, ObjectID} = require('mongodb');


// ES6 object destructuring below

// var user = {name: 'Gina', age: 13};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server, my Gina and Bella');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // Insert new doc into the Users Collection - have a few properties(name, age, location)

    // db.collection('Users').insertOne({
    //     name: 'Gina',
    //     age: 13,
    //     location: 'Saint Francis Bay'
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert user', err);
    //     }

    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    db.close();
});

// must be in the mongo db in the bin directory (Path to connect to database)