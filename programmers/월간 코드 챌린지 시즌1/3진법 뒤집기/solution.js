function solution(n) {
  return parseInt(parseInt(n).toString(3).split('').reverse().join(''), 3);
}
