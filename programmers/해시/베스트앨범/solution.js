function solution(genres, plays) {
  var answer = [];
  var chart = {};
  var genreType = genres.reduce((a, b) => {
    return a.includes(b) ? a : [...a, b];
  }, []);

  for (var i = 0; i < genres.length; i++) {
    for (var item in genreType) {
      if (genres[i] == genreType[item]) {
        if (chart[genres[i]] == undefined) chart[genres[i]] = [];
        chart[genres[i]].push({ org_idx: i, play: plays[i] });
      }
    }
  }

  //console.log(chart);
  var top = [];
  var i = 0;
  for (var item in chart) {
    var totPlay = chart[item].reduce((a, b) => {
      return a + b.play;
    }, 0);
    top.push({ idx: i, gen: item, tot: totPlay });
    i++;
  }
  top = top.sort((a, b) => {
    return a.tot < b.tot ? 1 : a.tot > b.tot ? -1 : 0;
  });
  //console.log("top :", top);

  for (var i = 0; i < top.length; i++) {
    //console.log("top2## ", chart[top[i].gen]);
    var top2 = chart[top[i].gen].sort((a, b) => {
      return a.play < b.play ? 1 : a.play > b.play ? -1 : 0;
    });
    for (var j = 0; j < 2; j++) {
      if (top2[j] != undefined) answer.push(top2[j].org_idx);
    }
  }

  return answer;
}
