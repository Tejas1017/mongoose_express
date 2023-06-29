const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    price:{
        type:Number,
        required:true,
        min:0
    },
    category:{
        type:String,
        lowerCase:true,
        enum:['History','Self Growth','Novel']
    },
    author:{
        type:String,
        required:true
    }
})
const Book = mongoose.model('Book',bookSchema)

module.exports = Book