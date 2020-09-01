const { response } = require("express")
const app = require("../app")

const errorHandler = (error, request, response, next) => {
 
    if (error.name === "ValidationError") {
        return response.status(400).json({error:error.message})
    }
    else if (error.name === 'JsonWebTokenError') {
        return response.status(401).json({
            error: 'invalid token'
        })
    }
    next(error)  
}

module.exports = {
    errorHandler  
} 