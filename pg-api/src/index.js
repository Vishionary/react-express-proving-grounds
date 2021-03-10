const express = require('express');
const cors = require('cors');
const app = express();
const port = 3121;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/userdata', (req, res) => {
    res.json({
      "username": "Vishnu"
    })
  })

app.listen(port, () => {
  console.log(`PG-app api listening at http://localhost:${port}`)
});