const mongoClient = require("mongodb").MongoClient;

mongoClient.connect("mongodb://localhost:27017",
                     {useUnifiedTopology: true},
                     (error, connection)=> {
                         if(error) return console.log(error);
                         global.connection = connection.db("teste");
                         console.log("conectou");
                         //global.connection.collection("produtos").find({}).toArray();


                     });

//module.exports{};


function buscaPedidos() {
  return global.connection.collection("produtos")
                          .find({})
                          .toArray(); 
    
}

module.exports = {buscaPedidos}