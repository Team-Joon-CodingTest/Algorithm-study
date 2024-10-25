const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split(' ');
let [R, G] = input;

function solution(R, G) {

  
  return answer;
}

console.log(solution(R, G));
