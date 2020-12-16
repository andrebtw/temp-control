const fs = require('fs')


function display_temp() {
    var temps = fs.readFileSync('temps.txt', 'utf8');
    console.log(temps)
    document.getElementById("temps").innerHTML = "TEMPERATURE VOULUE : " + temps + "°C";
}

display_temp();

function desired_temp() {
  var temp = document.getElementById("temp").value;
  fs.writeFile('temps.txt', temp, (err) => {
    display_temp();
    // In case of a error throw err.
    if (err) throw err;
})

}
