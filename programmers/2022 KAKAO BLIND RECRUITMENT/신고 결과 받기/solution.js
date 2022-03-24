function solution(id_list, report, k) {
  var answer = Array.from({ length: id_list.length }).fill(0);
  const reportObj = {};

  // 신고당한 사람을 기준으로 신고자이름 리스트 생성
  for (let i = 0; i < report.length; i++) {
    const [reporter, reported] = report[i].split(' ');
    if (!reportObj[reported]) reportObj[reported] = [];
    if (!reportObj[reported].includes(reporter)) {
      reportObj[reported].push(reporter);
    }
  }
  /**
   * 신고자이름이 k 보다 많다는 건 k번 이상 신고당한 사람임
   * 신고한 사람의 이름 인덱스를 id리스트에서 찾아서 메일받는 횟수 반환
   */
  Object.keys(reportObj) //
    .filter((key) => reportObj[key].length >= k) //
    .forEach((v) => {
      reportObj[v].forEach((vv) => answer[id_list.indexOf(vv)]++);
    });
  return answer;
}

const id_list = ['muzi', 'frodo', 'apeach', 'neo'];
const report = [
  'muzi frodo',
  'apeach frodo',
  'frodo neo',
  'muzi neo',
  'apeach muzi',
];
const k = 2;
solution(id_list, report, k);
