const express = require('express')
const mongoose = require('mongoose')
const router = new express.Router()

var listOfUsers = []

const Users = function () {
    for (var i in listOfUsers) {
        return i
        //console.log(listOfUsers[i]) 
    }
}

const userSchema = new mongoose.Schema({    
    name: {
        type: String,
        required: true,
        trim: true
    }
})

const CreateUser = function () {
    var input = new Issue ({name})
        // this.name = name
    return input
}
    

router.get('/users', async (req, res) => {
    try {
        const users = await Users()
        res.send(users)
    } catch (e) {
        res.status(500).send()
    }
})

router.put('/users/users.json', async (req, res) => {
    const user = new User({
        ...req.body,
    })
    try {
        await CreateUser(user)
        listOfUsers.push(user);
        res.status(201).send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})

const User = mongoose.model('User', userSchema)

module.exports = router
