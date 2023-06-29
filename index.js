const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose');
const Book = require('./models/product')

mongoose.connect('mongodb://127.0.0.1:27017/bookStall')
    .then(()=>{
        console.log('mongoes is connected!')
    })
    .catch((err)=>{
        console.log(err)
        console.log("Oop there is an error")
    })
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')

app.get('/books',async(req,res)=>{
    const books = await Book.find({}) //mongoose opratation nothing to worry
    console.log(books)
    res.render('books/index',{books})
})


app.listen(3000,()=>{
    console.log('we are listening on port 3000')
})