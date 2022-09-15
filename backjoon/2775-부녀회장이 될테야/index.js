const fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('backjoon/example.txt').toString().trim().split('\n');
console.time('duration');
const count = +input.shift();
for (let i = 0; i < count; i++) {
  const k = +input.shift();
  const n = +input.shift();
  // 전체 집을 0으로 초기화
  const house = Array.from(Array(k + 1), () => Array(n + 1).fill(0));
  // 0층은 각 호수에 1부터 n명씩 거주함
  for (let i = 1; i <= n; i++) {
    house[0][i] = i;
  }

  // 각층(k), 각호(n)에 거주중인 인원 수를 기록함
  // k층 n호에는 k층 n-1호 인원 + k-1층 n호 인원이 거주하고 있음.
  for (let i = 1; i <= k; i++) {
    for (let j = 1; j <= n; j++) {
      house[i][j] = house[i][j - 1] + house[i - 1][j];
    }
  }
  console.log(house[k][n]);
}
console.timeEnd('duration');
