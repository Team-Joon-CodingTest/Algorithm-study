const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(e => e.split(' ').map(Number));

function solution() {
    const [R,C,Q] = input[0];
    const picture = input.slice(1,R+1);
    const testCase = input.slice(R+1);
    const sum = Array.from({length: R+1}, () => new Array(C+1).fill(0));
    const result = [];

    for(let i=1; i<=R; i++) {
        for(let j=1; j<=C; j++) {
            sum[i][j] = picture[i-1][j-1] + sum[i][j-1] + sum[i-1][j] - sum[i-1][j-1];
        }
    }

    testCase.forEach(([r1,c1,r2,c2]) => {
        const total = sum[r2][c2] - sum[r1-1][c2] - sum[r2][c1-1] + sum[r1-1][c1-1];
        const size =  (r2 - r1 + 1) * (c2 - c1 + 1);
        result.push(Math.floor(total/size));
    })

    console.log(result.join('\n'));
}

solution();
