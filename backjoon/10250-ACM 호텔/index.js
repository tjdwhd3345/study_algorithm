const fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('backjoon/example.txt').toString().trim().split('\n');
console.time('duration');
const count = +input[0];
for (let i = 0; i < count; i++) {
  const [height, width, customer] = input[i + 1].split(' ').map((v) => +v);
  let y,
    x = '';
  if (customer % height === 0) {
    y = String(height);
    x = String(parseInt(customer / height));
  } else {
    y = String(customer % height);
    x = String(parseInt(customer / height) + 1);
  }
  console.log(`${y}${x.length < 2 ? '0' + x : x}`);
}
console.timeEnd('duration');
