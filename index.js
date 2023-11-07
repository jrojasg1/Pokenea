const express = require('express')
const app = express()
const port = 8001
const pokemonRoutes = require('./routes/routes')


app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/public', express.static('public'));
 

app.use('/', pokemonRoutes)

app.listen(port, () => {
    console.log(`Running aplication in port ${port}`)
})