const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
  const N = parseInt(input[0]);
  let gomgomCount = 0;
  let users = new Set();

  for (let i = 1; i <= N; i++) {
    const line = input[i];

    if (line === 'ENTER') {
      users = new Set();
    } else {
      if (!users.has(line)) {
        users.add(line);
        gomgomCount++;
      }
    }
  }

  console.log(gomgomCount);
}

solution(input);
