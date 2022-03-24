function solution(id_list, report, k) {
  var answer = [];
  // report 신고내용 중복제거
  const new_report = [...new Set(report)];
  // 신고내용 반복문으로 신고횟수 카운트
  const counts = new Map();
  for (let report of new_report) {
    const reported = report.split(' ')[1];
    counts.set(reported, counts.get(reported) + 1 || 1);
  }
  // 신고횟수가 k 이상인 대상자를 신고한 사람을 세팅
  const mailing = new Map();
  for (let report of new_report) {
    const [reporter, reported] = report.split(' ');
    if (counts.get(reported) >= k) {
      mailing.set(reporter, mailing.get(reporter) + 1 || 1);
    }
  }

  // id리스트를 반복하면서 신고한사람이 메일받는 수를 반환
  answer = id_list.map((id) => mailing.get(id) || 0);

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
