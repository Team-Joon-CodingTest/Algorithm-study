const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0], 10);
const ingredients = input.slice(1).map((line) => line.split(' ').map(Number));

let minDifference = Infinity;

function dfs(index, sour, bitter, count) {
  if (index === N) {
    if (count > 0) {
      const diff = Math.abs(sour - bitter);
      minDifference = Math.min(minDifference, diff);
    }
    return;
  }

  dfs(
    index + 1,
    sour * ingredients[index][0],
    bitter + ingredients[index][1],
    count + 1
  );

  dfs(index + 1, sour, bitter, count);
}

dfs(0, 1, 0, 0);

console.log(minDifference);
