var express = require('express');
var router = express.Router();
const db = require("../db");

/* GET users listing. */
router.get('/', function(req, res, next) {
  db.findCustomers()
   .then(reserva => {
     console.log(reserva);
     res.render('reservas',{title:'REST API SEREDE', reserva });

   })
   .catch(error => console.log(error));
});

module.exports = router;