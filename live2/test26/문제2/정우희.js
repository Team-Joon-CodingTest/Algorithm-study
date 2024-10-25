const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
const [N, M] = input[0].split(' ').map(Number);
const info = input[1].split(' ').map(Number);
const watch = input[2].split(' ').map(Number);

let ways = 0;

function backtrack(day, prevLocation, currentProgress) {
  if (day === N) {
    if (currentProgress >= M) {
      ways++;
    }
    return;
  }

  for (let i = 0; i < 6; i++) {
    let location = i % 3;
    let progress = i < 3 ? info[location] : watch[location];

    if (location === prevLocation) {
      progress = Math.floor(progress / 2);
    }

    backtrack(day + 1, location, currentProgress + progress);
  }
}

backtrack(0, -1, 0);

console.log(ways);
