function solution(m, v) {
  var answer = 0;
  var arr = [];
  for (var i = 0; i < v.length; i++) {
    if (i === 0) {
      arr.push(v[i]);
      continue;
    }
    if (m - arr[arr.length - 1] < v[i]) {
      arr.push(v[i]);
    } else {
      for (var j = arr.length - 1; j >= 0; j--) {
        // console.log(arr, j, v[i]);
        if (arr[j] + v[i] > m) {
          // console.log(v[i], arr[j], arr[j+1])
          // arr[j+1] = arr[j+1] ? arr[j+1]+v[i] : v[i];
          if (arr[j + 1] === undefined) arr[j + 1] = 0;
          arr[j + 1] += v[i];
          break;
        }
        if (j === 0) arr[j] += v[i];
      }
    }
  }
  // console.log("arr:",arr)
  return arr.length;
}
