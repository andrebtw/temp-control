var fs = require('fs');

try {
    var temps = fs.readFileSync('temps.txt', 'utf8');
    console.log(temps);
} catch(e) {
    console.log('Error:', e.stack);
}
