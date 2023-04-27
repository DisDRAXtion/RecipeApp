const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>');
});

app.get('/charizard/', (req, res) => {
    res.send({
        "abilities": [
          {
            "ability": {
              "name": "blaze",
              "url": "https://pokeapi.co/api/v2/ability/66/"
            },
            "is_hidden": false,
            "slot": 1
          },
          {
            "ability": {
              "name": "solar-power",
              "url": "https://pokeapi.co/api/v2/ability/94/"
            },
            "is_hidden": true,
            "slot": 3
          }
        ]});
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});