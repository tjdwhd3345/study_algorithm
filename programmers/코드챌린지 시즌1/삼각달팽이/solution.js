const solution = (n) => {
  let answer = [];
  const arr = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => 0)
  );

  const direction = ['down', 'right', 'upperRight'];
  let flag = direction[0];
  let startX = 0;
  let startY = 0;
  let cnt = 0;
  let last = 0;
  for (let i = 1; i <= n; i++) {
    last += i;
  }
  while (cnt < last) {
    if (flag === direction[0]) {
      // down
      let y = startY === 0 ? startY : startY + 1;
      for (y; y < n; y++) {
        if (arr[y][startX] !== 0) break;
        arr[y][startX] = ++cnt;
      }
      startY = y - 1;
      flag = direction[1];
    } else if (flag === direction[1]) {
      // right
      let x = startX + 1;
      for (x; x < n; x++) {
        if (arr[startY][x] !== 0) break;
        arr[startY][x] = ++cnt;
      }
      startX = x - 1;
      flag = direction[2];
    } else if (flag === direction[2]) {
      // upperRIght
      let x = startX - 1;
      let y = startY - 1;
      for (x; x > 0; x--, y--) {
        if (arr[y][x] !== 0) break;
        arr[y][x] = ++cnt;
      }
      startX = x + 1;
      startY = y + 1;
      flag = direction[0];
    }
  }
  answer = arr
    .reduce((acc, v) => acc.concat(v), [])
    .reduce((acc, v) => {
      if (v !== 0) acc.push(v);
      return acc;
    }, []);
  console.log(answer);
};

solution(4);
solution(5);
solution(6);
solution(10);
solution(15);
solution(20);
