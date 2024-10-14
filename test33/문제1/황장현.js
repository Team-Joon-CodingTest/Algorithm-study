const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

function solution(input) {
  const [N, M] = input[0];
  const treeHeights = input[1];

  let lowCutter = 0;
  let highCutter = Math.max(...treeHeights);
  let result = 0;

  while (lowCutter <= highCutter) {
    const midCutter = Math.floor((lowCutter + highCutter) / 2);

    let getTreeHeight = treeHeights.reduce((sum, treeHeight) => {
      return sum + (treeHeight > midCutter ? treeHeight - midCutter : 0);
    }, 0);

    if (getTreeHeight >= M) {
      result = midCutter;
      lowCutter = midCutter + 1;
    } else {
      highCutter = midCutter - 1;
    }
  }

  return result;
}

console.log(solution(input));
