function solution(new_id) {
  var answer = '';
  new_id = new_id
    .toLowerCase() // step1 소문자로 치환
    .replace(/[^\w\.\-]/g, '') // step2 소문자, 숫자, -_. 빼고 공백으로 치환
    .replace(/\.+/g, '.') // step3 연속된 . 를 하나로 치환
    .replace(/^\.|\.$/g, ''); // step4 . 가 시작이나 끝에 있으면 제거
  // step5 빈 문자열이면 a 를 대입
  if (new_id === '') new_id = 'a';
  // step6 16자 이상이면 15자까지 자름
  if (new_id.length > 15) new_id = new_id.substring(0, 15).replace(/\.$/, '');
  // step7 2자 이하라면 3자 이상될 때까지 끝 문자열 반복
  const len = new_id.length;
  if (len < 3) {
    new_id += new_id[len - 1].repeat(3 - len);
  }
  console.log(new_id);
  return new_id;
}

solution('z-+.^.');
