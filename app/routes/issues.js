const express = require('express')
const router = new express.Router()
//const Issue = require('issue-manager')

router.get('/issues', (req, res) => {
    db.collection('issues').find({}).toArray((err, arg) => {
        if (err) { 
            console.log(err)
        }
        console.log(arg)
    })
})

router.put('/issues/issues.json', (req, res) => {
    db.collection('issues').save(req.body, (err, result) => {
        if (err) { 
            return console.log(err)
        }
        console.log(result)
    })
})

router.post('/issues/:issue_id', (req, res) => {
    db.collection('issues').updateOne({_id: new ObjectID(req.body._id)}, {$set: { elementName: elementValue }}, (req, result) => {
        if (err) {
            console.log(err)
        }
        console.log(result)
    })
})

router.delete('/issues/:issue_id', (req, res) => {
    db.collection('issues').deleteOne({_id}, (req, res) => {
        if (err) {
            console.log(err)
        }
        console.log('Deleted')
    })
})



module.exports = router
