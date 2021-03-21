function solution(operations) {
  var que = [];
  operations.forEach(function (el) {
    var str = el.split(' ');
    switch (str[0]) {
      case 'I':
        que.push(Number(str[1]));
        break;
      case 'D':
        if (str[1] == 1) {
          //최댓값 삭제
          que
            .sort(function (a, b) {
              return b - a;
            })
            .shift();
        } else if (str[1] == -1) {
          //최솟값 삭제
          que
            .sort(function (a, b) {
              return a - b;
            })
            .shift();
        }
    }
  });
  //console.log(que);
  if (que.length === 0) return [0, 0];
  return [
    que.sort(function (a, b) {
      return b - a;
    })[0],
    que.sort(function (a, b) {
      return a - b;
    })[0],
  ];
}
