const express = require('express');
const app = express();
const routerReserva = require('./routes/reserva');

app.use('/reserva',routerReserva);

module.exports = app;



/*

const morgan = require('morgan');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//var path = require('path');

const rotaReserva = require('./routes/reserva');
//const rotaSV = require('./routes/sv');


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

//CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Header',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).send({});
    }
    next();
});
//FIM CORS

app.use('/reserva', rotaReserva);
//app.use('/sv', rotaSV);

//tratamento de erro
app.use((req, res, next) => {
 const erro = new Error('não localizado');
 erro.status = 404;
 next(erro);

});

app.use((erro,req,res,next) => {
  res.status(erro.status || 500);
  return res.send(({
      erro:{mensagem: erro.message}
  }))

})
//fim trata erro
module.exports = app;

*/








