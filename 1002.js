var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var raio = input.split('\n');

const raioFloat = parseFloat(raio);
const area = (3.14159 * (Math.pow(raioFloat, 2))).toFixed(4);

console.log(`A=${area}`);
