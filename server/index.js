const fs = require('fs');
const express = require('express');
const cors = require('cors');

const data = fs.readFileSync('products.json');
const products = JSON.parse(data);

const app = express();
const port = process.env.PORT || 5000

app.set('port', port);
app.listen(port, () => console.log(`Server Start at http://localhost:${port} Port`));
app.use(express.static('public'));
app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/products', (req, res) => {
  res.send(products)
})