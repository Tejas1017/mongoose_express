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
        name:'Sapiens a brief history of humankind',
        price:599,
        category:'History',
        author:'Yuval noah harari'
    },
    {
        name: 'The Silk road',
        price: 699,
        category: 'History',
        author: 'Peter frankopan',
    },
    {
        name:'Oliver Twist',
        price:399,
        category:'Novel',
        author:'Charles Dickens'
    },

]
Book.insertMany(arr)
    .then((data)=>{
        console.log(data)
    })
    .catch((e)=>{
        console.log(e)
    })

