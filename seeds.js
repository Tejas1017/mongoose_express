const mongoose = require('mongoose');
const Book = require('./models/product');


mongoose.connect('mongodb://127.0.0.1:27017/bookStall')
    .then(()=>{
        console.log('mongoes is connected!')
    })
    .catch((err)=>{
        console.log(err)
        console.log("Oop there is an error")
    })

const arr = [
    {
        name:'The Alchemist',
        price:699,
        category:'Novel',
        author:'Paulo Coelho'
    },
    {
        name:'To kill a Mockingbird',
        price:599,
        category:'Novel',
        author:'Harrper Lee'
    },
    
    {
        name:'How to win friends and influence people. How to stop worrying and start living',
        price:299,
        category:'Self Growth',
        author:'Dale Carnegie'
    },

]
Book.insertMany(arr)
    .then((data)=>{
        console.log(data)
    })
    .catch((e)=>{
        console.log(e)
    })

