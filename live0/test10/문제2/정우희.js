const fs = require("fs");
const S = fs.readFileSync("/dev/stdin").toString().trim();

function solution(S) {
  let count0 = 0;
  let count1 = 0;

  if (S[0] === "0") count0++;
  else count1++;

  for (let i = 1; i < S.length; i++) {
    if (S[i] !== S[i - 1]) {
      if (S[i] === "0") count0++;
      else count1++;
    }
  }

  return Math.min(count0, count1);
}

console.log(solution(S));
