const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/utn", function(error){
    if(error) {
        throw new error
    } else {
        console.log("Connected to MongoDB")
    }
        
})

module.exports = mongoose