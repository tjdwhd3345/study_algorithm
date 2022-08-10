const fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let input = fs.readFileSync('backjoon/example.txt').toString().trim().split(' ');
const chess = [1, 1, 2, 2, 2, 8];
const answer = chess.map((v, i) => v - input[i]);
console.log(answer.join(' '));
