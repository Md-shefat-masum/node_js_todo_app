/**
 * server dependency
 */
const express = require("express");
const body_parser = require("body-parser");
const fs = require("fs");

/**
 * hooks or helper functions
 */
const read_json = require('./database/read_json')
const write_json = require('./database/write_json')

/**
 * start server
 */
const server = express();
const port = 5000;

/**
 * server setup
 */
server.set("view engine", "ejs");
server.set("views", "./views");
server.set('json spaces', 4)

/**
 * source files path setup
 */
server.use(express.static("public"));

// parse application/x-www-form-urlencoded
server.use(body_parser.urlencoded({ extended: false }));

/**
 * routes
 */

server.get("/", (req, res) => {
    let json_path = "./database/todo.json";
    let todo_list = read_json(json_path);
	res.render("frontend/index.ejs",{
        todo_list
    });
});

server.post("/save-todo-data", (req, res) => {
	console.log(req.body);
	const { todo_title } = req.body;
    let json_path = "./database/todo.json";

    let todo_list = read_json(json_path);
    
	todo_list.push({
        title: todo_title,
        is_complete: 0,
    })

	write_json(json_path, todo_list)

	// res.json(todo_list);
    res.redirect('/');
});

/**
 * server starting
 */
server.listen(port, () => {
	console.log(`server is running on http://127.0.0.1:${port}`);
});
