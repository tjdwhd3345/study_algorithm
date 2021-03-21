function solution(n, record) {
  var answer = [];
  var server = {};
  console.log(record.sort((a, b) => a[0] - b[0]));
  record
    .sort((a, b) => a[0] - b[0])
    .forEach((rec) => {
      var svNum = rec.split(' ')[0];
      var nickname = rec.split(' ')[1];
      if (server[svNum] === undefined) server[svNum] = [];
      if (!server[svNum].includes(nickname)) {
        if (server[svNum].length === 5) server[svNum].shift();
        server[svNum].push(nickname);
      }
    });
  console.log(server);
  Object.keys(server).forEach((key) => {
    answer = answer.concat(server[key]);
  });
  return answer;
}
