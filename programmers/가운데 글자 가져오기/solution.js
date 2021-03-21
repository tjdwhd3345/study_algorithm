function solution(s) {
  var v = s.length / 2;
  return s.length % 2 !== 0 ? s.substr(v, 1) : s.substr(v - 1, 2);
}
