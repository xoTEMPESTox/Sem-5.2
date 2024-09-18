const { error } = require('console');
const fs = require('fs')


fs.writeFileSync("./test.txt","HEllo");

const data = fs.readFileSync("./test.txt","utf8");

fs.writeFile("./test2.txt",'Ye async hai ',(err)=>{});

fs.readFile('./test2.txt','utf8',(data,error)=>{
    if(data) {
        console.log(data);
    }
    else {
        console.log(error)
}});

console.log("done read write");
console.log(data);