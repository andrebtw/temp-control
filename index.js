const fs = require('fs')


function desired_temp() {
  var temp = document.getElementById("temp").value;
  fs.writeFile('temps.txt', temp, (err) => { 

    // In case of a error throw err.
    if (err) throw err;
})

}
