var fs = require('fs');




// sleep time expects milliseconds
function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}




while (true) {
  sleep(500).then(() => {
    try {
        var temps = fs.readFileSync('temps.txt', 'utf8');
        console.log(temps);
    } catch(e) {
        console.log('Error:', e.stack);
    }
  });
}
