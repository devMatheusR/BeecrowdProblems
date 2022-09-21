var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var valoresRecebidos = input.split('\n')

var A = parseInt(valoresRecebidos.shift())
var B = parseInt(valoresRecebidos.shift())
var C = parseFloat(valoresRecebidos.shift())

console.log(`NUMBER = ${A}`);
console.log(`SALARY = U$ ${(B*C).toFixed(2)}`)
