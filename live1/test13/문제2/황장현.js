const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' '));

function solution(input) {
  const logCount = input.shift()[0];
  const enterList = [];

  for (let i = 0; i < logCount; i++) {
    const [name, isEnter] = input.shift();

    if (isEnter === 'enter') {
      enterList.push(name);
    }
    if (isEnter === 'leave') {
      const leaveIndexInEnterList = enterList.indexOf(name);
      enterList.splice(leaveIndexInEnterList, 1);
    }

    enterList.sort((a, b) => b.localeCompare(a));
  }
  return enterList.join('\n');
}

console.log(solution(input));
