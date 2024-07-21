const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://127.0.0.1:27017/FluencyTracker";
MongoClient.connect(url)
.then(client => {
const db = client.db("FluencyTracker");
db.createCollection("Users")
.then(res => {
console.log("Collection created");
client.close();
})
.catch(err => {
    console.error("Error creating collection:", err);
});
})
.catch(err => {
    console.error("Error connecting to MongoDB:", err);
});