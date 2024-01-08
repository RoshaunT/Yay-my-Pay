// Dependencies
const express = require('express')
require('dotenv').config()
const path = require('path')
const middleware = require('./utils/middleware')


// Routers



// Create the app object 
const app = express()


// veiw engine - ejs
app.set('veiws', path.join(__dirname, 'veiws'))
app.set('veiw engine', 'ejs')



// Middleware 
middleware(app)




//Routes
app.get('/', (req, res) => {
    res.send('the app is connected')
})



//Server Listener 
const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log('your server is running')
})