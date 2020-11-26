const fs = require("fs");
const temps = require("./temps.json");



var words=JSON.parse(temps["temperatures"])

console.log(words)


/*
for (var i=0; i<10; i++) {

  fs.readFile('temps.txt',(err, data) => {
    if (err) throw err;
    var array=data.toString().split("\n");
    for (i in array) {
      console.log(array[i]);
    }
  })

}
*/
