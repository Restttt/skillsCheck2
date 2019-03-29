const express = require('express');
require('dotenv').config();
const massive = require('massive');
const app = express();
const { SERVER_PORT, CONNECTION_STRING } = process.env;

const productC = require('./controllers/productsController');

app.use(express.json());

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('db is set');
}).catch(err => console.log("we have an err", err));

app.get('/api/products', productC.getAll);
app.post('/api/products', productC.addNew);
app.get('/api/product/:id', productC.getOneByID);
app.delete('/api/product/:id', productC.deleteByID);
app.put('/api/product/:id', productC.updatePrice);

app.listen(SERVER_PORT, () => console.log(`we are listening at port: ${SERVER_PORT}`));