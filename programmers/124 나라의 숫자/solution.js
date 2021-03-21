function solution(n) {
  var answer = '';
  var residue = 0;
  var period = ['4', '1', '2'];

  while (n > 0) {
    residue = n % 3; //나머지
    n = parseInt(n / 3); //몫
    //console.log(`n: ${n}, residue: ${residue}`)
    if (residue === 0) {
      //나머지가 0이면 n-1 을 한다.
      n = n - 1;
    }
    /*
     * n-1을 하는 이유: 124나라 규칙으로는 나머지가 0일 때 4 입력 후 자릿수가 변동된다.
     */
    answer = period[residue] + answer;
    //console.log(`n: ${n}, answer: ${answer}`)
  }
  return answer;
}
