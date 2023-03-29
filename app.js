const express = require('express');
const server = express();
const port = 5000;

server.set("view engine", "ejs")
server.set("views", "./views")
server.use(express.static('public'))

server.get('/',(req, res)=>{
    res.render('frontend/index.ejs');
})

server.listen(port, ()=>{
    console.log(`server is running on http://127.0.0.1:${port}`);
})