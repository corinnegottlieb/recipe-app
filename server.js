
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
const request = require('request')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))



app.get(`/recipes/:food`, (req, response) => {
    request(`http://www.recipepuppy.com/api/?q=${req.params.food}&i=${req.query.ing}`, (err, res, body)=>{
     let data = JSON.parse(body).results
     data.forEach(d=>d.ingredients = d.ingredients.split(`, `))
     response.send(data)
       
    })
})






const port = 8080
app.listen(port, function () {
    console.log(`Running server on port ${port}`)
})    





