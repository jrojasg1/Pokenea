const express = require('express')
const app = express()
const port = 80
const pokemonRoutes = require('./routes/routes')


app.set('view engine', 'ejs');
app.use('/', pokemonRoutes)

app.listen(port, () => {
    console.log(`Running aplication in port ${port}`)
})