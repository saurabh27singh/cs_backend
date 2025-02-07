const fs = require("fs");
const data = fs.readfileSync("./data.txt", "utf8");
console.log(data.toString());
