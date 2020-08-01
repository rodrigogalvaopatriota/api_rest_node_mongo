//https://www.youtube.com/watch?v=1ww5okv2DE0
//CORS define o que pode ser requisitado no cabeçalho, quando a url estiver em servidor não local

const express = require('express');
const router = express.Router();
const db = require('./db');


router.get('/', function (req, res, next) {
  //res.render("index", {title: "express"});
  db.buscaPedidos()
    .then(pedidos => {
      console.log(pedidos);
      res.render("index.ejs", {title: "express", pedidos});

    })
    .catch(error =>  console.log(error));
     
});



module.exports = router;
//module.exports = router;

