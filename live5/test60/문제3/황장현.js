function solution(s) {
  var answer = [0, 0];
  while (s !== '1') {
    const originalLength = s.length;
    s = s.replace(/0/g, '');
    const newLength = s.length;
    s = newLength.toString('2');

    answer[1] += originalLength - newLength;
    answer[0]++;
  }

  return answer;
}

console.log(solution('01110'));
