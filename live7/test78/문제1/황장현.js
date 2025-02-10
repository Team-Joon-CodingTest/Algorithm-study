const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' '));

function solution(input) {
  const [R, C] = input[0].map(Number);
  const map = input.slice(1).map((el) => el[0].split(''));

  let sheep = 0;
  let wolf = 0;

  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];
  function isSheepAliceCheck(x, y) {
    let sheepCnt = 0;
    let wolfCnt = 0;
    const queue = [[x, y]];
    map[x][y] === 'v' ? wolfCnt++ : sheepCnt++;
    map[x][y] = '#';

    while (queue.length) {
      const [nx, ny] = queue.shift();

      for (let i = 0; i < 4; i++) {
        const [mx, my] = [nx + dx[i], ny + dy[i]];

        if (mx < 0 || mx >= R || my < 0 || my >= C) continue;
        if (map[mx][my] === '#') continue;

        if (map[mx][my] === 'v') wolfCnt++;
        if (map[mx][my] === 'o') sheepCnt++;

        map[mx][my] = '#';
        queue.push([mx, my]);
      }
    }

    if (sheepCnt > wolfCnt) sheep += sheepCnt;
    else wolf += wolfCnt;
  }

  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (map[i][j] === 'v' || map[i][j] === 'o') isSheepAliceCheck(i, j);
    }
  }
  return `${sheep} ${wolf}`;
}

console.log(solution(input));
