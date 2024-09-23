function solution(new_id) {
  // 1단계
  let answer = new_id.toLowerCase();

  // 2단계
  answer = answer.replace(/[^\w\d-_.]/g, '');

  // 3단계
  answer = answer.replace(/\.{2,}/g, '.');

  // 4단계
  answer = answer.replace(/^\.|\.$/g, '');

  // 5단계
  if (answer === '') {
    answer = 'a';
  }

  // 6단계
  if (answer.length >= 16) {
    answer = answer.slice(0, 15).replace(/\.$/, '');
  }

  // 7단계
  if (answer.length <= 2) {
    const lastChar = answer.charAt(answer.length - 1);
    while (answer.length < 3) {
      answer += lastChar;
    }
  }

  return answer;
}
