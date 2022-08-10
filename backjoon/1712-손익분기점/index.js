const fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let input = fs.readFileSync('backjoon/example.txt').toString().trim().split(' ');
let answer = 1;
const [fixed, various, price] = input.map((v) => parseInt(v));
const margin = price - various;
answer = Math.floor(fixed / margin) + 1;
console.log(margin <= 0 ? -1 : answer);
