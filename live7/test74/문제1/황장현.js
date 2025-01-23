const input = +require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim();

function solution(input) {
  const N = 1 + (input - 1) * 4;
  const map = Array.from(Array(N), () => Array(N).fill(' '));

  function 재귀(n, x, y) {
    if (n === 1) {
      map[x][y] = '*';
      return;
    }
    const len = 1 + (n - 1) * 4;
    for (let i = 0; i < len; i++) {
      map[x][y + i] = '*';
      map[x + len - 1][y + i] = '*';
      map[x + i][y] = '*';
      map[x + i][y + len - 1] = '*';
    }
    재귀(n - 1, x + 2, y + 2);
    return;
  }

  재귀(input, 0, 0);

  return map.map((el) => el.join('')).join('\n');
}

console.log(solution(input));
