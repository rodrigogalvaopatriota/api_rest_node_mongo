const express = require('express');
const router = express.Router();
const db = require("../db");

/* GET home page. */
router.get('/', function(req, res, next) {
 db.findCustomers()
   .then(clientes => {
     console.log(clientes);
     res.render('index', { title: 'Expressss', clientes });

   })
   .catch(error => console.log(error));
  
});

module.exports = router;
