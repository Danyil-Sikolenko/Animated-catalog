const express = require('express');
const app = express();
const catalogRouter = require('./routes/product');
const cors = require('cors');
app.use(cors());

app.use(express.json());
app.use('/images/items', express.static(__dirname + '/images/items'));
app.use('/images/models', express.static(__dirname + '/images/models'));
app.use('/api', catalogRouter); 

app.listen(3000, () => {
  console.log('Start');
});
