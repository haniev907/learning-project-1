const express = require('express')
const app = express()
const port = 5000
const users = require('./api/fake.api/user.api.js');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/users', (req, res) => {
  res.json({
    users: users,
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
