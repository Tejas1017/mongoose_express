const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose');
const Book = require('./models/product')
var methodOverride = require('method-override')


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
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))


app.get('/books',async(req,res)=>{
    const books = await Book.find({}) //mongoose opratation nothing to worry
    res.render('books/index',{books})
})
app.get('/books/new' ,(req,res)=>{
    res.render('books/new')
})
app.post('/books',async(req,res)=>{
   const newBooks = new Book(req.body)
    await newBooks.save()
    
    res.redirect(`/books/${newBooks._id}`)
})
app.get('/books/:id', async(req,res)=>{
    const {id} = req.params
    const product = await Book.findById(id)
    res.render('books/show', {product})
})  
app.get('/books/:id/edit',async(req,res)=>{
    const {id}= req.params
    const book =  await Book.findById(id)
    res.render('books/edit',{book})
})

app.put('/books/:id',async(req,res)=>{
    const {id} = req.params
    const updateBook = await Book.findByIdAndUpdate(id,req.body, {runValidators:true})
    res.redirect(`/books/${updateBook._id}`)
    
})

app.listen(3000,()=>{
    console.log('we are listening on port 3000')
})