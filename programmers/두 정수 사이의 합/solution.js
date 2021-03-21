function solution(a, b) {
  if (a === b) return a;
  var answer = 0;
  var big = Math.max(a, b);
  var small = Math.min(a, b);
  for (var i = small; i <= big; i++) {
    answer += i;
  }

  return answer;
}
