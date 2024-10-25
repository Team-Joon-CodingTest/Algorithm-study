const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  let testCaseCount = parseInt(input[0], 10);
  let results = [];

  for (let i = 1; i <= testCaseCount; i++) {
    let message = input[i];
    let checkChar = {};
    let isValid = true;

    for (let j = 0; j < message.length; j++) {
      let currentMessage = message[j];

      if (!checkChar[currentMessage]) {
        checkChar[currentMessage] = 1;
      } else {
        checkChar[currentMessage] += 1;
      }

      if (checkChar[currentMessage] === 3) {
        if (j + 1 < message.length && message[j + 1] === currentMessage) {
          checkChar[currentMessage] = 0;
          j++;
        } else {
          isValid = false;
          break;
        }
      }
    }
    results.push(isValid ? 'OK' : 'FAKE');
  }
  return results.join('\n');
}

console.log(solution(input));

/* 

1. 동일한 문자가 나오는지 키운팅
2. 3번 나왔다면 다음에 같은 문자 있는지 체크
2-1. 체크(참) 진짜
2-2. 체크(거짓) 가짜메시지 / 다음에 문자열이 없다거나 다른 문자가 있을 때

*/
