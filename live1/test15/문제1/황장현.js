const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' '));

function solution(input) {
  const [applicant, miniGame] = input.shift();
  const idList = input.map((id) => id[0]);
  const notDuplicateIdList = [...new Set(idList)];
  let miniGamePlayer =
    miniGame === 'Y' ? 1 : miniGame === 'F' ? 2 : miniGame === 'O' ? 3 : null;
  return Math.floor(notDuplicateIdList.length / miniGamePlayer);
}

console.log(solution(input));
