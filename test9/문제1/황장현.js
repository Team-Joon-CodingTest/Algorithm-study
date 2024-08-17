const input = +require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim();

function solution(input) {
  let binary = input;
  let answer = '';

  if (binary === '0') {
    return '0';
  }

  // 0.
  while (binary.length % 3 !== 0) {
    binary = '0' + binary;
  }
  // 1.
  for (let i = 0; i < binary.length; i += 3) {
    let sejari = binary.slice(i, i + 3);

    let temp = toPaljinsu(sejari); // 2 & 3

    answer += temp;
  }
  return answer;
}

function toPaljinsu(sejari) {
  let paljinsu = 0;

  if (sejari[0] === '1') {
    paljinsu += 4;
  }
  if (sejari[1] === '1') {
    paljinsu += 2;
  }
  if (sejari[2] === '1') {
    paljinsu += 1;
  }

  return paljinsu;
}

console.log(solution(input));

/* 

0. 인풋 3개씩 끊을 수 있게 작업
1. 3자리씩 끊는다.
2. 끊은거를 2진수에서 8진수로 변환시킨다.
3. 어따 저장해두고, 저장
4. 반복

*/
