const MongoClient = require("mongodb").MongoClient;
const connectionString = "mongodb://localhost:27017";

// MongoClient.connect(connectionString,{useUnifiedTopology: true},
//     (error,client) => {
//         if (error) return console.error(error)
//         console.log("Server database connect !")
//     })

//method asycn
(async() =>{
    try{
        //connection
        const client = await MongoClient.connect(connectionString,{useUnifiedTopology: true})
        console.log("Server database connect !")
        const db = client.db("sekolah")
        //query
        const siswa = await db.collection('siswa').find().toArray()
        //log
        console.log(siswa)
    }catch(error){
        console.error(error)
    }
})();
