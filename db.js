
const mongoClient = require("mongodb").MongoClient;
mongoClient.connect("mongodb://localhost:27017",
                     {useUnifiedTopology: true})
            .then(connection => {
                  global.connection = connection.db("reserva");
                  console.log("connected!");
            })
            .catch(error => console.log(error));

function findCustomers() {
   return global.connection.collection("reserva")
                          .find({})
                          .toArray(); 
    
}

module.exports = {findCustomers}
//module.exports = {}