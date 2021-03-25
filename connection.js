const MongoClient = require("mongodb").MongoClient;
const connectionString = "mongodb://localhost:27017";

const client = new MongoClient(connectionString,{useUnifiedTopology:true});

(async () => {
    try {
        //connection
        await client.connect();
        console.log("database connected");
    } catch (error) {
        console.error(error)
    }
})();

module.exports = client