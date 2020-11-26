const fs = require("fs")

fs.readFile('temps.txt',(err, data) => {
  if (err) throw err;
  var temperature=data.toString();
  var temperature=parseFloat(temperature)
  console.log(temperature+temperature);
  function min_temp() {
    temp=temperature
    console.log(Math.min(temp));
    return Math.min(temp);
  }
  min_temp();

})
