function solution(a, b) {
  var answer = '';
  var weeks = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
  var months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var days = 0;
  for (var i = 0; i < a - 1; i++) {
    days += months[i];
  }
  days += b - 1;

  return weeks[days % 7];
}
