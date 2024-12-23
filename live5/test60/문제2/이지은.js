const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  const [n, game] = input[0].split(' ');
  const games = input.slice(1);

  let names = new Set();
  for (let i = 0; i < n; i++) {
    names.add(games[i]);
  }
  if (game === 'Y') {
    return names.size;
  }
  if (game === 'F') {
    return Math.floor(names.size / 2);
  } else {
    return Math.floor(names.size / 3);
  }
}

console.log(solution(input));
