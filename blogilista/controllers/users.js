const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')

usersRouter.post('/', async (request, response, next) => {
    const body = request.body

    if (body.password === undefined) {
        return response.status(400).json({error: "password required"})
    }
    if (body.password <3) 
      return response.status(400).json({error: "Minimum length of password is set to 3 character"})

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(body.password, saltRounds)

    const user = new User({
        username: body.username,
        name: body.name,
        passwordHash
    })
    try {
        const savedUser = await user.save()
        response.json(savedUser.toJSON())
    } catch (exception) {
        next(exception)

    }

})

usersRouter.get('/', async (request, response) => {
    const users = await User.find({})
    response.json(users.map(u => u.toJSON()))
})

module.exports = usersRouter

