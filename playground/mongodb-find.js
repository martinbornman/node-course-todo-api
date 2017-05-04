// const MongoClient = require('mongodb').MongoClient; (Object destructuring below as well)
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server, my Gina and Bella');

    // db.collection('Todos').find({
    //     _id: new ObjectID('590aba36f53a1031d9518117')
    //     }).toArray().then((docs) => {
    //         console.log('Todos');
    //         console.log(JSON.stringify(docs, undefined, 2));
    //     }, (err) => {
    //         console.log('Unable to fetch Todos', err);
    //     });

// COUNT
    // db.collection('Todos').find().count().then((count) => {
    //         console.log(`Todos count: ${count}`);
    //     }, (err) => {
    //         console.log('Unable to fetch Todos', err);
    //     });

db.collection('Users').find({name: 'Gina'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
});
    // db.close();
});

// ./mongod --dbpath ~/mongo-data (Path to connect to database)