const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient
const connectionURL = 'mongodb+srv://SelineOuma:seline123@cluster0.qjsmvkx.mongodb.net/?retryWrites=true&w=majority'
const databaseName = 'task-manager'
MongoClient.connect(connectionURL,(error,client) =>{
    if (error){
        return console.log('unable to connect to database');
    } 
    const db = client.db (databaseName);
    db.collection('users').insertMany([
        {
            name: 'Seline',
            age: 24,

        },
        {
            name:'Joy',
            age: 20,
        },
        {
            name:'Jack',
            age:24,
        },
        {
            name:'Sam',
            age:20,
        },

    ]);
        (error, results) => {
            if (error){
                return console.log("unable to create user");
            };
            console.log(results);
        };
        db.collection("users").find({age:20}).toArray((error,users) => {
            console.log(users);
    });
});



/*db.collection('users').findOne(
    { _id: new ObjectId("6318483f247893a5b71119b2")},
    (error,user) => {
        if(error){
            return console.log("unable to access user");
        }
        console.log(user);
    }
);

db.collection("users").find({age:20}).toArray((error,users) => {
    console.log(users);
});*/