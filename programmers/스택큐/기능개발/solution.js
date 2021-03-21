// 문제가 개편되었습니다. 이로 인해 함수 구성이나 테스트케이스가 변경되어, 과거의 코드는 동작하지 않을 수 있습니다.
// 새로운 함수 구성을 적용하려면 [코드 초기화] 버튼을 누르세요. 단, [코드 초기화] 버튼을 누르면 작성 중인 코드는 사라집니다.
function solution(progresses, speeds) {
  var answer = [];

  while (progresses.length != 0) {
    //개발속도 만큼 진행도 증가.
    for (var i = 0; i < progresses.length; i++) {
      if (progresses[i] < 100) {
        progresses[i] += speeds[i];
      }
    }
    //배포
    var cnt = 0;
    while (progresses[0] >= 100) {
      progresses.shift();
      speeds.shift();
      cnt++;
    }
    if (cnt > 0) {
      answer.push(cnt);
    }
  }
  return answer;
}
