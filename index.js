const fs = require('fs')


function desired_temp() {
  var temp = document.getElementById("temp").value;
  fs.writeFile('temps.txt', temp, (err) => {

    // In case of a error throw err.
    if (err) throw err;
})

}


function display_temp() {
  try {
      var temps = fs.readFileSync('temps.txt', 'utf8');
      var temp_display = document.getElementById("temps").innerHTML = "TEMPERATURE VOULUE :" + temps + "°C";
  } catch(e) {
      console.log('Error:', e.stack);
  }
}
