
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
const request = require('request')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))


const json = {
    data : {}
}

app.get(`/recipes/:food`, (req, res) => {
    request(`http://www.recipepuppy.com/api/?q=${req.params.food}`, (err, res)=>{
     json.data = JSON.parse(res.body).results
       
    })
    json.data.forEach(d=>d.ingredients = d.ingredients.split(` `))
    console.log(json.data)
    res.send(json.data)
})






const port = 8080
app.listen(port, function () {
    console.log(`Running server on port ${port}`)
})    





