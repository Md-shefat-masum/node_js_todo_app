const fs = require("fs");
function write_json(json_path, source_data) {
	let data = JSON.stringify(source_data);
	fs.writeFileSync(json_path, data);
}

module.exports = write_json;