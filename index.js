const fs = require("fs")

fs.readFile('temps.txt',(err, data) => {
  if (err) throw err;
  var temperature=data.toString();
  parseInt(temperature)
  console.log(temperature);
})


function min_temp(temperature) {
  console.log(Math.min(temperature));
  return Math.min(temperature);

}

min_temp(temperature);
