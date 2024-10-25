const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

function solution(input) {
  let A = input[0],
    B = input[1];
}

function getGongyaksu(num) {}

console.log(solution(input));

/* 

0. 두 수의 최대공약수 구하기
1. 해당 최대 공약수의 약수 구하기
2. 공약수 [0], 
3. [1],[2] 는 나눠지는 수

*/
