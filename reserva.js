const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/',(req, res, next) => {
  
//mongo
  //db.findCustomers();
  db.findCustomers().then(reserva => {
      console.log(reserva);
      return res.status(200).send({response: reserva})
      
    })
    db.findCustomers().catch(error => console.log(error));
   
});

router.post('/',(req, res, next) => {
  const reserva = {
      reserva: req.body.reserva,
      tecnico: req.body.tecnico
  };

  res.status(200).send({
   mensagem:'POST reserva',
   reservaCriada: reserva
   
  })

});

router.patch('/',(req, res, next) => {
  res.status(200).send({
   mensagem:'PATCH reserva'
  });

});

router.delete('/',(req, res, next) => {
  res.status(200).send({
   mensagem:'DELETE reserva'
  });

});


module.exports = router;

