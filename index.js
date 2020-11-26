const fs = require("fs")

fs.readFile('temps.txt,(err, data) => {
  if (err) throw err;
  console.log(data.toString());
})

var min_temperature=0;
