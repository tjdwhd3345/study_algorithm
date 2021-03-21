function solution(N, stages) {
  var answer = [];
  var fail_rates = [];
  for (var i = 1; i <= N; i++) {
    var top = stages.filter((v) => v === i).length;
    var bottom = stages.filter((v) => v >= i).length;
    var fail_rate = top === 0 || bottom === 0 ? 0 : top / bottom;
    fail_rates.push({ stage: i, rate: fail_rate });
  }
  answer = fail_rates
    .sort((a, b) => {
      if (a.rate > b.rate) return -1;
      else if (a.rate < b.rate) return 1;
      return a.stage - b.stage;
    })
    .map((v) => v.stage);
  return answer;
}
