const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function checkSameColor(paper) {
  const firstColor = paper[0][0];
  const isSame = paper.every((row) =>
    row.every((color) => color === firstColor)
  );
  return isSame;
}

function solution() {
  const N = input[0];
  const paper = input.slice(1);
  let blue = 0;
  let white = 0;

  function 재귀(paper) {
    if (checkSameColor(paper) || paper.length === 1) {
      paper[0][0] === 0 ? white++ : blue++;
      return;
    }
    const half = paper.length / 2;

    const topLeft = paper.slice(0, half).map((row) => row.slice(0, half));
    const topRight = paper.slice(0, half).map((row) => row.slice(half));
    const bottomLeft = paper.slice(half).map((row) => row.slice(0, half));
    const bottomRight = paper.slice(half).map((row) => row.slice(half));

    재귀(topLeft);
    재귀(topRight);
    재귀(bottomLeft);
    재귀(bottomRight);
  }

  재귀(paper);
  const result = [white, blue];
  return result.join('\n');
}

console.log(solution(input));
