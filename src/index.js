  
const express = require('express');
const morgan = require('morgan');
const app = express();

// settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// routes

app.use('/api/tupago', require('./routes/tupago'));

app.get('/api', (req, res) => {
    res.send(`<h1>Tu pago Fees API</h1>
    <p>POST: https://cprieto-node-mysql.herokuapp.com/api/tupago</p>
    <p>Example:</p>
    <p>  {
        "idRequest": "42ce27a8-698e-4f6d-bb06-4dcef7071607",
        "orderValue": 100000
      }</p>
    `);
  });

// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});