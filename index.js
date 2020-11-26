const fs = require("fs")

fs.readFile('temps.txt',(err, data) => {
  if (err) throw err;
  var min_temperature=data.toString();
  console.log(min_temperature);
})
