const express = require('express');

const app = express()   

// const port =3000;

const userrouter = require('./router');

app.set('view engine' , 'ejs')

app.listen(3000,()=>{
    console.log("Hello from server")
})

app.get("/",(req,res)=>{
    res.sendStatus(200).send('Hi')
})

app.get("/download",(req,res)=>{
    res.download('index.js')
})
// (500) - internal server error 
// (403) - No access 
// (404) - Page not Found

app.get("/html",(req,res)=>{
    res.render("index") 
})


app.use('/route',userrouter)



let items= [
    {id:1 , name: 'item_1',description:'description_1'},
    {id:2 , name: 'item_2',description:'description_2'},
    {id:3 , name: 'item_3',description:'description_3'},
    {id:4 , name: 'item_4',description:'description_4'},
    {id:5 , name: 'item_5',description:'description_5'}
]

app.get('/items',(req,res)=>{
    res.send(items)
})

app.get('/items/:id',(req,res)=>{
    const param = req.params.id
    const item = items.find(i=>i.id == parseInt(param))

    if(item){
        res.send(item)
    } else {
        res.status(404).send('Item not found')
    }

})

app.post('/items',(req,res)=>{
    const newItem = req.body;
    newItem.id = items.length + 1
    items.push(newItem);
    res.status(201).send(newItem)
})
