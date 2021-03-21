function solution(s) {
  var answer = '';
  s = s.split(' ');
  // console.log(Math.max.apply(null, s));
  answer = Math.min.apply(null, s) + ' ' + Math.max.apply(null, s);
  return answer;
}
