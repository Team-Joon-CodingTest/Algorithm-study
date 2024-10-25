function solution(new_id) {

  // 1단계: 모든 대문자 -> 소문자
  let answer = new_id.toLowerCase();

  // 2단계: 알파벳 소문자, 숫자, -, _, . 를 제외한 모든 문자 제거
  answer = answer.replace(/[^\w-_.]/g, '');

  // 3단계: 마침표가 2번 이상 연속 -> .
  answer = answer.replace(/\.{2,}/g, '.');

  // 4단계: 처음이나 끝에 위치하는 마침표 제거
  answer = answer.replace(/^\.|\.$/g, '');

  // 5단계: 빈 문자열 -> "a"
  if (answer === '') answer = 'a';

  // 6단계: 길이가 16자 이상 -> 처음 15개의 문자를 제외한 나머지 문자 제거
  // 만약 제거 후 마침표가 끝에 위치한다면 그 마침표 제거
  if (answer.length >= 16) {
    answer = answer.substring(0, 15).replace(/\.$/, '');
  }

  // 7단계: 길이가 2자 이하 ->  마지막 문자를 길이가 3이 될 때까지 반복해서 끝에 붙임
  while (answer.length < 3) {
    answer += answer.charAt(answer.length - 1);
  }

  return answer;
}
