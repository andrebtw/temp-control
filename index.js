const fs = require("fs")

fs.readFile('temps.txt',(err, data) => {
  if (err) throw err;
  var temperature=data.toString();
  parseInt(temperature)
  console.log(temperature);
})


/*function min_temp(temperature) {

}*/
