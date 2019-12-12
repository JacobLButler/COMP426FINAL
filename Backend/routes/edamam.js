const express = require('express')
const app = express()

const axios = require('axios')

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/foods/:name', (req, res) => {
  const url = `https://api.edamam.com/api/food-database/parser?app_id=f9b0cb6a&app_key=4ea94cc6202fc61d6f15f1bf38c1c23c&ingr=${req.params.name}`
  axios.get(url)
    .then(response => {
      if (!response.data.hints.length) {
        return res.send({
          error: 'No food found'
        })
      }
      res.send(JSON.stringify(response.data.hints))
    })
    .catch(error => res.sendStatus(error.response.status))
})
app.listen(3001, () => {
    console.log('Back-end listening on port 3001')
  })