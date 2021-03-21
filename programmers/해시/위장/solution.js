function solution(clothes) {
  var answer = 0;
  var obj = {};
  for (var item in clothes) {
    console.log(item, clothes[item]);
    if (typeof obj[clothes[item][1]] === 'undefined')
      obj[clothes[item][1]] = [];
    obj[clothes[item][1]].push(clothes[item][0]);
  }
  console.log('obj: ', obj);
  var ok = Object.keys(obj);
  if (ok.length == 1) {
    answer = obj[ok[0]].length;
  } else {
    var tot = 1;
    for (var i = 0; i < ok.length; i++) {
      tot *= obj[ok[i]].length + 1;
    }
    answer = tot - 1;
  }

  return answer;
}
