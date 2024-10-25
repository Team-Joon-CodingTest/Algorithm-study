const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

function solution(N, books) {
  let dic = {};
  let max = 0;
  for (let book of books) {
    if (dic[book] === undefined) {
      dic[book] = 1;
    } else {
      dic[book]++;
    }
  }

  for (let key in dic) {
    if (dic[key] > max) {
      max = dic[key];
      answer = key;
    }
  }
  return answer;
}

let N = input[0];
let books = input.slice(1);

console.log(solution(N, books));
