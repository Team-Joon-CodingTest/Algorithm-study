const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n').map(e => e.split(' ').map(Number));

function solution() {
    const [N,D] = input[0];
    const shortCuts = input.slice(1);
    const map = Array.from({ length: D + 1 }, () => []);

    for(const [start,end,len] of shortCuts) {
        map[start].push([end,len]);
    }

}

solution();