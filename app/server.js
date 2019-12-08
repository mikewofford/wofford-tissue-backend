//const http = require('http')
//const qs = require('qs')
//const Issue = require('issue-manager')
const MongoClient = require('mongodb').MongoClient
const express = require('express')
const issuesRouter = require('./routes/issues')
const usersRouter = require('./routes/users')

const app = express()
const port = process.env.PORT || 3000


app.use(express.json())
app.use(usersRouter)
app.use(issuesRouter)


const uri = "mongodb+srv://mikewofford:C1nc1nnat1@sandbox-jrexc.mongodb.net/test?retryWrites=true&w=majority";

MongoClient.connect(uri, { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log(err)
    }
    const db = client.db('sandbox')
    app.listen(port, () => {
        console.log('Server is up on port ', port)
})
})

