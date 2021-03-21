function solution(s) {
  var answer = true;
  s = s.toLowerCase();
  var pCnt = 0;
  var yCnt = 0;
  for (var i = 0; i < s.length; i++) {
    if (s[i] === 'p') pCnt++;
    if (s[i] === 'y') yCnt++;
  }
  return pCnt === yCnt;
}
