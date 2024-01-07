// Dependencies
const express = require('express')
require('dotenv').config()
const path = require('path')



// Routers



// Create the app object 
const app = express()



// Middleware 





//Routes
app.get('/', (req, res) => {
    res.send('the app is connected')
})



//Server Listener 
const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log('your server is running')
})