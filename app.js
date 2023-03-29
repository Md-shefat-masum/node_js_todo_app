const express = require('express');
const body_parser = require('body-parser');
const server = express();
const port = 5000;

server.set("view engine", "ejs")
server.set("views", "./views")
server.use(express.static('public'))

// parse application/x-www-form-urlencoded
server.use(body_parser.urlencoded({ extended: false }))

server.get('/',(req, res)=>{
    res.render('frontend/index.ejs');
})

server.post('/save-todo-data',(req, res)=>{
    console.log(req.body);
    res.send('data has been sent')
})

server.listen(port, ()=>{
    console.log(`server is running on http://127.0.0.1:${port}`);
})