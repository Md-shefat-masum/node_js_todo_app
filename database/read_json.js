const fs = require("fs");
function read_json(json_path) {
	let json_data = fs.readFileSync(json_path);
	let todo_list = JSON.parse(json_data);
    return todo_list;
}

module.exports = read_json;