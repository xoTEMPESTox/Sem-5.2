const http_obj =require('http');

const myserver =http_obj.createServer((req,res)=>{
    console.log("Starting server")
    res.end("sahi port")

})

myserver.listen(7498,()=>(
    console.log("server started at 7498")
))